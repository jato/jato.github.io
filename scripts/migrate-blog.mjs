// One-shot migration: jato.github.io/blog/*.html -> src/content/archive-posts/*.mdx
// Reads each old HTML post, extracts title / subtitle / date / paragraphs,
// emits an MDX file with frontmatter. Idempotent — overwrites on each run.
//
// Usage: node scripts/migrate-blog.mjs

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = '/Users/jato/Dev/jato.github.io/blog';
const DEST = join(__dirname, '..', 'src', 'content', 'archive-posts');

mkdirSync(DEST, { recursive: true });

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');

const stripTags = (s) => s.replace(/<[^>]+>/g, '');

const tidy = (s) => decode(stripTags(s)).replace(/\s+/g, ' ').trim();

const files = readdirSync(SRC).filter(
  (f) => f.endsWith('.html') && /^[ct]\d/.test(f),
);

let n = 0;
for (const file of files.sort()) {
  const html = readFileSync(join(SRC, file), 'utf8');
  const slug = basename(file, '.html');
  const category = slug.startsWith('c') ? 'cultural' : 'technical';

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
  const h1Match = html.match(/<h1>([\s\S]*?)<\/h1>/);
  const h2Match = html.match(/<h2>([\s\S]*?)<\/h2>/);
  const h4Match = html.match(/<h4>([\s\S]*?)<\/h4>/);

  const title = h1Match ? tidy(h1Match[1]) : tidy(titleMatch?.[1] ?? slug);
  const subtitle = h2Match ? tidy(h2Match[1]) : null;
  const dateText = h4Match ? tidy(h4Match[1]) : null;

  const sectionMatch = html.match(/<section>([\s\S]*?)<\/section>/);
  let body = '';
  if (sectionMatch) {
    const paragraphs = [...sectionMatch[1].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
      .map((m) => tidy(m[1]))
      .filter(Boolean);
    body = paragraphs.join('\n\n');
  }

  let publishedAt = '2015-01-01';
  if (dateText) {
    const d = new Date(dateText);
    if (!Number.isNaN(d.valueOf())) {
      publishedAt = d.toISOString().split('T')[0];
    }
  }

  const frontmatter = [
    '---',
    `title: ${JSON.stringify(title)}`,
    subtitle ? `subtitle: ${JSON.stringify(subtitle)}` : null,
    `category: ${category}`,
    `publishedAt: ${publishedAt}`,
    `originalSlug: ${slug}`,
    '---',
  ]
    .filter(Boolean)
    .join('\n');

  // Use .md (not .mdx) — these posts don't need MDX features and the
  // original text contains JS code with curly braces that MDX would parse
  // as JSX expressions and choke on.
  const out = `${frontmatter}\n\n${body}\n`;
  writeFileSync(join(DEST, `${slug}.md`), out);
  n++;
  console.log(`✓ ${slug}.md — ${title}`);
}

console.log(`\nMigrated ${n} posts to ${DEST}`);
