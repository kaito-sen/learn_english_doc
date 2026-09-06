# English Grammar Docs

A documentation website for English grammar and writing, built with [VitePress](https://vitepress.dev).
All content is written in plain **Markdown** files and deployed to **GitHub Pages** automatically.

## Prerequisites

- [Node.js](https://nodejs.org) 18 or higher (v20+ recommended)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production (outputs to docs/.vitepress/dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project Structure

```
.
├── docs/
│   ├── .vitepress/
│   │   └── config.mts        # Site config: nav, sidebar, search
│   ├── index.md              # Homepage
│   ├── guide/
│   │   └── writing.md        # How to add new lessons
│   └── grammar/
│       ├── index.md          # Grammar overview
│       ├── tenses.md
│       ├── articles.md
│       └── sentence-structure.md
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment
├── package.json
└── README.md
```

## Writing Content

1. Create a new `.md` file inside `docs/grammar/` (or any folder under `docs/`).
2. Write your lesson in Markdown. VitePress supports standard Markdown plus
   custom containers (`::: tip`, `::: warning`, `::: details`), tables,
   syntax highlighting, and more — see `docs/guide/writing.md`.
3. Register the new page in the sidebar in `docs/.vitepress/config.mts`.
4. The site hot-reloads as you save.

## Deployment (GitHub Pages)

The included workflow (`.github/workflows/deploy.yml`) builds and deploys the
site on every push to `main`.

One-time setup in your GitHub repository:

1. Push this project to GitHub.
2. Go to **Settings → Pages → Build and deployment → Source** and select
   **GitHub Actions**.
3. Push to `main` — the site goes live at
   `https://<username>.github.io/<repository-name>/`.

### Changing the base path

The production build uses the repository name as the URL base (see `base` in
`docs/.vitepress/config.mts`). If your repository is named differently from
`english_doc_website`, update the `base` value to `'/<your-repo-name>/'`.
If you deploy to a **user/organization site** (`<username>.github.io`), set
`base` to `'/'`.
