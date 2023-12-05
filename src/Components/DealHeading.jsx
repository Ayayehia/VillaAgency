const DealHeading = ({ deals, categorysetting, category }) => {
  const button = (
    <section className="lg:w-10/12 lg:mt-40 xl:w-5/12 ">
      {deals.map((item) => (
        <button
          onClick={() => console.log(categorysetting(item))}
          key={item}
          className="bg-black text-white p-3 m-2 rounded-md hover:bg-orange-600 md:px-10 lg:mx-3 lg:px-10 lg:py-4 xl:px-20 xl:py-7 xl:text-3xl "
        >
          {item}
        </button>
      ))}
    </section>
  );
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
      {button}
    </section>
  );
};

export default DealHeading;
