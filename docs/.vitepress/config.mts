import { defineConfig } from 'vitepress'

// On GitHub Pages project sites the site is served from /<repo-name>/.
// `vitepress build` runs with NODE_ENV=production, so local dev stays at '/'.
const base = process.env.NODE_ENV === 'production' ? '/english_doc_website/' : '/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
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
      // TODO: replace with your GitHub repository URL
      { icon: 'github', link: 'https://github.com/your-username/english_doc_website' }
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
