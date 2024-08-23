import TitleProps from "../../props/TitleProps";

/* eslint-disable @typescript-eslint/no-unused-vars */
const TitelMainComponets = (props:TitleProps) => {
    return (
      <div className="block px-1 md:px-0 lg:px-0">
        <div className="w-full border-b-4 border-emerald-900">
            <div className="inline-block py-2 px-4 rounded-t-lg bg-emerald-900">
                <h1 className=" font-bold text-lg text-white">{props.titel}</h1>
            </div>
        </div>
      </div>
    );
  };
  
  export default TitelMainComponets;
  