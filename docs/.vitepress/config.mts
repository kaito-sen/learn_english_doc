import { defineConfig } from 'vitepress'

// On GitHub Pages project sites the site is served from /<repo-name>/.
// `vitepress build` runs with NODE_ENV=production, so local dev stays at '/'.
// NOTE: this must match the GitHub repository name (kaito-sen/learn_english_doc).
const base = process.env.NODE_ENV === 'production' ? '/learn_english_doc/' : '/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',

  // Workaround for a VitePress-on-Windows build bug: `fs.realpathSync` can
  // return a different drive-letter case (`d:` vs `D:`) than Rollup's module
  // ids, crashing the build with "Cannot read properties of undefined
  // (reading 'imports')". This project uses no symlinks, so enabling
  // preserveSymlinks (which skips realpathSync) is safe and fixes it.
  // See: resolvePageImports in vitepress/dist/node build bundle.
  vite: {
    resolve: {
      preserveSymlinks: true
    }
  },
  title: 'English Grammar Docs',
  description:
    'Clear explanations and examples of English grammar and writing, built entirely with Markdown.',
  base,
  lastUpdated: true,
  cleanUrls: true,

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    siteTitle: 'English Grammar Docs',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Grammar', link: '/grammar/' },
      { text: 'Writing Guide', link: '/guide/writing' }
    ],

    sidebar: [
      {
        text: 'Grammar',
        items: [
          { text: 'Overview', link: '/grammar/' },
          {
            // Collapsible group for a subfolder: docs/grammar/parts_of_speech/
            text: 'Parts of Speech',
            collapsed: false, // set to true to collapse by default
            items: [
              { text: 'Danh từ', link: '/grammar/parts_of_speech/noun' }
              // Add more files here:
              // { text: 'Đại từ', link: '/grammar/parts_of_speech/pronoun' },
              // { text: 'Tính từ', link: '/grammar/parts_of_speech/adjective' }
            ]
          },
          { text: 'Verb Tenses', link: '/grammar/tenses' },
          { text: 'Articles (a, an, the)', link: '/grammar/articles' },
          { text: 'Sentence Structure', link: '/grammar/sentence-structure' }
        ]
      },
      {
        text: 'Guide',
        items: [{ text: 'Writing Lessons', link: '/guide/writing' }]
      }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Reset search',
            footer: { selectText: 'Select', navigateText: 'Navigate', closeText: 'Close' }
          }
        }
      }
    },

    outline: { level: [2, 3], label: 'On this page' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kaito-sen/learn_english_doc' }
    ],

    footer: {
      message: 'Written in Markdown, deployed with GitHub Pages',
      copyright: 'English Grammar Docs'
    },

    docFooter: { prev: 'Previous', next: 'Next' },
    lastUpdated: { text: 'Last updated' },
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu'
  }
})
