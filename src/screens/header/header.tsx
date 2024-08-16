import HeaderBottom from "../../components/headerbottom/headerbottom";
import Onlinebuybox from "../../components/headercomponents/onlinebuybox";
import LogoComponets from "../../components/logo/logocomponentrs";
import HeadBodyMobile from "../../components/mobile/headbody";
import MenuMobile from "../../components/mobile/menumobile";
import SearchComponets from "../../components/search/searchcomponents";

/* eslint-disable @typescript-eslint/no-unused-vars */
const HeaderView = () => {
  return (
    <div>
      <div className="bg-white py-2">
        <div className="container mx-auto px-54 hidden lg:block">
          <div className="flex flex-row justify-between items-center">
            <LogoComponets />
            <SearchComponets />
            <Onlinebuybox />
          </div>
        </div>
        <HeadBodyMobile/>
      </div>
      <div className=" bg-red-500">
        <div className="container mx-auto px-54 hidden lg:block">
          <HeaderBottom />
        </div>
        <MenuMobile/>
      </div>
    </div>
  );
};

export default HeaderView;
