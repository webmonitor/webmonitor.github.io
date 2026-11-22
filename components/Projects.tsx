import type { SiteContent } from '../content/types';
import LinkList from './LinkList';
import SectionHeading from './SectionHeading';

const Projects = ({ content }: { content: SiteContent }) => {
  const { sections, projects, resources } = content;

  return (
    <>
      <section id="projects" className="section-block">
        <SectionHeading title={sections.projectsTitle} description={sections.projectsDescription} />
        <LinkList
          items={projects.map((project, index) => ({
            title: project.title,
            href: project.href,
            description: project.description,
            meta: [project.tag, ...project.stack, project.license].join(' · '),
            marker: String(index + 1).padStart(2, '0'),
            external: true,
          }))}
        />
      </section>

      <section id="resources" className="section-block border-t border-line">
        <SectionHeading title={sections.resourcesTitle} description={sections.resourcesDescription} />
        <LinkList items={resources} />
      </section>
    </>
  );
};

export default Projects;
