import { Fragment } from 'react';
import { Tooltip } from '@base-ui/react';
import { ArrowUpRight, BookOpen, Github, Globe } from 'lucide-react';
import { shared } from '../config/site';
import type { SiteContent } from '../content/types';

interface HeroProps {
  content: SiteContent;
  docsHref: string;
}

const Hero = ({ content, docsHref }: HeroProps) => {
  const iconLinks = [
    { label: content.hero.icons.github, href: shared.githubUrl, icon: Github, external: true },
    { label: content.hero.icons.demo, href: shared.demoUrl, icon: Globe, external: true },
    { label: content.hero.icons.docs, href: docsHref, icon: BookOpen, external: false },
  ];

  return (
    <section className="border-b border-line pb-5">
      <div className="py-4">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">{content.hero.eyebrow}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">{content.hero.title}</h1>
            <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">{content.hero.intro}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={shared.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-b border-text pb-1 text-sm font-medium text-text"
            >
              {content.hero.primary}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={shared.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-b border-transparent pb-1 text-sm text-muted transition hover:border-line hover:text-text"
            >
              {content.hero.secondary}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {iconLinks.map(({ label, href, icon: Icon, external }) => (
              <Fragment key={label}>
                <Tooltip.Root>
                  <Tooltip.Trigger
                    render={
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noreferrer' : undefined}
                        aria-label={label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-background text-muted transition hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/15"
                      />
                    }
                  >
                    <Icon className="h-4 w-4" />
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Positioner sideOffset={8}>
                      <Tooltip.Popup className="rounded-full bg-text px-3 py-1 text-xs font-medium text-surface shadow-lg">
                        {label}
                      </Tooltip.Popup>
                    </Tooltip.Positioner>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
