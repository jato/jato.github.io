## Existing site context

Site path: /Users/jato/Dev/jato.github.io

The current site is jato.github.io. It has an older portfolio structure with a simple personal intro, cloud/sky-inspired visuals, project cards, and early full-stack/hackathon projects.

Preserve the best parts of the current site:

- the playful cloud/sky identity
- the feeling of lightness and openness
- the project-card structure
- the sense that the site was hand-built, not generated from a template
- the connection to nature, animals, maps, and humane technology

But modernize it substantially:

- make it feel like a current personal portfolio/blog, not a 2010s bootcamp portfolio
- shift from “here are apps I built” to “here are systems, essays, tools, and design experiments”
- keep older projects as an archive, but do not make them the main story
- make the writing and current work more prominent
- preserve whimsy, but add maturity, restraint, and polish

The redesign should feel like the same person’s site, evolved by 10 years.

Current themes:
- AI-native workflows
- incident response systems
- escalation design
- operational tooling
- humane technology
- product judgment
- creative technical experiments

## Phase 0 — Current Site Audit & Preservation

### Locked decisions (2026-04-26)
- **Stack**: Astro + MDX. Content collections for Systems / Experiments / Essays / Archive. Near-zero JS by default; islands only where interactivity is real (cloud animation, design experiments).
- **Hosting**: GitHub Pages on `jato.github.io` (preserves URL, no DNS work). Build via GitHub Actions; deploy from `gh-pages` branch or `dist/`.
- **Archive strategy**: hybrid. Re-render the 5 legacy projects as first-class archive cards with warmth and context; do not bury them. Old Heroku links replaced with GitHub source links + a note about the era.
- **Old blog**: freeze at `/archive/blog/*`. Render the 16 existing posts inside the new layout shell but tagged "from the bootcamp years (2015)". Do not surface them in the main writing index.

### Audit results
- [x] **Reviewed current jato.github.io structure** — single-repo static site: `index.html` (landing + projects in one scroll), `about.html`, `blog-index.html`, `blog/*.html` (16 posts split Cultural/Technical), `projects/project_index.html`, `cheat-sheet.html`. Stack: jQuery 1.8.3 + jQuery UI 1.9.2 from `ajax.googleapis.com`/`code.jquery.com`, Google Analytics UA-74077248-1 (Universal Analytics — sunset), Fontello icon font, Google Fonts (Raleway Dots, Raleway, Advent Pro). No build system.
- [x] **Visual elements to preserve**:
    - **Cloud system** — five SVG clouds with depth layers (`front`, `distant`, `background`), size variants (`smaller`/`small`/`big`/`massive`), and parallax via differing animation durations (8s / 9.2s / 11.2s / 13.5s / 20.5s). Defined in [stylesheets/landing.css:191-315](jato.github.io/stylesheets/landing.css:191). This is the strongest identity element.
    - **Sky pulse** — body background animates from deep navy `#131f43` → sky blue `#71acd6` over 12s on load ([landing.css:21-32](jato.github.io/stylesheets/landing.css:21)). Captures dawn/lightness feeling.
    - **Color palette** — `#131f43` (deep navy), `#71acd6` (sky), `#fff`, accent `#491256` (plum, used in scroll progress bar). Carry forward but tighten.
    - **Typography mood** — Raleway Dots for the playful "jato" wordmark, Raleway/Advent Pro for body. Replace Raleway Dots with something quieter but keep the sans-serif lightness.
    - **Hand-built tells** — scroll progress bar, subtle scroll-down arrow, fade-in on load. Keep the spirit, drop the jQuery.
- [x] **Existing project inventory** (from [index.html:131-160](jato.github.io/index.html:131)):
    - **The Ningaloo Project** — sea turtle conservation data collection; Meteor.js + Cordova; *source still live on GitHub*, no hosted demo.
    - **W.A.R.** — AR card game; HTML5 Canvas + Rails; *Heroku link `cardAR.herokuapp.com` dead* (free tier killed Nov 2022).
    - **Finding Fido** — IBM Watson dog adoption matcher; 2016 DeveloperWeek hackathon entry; Rails; *Heroku link dead*.
    - **Pacifica Coffee** — Rails e-commerce; *Heroku link dead*.
    - **Hearth.io** — never launched ("Coming Soon").
- [x] **Archive classification** — all five → Archive. None of these represent current work; rendering them as Featured would contradict the "systems, essays, tools" repositioning. They become a warm, well-presented "earlier work" section with proper context (year, role, what was learned, GitHub link).
- [ ] **Screenshots of current site** — not auto-captured. Manual step:
    ```sh
    cd /Users/jato/Dev/jato.github.io && python3 -m http.server 8000
    # then in another shell:
    npx playwright screenshot --full-page http://localhost:8000 ../jato-revamp/audit/screenshots/index.png
    npx playwright screenshot --full-page http://localhost:8000/about.html ../jato-revamp/audit/screenshots/about.png
    npx playwright screenshot --full-page http://localhost:8000/blog-index.html ../jato-revamp/audit/screenshots/blog-index.png
    ```
    Capture before any redesign so the cloud animation and pulse are preserved as a reference.
- [x] **Old project + source links preserved** — captured above. Heroku URLs are dead but the GitHub source links resolve: `github.com/jato/ningaloo`, `github.com/jato/wAR`, `github.com/cschlessinger/finding-fido`, `github.com/weeznog/pacifica-coffee`, `github.com/jato/hearth`. Archive cards link to source, not Heroku.
- [x] **"Same person, evolved by 10 years" design principle** — articulated below.

### Design principle: same person, evolved by 10 years
The 2015 site says *I am learning to program and I am delighted by it*. The 2026 site should say *I have been doing this work for a decade and the delight is still here, but it is now in service of judgment*. Concretely:

- **Keep the sky.** The cloud animation, the navy-to-blue pulse, the sense of looking up. These are the through-line. Reuse the SVGs, keep the parallax timings, modernize the implementation (CSS-only, no jQuery, respect `prefers-reduced-motion`).
- **Lose the bootcamp voice.** No "I'm learning to program," no "thanks for looking," no "proceed with caution." The new voice is direct, specific, and quietly confident. Less exclamation, more observation.
- **Systems over apps.** Each Featured System gets a real page with framing — the problem, the operating model, what changed, what's still open. Not "tech used: Rails."
- **Whimsy as restraint.** One unexpected interaction per page is more powerful than five. The clouds are the budget; everything else stays calm.
- **Hand-built means visible care, not visible craft.** The 2015 site shows craft (animations everywhere, custom progress bar). The 2026 site shows care (typography that reads well at every breakpoint, content that respects the reader's time, links that work).

## Phase 1 — Foundation
Scaffold `/Users/jato/Dev/jato-revamp` as an Astro project. No content yet — just the shell and the cloud system ported as a reusable component.

Proposed file structure:
```
jato-revamp/
  CLAUDE.md
  package.json
  astro.config.mjs
  tsconfig.json
  .github/workflows/deploy.yml      # GitHub Pages deploy
  src/
    pages/
      index.astro                   # home
      about.astro
      systems/index.astro           # Featured Systems list
      experiments/index.astro       # Design Experiments list
      writing/index.astro           # new essays
      archive/
        index.astro                 # archived projects + link to old blog
        blog/[...slug].astro        # 16 frozen posts
    content/
      config.ts                     # collections: systems, experiments, essays, archive-projects, archive-posts
      systems/                      # MDX, one per featured system
      experiments/                  # MDX
      essays/                       # MDX
      archive-projects/             # MDX, 5 entries
      archive-posts/                # MDX, 16 entries (migrated from blog/*.html)
    components/
      Clouds.astro                  # ports the 5-SVG parallax system, CSS-only, prefers-reduced-motion aware
      SkyPulse.astro                # the navy→blue load animation
      ProjectCard.astro
      Layout.astro                  # base shell with nav, footer
    styles/
      tokens.css                    # color/typography/spacing tokens
      global.css
  public/
    fonts/                          # self-hosted (no Google Fonts CDN)
    archive/                        # original screenshots + project images
```

Key technical choices baked in:
- **No external font CDN.** Self-host whatever replaces Raleway/Advent Pro (`fontsource` or direct `.woff2`). Removes the `googleapis.com` dependency.
- **No analytics in Phase 1.** Decide later (Plausible / Cloudflare Web Analytics / none). Universal Analytics is gone; do not port.
- **`prefers-reduced-motion`** disables cloud drift and sky pulse — current site has no such guard.
- **Content collections with Zod schemas** for type-safe frontmatter (title, summary, year, status, tags, sourceUrl, archived).

## Phase 2 — Content architecture
- URL plan: `/`, `/about`, `/systems`, `/systems/<slug>`, `/experiments`, `/experiments/<slug>`, `/writing`, `/writing/<slug>`, `/archive`, `/archive/blog/<slug>`.
- Redirects from old paths to new ones via a `_redirects`-equivalent (GitHub Pages: meta-refresh stub pages, since GH Pages has no edge redirect). Map: `/blog-index.html` → `/archive/blog/`, each `/blog/*.html` → `/archive/blog/<slug>`, `/projects/project_index.html` → `/archive`, `/about.html` → `/about`.
- Nav: home / writing / systems / experiments / about. Archive accessed from home + about, not the primary nav.

## Phase 3 — Content migration
- **Featured Systems** — drafted from CLAUDE.md themes (AI-native postmortem, escalation intake, proactive alerting, incident comms, ops metrics). Each needs real content from the user; placeholders flagged clearly. *Do not invent details.*
- **Archive projects** — 5 cards, written warmly: year, role, stack, what was learned, GitHub link. No dead Heroku URLs.
- **Archive blog** — 16 posts converted from HTML to MDX (preserve original date and text; wrap in new layout). Banner: "From an earlier era — keeping for the record."

## Phase 4 — Polish
- Accessibility: contrast against the sky-pulse background at every state, keyboard nav, focus rings, alt text, semantic landmarks. Current site fails most of these.
- Performance budget: < 50 KB JS on home, < 100 KB total. Astro should make this easy.
- OG images, RSS for `/writing/`, sitemap.
- Decide and add analytics (or don't).

## Phase 5 — Cutover
- Build to `dist/`, deploy via GitHub Actions to `gh-pages` branch.
- Verify all redirects resolve.
- Tag the pre-cutover commit on the old `main` as `v1-archive` for rollback.
- Swap. Old site remains in git history.

## Project taxonomy

### Featured Systems
Modern, relevant work framed as systems and operating models.

Examples:
- AI-native postmortem workflow
- escalation intake system
- proactive alerting workflow
- incident communication system
- operational metrics framework

### Design Experiments
Creative or technical explorations.

Examples:
- atmospheric cloud background system
- interactive writing components
- small AI workflow tools
- visual experiments

### Archive
Older projects from the existing portfolio.

Examples:
- The Ningaloo Project
- W.A.R.
- Finding Fido
- Pacifica Coffee
- Hearth.io

Archive projects should be preserved with warmth, not hidden, but visually separated from current work.

Do not erase the old site’s personality. Mature it.