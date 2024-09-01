import { useState } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */
const CartMobile = () => {
  const [state, setState] = useState(true);
  return (
    <div
      className={
        "lg:hidden absolute top-0 right-0 mobile-header w-full h-full " +
        (state ? "block" : "hidden")
      }
    >
      <div className="w-full h-full">
        <div className="w-3/4 md:w-2/5 bg-white h-full px-2 py-6">
          <div className="px-2">
            <button
              onClick={() => setState(false)}
              className="text-2xl float-right mb-4"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="px-2 py-1 w-full clear-both">
            <div className=" text-center mb-4">
              <h6 className=" font-bold text-xl">GIỎ HÀNG</h6>
            </div>
            <div>
              <ul>
                <li className="inline-block mb-3 border-b-2">
                  <a
                    href="#"
                    className="flex flex-row justify-between items-center"
                  >
                    <img
                      className="size-16 rounded-md inline-block mx-1"
                      src="https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/isures-prod-18.jpg"
                    ></img>
                    <p className="text-slate-800 text-sm inline-block">
                      RAM desktop G.SKILL Trident Z Royal RGB F4-3000C16D-16GTRS
                      (2x8GB) DDR4 3000MHz
                    </p>
                    <button
                      className="rounded-full px-2 py-1 border bg-red-700 mx-1 text-white"
                      title="Xóa sản phẩm"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </a>
                  <p className="text-red-700">
                    <span>1 x </span>
                    <span className="text-sm font-bold">2.800.000</span>
                    <span> đ</span>
                  </p>
                </li>
              </ul>
              <div>
                <p className="text-slate-600 text-base font-bold">
                  <span>Tổng số tiền: </span>
                  <span>18.800.000</span> đ
                </p>
              </div>
              <div className="my-6 flex flex-col gap-3 text-center">
                <a
                  className="bg-red-600 py-3 px-9 rounded text-base font-bold text-white"
                  href="#"
                >
                  Xem giỏ hàng
                </a>
                <a
                  className="bg-red-600 py-3 px-9 rounded text-base font-bold text-white"
                  href="#"
                >
                  Thanh toán
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMobile;
