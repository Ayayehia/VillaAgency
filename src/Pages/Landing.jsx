import HeroSection from "../Components/HeroSection";
import FeaturedSection from "../Components/FeaturedSection";
import VideoSection from "../Components/VideoSection";
import FactWrapper from "../Components/FactWrapper";
import DealSection from "../Components/DealSection";
import Properties from "../Components/PropertiesSection";
import Furnitureport from "../assets/Images/furnitureport-medium.jpg";
import MapContainer from "../Components/Shared/Map";
import ContactInfo from "../Components/Contact/ContactInfo";
import Form from "../Components/Contact/Form";
import Footer from "../Components/Shared/Footer";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
const Landing = () => {
  const video = (
    <PlayCircleFilledIcon
      className="absolute top-[54%]  left-[40%]  text-orange-500 text-6xl cursor-pointer md:top-[56%] md:left-[46%] lg:top-[55%] lg:left-[47%] xl:top-[55%] xl:left-[48%] "
      style={{ fontSize: 59 }}
    />
  );
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <VideoSection
        Tagline={"|Video View"}
        title={"Get Closer View & Different Feeling"}
        backgroungImage={Furnitureport}
        content={video}
      />
      <FactWrapper />
      <DealSection />

      <Properties />

      <span className="lg:flex lg:w-full items-center   ">
        <span className="lg:flex lg:flex-col lg:w-[60%]">
          <VideoSection
            Tagline={"|Video View"}
            title={"Get Closer View & Different Feeling"}
            content={<MapContainer />}
          />
          <ContactInfo />
        </span>
        <Form newwidth={true} />
      </span>
      <Footer />
    </>
  );
};

export default Landing;
