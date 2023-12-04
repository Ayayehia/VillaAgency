import React from "react";

const FactWrapper = () => {
  const numbers = [
    { number: "34", textone: "Buldings", texttwo: "Finished Now" },
    { number: "12", textone: "Years", texttwo: "Experience" },
    { number: "24", textone: "Awards", texttwo: "Won 2023" },
  ];
  return (
    <section className="mt-10 flex flex-col justify-center items-center">
      {numbers.map((element, index) => (
        <section
          key={index}
          className="bg-[#ffeee9] p-6 m-3 rounded-lg w-5/6 flex items-center justify-around"
        >
          <span className="mr-4 text-[#f35525] text-4xl font-black p-1">
            {element.number}
          </span>
          <section className="flex flex-col font-bold gap-1 text-[#1e1e1e]">
            <span>{element.textone}</span>
            <span>{element.texttwo}</span>
          </section>
        </section>
      ))}
    </section>
  );
};

export default FactWrapper;
