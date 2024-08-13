/* eslint-disable @typescript-eslint/no-unused-vars */
const Logintopbar = () => {
  return (
    <div className=" hidden  md:hidden lg:inline-block">
      <ul className="flex gap-4">
        <li className="text-xs text-white">
          <a href="#">Đăng nhập</a>
        </li>
        <li className="text-xs text-white relative group">
          <a href="#">
            Giỏ hàng
            <span className="ml-1 text-md">
              <i className="fas fa-shopping-cart"></i>
            </span>
          </a>
          <div className="absolute hidden top-full right-0 w-64 px-3 py-3 h-auto bg-slate-100  shadow-xl group-hover:inline-block">
            <div className="flex flex-col items-center">
              <p className="inline-block text-slate-800 text-lg">
                Giỏ hàng trống
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Logintopbar;
