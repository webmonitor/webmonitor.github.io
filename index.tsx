import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { langFromPath } from './config/routes';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App lang={langFromPath(window.location.pathname)} pathname={window.location.pathname} />
  </React.StrictMode>,
);
