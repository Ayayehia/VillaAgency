import React, { useEffect } from "react";

const ButtonStyle = ({ categorysetting }) => {
  const deals = ["Apartment", "Villa House", "Penthouse"];

  return (
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
};

export default ButtonStyle;
