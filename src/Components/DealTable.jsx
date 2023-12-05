import Modal from "./Ui/Modal";
import ApartmentInfo from "./Category/ApartmentInfo";
import VillaInfo from "./Category/VillaInfo";
import PenthouseInfo from "./Category/PenthouseInfo";
const DealTable = ({ category }) => {
  return (
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
  );
};

export default DealTable;
