import { Fragment } from 'react';
import type { ReactNode } from 'react';
import { Separator } from '@base-ui/react';
import { ArrowUpRight } from 'lucide-react';
import type { DocBlock, SiteContent } from '../content/types';
import CodeBlock from './CodeBlock';
import Rich from './Rich';

const DocSection = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section id={id} className="scroll-mt-6 space-y-4">
    <div className="space-y-2">
      <h2 className="text-xl font-semibold tracking-tight text-text">{title}</h2>
      <Separator className="h-px w-full bg-line" />
    </div>
    <div className="space-y-4 text-sm leading-7 text-muted">{children}</div>
  </section>
);

const DocTable = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="w-full overflow-x-auto">
    <table className="w-full min-w-[520px] border-collapse text-sm">
      <thead>
        <tr>
          {head.map((cell) => (
            <th
              key={cell}
              className="border-b border-line py-2 pr-4 text-left text-xs font-medium uppercase tracking-[0.14em] text-muted"
            >
              <Rich text={cell} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row[0]}>
            {row.map((cell, index) => (
              <td
                key={`${row[0]}-${index}`}
                className="border-b border-line/60 py-2 pr-4 align-top leading-6 text-muted first:whitespace-nowrap first:text-text"
              >
                <Rich text={cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const DocBlockView = ({ block }: { block: DocBlock }) => {
  switch (block.type) {
    case 'paragraph':
      return (
        <p>
          <Rich text={block.text} />
        </p>
      );
    case 'list': {
      const ListTag = block.ordered ? 'ol' : 'ul';
      return (
        <ListTag className={block.ordered ? 'list-decimal space-y-2 pl-5' : 'list-disc space-y-2 pl-5'}>
          {block.items.map((item) => (
            <li key={item}>
              <Rich text={item} />
            </li>
          ))}
        </ListTag>
      );
    }
    case 'table':
      return <DocTable head={block.head} rows={block.rows} />;
    case 'code':
      return <CodeBlock title={block.title} code={block.code} hint={block.hint} />;
    case 'note':
      return (
        <div className="rounded-sm border border-line bg-surface px-4 py-3 text-xs leading-6 text-muted">
          <Rich text={block.text} />
        </div>
      );
    case 'link':
      return (
        <p>
          <a
            href={block.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 underline decoration-line underline-offset-4 transition hover:text-text"
          >
            {block.label}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </p>
      );
  }
};

const DocsPage = ({ content }: { content: SiteContent }) => {
  const { docs } = content;

  return (
    <main className="px-4 pb-12 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="space-y-3 border-b border-line pb-6 pt-4">
          <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">{docs.heading}</h1>
          <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
            <Rich text={docs.intro} />
          </p>
        </div>

        <div className="grid gap-10 pt-6 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <nav aria-label={docs.contents}>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-muted">{docs.contents}</p>
              <ul className="space-y-1.5 text-sm">
                {docs.sections.map(({ id, title }) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-muted transition hover:text-text">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="min-w-0 space-y-10">
            {docs.sections.map((section) => (
              <Fragment key={section.id}>
                <DocSection id={section.id} title={section.title}>
                  {section.blocks.map((block, index) => (
                    <Fragment key={index}>
                      <DocBlockView block={block} />
                    </Fragment>
                  ))}
                </DocSection>
              </Fragment>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
};

export default DocsPage;
