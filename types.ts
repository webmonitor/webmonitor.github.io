import type { LucideIcon } from 'lucide-react';

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface ProjectItem {
  title: string;
  href: string;
  tag: string;
  description: string;
  stack: string[];
  license: string;
}

export interface ResourceItem {
  title: string;
  href: string;
  description: string;
}
