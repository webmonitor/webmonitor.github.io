import { Separator } from '@base-ui/react';
import type { SiteContent } from '../content/types';
import CodeBlock from './CodeBlock';

interface GettingStartedProps {
  content: SiteContent;
}

const GettingStarted = ({ content }: GettingStartedProps) => {
  const { sections, quickStart } = content;

  return (
    <section className="space-y-5 py-2">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-text">{sections.startTitle}</h2>
        <p className="text-sm leading-7 text-muted">{sections.startDescription}</p>
      </div>

      <Separator className="h-px w-full bg-line" />

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <CodeBlock title="WebMonitor-Agent" code={quickStart.agent.join('\n')} />
        <CodeBlock title="WebMonitor" code={quickStart.legacy.join('\n')} />
      </div>
    </section>
  );
};

export default GettingStarted;
