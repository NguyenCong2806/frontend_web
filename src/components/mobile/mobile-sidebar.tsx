import { useState } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */
const MobileSidebar = () => {
  const [state, setState] = useState(true);
  return (
    <div
      className={
        "lg:hidden absolute top-0 left-0 mobile-header w-full h-full " +
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
          <div className="border rounded px-2 py-1 w-full clear-both">
            <input
              className="px-2 w-5/6 focus:outline-none focus:border-0 text-sm"
              type="text"
              placeholder="Nhập sản phẩm bạn muốn tìm..."
            ></input>
            <button
              className="w-1/6 px-2 py-1 rounded bg-orange-400 text-slate-100 active:bg-blue-900"
              title="Tìm kiếm"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="my-6">
            <ul className=" divide-y">
              <li className="py-3">
                <a className="text-lg font-bold" href="#">
                  Bán hàng trực tuyến
                </a>
              </li>
              <li className="py-3">
                <a className="text-lg font-bold" href="#">
                  Khuyến mãi
                </a>
              </li>
              <li className="py-3">
                <a className="text-lg font-bold" href="#">
                  Tin tức
                </a>
              </li>
              <li className="py-3">
                <a className="text-lg font-bold" href="#">
                  <i className="fas fa-tv"></i> Xây dựng cấu hình
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
