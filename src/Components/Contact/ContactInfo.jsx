import Modal from "../Ui/Modal";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
const ContactInfo = () => {
  const Info = [
    {
      title: "Phone Number",
      Details: "1111-2222-111",
      icon: <ContactPhoneIcon style={{ fontSize: "2rem" }} />,
    },
    {
      title: "Business Email",
      Details: "ayanader8@gmail.com",
      icon: <MailOutlineIcon style={{ fontSize: "2rem" }} />,
    },
  ];
  return (
    <>
      {Info.map((text) => (
        <Modal>
          <section className="flex gap-4">
            <span
              className=" text-orange-400 font-extrabold text-4xl"
              style={{ fontSize: "2rem" }}
            >
              {text.icon}
            </span>
            <span className="flex flex-col" key={text.title}>
              <article className="font-bold text-xl">{text.Details}</article>
              <article className="text-[#aaaaaa]">{text.title}</article>
            </span>
          </section>
        </Modal>
      ))}
    </>
  );
};

export default ContactInfo;
