import Logintopbar from "../../components/righttopbar/login_top_bar";
import Listtopbar from "../../components/topbar/list_top_bar";

/* eslint-disable @typescript-eslint/no-unused-vars */
const Topheaderbar = () => {
  return (
    <div className=" bg-black py-2">
      <div className="container mx-auto px-54">
        <div className="flex flex-col items-center text-center gap-3 md:flex-row md:justify-between">
          <Listtopbar />
          <Logintopbar />
        </div>
      </div>
    </div>
  );
};

export default Topheaderbar;
