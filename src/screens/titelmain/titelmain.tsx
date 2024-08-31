import TitelMainComponets from "../../components/titelmain/titelmain";
import TitleProps from "../../props/TitleProps";

/* eslint-disable @typescript-eslint/no-unused-vars */
const TitelView = (props:TitleProps) => {
  return (
    <div className="container mx-auto my-6">
        <TitelMainComponets titel={props.titel}/>
    </div>
  );
};

export default TitelView;
