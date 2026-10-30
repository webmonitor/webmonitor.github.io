import { Fragment } from 'react';
import { Tooltip } from '@base-ui/react';
import { ArrowUpRight, BookOpen, Github, Globe } from 'lucide-react';
import { site } from '../config/site';
import type { SocialLink } from '../types';

const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: site.githubUrl, icon: Github },
  { label: '在线体验', href: site.demoUrl, icon: Globe },
  { label: '使用文档', href: site.docsUrl, icon: BookOpen },
];

const Hero = () => {
  return (
    <section className="border-b border-line pb-5">
      <div className="py-4">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">{site.handle}.github.io</p>
            <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">{site.siteName}</h1>
            <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">{site.intro}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={site.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-b border-text pb-1 text-sm font-medium text-text"
            >
              在线体验
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-b border-transparent pb-1 text-sm text-muted transition hover:border-line hover:text-text"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Fragment key={label}>
                <Tooltip.Root>
                  <Tooltip.Trigger
                    render={
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
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
