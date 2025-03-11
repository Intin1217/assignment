import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App.tsx';

export const ROUTE_LINK = {
  TEST: { path: 'test', link: '/test' },
};

const routes = [
  {
    path: '/',
    element: <Navigate to="/page/1" />,
  },
  {
    path: '/page/1',
    element: <App />,
  },
  {
    path: '/page/:page',
  },
];

export const router = createBrowserRouter(routes);
