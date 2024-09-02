import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeView from "../views/homeview";
import ProductCatalogView from "../views/productcatalog";
import ProductDetailView from "../screens/productdetails/productdetail";
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
      {
        path: "/chi_tiet_san_pham",
        element: <ProductDetailView/>,
      },     
    ],
  },
]);
export default router;
