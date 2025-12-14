import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "content",
  
  title: "AnyDocs — Your modern and beautiful all-in-one documentation",
  description: "Modern docs, beautifully designed.",
  head: [
      ['link', {rel: 'icon', href: '/icon-512.png'}]
  ],
  themeConfig: {
    siteTitle: 'AnyDocs',
    logo: '/icon-512.png',
    editLink: {
      pattern: 'https://github.com/any-docs/anydocs/edit/main/content/:path',
      text: 'Edit this page on GitHub'
    },
    nav: [
      {
        text: 'Docs',
        items: [
          {
            text: 'PHP',
            link: '/php/introduction',
          },
          {
            text: 'Rust',
            link: '/rust'
          },
          {
            text: 'Zig',
            link: '/zig'
          }
        ]
      },
    ],

    sidebar: {
      '/php/': [{
        text: 'Getting Started',
        items: [
          {text: 'Welcome to PHP', link: '/php/introduction'},
          {text: 'Installation', link: '/php/installation'},
          {text: 'Basic Syntax', link: '/php/basic-syntax'}
        ]
      }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/any-docs/anydocs' }
    ],
    footer: {
      copyright: 'Copyright © 2025'
    }
  }
})
