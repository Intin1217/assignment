import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App.tsx';
import Pages from '@components/common/Pages.tsx';
import Pagination from '@components/common/Pagination.tsx';

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
    element: <Pages />,
    children: [
      {
        index: true,
        element: <Pagination />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
