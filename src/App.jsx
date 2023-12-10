import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import FeaturedSection from "./Components/FeaturedSection";
import VideoSection from "./Components/VideoSection";
import FactWrapper from "./Components/FactWrapper";
import DealSection from "./Components/DealSection";
import Properties from "./Components/PropertiesSection";
import Furnitureport from "./assets/Images/furnitureport-medium.jpg";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import MapContainer from "./Components/Ui/Map";
import ContactInfo from "./Components/Contact/ContactInfo";
function App() {
  const video = (
    <PlayCircleFilledIcon
      className="absolute top-[54%]  left-[40%]  text-orange-500 text-6xl cursor-pointer md:top-[56%] md:left-[46%] lg:top-[55%] lg:left-[47%] xl:top-[55%] xl:left-[48%] "
      style={{ fontSize: 59 }}
    />
  );
  return (
    <>
      <Header />
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
      <VideoSection
        Tagline={"|Video View"}
        title={"Get Closer View & Different Feeling"}
        content={<MapContainer />}
      />
      <ContactInfo />
    </>
  );
}

export default App;
