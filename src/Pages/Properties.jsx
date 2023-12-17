import PageHeading from "../Components/Shared/PageHeading";
import PropertiesImage from "../assets/Images/Properties-medium.jpg";
import Properties from "../Components/PropertiesSection";
import ButtonStyle from "../Components/Ui/ButtonStyle";
import Footer from "../Components/Shared/Footer";

const PropertiesPage = () => {
  return (
    <section className="flex flex-col">
      <PageHeading
        title={"Properties"}
        tagline={"Home/Properties"}
        image={PropertiesImage}
      />
      <span className="mt-[4rem] ">
        <ButtonStyle />
        <Properties />
      </span>
      <Footer />
    </section>
  );
};

export default PropertiesPage;
