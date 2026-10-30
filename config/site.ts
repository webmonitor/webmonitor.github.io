export const site = {
  siteUrl: 'https://webmonitor.github.io',
  title: 'WebMonitor | 网页监控与邮件提醒',
  siteName: 'WebMonitor',
  author: 'WebMonitor',
  handle: 'webmonitor',
  description: 'WebMonitor 是一个可自行部署的网页监控开源组织：盯住页面的价格、公告、库存与日期，变化时发送邮件提醒。',
  intro:
    '把页面上的价格、公告、库存与截止日期交给它盯着，发生变化时通过邮件送达。两种监控方式：在可视化工作台里逐项配置，或者用一句话把需求说清楚。',
  keywords: ['WebMonitor', '网页监控', '内容变化监测', '邮件提醒', '自部署', '开源', 'XPath', 'AI Agent'],
  demoUrl: 'https://webmonitor.qfpqhyl.top/',
  githubUrl: 'https://github.com/webmonitor',
  docsUrl: '/docs/',
  docsWebMonitorUrl: '/docs/#webmonitor',
  docsAgentUrl: '/docs/#agent',
  logoUrl: 'https://raw.githubusercontent.com/webmonitor/.github/main/image/logo.png',
  sections: {
    projectsEyebrow: 'Projects',
    projectsTitle: '两个项目',
    projectsDescription: '同一套目标，两种入口：手动配置的监控工作台，与对话创建的监控助手。',
    resourcesEyebrow: 'Resources',
    resourcesTitle: '相关入口',
    resourcesDescription: '演示站点、文档与用于验证采集器的模拟站点。',
    startEyebrow: 'Get Started',
    startTitle: '本地运行',
    startDescription: '两个项目都以 Docker 为第一运行方式，宿主机只需要 Docker Engine 与 Compose。',
  },
} as const;

export type Site = typeof site;
