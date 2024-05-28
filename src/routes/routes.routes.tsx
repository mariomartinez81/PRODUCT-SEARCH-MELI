import { Navigate } from 'react-router-dom';
import { DetailsProduct, Home, ProductList } from './lazyInports.routes';

export default [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/items',
        element: <ProductList />,
      },
      {
        path: 'items/:id',
        element: <DetailsProduct />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];
