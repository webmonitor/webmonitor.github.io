import { Separator } from '@base-ui/react';
import { ArrowUpRight } from 'lucide-react';
import { site } from '../config/site';
import { projects, resources } from '../data/site';

const { sections } = site;

const Projects = () => {
  return (
    <section className="grid gap-10 py-2 lg:grid-cols-2 lg:gap-12">
      <div className="space-y-5">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted">{sections.projectsEyebrow}</p>
          <h2 className="text-2xl font-semibold tracking-tight text-text">{sections.projectsTitle}</h2>
          <p className="text-sm leading-7 text-muted">{sections.projectsDescription}</p>
        </div>

        <Separator className="h-px w-full bg-line" />

        <div>
          {projects.map((project, index) => (
            <div key={project.href}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-4 py-4"
              >
                <div className="min-w-0 space-y-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-sm font-medium leading-7 text-text transition group-hover:text-muted">
                      {project.title}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.14em] text-muted">{project.tag}</span>
                  </div>
                  <p className="text-sm leading-7 text-muted">{project.description}</p>
                  <p className="text-xs leading-6 text-muted">
                    {project.stack.join(' · ')} · {project.license}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted" />
              </a>
              {index < projects.length - 1 && <Separator className="h-px w-full bg-line/70" />}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted">{sections.resourcesEyebrow}</p>
          <h2 className="text-2xl font-semibold tracking-tight text-text">{sections.resourcesTitle}</h2>
          <p className="text-sm leading-7 text-muted">{sections.resourcesDescription}</p>
        </div>

        <Separator className="h-px w-full bg-line" />

        <div>
          {resources.map((resource, index) => (
            <div key={resource.href}>
              <a
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-4 py-4"
              >
                <div className="min-w-0 space-y-1">
                  <h3 className="text-sm font-medium leading-7 text-text transition group-hover:text-muted">
                    {resource.title}
                  </h3>
                  <p className="text-sm leading-7 text-muted">{resource.description}</p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted" />
              </a>
              {index < resources.length - 1 && <Separator className="h-px w-full bg-line/70" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
