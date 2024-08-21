import BoxImageProps from "../../props/BoxImageProps";

/* eslint-disable @typescript-eslint/no-unused-vars */
const BoxImageItem = (props: BoxImageProps) => {
  return (
    <div className="w-1/2 md:w-1/4 lg:w-1/4 inline-block shadow-xl rounded overflow-hidden hover:shadow-none">
      <div className="px-1">
        <div className="block">
          <a href="#">
            <img className="w-full" src={props.src}></img>
          </a>
        </div>
        <div className="block bg-slate-50">
          <div className="text-center pt-3 pb-6">
            <h6 className="font-bold text-lg">{props.titel}</h6>
            <p>{props.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxImageItem;
