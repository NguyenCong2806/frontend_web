/* eslint-disable @typescript-eslint/no-unused-vars */
const Listtopbar = () => {
  const text_arry = Array<string>(
    "Cam kết giá tốt nhất",
    "Miễn phí vận chuyển",
    "Thanh toán khi nhận hàng",
    "Bảo hành tận nơi"
  );

  return (
    <div className="inline-block">
      <ul className="flex gap-4">
        {text_arry.map((object, i) => {
          return (
            <li className=" text-xs text-white" key={i}>
              <a href="#">{object}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Listtopbar;
