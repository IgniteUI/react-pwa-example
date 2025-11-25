import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app/app';
import { routes } from './app/app-routes';
import 'react-app-polyfill/ie11';

const basename = import.meta.env.VITE_BASENAME || import.meta.env.BASE_URL || '/';

/** Required in IE11 for Charts */
Number.isNaN = Number.isNaN || function(value) {
  return value !== value;
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [...routes]
  }
],
{
  basename: basename
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const base = import.meta.env.BASE_URL || '/';
    const swUrl = `${base.replace(/\/?$/, '/') }service-worker.js`;
    navigator.serviceWorker.register(swUrl).catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Service worker registration failed:', error);
    });
  });
}
