import Modal from "./Ui/Modal";
import ApartmentInfo from "./Category/ApartmentInfo";
import VillaInfo from "./Category/VillaInfo";
import PenthouseInfo from "./Category/PenthouseInfo";
import ApartmentExtraInfo from "./Category/ApartmentExtraInfo";
import VillaExtraInfo from "./Category/VillaExtraInfo";
import PenthouseExtraInfo from "./Category/PenthouseExtraInfo";
const DealTable = ({ category, scroll }) => {
  return (
    <section className="lg:flex lg:flex-row justify-evenly text-center">
      <Modal>
        {category === "Apartment" ? (
          <>
            <ApartmentInfo />
          </>
        ) : category === "Villa House" ? (
          <VillaInfo />
        ) : category === "Penthouse" ? (
          <PenthouseInfo />
        ) : null}
      </Modal>
      {category === "Apartment" ? (
        <ApartmentExtraInfo scroll={scroll} />
      ) : category === "Villa House" ? (
        <VillaExtraInfo scroll={scroll} />
      ) : (
        <PenthouseExtraInfo scroll={scroll} />
      )}
    </section>
  );
};

export default DealTable;
