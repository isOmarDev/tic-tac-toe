import { createBrowserRouter } from 'react-router-dom';
import { Home } from './home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '*',
    lazy: async () => {
      const { NotFound } = await import('./NotFound');
      return { Component: NotFound };
    },
  },
]);
