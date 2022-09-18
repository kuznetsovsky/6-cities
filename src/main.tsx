// Core
import React from 'react';
import ReactDOM from 'react-dom/client';

// Others
import { App } from './components/app';

// Root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// Render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
