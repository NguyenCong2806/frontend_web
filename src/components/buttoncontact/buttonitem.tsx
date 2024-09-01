/* eslint-disable @typescript-eslint/no-unused-vars */
const ButtonItem = () => {
  return (
    <div className="p-8 fixed top-1/3 right-0">
      <div className="inline-block">
        <ul className=" flex flex-col gap-4">
          <li className="bg-cyan-700 px-2 py-3 inline-block rounded-full animate__animated animate__pulse animate__infinite">
            <a href="#">
              <img className="w-6 h-4" src="https://maytinh3.maugiaodien.com/wp-content/plugins/button-contact-vr/img/contact.png"></img>
            </a>
          </li>
          <li className=" bg-cyan-900 px-2 py-3 inline-block rounded-full animate__animated animate__pulse animate__infinite">
            <a href="#">
              <img className="w-6 h-4" src="https://maytinh3.maugiaodien.com/wp-content/plugins/button-contact-vr/img/zalo.png"></img>
            </a>
          </li>
          <li className=" bg-red-800 px-2 py-3 inline-block rounded-full animate__animated animate__pulse animate__infinite">
            <a href="#">
              <img className="w-6 h-4" src="https://maytinh3.maugiaodien.com/wp-content/plugins/button-contact-vr/img/phone.png"></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ButtonItem;
