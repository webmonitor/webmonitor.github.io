import { ArrowUpRight } from 'lucide-react';
import type { SiteContent } from '../content/types';

const Projects = ({ content }: { content: SiteContent }) => {
  const { sections, projects, resources } = content;

  return (
    <section className="grid gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
      <div>
        <h2 className="text-2xl font-medium text-text">{sections.projectsTitle}</h2>
        <p className="mt-3 text-sm leading-7 text-secondary">{sections.projectsDescription}</p>

        <ul className="mt-8 divide-y divide-line/70 border-t border-line">
          {projects.map((project) => (
            <li key={project.href}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-6 py-5"
              >
                <div className="min-w-0 space-y-2">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-[15px] font-medium text-text transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted">{project.tag}</span>
                  </div>
                  <p className="text-sm leading-7 text-secondary">{project.description}</p>
                  <p className="font-mono text-xs leading-6 text-muted">
                    {project.stack.join(' · ')} · {project.license}
                  </p>
                </div>
                <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
                  <ArrowUpRight aria-hidden strokeWidth={1.5} className="h-4 w-4 text-muted transition-colors group-hover:text-text" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-medium text-text">{sections.resourcesTitle}</h2>
        <p className="mt-3 text-sm leading-7 text-secondary">{sections.resourcesDescription}</p>

        <ul className="mt-8 divide-y divide-line/70 border-t border-line">
          {resources.map((resource) => (
            <li key={resource.href}>
              <a
                href={resource.href}
                target={resource.external ? '_blank' : undefined}
                rel={resource.external ? 'noreferrer' : undefined}
                className="group flex items-start gap-6 py-5"
              >
                <div className="min-w-0 space-y-1">
                  <h3 className="text-[15px] font-medium text-text transition-colors group-hover:text-accent">
                    {resource.title}
                  </h3>
                  <p className="text-sm leading-7 text-secondary">{resource.description}</p>
                </div>
                <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
                  {resource.external && (
                    <ArrowUpRight
                      strokeWidth={1.5}
                      aria-hidden
                      className="h-4 w-4 text-muted transition-colors group-hover:text-text"
                    />
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
