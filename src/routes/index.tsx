import { createBrowserRouter } from 'react-router-dom';
import { Start } from './start/Start';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Start,
  },
  {
    path: '*',
    lazy: async () => {
      const { NotFound } = await import('./NotFound');
      return { Component: NotFound };
    },
  },
]);
