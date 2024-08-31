import ProductCategoryComponents from "../../components/product/productcategorycomponents";
/* eslint-disable @typescript-eslint/no-unused-vars */
const ProductCategoryView = () => {
  const ArryProduct = [
    {
      src: "#",
      titel: "CPU AMD Ryzen 7 5800X (8C/16T, 3.80 GHz – 4.70 GHz, 32MB)",
      img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/6c415996c245311b6854-168x168.jpg",
      originalprice: 11900000,
      saleprice: 0,
      discount: 0,
    },
    {
      src: "#",
      titel: "ASUS ROG Zephyrus M GU502GU-AZ090T Gaming",
      img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/ASUS-ROG-Zephyrus-M-GU502GU-1-510x510-1-168x168.jpg",
      originalprice: 34600000,
      saleprice: 3160000,
      discount: 12,
    },
    {
      src: "#",
      titel: "RAM desktop CORSAIR Vengeance RGB Pro CMW32GX4M2D3000C16 (2x16GB)",
      img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/isures-prod-15-168x168.jpg",
      originalprice: 4450000,
      saleprice: 0,
      discount: 0,
    },
    {
      src: "#",
      titel: "ASUS ROG Strix SCAR III G531GN-VAZ160T Laptop",
      img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/ASUS-ROG-Strix-SCAR-III-Laptop-1-510x510-1-168x168.jpg",
      originalprice: 44600000,
      saleprice: 42000000,
      discount: 6,
    },
    {
        src: "#",
        titel: "Mainboard ASRock B365 Phantom Gaming 4",
        img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/isures-prod-4-168x167.jpg",
        originalprice: 2690000,
        saleprice: 0,
        discount: 0,
    },
    {
        src: "#",
        titel: "CPU AMD Ryzen 5 3500X (6C/6T, 3.6 GHz up to 4.1 GHz, 32MB)",
        img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2021/07/c691787652b6a1e8f8a7-168x168.jpg",
        originalprice: 3790000,
        saleprice: 0,
        discount: 0,
    },
    {
        src: "#",
        titel: "Ghế game DXRacer Valkyrie Series GC",
        img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/25890_dxracer_valkyrie_series_gc_v03_nw_b4__1_-168x168.png",
        originalprice: 12000000,
        saleprice: 990000,
        discount: 18,
    },
    {
        src: "#",
        titel: "Chuột Asus Cerberus",
        img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/23248_chu___t_asus_cerberus_1-168x168.jpg",
        originalprice: 12000000,
        saleprice: 990000,
        discount: 18,
    },
    {
        src: "#",
        titel: "Chuột Asus Cerberus",
        img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/23248_chu___t_asus_cerberus_1-168x168.jpg",
        originalprice: 12000000,
        saleprice: 990000,
        discount: 18,
    },
    {
        src: "#",
        titel: "Chuột Asus Cerberus",
        img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/23248_chu___t_asus_cerberus_1-168x168.jpg",
        originalprice: 12000000,
        saleprice: 990000,
        discount: 18,
    },
    {
        src: "#",
        titel: "Chuột Asus Cerberus",
        img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/23248_chu___t_asus_cerberus_1-168x168.jpg",
        originalprice: 12000000,
        saleprice: 990000,
        discount: 18,
    },
    {
        src: "#",
        titel: "Chuột Asus Cerberus",
        img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/23248_chu___t_asus_cerberus_1-168x168.jpg",
        originalprice: 12000000,
        saleprice: 990000,
        discount: 18,
    },
    {
        src: "#",
        titel: "Chuột Asus Cerberus",
        img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/23248_chu___t_asus_cerberus_1-168x168.jpg",
        originalprice: 12000000,
        saleprice: 990000,
        discount: 18,
    },
    {
        src: "#",
        titel: "Chuột Asus Cerberus",
        img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/23248_chu___t_asus_cerberus_1-168x168.jpg",
        originalprice: 12000000,
        saleprice: 990000,
        discount: 18,
    },
    {
        src: "#",
        titel: "Chuột Asus Cerberus",
        img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/23248_chu___t_asus_cerberus_1-168x168.jpg",
        originalprice: 12000000,
        saleprice: 990000,
        discount: 18,
    },
    {
        src: "#",
        titel: "Chuột Asus Cerberus",
        img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/23248_chu___t_asus_cerberus_1-168x168.jpg",
        originalprice: 12000000,
        saleprice: 990000,
        discount: 18,
    },
    {
        src: "#",
        titel: "Chuột Asus Cerberus",
        img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/23248_chu___t_asus_cerberus_1-168x168.jpg",
        originalprice: 12000000,
        saleprice: 990000,
        discount: 18,
    },
    {
        src: "#",
        titel: "Chuột Asus Cerberus",
        img: "https://maytinh3.maugiaodien.com/wp-content/uploads/2020/08/23248_chu___t_asus_cerberus_1-168x168.jpg",
        originalprice: 12000000,
        saleprice: 990000,
        discount: 18,
    },
  ];
  return (
    <div className="container mx-auto w-full my-8">
      <div className="flex flex-row justify-start items-center flex-wrap px-1">
        {ArryProduct.map((pro) => (
          <ProductCategoryComponents product={pro} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryView;
