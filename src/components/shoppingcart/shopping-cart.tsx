/* eslint-disable @typescript-eslint/no-unused-vars */
const ShoppingCartComponets = () => {
  return (
    <div>
      <div className="my-5">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">Giỏ hàng</h3>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row xl:flex-row justify-between">
            <div className="inline w-full lg:w-3/4 xl:w-3/4 px-2">
              <div>
                <table>
                  <thead>
                    <tr className="text-center">
                      <th className="px-12 py-2">Sản phẩm</th>
                      <th className="px-6 py-2 hidden md:block lg:block xl:block">Giá</th>
                      <th className="px-6 py-2">Số lượng</th>
                      <th className="px-6 py-2 hidden md:block lg:block xl:block">Tạm tính</th>
                      <th className="px-6 py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td className=" px-6">
                        <div className="flex flex-row justify-start items-center gap-5">
                          <p className="size-24 md:size-20 lg:size-20 xl:size-20 inline-block p-1">
                            <img
                              className="w-full h-full"
                              src="https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/HP-Omen-15-Gaming-Laptop-1-510x510-1-168x168.jpg"
                            ></img>
                          </p>
                          <p className="inline-block">
                            <a
                              className="inline-block text-xs text-left md:text-base lg:text-md xl:text-base font-medium"
                              href="#"
                            >
                              HP Omen 15-dh0172TX Gaming Laptop - Core I5 / Ram
                              8GB / SSD 128GB
                            </a>
                          </p>
                        </div>
                      </td>
                      <td className="text-base font-thin hidden md:block md:my-7 lg:inline-block xl:inline-block xl:my-7">1.990.000 đ</td>
                      <td className="space-x-2">
                        <button className="inline-block text-xs rounded bg-red-600 p-1 text-slate-50">
                          <i className="fas fa-minus"></i>
                        </button>
                        <p className="inline-block text-base font-bold">1</p>
                        <button className="inline-block text-xs rounded bg-lime-700 p-1 text-slate-50">
                          <i className="fas fa-plus"></i>
                        </button>
                      </td>
                      <td className="text-base font-medium hidden md:block md:my-7 lg:inline-block xl:inline-block">1.990.000 đ</td>
                      <td>
                        <div className="block">
                          <button
                            className="inline-block text-red-950"
                            title="Xóa sản phẩm"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="my-6">
                <a href="/" className="py-1 px-6 border-2 border-red-900 
                inline-block rounded-md text-red-900 font-bold hover:bg-red-900 hover:text-white">
                  <span className="mr-3"><i className="fas fa-long-arrow-alt-left"></i></span>
                  Tiếp tục mua sản phẩm
                </a>
              </div>
            </div>
            <div className="inline w-full lg:w-1/4 xl:w-1/4 border p-6 lg:p-3 xl:p-3 rounded-md">
              <div className="space-y-8">
                <div className="border-b-2">
                  <h6 className="py-3 text-sm font-bold text-slate-600">
                    CỘNG GIỎ HÀNG
                  </h6>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-row justify-between border-b-2 py-2">
                    <div className="inline-block">
                      <p className="">Tạm tính</p>
                    </div>
                    <div className="inline-block">
                      <p className=" font-bold">4.450.000 đ</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between border-b-2 py-2">
                    <div className="inline-block">
                      <p className="">Tổng</p>
                    </div>
                    <div className="inline-block">
                      <p className=" font-bold">4.450.000 đ</p>
                    </div>
                  </div>
                </div>
                <div className="block">
                  <div className="rounded-md w-full md:w-full">
                    <input
                      type="text"
                      className="p-2 border-0 focus:outline-none"
                      placeholder="Mã giảm giá"
                    ></input>
                    <button className="px-3 py-2 bg-lime-900 text-slate-50 font-medium">
                      Áp dụng
                    </button>
                  </div>
                </div>
                <div className="block">
                  <button className="py-3 bg-red-700 w-full text-slate-100 font-bold text-xl rounded-md hover:bg-red-800 focus:bg-red-900">
                    <span className="mr-3">
                      <i className="fas fa-money-check-alt"></i>
                    </span>
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartComponets;
