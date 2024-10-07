import { createBrowserRouter } from 'react-router-dom';
import { Start } from './start/Start';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Start,
  },
  {
    path: '/play',
    lazy: async () => {
      const { Play } = await import('./Play');
      return { Component: Play };
    },
  },
  {
    path: '*',
    lazy: async () => {
      const { NotFound } = await import('./NotFound');
      return { Component: NotFound };
    },
  },
]);
