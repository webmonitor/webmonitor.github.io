import { Separator } from '@base-ui/react';
import type { SiteContent } from '../content/types';
import CodeBlock from './CodeBlock';

interface GettingStartedProps {
  content: SiteContent;
  docsHref: string;
}

const GettingStarted = ({ content, docsHref }: GettingStartedProps) => {
  const { sections, quickStart } = content;

  return (
    <section className="space-y-5 py-2">
      <div className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted">{sections.startEyebrow}</p>
        <h2 className="text-2xl font-semibold tracking-tight text-text">{sections.startTitle}</h2>
        <p className="text-sm leading-7 text-muted">{sections.startDescription}</p>
      </div>

      <Separator className="h-px w-full bg-line" />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <CodeBlock title="WebMonitor-Agent" code={quickStart.agent.join('\n')} hint={quickStart.agentHint} />
        <CodeBlock title="WebMonitor" code={quickStart.legacy.join('\n')} hint={quickStart.legacyHint} />
      </div>

      <p className="max-w-3xl text-xs leading-6 text-muted">
        {quickStart.note}{' '}
        <a href={docsHref} className="underline decoration-line underline-offset-4 transition hover:text-text">
          {quickStart.docsLink}
        </a>
      </p>
    </section>
  );
};

export default GettingStarted;
