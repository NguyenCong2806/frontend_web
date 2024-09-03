const ProductSpecifications = () => {
  return (
    <div>
      <div className="flex flex-col xl:flex-row justify-between items-start w-full gap-10">
        <div className="w-full 2xl:w-2/3 inline-block">
          <div className="border bg-white py-10 px-4 text-start rounded-md">
            <table className="table table-bordered">
              <tbody>
                <tr className="row-info">
                  <td>CPU</td>
                  <td>
                    Intel Core&nbsp;i7-9750H&nbsp;2.6GHz up to 4.5GHz 12MB
                  </td>
                </tr>
                <tr className="row-info">
                  <td>RAM</td>
                  <td>
                    8GB DDR4 2666MHz&nbsp;(2x SO-DIMM socket, up to 32GB SDRAM)
                  </td>
                </tr>
                <tr className="row-info">
                  <td>Ổ cứng</td>
                  <td>
                    256GB SSD M.2 PCIE G3X4&nbsp;(Support RAID 0) (2 slots)
                  </td>
                </tr>
                <tr className="row-info">
                  <td>Card đồ họa</td>
                  <td>NVIDIA GeForce GTX 1660Ti 6GB&nbsp;GDDR6</td>
                </tr>
                <tr className="row-info">
                  <td>Màn hình</td>
                  <td>
                    15.6″ FHD (1920 x 1080) IPS,&nbsp;Anti-Glare,&nbsp;144Hz,
                    3ms, 300nits
                  </td>
                </tr>
                <tr className="row-info">
                  <td>Cổng giao tiếp</td>
                  <td>
                    2x USB 3.1, 1x USB 3.1 Gen 2, 1x USB Type C (Thunderbolt),
                    Mini Display Port, HDMI
                  </td>
                </tr>
                <tr className="row-info">
                  <td>Keyboard</td>
                  <td>RGB 4 Zone</td>
                </tr>
                <tr className="row-info">
                  <td>Audio</td>
                  <td>Waves MaxxAudio® Sound Technology</td>
                </tr>
                <tr className="row-info">
                  <td>Đọc thẻ nhớ</td>
                  <td>None</td>
                </tr>
                <tr className="row-info">
                  <td>Chuẩn LAN</td>
                  <td>10/100/1000/Gigabits Base T</td>
                </tr>
                <tr className="row-info">
                  <td>Chuẩn WIFI</td>
                  <td>802.11 AC (2X2) with MU-MIMO</td>
                </tr>
                <tr className="row-info">
                  <td>Bluetooth</td>
                  <td>v5.0</td>
                </tr>
                <tr className="row-info">
                  <td>Webcam</td>
                  <td>Acer Crystal Eye 720p</td>
                </tr>
                <tr className="row-info">
                  <td>Hệ điều hành</td>
                  <td>Windows 10 Home</td>
                </tr>
                <tr className="row-info">
                  <td>Pin</td>
                  <td>4 Cell 48 WHrs</td>
                </tr>
                <tr className="row-info">
                  <td>Trọng lượng</td>
                  <td>2.4 kg</td>
                </tr>
                <tr className="row-info">
                  <td>Màu sắc</td>
                  <td>
                    <span
                      data-sheets-value='{"1":2,"2":"Abyssal Black"}'
                      data-sheets-userformat='{"2":4392,"6":{"1":[{"1":2,"2":0,"5":[null,2,0]},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"8":{"1":[{"1":2,"2":0,"5":[null,2,0]},{"1":0,"2":0,"3":3},{"1":1,"2":0,"4":1}]},"11":4,"15":"Arial"}'
                    >
                      Abyssal Black
                    </span>
                  </td>
                </tr>
                <tr className="row-info">
                  <td>Kích thước</td>
                  <td>361.4 x 254.15 x 22.9 (mm)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full 2xl:w-1/3 inline-block">
          <div className="border bg-white py-6 px-4 text-justify rounded-md">
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Thông số kỹ thuật
              </h3>
              Đang cập nhật
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecifications;
