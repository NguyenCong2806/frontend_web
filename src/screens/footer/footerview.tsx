import FootercolOneComponent from "../../components/footer/footercolone";
import FootercolThreeComponent from "../../components/footer/footercolthree";
import FootercolTwoComponent from "../../components/footer/footercoltwo";

/* eslint-disable @typescript-eslint/no-unused-vars */
const FooterView = () => {
  return (
    <div className=" bg-slate-900">
      <div className="container mx-auto py-10">
        <div className=" flex flex-col md:flex-row md:gap-3 lg:flex-row justify-start lg:gap-20 px-3 md:px-0 space-y-5 lg:space-y-0">
          <FootercolOneComponent/>
          <FootercolTwoComponent/>
          <FootercolTwoComponent/>
          <FootercolThreeComponent/>
        </div>
      </div>
    </div>
  );
};

export default FooterView;
