import type { ProjectItem, ResourceItem } from '../types';

export const projects: ProjectItem[] = [
  {
    title: 'WebMonitor',
    tag: '可视化工作台',
    href: 'https://github.com/webmonitor/WebMonitor',
    description:
      '用 XPath 框定页面上真正关心的区域，设置检查频率，内容变化时收到邮件。包含公开任务与订阅、任务与运行日志管理、中英双语界面，单体容器即可部署，不依赖 AI 服务或模型密钥。',
    stack: ['Python · FastAPI', 'Selenium', 'React', 'Docker'],
    license: 'CC BY-NC 4.0',
  },
  {
    title: 'WebMonitor-Agent',
    tag: '对话式监控',
    href: 'https://github.com/webmonitor/WebMonitor-Agent',
    description:
      '粘贴链接，用自然语言说明要看什么、多久看一次、什么条件下通知。助手先分析真实页面，生成配置草稿并预览一次实际采集结果，确认之后才创建版本化的监控。支持静态页面与浏览器渲染页面。',
    stack: ['Python 3.12 · FastAPI', 'Playwright', 'PostgreSQL', 'Next.js'],
    license: 'MIT',
  },
];

export const resources: ResourceItem[] = [
  {
    title: '在线体验',
    href: 'https://webmonitor.qfpqhyl.top/',
    description: '维护者单独运行的演示实例，可能暂时不可用。',
  },
  {
    title: 'WebMonitor 文档',
    href: 'https://github.com/webmonitor/WebMonitor#readme',
    description: '部署方式、监控配置与邮件通知说明。',
  },
  {
    title: 'WebMonitor-Agent 文档',
    href: 'https://github.com/webmonitor/WebMonitor-Agent#readme',
    description: '对话创建监控的流程、配置项与数据保留说明。',
  },
  {
    title: 'mocksite',
    href: 'https://github.com/webmonitor/mocksite',
    description: '可控、确定性的模拟目标站点，用来验证采集器。',
  },
  {
    title: '组织主页与配置',
    href: 'https://github.com/webmonitor/.github',
    description: '组织介绍、标识资源与共享开发环境。',
  },
];

export const quickStart = {
  agent: [
    'git clone https://github.com/webmonitor/WebMonitor-Agent.git',
    'cd WebMonitor-Agent',
    'cp .env.example .env',
    'docker compose up --build --wait',
  ],
  legacy: [
    'git clone https://github.com/webmonitor/WebMonitor.git',
    'cd WebMonitor',
    'cp .env.example .env',
    'docker-compose up -d',
  ],
  note: 'Agent 需要 PostgreSQL 与 S3 兼容存储，启动前请按 .env.example 设置数据库密码、SECRET_KEY 与管理账号；目前面向本地开发与评估，部署前请阅读项目文档中的数据保留说明。',
} as const;
