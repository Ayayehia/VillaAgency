import image from "../assets/Images/Feature-small.jpg";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";

const FeatureImage = () => {
  return (
    <section className="w-full flex justify-end p-3 pb-12 mt-20 mb-20 relative">
      <img
        loading="lazy"
        className="w-3/4 relative  xl:w-1/2"
        src={image}
        alt="featureimage"
      />
      <section className="flex justify-center items-center text-center text-white text-2xl rounded-full bg-orange-600 w-24 h-24  z-50 absolute bottom-0 left-14 md:left-40  lg:left-14 lg:w-20 lg:h-20 xl:left-60 xl:p-10 2xl:p-14 2xl:left-[45%] ">
        <ContentPasteSearchIcon className="text-4xl xl:text-base 2xl:text-6xl" />
      </section>
    </section>
  );
};

export default FeatureImage;
