import GalleryProps from "../../props/GalleryProps";

/* eslint-disable @typescript-eslint/no-unused-vars */
const GalleryComponent = (props: GalleryProps) => {
    return (
      <div className="inline-block md:inline-block lg:inline-block px-2">
        <div className="border rounded px-5 py-2" title={props.titel}>
          <a href={props.href}>
            <div className="inline-block">
                <img src={props.img}></img>
            </div>
          </a>
        </div>
      </div>
    );
  };
  
  export default GalleryComponent;
  