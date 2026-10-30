import { renderToString } from 'react-dom/server';
import App from './App';
import DocsApp from './docs/App';
import { langFromPath } from './config/routes';

export function render(pathname: string): string {
  const lang = langFromPath(pathname);
  const element = pathname.includes('/docs') ? (
    <DocsApp lang={lang} pathname={pathname} />
  ) : (
    <App lang={lang} pathname={pathname} />
  );

  return renderToString(element);
}
