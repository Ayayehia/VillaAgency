import PageHeading from "../Components/Shared/PageHeading";
import Image from "../assets/Images/SingleProperty-medium.jpg";
import AccordinSection from "../Components/Shared/AccordinSection";
import DealSection from "../Components/DealSection";
import Footer from "../Components/Shared/Footer";
import SingleProperty from "../Components/SingleProperty";
import InfoTable from "../Components/InfoTable";
const PropertiesDetails = ({ scroll }) => {
  return (
    <section className="flex flex-col">
      <PageHeading
        title={"Single Property"}
        tagline={"Home/Single Property"}
        image={Image}
      />
      <span className="lg:flex mt-16 lg:mt-52">
        <SingleProperty />
        <InfoTable />
      </span>

      <AccordinSection />
      <DealSection scroll={scroll} />
      <Footer />
    </section>
  );
};

export default PropertiesDetails;
