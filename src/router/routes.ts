import { Route } from './types';

const ROUTES: Record<string, Route> = {
  home: {
    fullPath: '/',
    relativePath: '',
  },
  product: {
    fullPath: '/product',
    relativePath: 'product',
  },
  productList: {
    fullPath: '/product/list',
    relativePath: 'list',
  },
  productDetails: {
    fullPath: '/product/details',
    relativePath: 'details',
  },
  login: {
    fullPath: '/login',
    relativePath: 'login',
  },
};

export default ROUTES;
