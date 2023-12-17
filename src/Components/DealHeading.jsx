import ButtonStyle from "./Ui/ButtonStyle";
const DealHeading = ({ deals, categorysetting, category }) => {
  console.log(category, "category");
  return (
    <section className=" flex flex-col gap-2 mt-10 p-4 items-center justify-between lg:flex lg:flex-row xl:justify-between 2xl:justify-around ">
      <section className="flex flex-col p-4">
        <h3 className="text-orange-500 uppercase lg:text-2xl xl:text-5xl xl:p-4">
          | Best Deal
        </h3>
        <h2 className="text-3xl uppercase lg:text-[2rem] xl:text-6xl xl:p-4">
          Find Your Best Deal Right Now!
        </h2>
      </section>
      <ButtonStyle deals={deals} categorysetting={categorysetting} />
    </section>
  );
};

export default DealHeading;
