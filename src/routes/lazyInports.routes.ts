import { lazy } from 'react';

const Home = lazy(
  () =>
    import(
      /* webpackChunkName: "Home" */
      '../pages/Home'
    ),
);

const ProductList = lazy(
  () =>
    import(
      /* webpackChunkName: "ProductList" */
      '../pages/ProductList'
    ),
);

const DetailsProduct = lazy(
  () =>
    import(
      /* webpackChunkName: "DetailsProduct" */
      '../pages/DetailsProduct'
    ),
);

export { Home, ProductList, DetailsProduct };
