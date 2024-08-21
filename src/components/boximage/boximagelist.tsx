import BoxImageItem from "./boximageitem";

/* eslint-disable @typescript-eslint/no-unused-vars */
const BoxImageList = () => {
  const arrylist = [
    {
      src: "https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/01.jpg",
      titel: "MSI",
      detail: "Made for Gamers and Creators",
    },
    {
      src: "https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/03.jpg",
      titel: "LG",
      detail: "Tháng LG quà mê ly",
    },
    {
      src: "https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/04.jpg",
      titel: "Lenovo",
      detail: "Laptop Chơi Game Thực Thụ",
    },
    {
      src: "https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/02.jpg",
      titel: "MSI",
      detail: "Lễ hội máy tính HP – Ưu đãi cực phê",
    },
  ];
  return (
    <div className="flex flex-row justify-start flex-wrap w-full">
      {arrylist.map((item) => (
        <BoxImageItem src={item.src} titel={item.titel} detail={item.detail} />
      ))}
    </div>
  );
};

export default BoxImageList;
