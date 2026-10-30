import type { SiteContent } from './types';

export const en: SiteContent = {
  lang: 'en',
  htmlLang: 'en',
  title: 'WebMonitor | Web page monitoring with email alerts',
  description:
    'WebMonitor is a self-hostable web monitoring project: point it at prices, announcements, stock levels and dates, and get an email when they change.',
  keywords: ['WebMonitor', 'web monitoring', 'change detection', 'email alerts', 'self-hosted', 'open source', 'XPath', 'AI agent'],
  nav: {
    github: 'GitHub',
    demo: 'Live demo',
    docs: 'Docs',
    switchLabel: '中文',
  },
  hero: {
    eyebrow: 'webmonitor.github.io',
    title: 'WebMonitor',
    intro:
      'Hand the prices, announcements, stock levels and deadlines you keep re-checking to something that watches them and sends an email when they change. Two ways to monitor: configure each check in a visual dashboard, or describe what you want in one sentence.',
    primary: 'Live demo',
    secondary: 'GitHub',
    icons: { github: 'GitHub', demo: 'Live demo', docs: 'Documentation' },
  },
  sections: {
    projectsEyebrow: 'Projects',
    projectsTitle: 'Two projects',
    projectsDescription: 'Same goal, two entry points: a dashboard you configure by hand, and an assistant you talk to.',
    resourcesEyebrow: 'Resources',
    resourcesTitle: 'Where to go next',
    resourcesDescription: 'The demo, the documentation, and the mock site used to verify collectors.',
    startEyebrow: 'Get Started',
    startTitle: 'Run it locally',
    startDescription: 'Both projects are Docker-first: the host only needs Docker Engine and Compose.',
  },
  projects: [
    {
      title: 'WebMonitor',
      tag: 'Visual dashboard',
      href: 'https://github.com/webmonitor/WebMonitor',
      description:
        'Frame the one region you care about with XPath, set a check interval, and get an email when the text changes. Comes with public tasks and subscriptions, task and run logs, a bilingual interface, and a single-container deployment that needs no AI service or model key.',
      stack: ['Python · FastAPI', 'Selenium', 'React', 'Docker'],
      license: 'CC BY-NC 4.0',
    },
    {
      title: 'WebMonitor-Agent',
      tag: 'Conversational',
      href: 'https://github.com/webmonitor/WebMonitor-Agent',
      description:
        'Paste a URL and say what to watch, how often to check, and when to notify. The assistant analyzes the real page, drafts a spec and previews one actual collection; a versioned monitor is created only after you confirm. Handles static pages and browser-rendered pages.',
      stack: ['Python 3.12 · FastAPI', 'Playwright', 'PostgreSQL', 'Next.js'],
      license: 'MIT',
    },
  ],
  resources: [
    {
      title: 'Live demo',
      href: 'https://webmonitor.qfpqhyl.top/',
      description: 'An instance the maintainer runs separately; it may be unavailable at times.',
      external: true,
    },
    {
      title: 'Deployment and configuration docs',
      href: '/en/docs/',
      description: 'Environment variables, startup steps and usage flows for both projects, on this site.',
    },
    {
      title: 'WebMonitor guide',
      href: '/en/docs/#webmonitor',
      description: 'Single-container deployment, XPath region monitoring and email notification setup.',
    },
    {
      title: 'Agent guide',
      href: '/en/docs/#agent',
      description: 'Model service configuration, the conversational flow and collection limits.',
    },
    {
      title: 'mocksite',
      href: 'https://github.com/webmonitor/mocksite',
      description: 'A controllable, deterministic target site used to verify collectors.',
      external: true,
    },
    {
      title: 'Organization profile and config',
      href: 'https://github.com/webmonitor/.github',
      description: 'Organization overview, brand assets and the shared development environment.',
      external: true,
    },
  ],
  quickStart: {
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
    agentHint: 'Then open http://localhost:8080',
    legacyHint: 'Then open http://localhost:8000',
    note: 'The Agent needs PostgreSQL and S3-compatible storage. Before starting, set the database password, SECRET_KEY and admin credentials in .env as described in .env.example. It currently targets local development and evaluation; read the data-retention notes in the project documentation before deploying.',
    docsLink: 'Full deployment and configuration docs',
  },
  footerTagline: 'WebMonitor · web monitoring with email alerts',
  footerLink: 'github.com/webmonitor',
  docs: {
    title: 'WebMonitor Docs | Deployment, configuration and usage',
    description: 'Deployment steps, environment variables, usage flows and limits for WebMonitor and WebMonitor-Agent.',
    eyebrow: 'Documentation',
    heading: 'Docs',
    intro:
      'Deployment steps, configuration and usage for both projects. Docker Compose is the reference for deployment; each repository’s `.env.example` is the final word on configuration.',
    contents: 'Contents',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        blocks: [
          {
            type: 'paragraph',
            text: 'WebMonitor is a self-hostable web monitoring project. Both repositories share one goal: watch a piece of a page and email you when it changes. They do not diff the whole document — they compare the region or entries you selected.',
          },
          {
            type: 'table',
            head: ['Project', 'How you create a monitor', 'How it collects', 'Status'],
            rows: [
              ['WebMonitor', 'URL, XPath and check interval', 'Selenium-driven headless browser', 'First generation, maintenance and fixes'],
              ['WebMonitor-Agent', 'Describe it in chat, confirm after preview', 'HTTP fetch + Playwright browser collection', 'Actively developed'],
            ],
          },
          {
            type: 'note',
            text: 'Decide what you need first. If “notify me when this block of text changes” is enough, WebMonitor is more direct. If you need conditions such as “price below a threshold” or “a new list entry”, or you would rather not write selectors, use WebMonitor-Agent.',
          },
        ],
      },
      {
        id: 'what-to-watch',
        title: 'What you can watch',
        blocks: [
          {
            type: 'table',
            head: ['What to watch', 'WebMonitor: the region you select', 'Agent: how you can describe it'],
            rows: [
              ['Prices and stock', 'The current price or stock status', '“Check this product every 10 minutes and tell me when the price drops below 200.”'],
              ['Site announcements', 'The notice bar or news list', '“Check this announcement list every hour and email me when a new one appears.”'],
              ['Releases', 'The release title or changelog', '“Email me when a new version is released.”'],
              ['Deadlines', 'The date or note that may move', '“Track the registration deadline on this page and tell me if it changes.”'],
            ],
          },
        ],
      },
      {
        id: 'webmonitor',
        title: 'Deploying WebMonitor',
        blocks: [
          {
            type: 'paragraph',
            text: 'One container: FastAPI serves both the API and the frontend static files, so the browser talks to a single origin. The database is a SQLite file inside the container by default, with no external service required.',
          },
          {
            type: 'code',
            title: 'Prepare',
            code: 'git clone https://github.com/webmonitor/WebMonitor.git\ncd WebMonitor\ncp .env.example .env',
            hint: 'Keep your existing .env if you already have one.',
          },
          {
            type: 'table',
            head: ['Variable', 'Description'],
            rows: [
              ['`SECRET_KEY`', 'Required. A random signing key of at least 32 characters; there is no default.'],
              ['`ADMIN_EMAIL`', 'Email address of the admin account created on first start.'],
              ['`ADMIN_PASSWORD`', 'Initial password, at least 6 characters and at most 72 UTF-8 bytes. Startup fails if it is empty and no admin exists.'],
              ['`ADMIN_USERNAME`', 'Admin username, `admin` by default.'],
              ['`DATABASE_URL`', 'Defaults to `sqlite:///./data/webmonitor.db`; usually left alone.'],
            ],
          },
          {
            type: 'code',
            title: 'Start',
            code: 'docker compose up --build -d --wait\n# http://localhost:8000',
          },
          {
            type: 'paragraph',
            text: 'Open `localhost:8000`, sign in with the admin account and create your first task. A running instance also serves its API docs at `localhost:8000/docs`.',
          },
          {
            type: 'note',
            text: '**Keep your data:** the default deployment stores everything inside the container. Add a persistent volume for `/app/data` before real use, otherwise replacing the container loses accounts, monitors and history.',
          },
        ],
      },
      {
        id: 'webmonitor-usage',
        title: 'Using WebMonitor',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '**Pick the content.** Enter the URL, XPath and check interval to create a task; use the test action to confirm the extracted text is the part you care about. A test only previews content and sends no email.',
              '**Set up notifications.** Add and test an SMTP configuration in the app, then attach it to the task. You can also skip email and watch changes inside the app.',
              '**Enable monitoring.** Checks run on schedule and results are recorded; after a text change the notification shows the content before and after.',
            ],
          },
          {
            type: 'paragraph',
            text: 'The dashboard also lets you watch one region only, review check history and collection errors, use your own SMTP account, make a task public within the instance so others can subscribe, enable or disable tasks at any time, and switch between Chinese and English.',
          },
          {
            type: 'note',
            text: 'The first successful scheduled check **may** send an initial notification; later checks only notify when the content changes.',
          },
        ],
      },
      {
        id: 'agent',
        title: 'Deploying WebMonitor-Agent',
        blocks: [
          {
            type: 'paragraph',
            text: 'You need Docker Engine, Docker Compose and a model service compatible with the OpenAI Chat Completions API. Email alerts additionally need a working SMTP service; collection and page archives rely on PostgreSQL and S3-compatible storage, both included in the bundled Compose file.',
          },
          {
            type: 'code',
            title: 'Prepare',
            code: 'git clone https://github.com/webmonitor/WebMonitor-Agent.git\ncd WebMonitor-Agent\ncp .env.example .env',
            hint: 'Keep your existing .env if you already have one.',
          },
          {
            type: 'table',
            head: ['Variable', 'Description'],
            rows: [
              ['`ADMIN_EMAIL`, `ADMIN_PASSWORD`', 'Initial admin email and password; the password is 12–128 characters.'],
              ['`SECRET_KEY`', 'Random key of at least 32 characters.'],
              ['`POSTGRES_PASSWORD`', 'Database password.'],
              ['`OPENAI_API_KEY`', 'Key for the model service.'],
              ['`OPENAI_BASE_URL`', 'Base URL of a Chat Completions–compatible service.'],
              ['`OPENAI_MODEL`', 'A model name that actually works on that service.'],
              ['`SMTP_HOST`, `SMTP_PORT`', 'Mail server address and port; without them no email is sent.'],
              ['`SMTP_USERNAME`, `SMTP_PASSWORD`', 'SMTP credentials.'],
              ['`MAIL_FROM`', 'Sender address.'],
              ['`SMTP_USE_SSL`, `SMTP_STARTTLS`', 'Exactly one of them must be `true`, depending on your mail provider.'],
            ],
          },
          {
            type: 'code',
            title: 'Start',
            code: 'docker compose up --build --wait\n# http://localhost:8080',
            hint: 'On first start an admin is created if no user exists; changing configuration never resets existing accounts.',
          },
          {
            type: 'paragraph',
            text: 'It listens on localhost only by default. When you change the port, update `WEBMONITOR_HTTP_PORT` and `APP_ORIGIN` together; local HTTP deployments must keep `DEVELOPMENT_MODE=true`.',
          },
          {
            type: 'note',
            text: '**Evaluation and development only:** the bundled PostgreSQL and MinIO storage are ephemeral. Stopping, restarting or recreating those containers loses accounts, monitors and history. Configure persistent storage and backups before long-term use.',
          },
        ],
      },
      {
        id: 'agent-usage',
        title: 'Using the Agent',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '**Describe what you need.** Start a conversation, give the page URL, and say what to watch, how often to check, and when to notify.',
              '**Review the preview.** The assistant opens the real page and performs one actual collection; confirm the extracted content, the checked scope, the notification rules, the recipients and the email layout.',
              '**Confirm and enable.** Scheduled checks begin only after you click “Create monitor”. Afterwards you can review changes, pause or resume, or refine the request in chat.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Notification rules cover text and keywords, numeric changes and thresholds, and new or updated list entries; once the full list is collected, removed entries can be watched too. Each change keeps the content before and after, plus the page archive captured with that run — browser collection also stores a screenshot. Recipients come from notification groups maintained by admins, and one monitor can notify several mailboxes.',
          },
          {
            type: 'paragraph',
            text: 'New members need an invitation link issued by an admin. If a deployment already exists, just sign in at the address your admin provides — no local setup required.',
          },
          {
            type: 'note',
            text: 'The first successful check records the initial content as the baseline and sends **no** change notification; previews send no email either. Only later changes that satisfy the rules trigger alerts. A `sent` delivery record means the mail service accepted the message, not that the inbox received it.',
          },
        ],
      },
      {
        id: 'limits',
        title: 'Limits and conventions',
        blocks: [
          {
            type: 'table',
            head: ['Area', 'Limit'],
            rows: [
              ['Target pages', 'Public HTTP/HTTPS pages only; pages that require sign-in or live on an intranet are out of scope.'],
              ['Agent check interval', '1 minute to 24 hours.'],
              ['Agent extraction', 'Content inside iframes and Shadow DOM is not extracted; the preview states the actual scope and limits of the run.'],
              ['Collection failure', 'The last successful content is kept as the comparison baseline; a failure never overwrites it.'],
              ['Email', 'Requires a working SMTP service; exactly one of `SMTP_USE_SSL` and `SMTP_STARTTLS` must be `true`.'],
              ['Demo site', 'Run separately by the maintainer, may be unavailable, and is not meant as a long-term dependency.'],
            ],
          },
        ],
      },
      {
        id: 'licenses',
        title: 'Licenses',
        blocks: [
          {
            type: 'table',
            head: ['Project', 'License', 'Terms'],
            rows: [
              ['WebMonitor', 'CC BY-NC 4.0', 'Share and adapt with attribution, non-commercial use only.'],
              ['WebMonitor-Agent', 'MIT', 'Use, modify and redistribute, including commercially; keep the copyright and license notice.'],
            ],
          },
          { type: 'paragraph', text: 'Source code and issue trackers:' },
          { type: 'link', label: 'github.com/webmonitor', href: 'https://github.com/webmonitor' },
        ],
      },
    ],
  },
};
