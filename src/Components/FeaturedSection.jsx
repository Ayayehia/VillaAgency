import image from "../assets/Images/Feature-small.jpg";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
const FeaturedSection = () => {
  return (
    <section className="w-full flex justify-end p-3 pb-12 mt-20 mb-20 relative">
      <img className="w-3/4 relative" src={image} alt="featureimage" />
      <section className="flex justify-center items-center text-center text-white text-2xl rounded-full bg-orange-600 w-24 h-24  z-50 absolute bottom-0 left-14 md:left-40 md:p-16">
        <ContentPasteSearchIcon style={{ fontSize: "xxx-large" }} />
      </section>
    </section>
  );
};

export default FeaturedSection;
