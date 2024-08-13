/* eslint-disable @typescript-eslint/no-unused-vars */
const SearchComponets = () => {
  return (
    <div className="hidden md:inline-block lg:inline-block">
      <div className="border rounded px-2 py-1">
        <input className="px-2 w-96 focus:outline-none focus:border-0" type=" text" placeholder="Nhập sản phẩm bạn muốn tìm..."></input>
        <button
          className="px-2 py-1 rounded bg-blue-800 text-slate-100 active:bg-blue-900"
          title="Tìm kiếm">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchComponets;
