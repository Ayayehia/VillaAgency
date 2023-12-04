import ApartmentIcon from "@mui/icons-material/Apartment";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";

const InfoTable = () => {
  return (
    <section
      className=" p-4 m-3 rounded-xl lg:mt-20 "
      style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)" }}
    >
      <ul>
        <li className="flex p-4">
          <section className="p-3 ">
            <ApartmentIcon
              style={{ fontSize: "3rem" }}
              className="text-orange-500 "
            />
          </section>

          <h2 className="flex flex-col text-xl font-bold">
            250 m2
            <br />
            <span className="text-gray-400 font-normal">Total flat space</span>
          </h2>
        </li>
        <hr />
        <li className="flex p-4">
          <h3 className="p-3">
            <AssignmentIcon
              style={{ fontSize: "3rem" }}
              className="text-orange-500 "
            />
          </h3>
          <h2 className="flex flex-col text-xl font-bold">
            Contract
            <br />
            <span className="text-gray-400 font-normal">Contract Ready</span>
          </h2>
        </li>
        <hr />
        <li className="flex p-4">
          <h3 className="p-3 text-4xl">
            <MonetizationOnIcon
              className="text-orange-500 text-4xl "
              style={{ fontSize: "3rem" }}
            />
          </h3>
          <h2 className="flex flex-col text-xl font-bold">
            Payment
            <br />
            <span className="text-gray-400 font-normal">Payment Process</span>
          </h2>
        </li>
        <hr />
        <li className="flex p-4">
          <h3 className="p-3 ">
            <EnhancedEncryptionIcon
              style={{ fontSize: "3rem" }}
              className="text-orange-500 "
            />
          </h3>
          <h2 className="flex flex-col text-xl font-bold">
            Safety
            <br />
            <span className="text-gray-400 font-normal">
              24/7 Under Control
            </span>
          </h2>
        </li>
      </ul>
    </section>
  );
};

export default InfoTable;
