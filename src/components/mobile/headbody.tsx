/* eslint-disable @typescript-eslint/no-unused-vars */
const HeadBodyMobile = () => {
  return (
    <div className="block lg:hidden">
      <div className="container mx-auto md:mx-4 md:text-center  px-5 md:px-1">
        <ul className="flex flex-row justify-between items-center gap-5">
          <li>
            <a className="text-lg  text-slate-600" href="#">
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li>
            <a className=" w-20 h-auto" href="#">
              <img className=" w-full" src="https://maytinh3.maugiaodien.com/wp-content/uploads/2020/09/logo.png"></img>
            </a>
          </li>
          <li>
            <a  className="text-lg text-slate-600" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeadBodyMobile;
