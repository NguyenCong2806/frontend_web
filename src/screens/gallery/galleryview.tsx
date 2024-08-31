import GalleryComponent from "../../components/gallery/gallerycomponent";

/* eslint-disable @typescript-eslint/no-unused-vars */
const GalleryView = () => {
  const ArryProduct = [
    {
      href: "#",
      titel: "CPU",
      img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/09/13_Jul87b69dbae80d7541b15febc385dfd9fc-1.jpg",
    },
    {
      href: "#",
      titel: "CPU",
      img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/09/13_Jul68efaa775cdb79f8ca704309dd4dfeaa.jpg",
    },
    {
      href: "#",
      titel: "CPU",
      img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/09/13_Jul47b06991e736727d47d3993ed42c91fe.jpg",
    },
    {
      href: "#",
      titel: "CPU",
      img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/09/13_Jul3d30eef9c10cd9e3896a9a55224d330b.jpg",
    },
    {
      href: "#",
      titel: "CPU",
      img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/09/13_Jul68efaa775cdb79f8ca704309dd4dfeaa.jpg",
    },
    {
      href: "#",
      titel: "CPU",
      img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/09/13_Jul47b06991e736727d47d3993ed42c91fe.jpg",
    },
    {
      href: "#",
      titel: "CPU",
      img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/09/13_Jul3d30eef9c10cd9e3896a9a55224d330b.jpg",
    },
    {
      href: "#",
      titel: "CPU",
      img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/09/13_Jul68efaa775cdb79f8ca704309dd4dfeaa.jpg",
    },
    {
      href: "#",
      titel: "CPU",
      img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/09/13_Jul47b06991e736727d47d3993ed42c91fe.jpg",
    },
  ];
  return (
    <div className=" bg-slate-100">
      <div className="container mx-auto w-full py-3">
        <div className="flex flex-row justify-between items-center flex-wrap px-1">
          {ArryProduct.map((pro) => (
            <GalleryComponent titel={pro.titel} img={pro.img} href={pro.href} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryView;
