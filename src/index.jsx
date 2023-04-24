/* eslint-disable no-console */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Routes from './routes/Routes';
import Store from './redux/store';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={Store}>
    <Routes />
  </Provider>,
);

if (!__DEVELOPMENT__ && !__SERVER__) {
  const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
          console.log('SW registered: ', registration);
        }).catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
      });
    }
  };
  registerServiceWorker();
}
