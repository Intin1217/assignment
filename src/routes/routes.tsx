import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App.tsx';
import Pages from '@components/common/Pages.tsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/page/1" />,
      },
      {
        path: 'page/:page',
        element: <Pages />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
