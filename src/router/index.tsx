import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeView from "../views/homeview";
import ProductCatalogView from "../views/productcatalog";
import ProductDetailView from "../screens/productdetails/productdetail";
import ShoppingCartView from "../screens/shoppingcart/shopping-cart-screens";
import PayScreens from "../screens/pay/payscreens";
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
        path: "/danh-muc-san-pham",
        element: <ProductCatalogView />,
      },
      {
        path: "/chi-tiet-san-pham",
        element: <ProductDetailView />,
      },
      {
        path: "/gio-hang",
        element: <ShoppingCartView />,
      },
      {
        path: "/thanh-toan",
        element: <PayScreens />,
      },
    ],
  },
]);
export default router;
