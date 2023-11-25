import { createBrowserRouter, Outlet } from 'react-router-dom';
import ROUTES from './routes';
import App from '@/App';
import { Link } from 'react-router-dom';
import ProductListPage from '@/pages/productPages/ProductListPage';
import ProductDetailsPage from '@/pages/productPages/ProductDetailsPage';

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
    ],
  },
]);

export default Router;
