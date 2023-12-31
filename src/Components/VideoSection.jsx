// import FurnitureImage from "../assets/Images/Furniture-medium.jpg";
// import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Furnitureport from "../assets/Images/furnitureport-medium.jpg";
import MapContainer from "./Shared/Map";
const VideoSection = ({ Tagline, title, backgroungImage, content, Image }) => {
  return (
    <section className="mt-14">
      {/* Furnitureport */}
      <img
        src={Furnitureport}
        alt="house image"
        className="w-full h-3/4 blur-sm absolute md:h-3/4 lg:h-3/4"
      />
      <section className="h-5/6 text-center w-full flex flex-col items-center justify-around relative  p-3 md:gap-8 lg:gap-8 ">
        <h2 className="text-red-500 lg:text-3xl xl:text-6xl ">{Tagline}</h2>
        <p className="text-white text-3xl space-x-1">{title}</p>
        <>
          <img
            loading="lazy"
            className="h-1/4 w-3/4 relative rounded-full md:w-1/3 md:h-1/5 lg:w-1/3  "
            src={backgroungImage}
          />
          {/* <section className="bg-orange-200 absolute top-[54%]  left-[40%]  rounded-full z-50 p-10 md:left-[46%] lg:top-[55%]"> */}
          {content}
          {/* </section> */}
        </>
      </section>
    </section>
  );
};

export default VideoSection;
