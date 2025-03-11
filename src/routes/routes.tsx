import App from '../App.tsx';
import Test from '../pages/Test.tsx';
import { createBrowserRouter } from 'react-router-dom';

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
