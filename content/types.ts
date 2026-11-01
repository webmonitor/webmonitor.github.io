export type Lang = 'zh' | 'en';

export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProjectItem {
  title: string;
  tag: string;
  href: string;
  description: string;
  stack: string[];
  license: string;
}

export interface ResourceItem {
  title: string;
  href: string;
  description: string;
  external?: boolean;
}

export type DocBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'table'; head: string[]; rows: string[][] }
  | { type: 'code'; title: string; code: string; hint?: string }
  | { type: 'note'; text: string }
  | { type: 'link'; label: string; href: string };

export interface DocSection {
  id: string;
  title: string;
  blocks: DocBlock[];
}

export interface SiteContent {
  lang: Lang;
  htmlLang: string;
  title: string;
  description: string;
  keywords: string[];
  nav: {
    github: string;
    demo: string;
    docs: string;
    switchLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    headline: string;
    intro: string;
    primary: string;
    secondary: string;
    preview: {
      label: string;
      counter: string;
      url: string;
      interval: string;
      selector: string;
      lastCheck: string;
      lastCheckTime: string;
      change: string;
      changeTime: string;
      before: string;
      after: string;
      changeNote: string;
      emailLabel: string;
      emailTo: string;
      emailSubject: string;
    };
  };
  sections: {
    projectsTitle: string;
    projectsDescription: string;
    resourcesTitle: string;
    resourcesDescription: string;
    startTitle: string;
    startDescription: string;
  };
  projects: ProjectItem[];
  resources: ResourceItem[];
  quickStart: {
    agent: string[];
    legacy: string[];
  };
  footerTagline: string;
  footerLink: string;
  docs: {
    title: string;
    description: string;
    heading: string;
    intro: string;
    contents: string;
    sections: DocSection[];
  };
}
