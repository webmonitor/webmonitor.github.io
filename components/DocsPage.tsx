import { Fragment } from 'react';
import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { DocBlock, SiteContent } from '../content/types';
import CodeBlock from './CodeBlock';
import Rich from './Rich';

const DocSection = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section id={id} className="scroll-mt-6">
    <h2 className="border-b border-line pb-3 text-lg font-medium text-text">{title}</h2>
    <div className="mt-5 space-y-4 text-sm leading-7 text-secondary">{children}</div>
  </section>
);

const DocTable = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="w-full overflow-x-auto">
    <table className="w-full min-w-[520px] border-collapse text-sm tabular-nums">
      <thead>
        <tr>
          {head.map((cell) => (
            <th key={cell} className="border-b border-line py-2 pr-4 text-left text-xs font-normal text-muted">
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
                className="border-b border-line/60 py-3 pr-4 align-top leading-6 text-secondary first:whitespace-nowrap first:text-text"
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
        <div className="rounded-lg border border-line bg-surface px-4 py-3 text-xs leading-6 text-muted">
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
            className="inline-flex items-center gap-1 text-text underline decoration-line underline-offset-4 transition-colors hover:decoration-text"
          >
            {block.label}
            <ArrowUpRight aria-hidden strokeWidth={1.5} className="h-4 w-4 text-muted" />
          </a>
        </p>
      );
  }
};

const DocsPage = ({ content }: { content: SiteContent }) => {
  const { docs } = content;

  return (
    <main className="px-5 pb-20 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="border-b border-line pb-8 pt-16 lg:pt-20">
          <h1 className="text-3xl font-medium text-text sm:text-4xl">{docs.heading}</h1>
          <p className="mt-3 max-w-2xl text-base leading-8 text-secondary">
            <Rich text={docs.intro} />
          </p>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <nav aria-label={docs.contents}>
              <p className="mb-2 text-xs text-muted">{docs.contents}</p>
              <ul className="space-y-2 border-l border-line pl-4 text-sm">
                {docs.sections.map(({ id, title }) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-muted transition-colors hover:text-text">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="min-w-0 max-w-[46rem] space-y-12">
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
