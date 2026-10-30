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
    startDescription: 'Public GHCR images support amd64 and arm64 with no registry login. Deploy with the Compose files supplied by each repository.',
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
      'mkdir -p webmonitor-agent && cd webmonitor-agent',
      '# Download deployment files and create .env from /en/docs/#agent',
      'docker compose up -d --wait',
    ],
    legacy: [
      'mkdir -p webmonitor && cd webmonitor',
      'curl -fsSLo compose.yaml https://raw.githubusercontent.com/webmonitor/WebMonitor/main/compose.yaml',
      '# Create .env using /en/docs/#webmonitor; fill in your key and admin password',
      'docker compose up -d --wait',
    ],
    agentHint: 'Open http://localhost:8080. The Agent still builds its S3 and egress helper images locally.',
    legacyHint: 'Open http://localhost:8000. Configure email in the app; no model service is needed.',
    note: 'No repository clone or docker login is needed. Both projects use the same startup command in their own deployment directory. Download the required files and create .env from the template first. Agent data services are temporary; WebMonitor keeps SQLite inside its container by default. Configure persistence and backups before long-term use.',
    docsLink: 'Full installation, upgrade and data-retention guide',
  },
  footerTagline: 'WebMonitor · web monitoring with email alerts',
  footerLink: 'github.com/webmonitor',
  docs: {
    title: 'WebMonitor Docs | Public images, setup and upgrades',
    description: 'Deploy WebMonitor and WebMonitor-Agent from public GHCR images, configure notifications, and understand versions and data retention.',
    eyebrow: 'Documentation',
    heading: 'Deployment and usage',
    intro: 'Choose a project and create your first monitor with public GHCR images. No clone is required: download deployment files, create your own .env from the template, and start either project with the same command. The default image follows stable releases.',
    contents: 'Contents',
    sections: [
      {
        id: 'overview', title: 'Choose a project', blocks: [
          { type: 'table', head: ['Project', 'Monitor setup', 'Deployment', 'Maintenance'], rows: [
            ['WebMonitor', 'URL, XPath and check interval', 'One container serves the UI and API; no model service', 'Original version, maintenance and fixes'],
            ['WebMonitor-Agent', 'Describe it in chat and confirm a real preview', 'One application image for API/worker and frontend services, plus supporting services', 'Actively developed product'],
          ] },
          { type: 'paragraph', text: 'Deploy each project independently. Choose WebMonitor for text changes in a selected page region, or Agent for numeric thresholds, list-entry rules and conversational setup. Users of an existing instance can sign in without installing Docker.' },
          { type: 'note', text: 'The live demo is a separate instance run by the maintainer and may be unavailable. It does not provide storage for your local deployment.' },
        ],
      },
      {
        id: 'images', title: 'Public images and versions', blocks: [
          { type: 'paragraph', text: 'The host needs Docker Engine, Docker Compose and curl to download deployment files; Git is not required. Both application images are public and allow anonymous pulls without a GitHub account or docker login. Docker selects linux/amd64 or linux/arm64 automatically.' },
          { type: 'code', title: 'Download images only', code: 'docker pull ghcr.io/webmonitor/webmonitor-agent:1.0.0\ndocker pull ghcr.io/webmonitor/webmonitor:1.0.0', hint: 'A pull only downloads an image. Starting the app also requires the Compose files, configuration and supporting services below.' },
          { type: 'table', head: ['Tag', 'Purpose'], rows: [
            ['`1.0.0`', 'Select a specific release; set it explicitly for deployment.'],
            ['`1.0`', 'Release tag for that minor series; may advance with patch releases.'],
            ['`latest`', 'Follows stable releases; prereleases do not move it.'],
            ['`main`, `sha-*`', 'Development or commit builds; older tags may be removed.'],
          ] },
          { type: 'note', text: 'Both projects use compose.yaml and pull the latest stable image by default. Start either with docker compose up -d --wait. Set WEBMONITOR_IMAGE in .env to pin a release. Public downloads do not change license terms.' },
        ],
      },
      {
        id: 'webmonitor', title: 'Install WebMonitor', blocks: [
          { type: 'paragraph', text: 'One application container includes the React UI, FastAPI API and Chromium. It uses SQLite inside the container by default. No model key is required; configure email after signing in.' },
          { type: 'code', title: 'Create a deployment directory and download Compose', code: 'mkdir -p webmonitor\ncd webmonitor\ncurl -fsSLo compose.yaml https://raw.githubusercontent.com/webmonitor/WebMonitor/main/compose.yaml', hint: 'No clone is needed. After a successful download, create .env from the template below. Preserve existing files.' },
          { type: 'code', title: 'Create your own .env', code: 'WEBMONITOR_IMAGE=ghcr.io/webmonitor/webmonitor:latest\nSECRET_KEY=\nADMIN_USERNAME=admin\nADMIN_EMAIL=admin@example.com\nADMIN_PASSWORD=\nDEBUG=false\nLOG_LEVEL=INFO', hint: 'Use your own email and password. SECRET_KEY must be random and at least 32 characters. Passwords need at least 6 characters and at most 72 UTF-8 bytes. Fill every required blank. Keep an existing .env and never commit credentials.' },
          { type: 'table', head: ['Set in .env', 'Description'], rows: [
            ['`WEBMONITOR_IMAGE`', 'Defaults to ghcr.io/webmonitor/webmonitor:latest; use :1.0.0 to pin a release.'],
            ['`SECRET_KEY`', 'Random signing key of at least 32 characters.'],
            ['`ADMIN_EMAIL`, `ADMIN_USERNAME`', 'Initial admin email; the username defaults to admin.'],
            ['`ADMIN_PASSWORD`', 'Initial password: at least 6 characters, at most 72 UTF-8 bytes.'],
            ['Database', 'compose.yaml fixes sqlite:///./data/webmonitor.db; changing DATABASE_URL in .env has no effect. Other databases also require driver, engine and deployment changes.'],
          ] },
          { type: 'code', title: 'Start after configuring .env', code: 'docker compose up -d --wait\n# Open http://localhost:8000', hint: 'API documentation is at http://localhost:8000/docs.' },
          { type: 'note', text: 'There is no data volume by default. Replacing or deleting the container loses accounts, tasks, mail settings and history. Configure persistent storage for /app/data and backups before long-term use; pulling an image does not migrate data.' },
          { type: 'link', label: 'Complete WebMonitor deployment and development guide', href: 'https://github.com/webmonitor/WebMonitor#readme' },
        ],
      },
      {
        id: 'webmonitor-usage', title: 'Use WebMonitor', blocks: [
          { type: 'list', ordered: true, items: [
            'Sign in and enter a page URL, XPath and check interval. Use the task test to check the extracted text; the test sends no change email.',
            'Create and test your own SMTP configuration in the app, then attach it to a task. Collection and logs also work without email.',
            'Enable the task and review before/after content, run history and collection errors. Make a task public within the instance to let other users subscribe.',
          ] },
          { type: 'paragraph', text: 'The first successful scheduled check may produce an initial notification; later checks notify on content changes. The UI supports English and Chinese. Public tasks and subscriptions still follow instance account permissions.' },
        ],
      },
      {
        id: 'agent', title: 'Install WebMonitor-Agent', blocks: [
          { type: 'paragraph', text: 'A model service compatible with OpenAI Chat Completions is required. Compose supplies six services: postgres, s3, egress, api, web and proxy. api and web share the public application image with different entrypoints. S3 and egress helper images still build locally using the downloaded deployment files.' },
          { type: 'code', title: 'Download the complete deployment files without cloning', code: 'mkdir -p webmonitor-agent\ncd webmonitor-agent\n(\n  set -e\n  for file in compose.yaml .dockerignore deploy/browser-seccomp.json deploy/minio.Dockerfile deploy/minio-artifacts.json deploy/egress.Dockerfile deploy/egress/squid.conf deploy/egress/unbound.conf deploy/egress/entrypoint.sh deploy/proxy/nginx.conf; do\n    curl -fsSL --create-dirs "https://raw.githubusercontent.com/webmonitor/WebMonitor-Agent/main/$file" -o "$file"\n  done\n)', hint: 'Resolve download failures before starting. Preserve the relative directory layout. Run later commands here. Back up existing deployment files before replacing them, and keep your .env.' },
          { type: 'code', title: 'Create your own .env', code: 'WEBMONITOR_IMAGE=ghcr.io/webmonitor/webmonitor-agent:latest\nWEBMONITOR_HTTP_PORT=8080\nAPP_ORIGIN=http://localhost:8080\nDEVELOPMENT_MODE=true\nPOSTGRES_PASSWORD=\nSECRET_KEY=\nADMIN_EMAIL=admin@example.com\nADMIN_PASSWORD=\nOPENAI_API_KEY=\nOPENAI_BASE_URL=https://api.openai.com/v1\nOPENAI_MODEL=\nTARGET_POLICY=public\nSMTP_HOST=\nSMTP_PORT=465\nSMTP_USERNAME=\nSMTP_PASSWORD=\nSMTP_USE_SSL=true\nSMTP_STARTTLS=false\nMAIL_FROM=', hint: 'Fill in the database password, a random SECRET_KEY of at least 32 characters, your admin email and 12–128 character password, and working model settings. SMTP fields may stay blank until email is enabled. Never commit credentials.' },
          { type: 'table', head: ['Set in .env', 'Description'], rows: [
            ['`WEBMONITOR_IMAGE`', 'Defaults to ghcr.io/webmonitor/webmonitor-agent:latest; use :1.0.0 to pin a release.'],
            ['`ADMIN_EMAIL`, `ADMIN_PASSWORD`', 'Initial admin email and password; the password must be 12–128 characters.'],
            ['`SECRET_KEY`, `POSTGRES_PASSWORD`', 'Random signing key of at least 32 characters, and a database password.'],
            ['`OPENAI_API_KEY`, `OPENAI_BASE_URL`, `OPENAI_MODEL`', 'Model service key, compatible API base URL and available model name.'],
            ['`APP_ORIGIN`, `WEBMONITOR_HTTP_PORT`', 'Local port 8080 by default; update the origin when changing the port.'],
          ] },
          { type: 'code', title: 'Start after configuring .env', code: 'docker compose up -d --wait\n# Open http://localhost:8080', hint: 'Keep DEVELOPMENT_MODE=true for local HTTP. Initial admin settings do not reset existing accounts.' },
          { type: 'paragraph', text: 'For email, configure SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD and MAIL_FROM. Exactly one of SMTP_USE_SSL and SMTP_STARTTLS must be true, according to your provider. Admins manage notification groups and recipients in the app.' },
          { type: 'note', text: 'The supplied PostgreSQL and MinIO use tmpfs temporary storage. Stopping, restarting or recreating data containers loses data. Arrange persistent storage and backups before long-term use; a public application image does not change this limitation.' },
          { type: 'link', label: 'Complete Agent deployment, administration and development guide', href: 'https://github.com/webmonitor/WebMonitor-Agent#readme' },
        ],
      },
      {
        id: 'agent-usage', title: 'Use the Agent', blocks: [
          { type: 'list', ordered: true, items: [
            'Start a conversation with the page URL, content to watch, check interval and notification conditions, such as checking a price every ten minutes and notifying below a threshold.',
            'Review the actual collection preview: extracted fields, coverage, change rules, recipients and email layout. Previews do not send email.',
            'Confirm creation to enable scheduled checks. Review events, saved pages and runs in the workbench; pause, resume or change the request in chat.',
          ] },
          { type: 'paragraph', text: 'Rules cover text, keywords, numeric changes and thresholds, and new or updated list entries. Removal rules require complete list coverage. Browser collection saves screenshots. New members register through an invitation issued by an admin.' },
          { type: 'note', text: 'The first successful collection establishes a baseline without a change notification. Failures preserve the last trusted baseline. A sent mail record means SMTP accepted the message, not that it reached the inbox.' },
        ],
      },
      {
        id: 'operations', title: 'Status and version updates', blocks: [
          { type: 'code', title: 'Shared status and log commands', code: 'docker compose ps\ndocker compose logs --tail=100', hint: 'Run in the project deployment directory. Add api web proxy for Agent, or webmonitor for the original version, to select services.' },
          { type: 'paragraph', text: 'Read the relevant release notes before upgrading. Back up data and .env and record the current image version. Download updated deployment files from the matching list when needed, retaining your own .env. Set the target WEBMONITOR_IMAGE before updating.' },
          { type: 'code', title: 'Update Agent application services', code: 'docker compose pull api web\ndocker compose up -d --wait api web', hint: 'Review Compose and dependency changes. Avoid stopping temporary data services just to update the application.' },
          { type: 'code', title: 'Update WebMonitor', code: 'docker compose pull webmonitor\ndocker compose up -d --wait webmonitor', hint: 'This may replace the container. Resolve SQLite persistence and backups first; no volume is configured by default.' },
          { type: 'note', text: 'To roll back, set WEBMONITOR_IMAGE to an older version that is still available and repeat the pull and start commands. Neither project provides automatic database migration or downgrade. An old image may not support newer data; restore the matching backup when necessary.' },
          { type: 'link', label: 'Agent releases', href: 'https://github.com/webmonitor/WebMonitor-Agent/releases' },
          { type: 'link', label: 'WebMonitor releases', href: 'https://github.com/webmonitor/WebMonitor/releases' },
        ],
      },
      {
        id: 'limits', title: 'Limits and development', blocks: [
          { type: 'table', head: ['Area', 'Contract'], rows: [
            ['Agent targets and intervals', 'Public HTTP/HTTPS pages by default; intervals from 1 minute to 24 hours. No signed-in page monitoring.'],
            ['Agent extraction', 'No content inside iframes or Shadow DOM; use the preview to assess actual coverage.'],
            ['Browser collection', 'Agent fails when the browser sandbox is unavailable rather than running without it.'],
            ['Email settings', 'Agent uses deployment SMTP and notification groups; WebMonitor uses mail configurations saved by each user in the app.'],
            ['Source builds', 'Developers clone the source and use docker compose -f compose.yaml -f compose.build.yaml up --build -d --wait. Ordinary deployments only download deployment files.'],
          ] },
          { type: 'paragraph', text: 'mocksite is a separate controllable notice page. It builds from source and has no GHCR image published here. For local integration, the collector operator supplies a shared network, target allowance and precise egress rules. Agent ships no mocksite-specific override. Ordinary deployments retain the public-target policy.' },
          { type: 'link', label: 'mocksite usage and API contract', href: 'https://github.com/webmonitor/mocksite' },
          { type: 'note', text: 'Never submit real .env files, API keys, SMTP passwords, cookies or personal data to repositories or issues. Configure HTTPS, persistent storage and access control before exposing a deployment publicly.' },
        ],
      },
      {
        id: 'licenses', title: 'Licenses and feedback', blocks: [
          { type: 'table', head: ['Project', 'License', 'Terms'], rows: [
            ['WebMonitor-Agent', 'MIT', 'Commercial use, modification and distribution allowed; retain copyright and license notices.'],
            ['WebMonitor', 'CC BY-NC 4.0', 'Share and adapt with attribution, non-commercial use only.'],
          ] },
          { type: 'paragraph', text: 'Public images allow anonymous downloads without changing the license. Report issues in the relevant project with reproduction steps and a page example with sensitive data removed.' },
          { type: 'link', label: 'WebMonitor on GitHub', href: 'https://github.com/webmonitor' },
        ],
      },
    ],
  },
};
