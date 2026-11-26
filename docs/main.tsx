import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsApp from './App';
import { langFromPath } from '../config/routes';
import '../styles.css';

ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <React.StrictMode>
    <DocsApp lang={langFromPath(window.location.pathname)} pathname={window.location.pathname} />
  </React.StrictMode>,
);
