import Button from "../Ui/Button";
import Image from "../../assets/Images/PentHouseInfo-small.jpg";

const PenthouseExtraInfo = () => {
  return (
    <section className="p-4 gap-6 flex flex-col lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:w-50% lg:gap-12 lg:m-8">
      <img src={Image} alt="furniture image" className=" w-full lg:w-[50%]" />
      <section className="flex flex-col gap-6 text-center md:items-start  md:text-left lg:justify-center lg:gap-16 lg:h-full ">
        <h3 className="text-xl font-bold ">Extra Info About Property</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ut
          ipsum, hic dolorum accusantium atque laborum voluptas et harum? Maxime
          nisi alias, repellendus necessitatibus placeat illum atque iste porro
          voluptatem.
        </p>
        <Button />
      </section>
    </section>
  );
};

export default PenthouseExtraInfo;
