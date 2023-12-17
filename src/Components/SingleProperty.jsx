import Image from "../assets/Images/Villaone-small.jpg";

const SingleProperty = () => {
  return (
    <section className="flex flex-col justify-around items center">
      <img src={Image} className="w-full p-4 h-[343px]" />
      <article className="p-4">
        <h3 className="bg-red-200 w-32 px-3 py-1 rounded-lg">Apartment</h3>
        <h2 className="font-bold text-xl">24 New Street Miami Or 2456</h2>
        <p>
          Lorem ipsum <span className=" font-bold">dolor sit</span>, amet
          consectetur adipisicing elit. Adipisci, maiores tenetur commodi aut,
          voluptates
          <span className="text-blue-400">
            corporis nemo sequi nulla libero
          </span>
          , quod dolores. Esse aliquid, aliquam eaque dolore obcaecati incidunt
          non nesciunt.
        </p>
      </article>
    </section>
  );
};

export default SingleProperty;
