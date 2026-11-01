import { ArrowUpRight } from 'lucide-react';
import { shared } from '../config/site';
import type { SiteContent } from '../content/types';
import MonitorCard from './MonitorCard';

interface HeroProps {
  content: SiteContent;
}

const Hero = ({ content }: HeroProps) => {
  const { hero } = content;

  return (
    <section className="grid items-center gap-12 border-b border-line pb-14 pt-16 lg:grid-cols-12 lg:gap-16 lg:pb-20 lg:pt-24">
      <div className="rise lg:col-span-6">
        <p className="text-sm text-muted">{hero.eyebrow}</p>
        <h1 className="mt-4 text-4xl leading-[1.15] text-text sm:text-5xl sm:leading-[1.08] sm:tracking-[-0.01em] lg:text-6xl lg:leading-[1.04] lg:tracking-[-0.02em]">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-md text-base leading-8 text-secondary">{hero.intro}</p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={shared.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-surface transition-colors hover:bg-accentDeep"
          >
            {hero.primary}
            <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" />
          </a>
          <a
            href={shared.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-text"
          >
            {hero.secondary}
            <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="rise rise-2 lg:col-span-6">
        <MonitorCard preview={hero.preview} />
      </div>
    </section>
  );
};

export default Hero;
