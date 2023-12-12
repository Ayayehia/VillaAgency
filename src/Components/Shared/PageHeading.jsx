import React from "react";

const PageHeading = ({ tagline, title, image }) => {
  return (
    <section>
      <img className="w-full absolute h-[230px] grayscale" src={image} />
      <article className="relative  z-20 flex flex-col items-center justify-center h-full mt-20">
        <span className="bg-white text-black p-2 ">{tagline}</span>
        <h2 className="font-black text-3xl text-white">{title}</h2>
      </article>
    </section>
  );
};

export default PageHeading;
