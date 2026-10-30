import type { SiteContent } from './types';

export const en: SiteContent = {
  lang: 'en',
  htmlLang: 'en',
  title: 'WebMonitor | Web change monitoring with email alerts',
  description:
    'Watch prices, stock, announcements and deadlines: configure each check in a visual dashboard, or describe what you want in one sentence. Get an email when the page changes. Open source, self-hostable, and no clone needed for a normal install.',
  keywords: [
    'WebMonitor',
    'web monitoring',
    'page change alerts',
    'email notifications',
    'self-hosted',
    'open source',
    'XPath',
    'install web monitor',
  ],
  nav: {
    github: 'GitHub',
    demo: 'Live demo',
    docs: 'Docs',
    switchLabel: '中文',
  },
  hero: {
    eyebrow: 'Open source · self-hosted',
    title: 'WebMonitor',
    intro:
      'Watch prices, stock, announcements and deadlines. Fill in each check in a visual dashboard, or describe what you want in one sentence; when the page changes, you get an email.',
    primary: 'Live demo',
    secondary: 'GitHub',
    icons: { github: 'GitHub', demo: 'Live demo', docs: 'Documentation' },
  },
  sections: {
    projectsEyebrow: 'Projects',
    projectsTitle: 'Two ways to start',
    projectsDescription:
      'The same job — watching a page for you — with two entry points: a dashboard you fill in, and an assistant you describe it to.',
    resourcesEyebrow: 'Resources',
    resourcesTitle: 'Where to go next',
    resourcesDescription: 'The demo, the setup guide and the source.',
    startEyebrow: 'Get Started',
    startTitle: 'Three steps',
    startDescription:
      'Prepare Docker, download the deployment files, create .env from the template, then run the same startup command. A normal install needs no repository clone and no registry login.',
  },
  projects: [
    {
      title: 'WebMonitor',
      tag: 'Visual dashboard',
      href: 'https://github.com/webmonitor/WebMonitor',
      description:
        'Select the part of the page you actually care about with XPath, choose how often to check it, and get an email when the text changes. Tasks, run logs, public subscriptions and mail settings all live in one interface; no model service is needed.',
      stack: ['XPath region monitoring', 'Email alerts', 'Public tasks and subscriptions'],
      license: 'CC BY-NC 4.0',
    },
    {
      title: 'WebMonitor-Agent',
      tag: 'Conversational monitoring',
      href: 'https://github.com/webmonitor/WebMonitor-Agent',
      description:
        'Paste a link and say what to watch, how often to check, and when to notify you. The assistant opens the page for a real sample first; review the content and recipients, then create the monitor. Price thresholds, restocks and new list entries are handled by condition rules.',
      stack: ['Create by chat', 'Conditional alerts', 'Screenshots and page archives'],
      license: 'CC BY-NC 4.0',
    },
  ],
  resources: [
    {
      title: 'Live demo',
      href: 'https://webmonitor.qfpqhyl.top/',
      description: 'A separate demo instance run by the maintainer; it may be unavailable.',
      external: true,
    },
    {
      title: 'Setup and configuration guide',
      href: '/en/docs/',
      description: 'From preparing Docker to your first alert: install, email, task management, troubleshooting and data retention.',
    },
    {
      title: 'WebMonitor guide',
      href: '/en/docs/#webmonitor',
      description: 'Download Compose, create .env, start it, and create your first monitoring task.',
    },
    {
      title: 'Agent guide',
      href: '/en/docs/#agent',
      description: 'Download the deployment files, configure a model service, and create your first monitor by chat.',
    },
    {
      title: 'GitHub organization',
      href: 'https://github.com/webmonitor',
      description: 'Source code, release notes and issue tracking.',
      external: true,
    },
  ],
  quickStart: {
    agent: [
      'mkdir -p webmonitor-agent && cd webmonitor-agent',
      '# Download the deployment files and create .env from /en/docs/#agent',
      'docker compose up -d --wait',
    ],
    legacy: [
      'mkdir -p webmonitor && cd webmonitor',
      'curl -fsSLo compose.yaml https://raw.githubusercontent.com/webmonitor/WebMonitor/main/compose.yaml',
      '# Create .env from the template at /en/docs/#webmonitor',
      'docker compose up -d --wait',
    ],
    agentHint:
      'Open http://localhost:8080 and sign in with the admin email and password from .env; if no admin exists yet, create one as described in the docs. The first start also builds two helper images locally, which takes a few minutes.',
    legacyHint: 'Open http://localhost:8000 and sign in with the username and password from .env; configure email in the app.',
    note: 'Both projects start with the same command in their own deployment directory and pull the public latest image. Agent keeps its database and page archives in temporary storage, so stopping or recreating the data containers loses data; set up persistent storage and backups before long-term use.',
    docsLink: 'Full setup, first-monitor and data-retention guide',
  },
  footerTagline: 'WebMonitor · web change monitoring with email alerts',
  footerLink: 'github.com/webmonitor',
  docs: {
    title: 'WebMonitor Docs | Install, create your first monitor, get email alerts',
    description:
      'From picking a project to your first change email: prepare Docker, download the deployment files, create .env, start the service, then create a monitor, configure email, manage tasks, troubleshoot and understand data retention.',
    eyebrow: 'Documentation',
    heading: 'Setup and usage',
    intro:
      'Pick a project, prepare Docker and whatever external service it needs, then install it in three steps: download the files, create .env, and run docker compose up -d --wait. Once it is running, follow the walkthrough for your first monitor; email, day-to-day management and troubleshooting come next.',
    contents: 'Contents',
    sections: [
      {
        id: 'overview',
        title: 'Choose a project',
        blocks: [
          {
            type: 'table',
            head: ['Project', 'How you use it', 'Best for', 'Keep in mind'],
            rows: [
              ['WebMonitor', 'Enter a URL, XPath and check interval', 'Text changes in one fixed page region; public tasks and subscriptions', 'Each user configures their own email; no model service'],
              ['WebMonitor-Agent', 'Describe it in one sentence, review a real preview, confirm', 'Price thresholds, restocks, new announcements; changes made in chat', 'Needs a model service; an admin invites new members'],
            ],
          },
          {
            type: 'paragraph',
            text: 'The two projects deploy independently, so pick one to start. If you only care whether a block of text changed, use WebMonitor. If you want alerts such as “notify me when the price drops 10%”, “out of stock becomes available” or “a new list entry appears”, use the Agent. If someone already gave you an instance URL and an account, just sign in — no Docker needed.',
          },
          {
            type: 'note',
            text: 'The live demo is run separately by the maintainer, may be unavailable, and does not store your monitors.',
          },
        ],
      },
      {
        id: 'images',
        title: 'Before you start',
        blocks: [
          {
            type: 'paragraph',
            text: 'You need a computer or server that can run Docker, plus curl to download the deployment files. A normal install needs no repository clone and no registry login. The public images support both Intel/AMD and Apple Silicon; Docker picks the right one automatically.',
          },
          {
            type: 'table',
            head: ['Project', 'Also prepare', 'After install, open'],
            rows: [
              ['WebMonitor', 'A mailbox that can send mail, plus its SMTP details (used for notifications)', 'http://localhost:8000'],
              ['WebMonitor-Agent', 'A model service compatible with OpenAI Chat Completions: API URL, key and model name; email is optional', 'http://localhost:8080'],
            ],
          },
          {
            type: 'paragraph',
            text: 'Images follow the latest stable release, `latest`, by default. To pin a release, set `WEBMONITOR_IMAGE` in `.env` to a version such as `1.0.0`. Both projects start with `docker compose up -d --wait`, which returns only after the health checks pass.',
          },
          {
            type: 'note',
            text: 'Make sure nothing else is using port 8000 or 8080. If you change the Agent port, change `APP_ORIGIN` to the same address.',
          },
        ],
      },
      {
        id: 'webmonitor',
        title: 'Install WebMonitor',
        blocks: [
          {
            type: 'paragraph',
            text: 'WebMonitor runs as one container that serves both the web interface and the API, with SQLite and Chromium included. It needs no model key; configure email after signing in.',
          },
          {
            type: 'code',
            title: 'Step 1: create a deployment directory and download Compose',
            code: 'mkdir -p webmonitor\ncd webmonitor\ncurl -fsSLo compose.yaml https://raw.githubusercontent.com/webmonitor/WebMonitor/main/compose.yaml',
            hint: 'If the download fails, check the network and the command output before starting.',
          },
          {
            type: 'code',
            title: 'Step 2: create your own .env in the same directory',
            code: 'WEBMONITOR_IMAGE=ghcr.io/webmonitor/webmonitor:latest\nSECRET_KEY=\nADMIN_USERNAME=admin\nADMIN_EMAIL=admin@example.com\nADMIN_PASSWORD=',
            hint: 'Set SECRET_KEY to a random string of at least 32 characters, and replace ADMIN_EMAIL and ADMIN_PASSWORD with your own. Passwords need at least 6 characters and at most 72 UTF-8 bytes. Never commit .env or send it to anyone.',
          },
          {
            type: 'table',
            head: ['Set in .env', 'What it means'],
            rows: [
              ['`WEBMONITOR_IMAGE`', 'Defaults to latest; to pin a release, use `ghcr.io/webmonitor/webmonitor:1.0.0`.'],
              ['`SECRET_KEY`', 'A random string of at least 32 characters used to sign sign-in tokens.'],
              ['`ADMIN_USERNAME`, `ADMIN_PASSWORD`', 'The initial admin account; sign in with this username, not the email.'],
              ['`ADMIN_EMAIL`', 'The administrator email stored on the account.'],
            ],
          },
          {
            type: 'code',
            title: 'Step 3: start it and open the page',
            code: 'docker compose up -d --wait\n# Open http://localhost:8000',
            hint: 'When the command returns, open the page. You should see the sign-in screen; use ADMIN_USERNAME and ADMIN_PASSWORD from .env.',
          },
          {
            type: 'paragraph',
            text: 'If you reach the dashboard, the install worked. The sidebar leads to Monitors, Monitor logs, Email settings and Public tasks. If `--wait` fails or never returns, run `docker compose ps` and `docker compose logs --tail=100` to see why.',
          },
          {
            type: 'note',
            text: 'There is no data volume by default. Changing the image, running docker compose down or recreating the container starts from an empty database, losing accounts, tasks, mail settings and logs. Read “Data retention and usage boundaries” before long-term use.',
          },
          {
            type: 'link',
            label: 'WebMonitor repository and full guide',
            href: 'https://github.com/webmonitor/WebMonitor#readme',
          },
        ],
      },
      {
        id: 'agent',
        title: 'Install WebMonitor-Agent',
        blocks: [
          {
            type: 'paragraph',
            text: 'The Agent needs a model service compatible with OpenAI Chat Completions to understand your request and prepare monitor settings. The install starts a group of containers: the app, a database, page-archive storage and an egress proxy. The application image is pulled from the public registry; two helper images are built locally from the downloaded files on first start.',
          },
          {
            type: 'code',
            title: 'Step 1: download the complete set of deployment files',
            code: 'mkdir -p webmonitor-agent\ncd webmonitor-agent\n(\n  set -e\n  for file in compose.yaml .dockerignore deploy/browser-seccomp.json deploy/minio.Dockerfile deploy/minio-artifacts.json deploy/egress.Dockerfile deploy/egress/squid.conf deploy/egress/unbound.conf deploy/egress/entrypoint.sh deploy/proxy/nginx.conf; do\n    curl -fsSL --create-dirs "https://raw.githubusercontent.com/webmonitor/WebMonitor-Agent/main/$file" -o "$file"\n  done\n)',
            hint: 'Any failed download stops the loop with an error; fix it before starting. Keep the directory layout as is and run later commands here. When updating an existing deployment, back up the files first and keep your .env.',
          },
          {
            type: 'code',
            title: 'Step 2: create your own .env in the same directory',
            code: 'WEBMONITOR_IMAGE=ghcr.io/webmonitor/webmonitor-agent:latest\nWEBMONITOR_HTTP_PORT=8080\nAPP_ORIGIN=http://localhost:8080\nDEVELOPMENT_MODE=true\nPOSTGRES_PASSWORD=\nSECRET_KEY=\nADMIN_EMAIL=admin@example.com\nADMIN_PASSWORD=\nOPENAI_API_KEY=\nOPENAI_BASE_URL=https://api.openai.com/v1\nOPENAI_MODEL=\nSMTP_HOST=\nSMTP_PORT=465\nSMTP_USERNAME=\nSMTP_PASSWORD=\nSMTP_USE_SSL=true\nSMTP_STARTTLS=false\nMAIL_FROM=',
            hint: 'Fill in the database password, a random SECRET_KEY of at least 32 characters, your admin email and a 12–128 character password, plus the model API key, base URL and model name. SMTP may stay blank until you enable email; exactly one of SMTP_USE_SSL and SMTP_STARTTLS must be true.',
          },
          {
            type: 'table',
            head: ['Set in .env', 'What it means'],
            rows: [
              ['`WEBMONITOR_IMAGE`', 'Defaults to latest; to pin a release, use `ghcr.io/webmonitor/webmonitor-agent:1.0.0`.'],
              ['`POSTGRES_PASSWORD`, `SECRET_KEY`', 'The database password, and a random signing key of at least 32 characters.'],
              ['`ADMIN_EMAIL`, `ADMIN_PASSWORD`', 'The initial admin account; the password is 12–128 characters and you sign in with the email.'],
              ['`OPENAI_API_KEY`, `OPENAI_BASE_URL`, `OPENAI_MODEL`', 'The model service key, compatible API URL and an available model name.'],
              ['`APP_ORIGIN`, `WEBMONITOR_HTTP_PORT`', 'Local port 8080 by default; update the origin when you change the port.'],
            ],
          },
          {
            type: 'code',
            title: 'Step 3: start it and open the page',
            code: 'docker compose up -d --wait\n# Open http://localhost:8080',
            hint: 'The first start pulls images and builds the helper images locally, which can take a few minutes. --wait returns only after the health checks pass.',
          },
          {
            type: 'paragraph',
            text: 'Open the page and sign in with `ADMIN_EMAIL` and `ADMIN_PASSWORD` from `.env`; you should land in the conversation workspace. If there is no admin account yet, or you need to invite a member, see “Troubleshooting” below.',
          },
          {
            type: 'note',
            text: 'Agent keeps its database and page archives in temporary memory: stopping, restarting or recreating the data containers loses accounts, monitors, events and saved page archives. Set up persistent storage and backups before long-term use.',
          },
          {
            type: 'link',
            label: 'WebMonitor-Agent repository and full guide',
            href: 'https://github.com/webmonitor/WebMonitor-Agent#readme',
          },
        ],
      },
      {
        id: 'webmonitor-usage',
        title: 'WebMonitor: create your first monitor',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'After signing in, open Monitors and choose Create task.',
              'Fill in the task name, monitor URL, XPath selector and check interval in seconds (minimum 10, default 300). If you are unsure about the XPath, choose Test monitor first and check the extracted text; the test sends no email.',
              'Decide whether to make the task public and whether to enable monitoring, then create the task.',
              'Open Monitor logs to review each check’s time, result and new content. The dashboard summarises task counts, recent changes and the execution success rate.',
            ],
          },
          {
            type: 'paragraph',
            text: 'The first successful scheduled check may send an initial notification; after that, email is sent only when the text changes. A task without an email configuration still collects and logs, it just sends nothing. Once a task is public, other users on the same instance can subscribe from Public tasks and receive notifications through their own email settings.',
          },
        ],
      },
      {
        id: 'agent-usage',
        title: 'Agent: create your first monitor',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'After signing in, choose New conversation in the sidebar.',
              'Describe the URL and the request together: what to watch, how often to check, and when to notify you. For example: “Watch this page’s price and email me when it drops 10%.”',
              'The assistant opens the page and takes one real sample. Wait while it reads the page and prepares the monitor settings.',
              'On the Create monitor card, review the extracted content, notification rules, recipients and email preview. If something is off, choose Preview again.',
              'Choose Create monitor to start scheduled checks.',
            ],
          },
          {
            type: 'paragraph',
            text: 'The monitor then appears under Monitors in the sidebar. Open it to see the current content, recent checks and events, plus screenshots and page archives saved by browser collection. The top right offers Pause, Resume, Check now and Edit settings. To change what is watched or when it notifies, explain it in the conversation, review the new preview and save.',
          },
          {
            type: 'note',
            text: 'The first successful collection establishes a baseline and sends no change email; comparison starts with the second check. A failed check keeps the last successful content as the baseline. Previews never send email.',
          },
        ],
      },
      {
        id: 'email',
        title: 'Configure email notifications',
        blocks: [
          {
            type: 'paragraph',
            text: 'Email works differently in the two projects: WebMonitor users enter SMTP and recipients in the app, while the Agent’s SMTP belongs to the deployment and an admin maintains recipients in notification groups. Without email, both still collect and show changes — you just get no alerts.',
          },
          {
            type: 'table',
            head: ['Project', 'Where to configure', 'Who receives the email'],
            rows: [
              ['WebMonitor', 'Email settings after signing in', 'The recipient address entered in that configuration'],
              ['WebMonitor-Agent', '.env in the deployment directory, plus notification groups under Notifications', 'The mailboxes in the selected notification group'],
            ],
          },
          {
            type: 'paragraph',
            text: '**WebMonitor:** open Email settings and choose Add email configuration. Enter a name, SMTP server, SMTP port, sender address, SMTP password and recipient address, and turn on Use SSL if your provider requires it. The password is usually an app-specific password. Choose Test connection and confirm the test email arrives, then create or edit a task and select this configuration under Email configuration. With “Do not send notifications”, the task still collects but sends no mail.',
          },
          {
            type: 'paragraph',
            text: '**WebMonitor-Agent:** set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USERNAME`, `SMTP_PASSWORD` and `MAIL_FROM` in `.env`, then run `docker compose up -d --wait` so the new settings take effect. Sign in as an admin, open Notifications → Notification groups and choose New. Enter a name and recipients (one email per line, or separated by commas or spaces). When creating or editing a monitor, choose the group under Recipients; one monitor can notify several mailboxes.',
          },
          {
            type: 'note',
            text: 'In the delivery log, “Sent” means the mail server accepted the message. If nothing arrives, check spam, then the delivery log and failure reason under Notifications.',
          },
        ],
      },
      {
        id: 'manage',
        title: 'Manage monitors day to day',
        blocks: [
          {
            type: 'paragraph',
            text: '**WebMonitor** keeps everything in the sidebar:',
          },
          {
            type: 'list',
            items: [
              'Monitors lets you test, edit, pause or enable, and delete tasks; the list shows each check interval and attached email configuration.',
              'Monitor logs shows each check’s status, new content and error message, per task.',
              'Public tasks and My subscriptions share tasks within the instance and let you subscribe to others; each user receives notifications through their own email configuration.',
              'Admins can also adjust accounts and subscription limits under Users, and restrict which domains regular users may monitor under Blacklist.',
            ],
          },
          {
            type: 'paragraph',
            text: '**The Agent** manages conversations, monitors and notifications in one workspace:',
          },
          {
            type: 'list',
            items: [
              'Open any monitor from the Monitors list to see current content, recent checks and events; use Pause, Resume, Check now and Edit settings to control it.',
              'Events records changes, failed checks and recoveries. Filter by Unread and choose Mark as read when done.',
              'Notifications manages notification groups and shows each email’s recipients, status and failure reason.',
              'An admin invites members, and new members register through an invitation link.',
            ],
          },
        ],
      },
      {
        id: 'faq',
        title: 'Troubleshooting',
        blocks: [
          {
            type: 'list',
            items: [
              '**The startup command fails or never returns:** run `docker compose ps` and `docker compose logs --tail=100` in the deployment directory. Common causes are a blank value in `.env`, an occupied port, or unusable model settings. Fix it and run the startup command again.',
              '**The page will not open:** check that you are visiting http://localhost:8000 (WebMonitor) or http://localhost:8080 (Agent), and that the containers are running.',
              '**WebMonitor sign-in fails:** sign in with `ADMIN_USERNAME` from `.env`, not the email. The initial admin is created only when the database has no admin; editing `.env` later does not reset an existing account.',
              '**Agent sign-in fails:** use `ADMIN_EMAIL` and `ADMIN_PASSWORD` from `.env`; the password must be 12–128 characters.',
              '**The Agent has no admin, or a new member cannot register:** in the deployment directory run `docker compose exec api webmonitor admin-create --email you@example.com` to create an admin, or `docker compose exec api webmonitor invite-create --email member@example.com --ttl-hours 24` to generate a one-time invitation link. An expired link or a different email will not work.',
              '**WebMonitor extracts nothing:** use Test monitor to check that the XPath selects the element that actually contains the text. Content that requires signing in cannot be monitored directly.',
              '**The Agent preview fails or the address is rejected:** the target must be a public http/https address on port 80 or 443. An unreachable site, bot blocking, a sign-in requirement, or content inside an iframe / Shadow DOM can all fail; an unavailable model service also interrupts the conversation.',
              '**No email arrives:** for WebMonitor choose Test connection under Email settings; for the Agent check SMTP in `.env` and the recipients in the notification group. Also check spam and the delivery log.',
              '**After an update the app will not open or the data looks wrong:** neither project migrates databases automatically. Restore the matching backup, or set `WEBMONITOR_IMAGE` back to the previous version and start again.',
            ],
          },
        ],
      },
      {
        id: 'operations',
        title: 'Update versions',
        blocks: [
          {
            type: 'paragraph',
            text: 'Back up your data and note the current image version before updating. Change `WEBMONITOR_IMAGE` in `.env` to the new version, then run the commands below in each project’s deployment directory.',
          },
          {
            type: 'code',
            title: 'WebMonitor: pull and recreate',
            code: 'docker compose pull\ndocker compose up -d --wait',
            hint: 'There is only one application service, so update it directly.',
          },
          {
            type: 'code',
            title: 'Agent: update only the application services',
            code: 'docker compose pull api web\ndocker compose up -d --wait api web',
            hint: 'This update targets api and web. postgres and s3 use temporary storage; stopping, restarting or recreating those data containers clears their data. After updating, open the page and check sign-in and your monitor list.',
          },
          {
            type: 'paragraph',
            text: 'To roll back, set `WEBMONITOR_IMAGE` to a previous version that is still available and run the same commands for that project. There is no database downgrade: an older version may not read data written by a newer one, so restore the pre-update backup if needed.',
          },
          {
            type: 'link',
            label: 'WebMonitor releases',
            href: 'https://github.com/webmonitor/WebMonitor/releases',
          },
          {
            type: 'link',
            label: 'Agent releases',
            href: 'https://github.com/webmonitor/WebMonitor-Agent/releases',
          },
        ],
      },
      {
        id: 'limits',
        title: 'Data retention and usage boundaries',
        blocks: [
          {
            type: 'paragraph',
            text: 'Neither project provides automatic backups or data migration; the data lives inside the containers, so keep your own backups outside them.',
          },
          {
            type: 'table',
            head: ['Project', 'Where the data lives', 'When it is lost'],
            rows: [
              ['WebMonitor', 'The SQLite file `/app/data/webmonitor.db` inside the container; no volume by default', 'docker compose down, changing the image or recreating the container starts from an empty database; docker compose restart keeps it'],
              ['WebMonitor-Agent', 'PostgreSQL and MinIO use temporary memory storage', 'Stopping, restarting or recreating the postgres or s3 containers loses accounts, monitors, events and page archives; restarting only api does not'],
            ],
          },
          {
            type: 'code',
            title: 'WebMonitor: back up the database before updating',
            code: 'docker compose stop\ndocker cp webmonitor:/app/data/webmonitor.db ./webmonitor-backup.db\ndocker compose start',
            hint: 'Keep the backup outside the deployment directory. To restore, put the file back at /app/data/webmonitor.db in the container.',
          },
          {
            type: 'note',
            text: 'Before serving anyone else, move the data to a persistent volume and set up backups, HTTPS and access control.',
          },
          {
            type: 'paragraph',
            text: 'Monitoring limits:',
          },
          {
            type: 'table',
            head: ['Situation', 'What you will see'],
            rows: [
              ['Agent targets must be public', 'Private, localhost, metadata addresses and ports other than 80/443 are rejected.'],
              ['Agent check frequency', 'Intervals can be set from 1 minute to 24 hours.'],
              ['iframes and Shadow DOM', 'Content inside them is not extracted; the preview shows the actual coverage.'],
              ['Browser collection', 'If the browser sandbox is unavailable, that check fails; it does not switch to another collection method.'],
              ['Notification channel', 'Both projects send email only; there is no SMS or webhook.'],
            ],
          },
        ],
      },
      {
        id: 'licenses',
        title: 'Licenses and feedback',
        blocks: [
          {
            type: 'table',
            head: ['Project', 'License', 'Terms'],
            rows: [
              ['WebMonitor-Agent', 'CC BY-NC 4.0', 'Share and adapt for non-commercial use with attribution, a license link and an indication of changes.'],
              ['WebMonitor', 'CC BY-NC 4.0', 'Share and adapt with attribution, non-commercial use only.'],
            ],
          },
          {
            type: 'paragraph',
            text: 'Report issues in the relevant project with reproduction steps and a page example with sensitive data removed.',
          },
          {
            type: 'link',
            label: 'WebMonitor on GitHub',
            href: 'https://github.com/webmonitor',
          },
        ],
      },
    ],
  },
};
