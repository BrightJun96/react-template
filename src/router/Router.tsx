import App from '@/App';
import Login from '@/pages/LoginPage';
import ProductDetailsPage from '@/pages/productPages/ProductDetailsPage';
import ProductListPage from '@/pages/productPages/ProductListPage';
import { createBrowserRouter, Link, Outlet } from 'react-router-dom';
import ROUTES from './routes';

// Router 예시입니다.
const Router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: ROUTES.home.relativePath,
        element: <div>home</div>,
      },
      {
        path: ROUTES.product.relativePath,
        element: (
          <div>
            product page menu:
            <ul>
              <li>
                <Link to={ROUTES.productList.fullPath}>product list</Link>
              </li>
              <li>
                <Link to={ROUTES.productDetails.fullPath}>product details</Link>
              </li>
            </ul>
            <br />
            <Outlet />
          </div>
        ),
        children: [
          {
            path: ROUTES.productList.relativePath,
            element: <ProductListPage />,
          },
          {
            path: ROUTES.productDetails.relativePath,
            element: <ProductDetailsPage />,
          },
        ],
      },
      { path: ROUTES.login.relativePath, element: <Login /> },
    ],
  },
]);

export default Router;
