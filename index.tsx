import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { langFromPath } from './config/routes';
import './styles.css';

ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <React.StrictMode>
    <App lang={langFromPath(window.location.pathname)} pathname={window.location.pathname} />
  </React.StrictMode>,
);
