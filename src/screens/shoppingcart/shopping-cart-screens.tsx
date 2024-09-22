import ShoppingCartComponets from "../../components/shoppingcart/shopping-cart";

/* eslint-disable @typescript-eslint/no-unused-vars */
const ShoppingCartView = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-white">
        <div className="container w-full mx-auto lg:mx-auto">
          <ShoppingCartComponets />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartView;
