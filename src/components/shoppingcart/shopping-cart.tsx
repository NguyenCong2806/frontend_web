import { useState } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */
const ShoppingCartComponets = () => {
  const [quantity, setQuantity] = useState("1");
  return (
    <div className="my-5">
      <div>
        <div>
          <h3 className="text-2xl font-semibold text-slate-800">Giỏ hàng</h3>
        </div>
        <div>
          <div className="w-full">
            <div className="w-3/4">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tạm tính</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="my-3">
                    <td>
                      <div className="flex flex-row justify-start items-center gap-10 relative">
                        <div className="absolute top-0 -left-3 px-1 rounded bg-red-500">
                          <button
                            className="inline-block text-slate-100"
                            title="Xóa sản phẩm"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>

                        <p className="size-20 inline-block p-1">
                          <img
                            className="w-full h-full"
                            src="https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/HP-Omen-15-Gaming-Laptop-1-510x510-1-168x168.jpg"
                          ></img>
                        </p>
                        <p className="inline-block">
                          <a
                            className="inline-block text-md font-medium"
                            href="#"
                          >
                            HP Omen 15-dh0172TX Gaming Laptop - Core I5 / Ram
                            8GB / SSD 128GB
                          </a>
                        </p>
                      </div>
                    </td>
                    <td className="text-md font-thin">990.000 đ</td>
                    <td className="space-x-2">
                      <button className="inline-block text-sm rounded bg-red-600 p-1 text-slate-50">
                        <i className="fas fa-minus"></i>
                      </button>
                      <p className="inline-block text-md font-bold">1</p>
                      <button className="inline-block text-sm rounded bg-lime-700 p-1 text-slate-50">
                        <i className="fas fa-plus"></i>
                      </button>
                    </td>
                    <td className="text-md font-medium">990.000 đ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartComponets;
