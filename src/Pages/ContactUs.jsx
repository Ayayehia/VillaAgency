import ContactInfo from "../Components/Contact/ContactInfo";
import MapContainer from "../Components/Ui/Map";
import Form from "../Components/Contact/Form";
import Footer from "../Components/Footer";
import PageHeading from "../Components/Shared/PageHeading";
import Image from "../assets/Images/contactus-medium.jpg";
const ContactUs = () => {
  return (
    <section className=" flex flex-col  gap-8">
      <PageHeading
        title={"Contact Us"}
        tagline={"Home/Contact Us"}
        image={Image}
      />
      <section className="lg:flex justify-around items-center h-full mt-20  lg:mt-[12rem] 2xl:mt-[23%]">
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
