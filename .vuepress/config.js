module.exports = {
  title: 'Intellij IDEA 最佳实践',
  description: 'Intellij IDEA 最佳实践, best-practice-intellij-idea, Intellij IDEA 教程, Intellij IDEA 优化',
  head: [
    ['link', { rel: 'icon', href: '/assets/images/favicon.png' }],
    ['meta', { name: 'yandex-verification', content: '6643f1fba5343856' }]
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
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
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
    [
      '@vuepress/google-analytics',
      {
        'ga': 'G-XZNJC0YWR8'
      }
    ],
    [
      'vuepress-plugin-code-copy',
      {
        align: 'top',
        backgroundTransition: true,
        color: '#E1DAD9',
        backgroundColor: '#000000',
        successText: 'copied!',
        staticIcon: false
      }
    ],
    [
      'vuepress-plugin-zooming',
      {
        selector: 'img',
        delay: 1000,
        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
      },
    ],
    [
      'sitemap', {
        hostname: 'https://idea.diqigan.cn',
        outFile: 'sitemap.xml',
      }
    ]
  ],
  themeConfig: {
    navbar: true,
    logo: '/assets/images/idea.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: '配置', link: '/practices/settings/' },
      { text: '能力', link: '/practices/capacity/' },
      { text: '插件', link: '/practices/plugins/' },
      { text: 'Blog', link: 'https://blog.diqigan.cn', rel: null }
    ],
    sidebar: [
      {
        title: '基础配置',
        path: '/practices/settings/',
        sidebarDepth: 1,
        collapsable: false,
        children: [
          '/practices/settings/appearance-and-behavior',
          '/practices/settings/keymap',
          '/practices/settings/editor',
          '/practices/settings/plugins',
          '/practices/settings/version-control',
          '/practices/settings/build-execution-deployment',
          '/practices/settings/tools'
        ]
      },
      {
        title: '原生能力',
        path: '/practices/capacity/',
        collapsable: false,
        children: [
          // '/practices/capacity/debug',
          '/practices/capacity/http-request',
          // '/practices/capacity/data-grip'
        ]
      },
      {
        title: '精选插件',
        path: '/practices/plugins/',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/practices/plugins/lombok',

          '/practices/plugins/sonar-lint',
          '/practices/plugins/alibaba-java-coding-guidelines',
          '/practices/plugins/alibaba-cloud-tookit',

          '/practices/plugins/key-promoter-x',
          '/practices/plugins/presentation-assistant',

          '/practices/plugins/rainbow-brackets',
          '/practices/plugins/acejump',
          '/practices/plugins/grep-console',
          '/practices/plugins/translation',
          '/practices/plugins/sequence-diagram',
          '/practices/plugins/code-glance',

          '/practices/plugins/maven-helper',
          '/practices/plugins/mybatisx',
          '/practices/plugins/mybatis-log-plugin',
          '/practices/plugins/git-commit-template',

          '/practices/plugins/idea-mind-map',
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
    darkMode: true
  }
}