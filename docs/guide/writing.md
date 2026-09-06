# Writing Lessons

This guide explains how to add new content to the site. Everything on the
site is a **Markdown file** — no coding required for day-to-day writing.

## 1. Create a Markdown File

Add a new `.md` file to the right folder:

```
docs/
├── grammar/          # grammar lessons
│   └── my-new-topic.md
├── guide/            # meta guides about the site
└── index.md          # homepage
```

Use lowercase names with hyphens: `phrasal-verbs.md`, `reported-speech.md`.

## 2. Write the Lesson

Plain Markdown is all you need:

```md
# My New Topic

A short introduction.

## Section Heading

Some text with **bold**, *italics*, and `inline code`.

- A bullet list
- Another item

1. A numbered step
2. Another step
```

Frontmatter is optional but useful for ordering and page titles:

```md
---
title: My New Topic
---
```

## 3. Add It to the Sidebar

Open `docs/.vitepress/config.mts` and add a line to the sidebar list:

```ts
sidebar: [
  {
    text: 'Grammar',
    items: [
      // ...existing items
      { text: 'My New Topic', link: '/grammar/my-new-topic' }
    ]
  }
]
```

::: tip Links
With `cleanUrls: true`, write links **without** the `.md` extension:
`/grammar/my-new-topic`. Relative links like `./my-new-topic` also work.
:::

## Markdown Features Available

### Custom Containers

```md
::: tip Helpful tip
Tips render in green.
:::

::: warning Watch out
Warnings render in yellow.
:::

::: danger Never do this
Dangers render in red.
:::

::: details Click to reveal (good for quizzes)
Hidden content — great for exercise answers.
:::
```

### Tables

```md
| Affirmative | Negative |
|---|---|
| I work | I do not work |
```

### Syntax Highlighting

Fenced code blocks with a language get highlighted (useful for phonetics,
example scripts, or configuration):

```text
She sells seashells by the seashore.
```

### Emoji

Standard emoji work everywhere: 📝 ✅ ❌ 🎯

## 4. Check Your Work

```bash
npm run dev      # live preview at http://localhost:5173
npm run build    # verify the production build passes
```

::: warning Before committing
- Check spelling and example sentences
- Make sure every page is reachable from the sidebar
- Keep one topic per file for good search results
:::
