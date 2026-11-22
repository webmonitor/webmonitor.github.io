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
    <section className="grid items-center gap-12 border-b border-line py-12 sm:py-16 lg:min-h-[calc(100svh-73px)] lg:grid-cols-12 lg:gap-16 lg:py-20">
      <div className="rise lg:col-span-5">
        <p className="eyebrow">
          <span aria-hidden className="comparison-mark"><i /><i /></span>
          {hero.eyebrow}
        </p>
        <h1 id="hero-title" className="mt-6 max-w-xl font-serif text-4xl font-medium leading-[1.16] tracking-[-0.02em] text-text sm:text-5xl sm:leading-[1.1] lg:text-6xl lg:leading-[1.08]">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-lg text-base leading-8 text-secondary">{hero.intro}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={shared.demoUrl} target="_blank" rel="noreferrer" className="button-primary pressable">
            {hero.primary}
            <ArrowUpRight aria-hidden strokeWidth={1.5} className="h-4 w-4" />
          </a>
          <a href={shared.githubUrl} target="_blank" rel="noreferrer" className="button-secondary pressable">
            {hero.secondary}
            <ArrowUpRight aria-hidden strokeWidth={1.5} className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="rise rise-2 lg:col-span-7">
        <MonitorCard preview={hero.preview} />
      </div>
    </section>
  );
};

export default Hero;
