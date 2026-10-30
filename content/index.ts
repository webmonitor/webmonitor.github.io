import type { Lang, SiteContent } from './types';
import { zh } from './zh';
import { en } from './en';

export const contentByLang: Record<Lang, SiteContent> = { zh, en };

export type { Lang, SiteContent, DocBlock, DocSection } from './types';
