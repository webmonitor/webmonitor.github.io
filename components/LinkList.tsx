import { ArrowRight, ArrowUpRight } from 'lucide-react';

export interface LinkListItem {
  title: string;
  href: string;
  description: string;
  meta?: string;
  marker?: string;
  external?: boolean;
}

const LinkList = ({ items }: { items: LinkListItem[] }) => (
  <ul className="mt-10 border-t border-line">
    {items.map((item) => {
      const Icon = item.external ? ArrowUpRight : ArrowRight;

      return (
        <li key={item.href} className="border-b border-line">
          <a
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noreferrer' : undefined}
            className="link-row group"
          >
            {item.marker && <span className="link-row-marker">{item.marker}</span>}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <h3 className="font-serif text-xl font-medium text-text transition-colors group-hover:text-accent">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-secondary">{item.description}</p>
              {item.meta && <p className="mt-3 font-mono text-xs leading-6 text-muted">{item.meta}</p>}
            </div>
            <Icon
              aria-hidden
              strokeWidth={1.5}
              className="mt-1 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent"
            />
          </a>
        </li>
      );
    })}
  </ul>
);

export default LinkList;
