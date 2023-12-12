import ContactInfo from "../Components/Contact/ContactInfo";
import MapContainer from "../Components/Ui/Map";
import Form from "../Components/Contact/Form";
import Footer from "../Components/Footer";
import PageHeading from "../Components/Shared/PageHeading";
import Image from "../assets/Images/contactus-medium.jpg";
import SectionHeading from "../Components/SectionHeading";
const ContactUs = () => {
  return (
    <section className=" flex flex-col  gap-4 ">
      <PageHeading
        title={"Contact Us"}
        tagline={"Home/Contact Us"}
        image={Image}
      />
      <SectionHeading />
      <section className="lg:flex justify-around items-center h-full ">
        <span className="lg:w-[60%]">
          <ContactInfo />
        </span>
        <Form newwidth={true} />
      </section>
      <MapContainer />
      <Footer />
    </section>
  );
};

export default ContactUs;
