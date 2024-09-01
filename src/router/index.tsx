import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeView from "../views/homeview";
import ProductCatalogView from "../views/productcatalog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/danh_muc_san_pham",
        element: <ProductCatalogView/>,
      },
    ],
  },
]);
export default router;
