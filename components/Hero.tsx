import { ArrowUpRight } from 'lucide-react';
import { shared } from '../config/site';
import type { SiteContent } from '../content/types';

interface HeroProps {
  content: SiteContent;
}

const Hero = ({ content }: HeroProps) => {
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

        </div>
      </div>
    </section>
  );
};

export default Hero;
