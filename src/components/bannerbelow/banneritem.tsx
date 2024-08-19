import BannerImgProps from "../../props/BannerImgProps";

/* eslint-disable @typescript-eslint/no-unused-vars */
const BannerItem = (props: BannerImgProps) => {
  return (
    <div className="inline-block">
      <a href="#">
        <div className="inline-block">
          <img className="rounded-xl shadow-xl" src={props.src}></img>
        </div>
      </a>
    </div>
  );
};

export default BannerItem;
