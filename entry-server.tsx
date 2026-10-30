import { renderToString } from 'react-dom/server';
import App from './App';
import DocsApp from './docs/App';

export function render(pathname: string): string {
  return renderToString(pathname.startsWith('/docs') ? <DocsApp /> : <App />);
}
