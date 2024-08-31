import FootercolOneComponent from "../../components/footer/footercolone";
import FootercolTwoComponent from "../../components/footer/footercoltwo";

/* eslint-disable @typescript-eslint/no-unused-vars */
const FooterView = () => {
  return (
    <div className=" bg-slate-900">
      <div className="container mx-auto py-10">
        <div className="flex flex-col gap-6 md:flex-row 
        lg:flex-row justify-start md:justify-between md:gap-3 md:items-center lg:items-center flex-wrap px-4 md:px-1 lg:px-1">
          <FootercolOneComponent/>
          <FootercolTwoComponent/>
          <FootercolTwoComponent/>
          <FootercolTwoComponent/>
        </div>
      </div>
    </div>
  );
};

export default FooterView;
