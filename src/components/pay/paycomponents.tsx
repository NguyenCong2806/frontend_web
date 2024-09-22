/* eslint-disable @typescript-eslint/no-unused-vars */
const PayComponents = () => {
  return (
    <div className="my-3">
      <div className="px-3">
        <div className="my-4">
          <h5 className="text-2xl font-bold">Thanh toán</h5>
        </div>
        <div className="my-2">
          <span className="text-base mr-2">Bạn có mã ưu đãi?</span>
          <a href="/" className="text-sky-600">
            Ấn vào đây để nhập mã
          </a>
        </div>
        <div className="inline-block">
          <div className="my-3 px-6 py-4 border-2 border-dashed border-red-900">
            <p className=" text-base xl:text-balance text-left">
              Nếu bạn có mã giảm giá, vui lòng điền vào phía bên dưới.
            </p>
            <div className="my-3 w-full space-y-2">
              <input
                className="py-1 px-2 xl:w-3/4 w-full inline border xl:inline-block focus:outline-none"
                type="text"
                placeholder="Mã ưu đãi"
              />
              <button className="py-1 px-2 w-full xl:w-1/4 border xl:inline-block bg-red-600 font-bold text-slate-50">
                ÁP DỤNG
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3 px-3">
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start xl:gap-10">
          <div className="inline-block xl:w-2/3 border-t-2 py-6">
            <h6 className="text-lg font-bold my-2">THÔNG TIN THANH TOÁN</h6>
            <div>
              <div className="inline">
                <label className="block font-bold text-base my-2">
                  Họ và tên <span className="text-red-900">*</span>
                </label>
                <input
                  className="border py-3 px-3 w-full rounded-md focus:outline-none"
                  type="text"
                  placeholder="Nhập đầy đủ họ và tên của bạn"
                />
              </div>
              <div className="inline">
                <label className="block font-bold text-base my-2">
                  Địa chỉ <span className="text-red-900">*</span>
                </label>
                <input
                  className="border py-3 px-3 w-full rounded-md focus:outline-none"
                  type="text"
                  placeholder="Nhập đầy đủ họ và tên của bạn"
                />
              </div>
              <div className="inline">
                <label className="block font-bold text-base my-2">
                  Số điện thoại <span className="text-red-900">*</span>
                </label>
                <input
                  className="border py-3 px-3 w-full rounded-md focus:outline-none"
                  type="text"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <div className="inline">
                <label className="block font-bold text-base my-2">
                  Địa chỉ email
                </label>
                <input
                  className="border py-3 px-3 w-full rounded-md focus:outline-none"
                  type="text"
                  placeholder="Nhập đầy đủ họ và tên của bạn"
                />
              </div>
              <div className="my-6">
                <h6 className="text-lg font-bold my-2">THÔNG TIN BỔ SUNG</h6>
                <label className="block">Ghi chú đơn hàng (tùy chọn)</label>
                <textarea
                  className=" inline w-full border my-2 p-3 focus:outline-none"
                  rows={2}
                  cols={5}
                  placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                ></textarea>
              </div>
            </div>
          </div>
          <div className="inline-block xl:w-1/3 border-2 border-red-900 px-6 py-6 shadow-xl">
            <div>
              <div>
                <h6 className="text-lg font-bold my-2">ĐƠN HÀNG CỦA BẠN</h6>
              </div>
              <div>
                <div className="my-3">
                  <table className="table-auto w-full">
                    <thead className="border-b-2">
                      <tr>
                        <th className="text-left py-3">SẢN PHẨM</th>
                        <th className="text-right py-3">TẠM TÍNH</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left py-3">
                          <span className="text-sm xl:text-base text-slate-500 xl:font-medium">
                            Ghế game DXRacer Valkyrie Series GC{" "}
                          </span>
                          <span className=" text-sm font-semibold">x 1</span>
                        </td>
                        <td className="text-right py-3">999.000 đ</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="border-y-2">
                        <th className="text-left py-3">Tạm tính</th>
                        <th className="text-right py-3">
                          <span>
                            <bdi>
                              990.000
                              <span>₫</span>
                            </bdi>
                          </span>
                        </th>
                      </tr>
                      <tr className="border-b-2">
                        <th className="text-left py-3">Tổng</th>
                        <th className=" text-right py-3">
                          <strong>
                            <span>
                              <bdi>
                                990.000
                                <span>₫</span>
                              </bdi>
                            </span>
                          </strong>
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div>
                  <div className="space-y-2 my-3">
                    <p className="font-bold text-sm">Chuyển khoản ngân hàng</p>
                    <p className="text-justify">
                      Thực hiện thanh toán vào ngay tài khoản ngân hàng của
                      chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần
                      Nội dung thanh toán. Đơn hàng sẽ đươc giao sau khi tiền đã
                      chuyển.
                    </p>
                  </div>
                </div>
                <div className="my-3">
                  <button className=" py-2 px-10 bg-red-600 text-slate-50 font-semibold rounded-sm focus:bg-red-800 hover:bg-red-700 text-base">
                    Đặt hàng
                  </button>
                </div>
                <div>
                  <div className="mb-9">
                    <p className="text-justify">
                      Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn
                      hàng, tăng trải nghiệm sử dụng website, và cho các mục
                      đích cụ thể khác đã được mô tả trong
                      <a href="/" className="text-sky-900">
                        {" "}
                        chính sách riêng tư
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayComponents;
