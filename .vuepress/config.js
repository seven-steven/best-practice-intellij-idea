module.exports = {
  title: 'Intellij IDEA 最佳实践',
  description: 'Intellij IDEA 最佳实践, best-practice-intellij-idea',
  head: [
    ['link', { rel: 'icon', href: '/assets/images/favicon.png' }]
  ],
  host: '0.0.0.0',
  port: 8080,
  dest: './dist',
  patterns: ['**/*.md', '**/*.vue'],
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [2, 3]
    }
  },
  themeConfig: {
    navbar: true,
    logo: '/assets/images/idea.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: '配置', link: '/practices/config/' },
      { text: '能力', link: '/practices/capacity/' },
      { text: '插件', link: '/practices/plugins/' },
      { text: 'Blog', link: 'https://blog.diqigan.cn', rel: null }
    ],
    sidebar: [
      {
        title: '基础配置',
        path: '/practices/config/',
        // sidebarDepth: 2,
        children: [
          // '/practices/config/'
        ]
      },
      {
        title: '原生能力',
        path: '/practices/capacity/'
      },
      {
        title: '精选插件',
        path: '/practices/plugins/',
        // sidebarDepth: 4,
        children: [
          // 'alibaba-java-coding-guidelines',
          // 'maven-helper',
          // 'rainbow-brackets'
        ]
      }
    ],
    sidebarDepth: 2,
    displayAllHeaders: true,
    activeHeaderLinks: false,
    lastUpdated: '最近更新',
    repo: 'Seven-Steven/best-practice-intellij-idea',
    repoLabel: '查看源码',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true,
    plugins: [
      '@vuepress/active-header-links',
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp, lang) => {
            const moment = require('moment')
            moment.locale(lang)
            return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
          }
        }
      ],
      '@vuepress/back-to-top',
      '@vuepress/nprogress'
    ],
  }
}