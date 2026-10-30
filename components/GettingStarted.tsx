import { Separator } from '@base-ui/react';
import { site } from '../config/site';
import { quickStart } from '../data/site';
import CodeBlock from './CodeBlock';

const { sections } = site;

const GettingStarted = () => {
  return (
    <section className="space-y-5 py-2">
      <div className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted">{sections.startEyebrow}</p>
        <h2 className="text-2xl font-semibold tracking-tight text-text">{sections.startTitle}</h2>
        <p className="text-sm leading-7 text-muted">{sections.startDescription}</p>
      </div>

      <Separator className="h-px w-full bg-line" />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <CodeBlock
          title="WebMonitor-Agent"
          code={quickStart.agent.join('\n')}
          hint="启动后访问 http://localhost:8080"
        />
        <CodeBlock
          title="WebMonitor"
          code={quickStart.legacy.join('\n')}
          hint="启动后访问 http://localhost:8000"
        />
      </div>

      <p className="max-w-3xl text-xs leading-6 text-muted">
        {quickStart.note}{' '}
        <a href="/docs/" className="underline decoration-line underline-offset-4 transition hover:text-text">
          完整部署与配置文档
        </a>
      </p>
    </section>
  );
};

export default GettingStarted;
