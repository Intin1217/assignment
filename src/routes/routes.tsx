import { createBrowserRouter } from 'react-router-dom';
import App from '@/App.tsx';
import Test from '@/pages/Test.tsx';

export const ROUTE_LINK = {
  TEST: { path: 'test', link: '/test' },
};

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: ROUTE_LINK.TEST.path,
    element: <Test />,
  },
];

export const router = createBrowserRouter(routes);
