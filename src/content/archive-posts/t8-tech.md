---
title: "Regular Expressions"
subtitle: "Getting Fancy"
category: technical
publishedAt: 2015-08-10
originalSlug: t8-tech
---

For this blog, I will attempt to learn about and explain regular expressions. I have not yet had the opportunity to implement any into code, so this should be fun (mild sarcasm).

A regular expression (also known as regex or regexp) is a specific text string used for describing a search pattern. It’s similar to the “wildcard” notation that we’ve seen often such as: *.mp3 This would call a search in your directory with the ‘splat’ operator (or asterisk) for all files that contain the ‘.mp3’ extension. The splat works like a wildcard. Now a regex expression would look like this: .*\.mp3$ It can do much more than a simple splat can. For example this: \b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b can run a universal search for an email address, despite the numerous characters and numbers that typically comprise an email address.

They can do much more than that, including pattern matching, and find and replace operations. They are implemented into pretty much every major language including Ruby and JavaScript.

meMyself = { height: 0, weight: 0, passTest: true }

But how exactly do they work?

Have you ever opened an image in a web browser and just got a bunch gibberish with weird symbols and such? That’s sort of like the metadata, a series of characters and strings arranged in a particular order to initiate a literal meaning. A regex translates each character into a metacharacter, a character that has special meaning to a computer program. The metacharacter is an underlay of nearly every string, array, and character we type. So a regex can search within these metacharacters (called atoms) and look for a specific pattern, when it finds the pattern it returns the result.

Another example of a useful regex search would be for different dialect differences such as in the word “color” or “colour”. One could type colo[u]r and the regex would find both variants of the word used (also grey and gray). Search engines also have this type of function implemented natively.

function dog (name, breed, age) { this.name = name; this.breed = breed; this.age = age; }

They can range from an extremely simple and easy to remember syntax such as the example above, or extremely complex and long expressions that will take a few tries to get right.

The purpose of this blog post serves primarily as an introduction, I won’t get into the nitty gritty exploration of the syntax, but it should be noted as an extremely useful tool for any programmer.
