/* eslint-disable @typescript-eslint/no-unused-vars */
const Cartlisttopbar = () => {
  return (
    <div className="inline-block">
      <ul className="flex gap-4 flex-col">
        <li className="inline-block mb-3 border-b-2">
          <a href="#" className="flex flex-row justify-between items-center">
            <img
              className="size-16 rounded-md inline-block mx-1"
              src="https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/isures-prod-18.jpg"
            ></img>
            <p className="text-slate-800 text-sm inline-block">
              RAM desktop G.SKILL Trident Z Royal RGB F4-3000C16D-16GTRS (2x8GB)
              DDR4 3000MHz
            </p>
            <button
              className="rounded-full px-2 py-1 border bg-red-700  mx-1"
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
        <li className="inline-block mb-3 border-b-2">
          <a href="#" className="flex flex-row justify-between items-center">
            <img
              className="size-16 rounded-md inline-block mx-1"
              src="https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/isures-prod-18.jpg"
            ></img>
            <p className="text-slate-800 text-sm inline-block">
              RAM desktop G.SKILL Trident Z Royal RGB F4-3000C16D-16GTRS (2x8GB)
              DDR4 3000MHz
            </p>
            <button
              className="rounded-full px-2 py-1 border bg-red-700  mx-1"
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
      <div className="my-6 flex flex-col gap-3">
        <a className="bg-red-600 py-3 px-9 rounded text-base font-bold" href="#">
          Xem giỏ hàng
        </a>
        <a className="bg-red-600 py-3 px-9 rounded text-base font-bold" href="#">
         Thanh toán
        </a>
      </div>
    </div>
  );
};

export default Cartlisttopbar;
