import imageOne from "../assets/Images/propertiesOne-small.jpg";
import imageTwo from "../assets/Images/propertiesTwo-small.jpg";
import imageThree from "../assets/Images/propertiesThree-small.jpg";
import imageFour from "../assets/Images/propertiesFour-small.jpg";
import imageFive from "../assets/Images/propertiesFive-small.jpg";
import imageSix from "../assets/Images/propertiesSix-small.jpg";

const products = [
  {
    id: 1,
    name: "18 New Street Miami, OR 97219",
    type: "Luxury Villa",
    color: "White and black",
    href: "#",
    imageSrc: imageOne,
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$500.000",
    feauture: {
      Bedrooms: 6,
      Bathrooms: 5,
      Area: 450,
      Floor: 5,
      Parking: 8,
    },
  },
  {
    id: 2,
    name: "54 Mid Street Florida, OR 27001",
    type: "Apartment",
    color: "White and black",
    href: "#",
    imageSrc: imageTwo,
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$250.000",
    feauture: {
      Bedrooms: 6,
      Bathrooms: 5,
      Area: 450,
      Floor: 5,
      Parking: 8,
    },
  },
  {
    id: 3,
    name: "26 Old Street Miami, OR 38540",
    type: "Penthouse",
    color: "White and black",
    href: "#",
    imageSrc: imageThree,
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$390.000",
    feauture: {
      Bedrooms: 4,
      Bathrooms: 3,
      Area: 450,
      Floor: 5,
      Parking: 8,
    },
  },
  {
    id: 4,
    name: "12 New Street Miami, OR 12650",
    type: "Luxury Villa",
    color: "White and black",
    href: "#",
    imageSrc: imageFour,
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$600.000",
    feauture: {
      Bedrooms: 5,
      Bathrooms: 4,
      Area: 480,
      Floor: 4,
      Parking: 7,
    },
  },
  {
    id: 5,
    name: "10 Orlando, OR 12650",
    type: "Luxury Villa",
    color: "White and black",
    href: "#",
    imageSrc: imageFive,
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$550.000",
    feauture: {
      Bedrooms: 6,
      Bathrooms: 5,
      Area: 400,
      Floor: 3,
      Parking: 6,
    },
  },
  {
    id: 6,
    name: "22 New Street Portland, OR 16540",
    type: "Apartment",
    color: "White and black",
    href: "#",
    imageSrc: imageSix,
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$200.000",
    feauture: {
      Bedrooms: 3,
      Bathrooms: 2,
      Area: 200,
      Floor: 1,
      Parking: 1,
    },
  },
  // More products...
];

export default function Properties({ scroll }) {
  const handleClick = () => {
    console.log("Button clicked");
    scroll();
  };
  return (
    <div className="bg-white  mt-24">
      {/* mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 */}
      <div className="   gap-2">
        <span className="flex flex-col items-center justify-center mx-4">
          <h3 className="text-[#f35525] font-bold">|Properties</h3>
          <h2 className="text-4xl  text-gray-900 font-extrabold ">
            We Provide the best Propert you like
          </h2>
        </span>
        <div className="  mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <section className="bg-gray-100 p-8 rounded-md">
              <span className="bg-black w-full">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className=" rounded-md mb-4"
                />
              </span>
              <span className="flex justify-between mb-4">
                <h3 className="bg-red-200 px-3 py-1 rounded-lg">
                  {product.type}
                </h3>
                <p className="font-bold text-[#f35525] text-xl">
                  {product.price}
                </p>
              </span>
              <h2 className="mb-4 font-bold text-lg">{product.name}</h2>
              <ul className="flex flex-wrap gap-4 p-2 ">
                <li>
                  Bedrooms:
                  <span className="font-bold">{product.feauture.Bedrooms}</span>
                </li>
                <li>
                  Bathrooms:
                  <span className="font-bold">
                    {product.feauture.Bathrooms}
                  </span>
                </li>
                <li>
                  Area:
                  <span className="font-bold">{product.feauture.Area}</span>
                </li>
                <li>
                  Floor:
                  <span className="font-bold">{product.feauture.Floor}</span>
                </li>
                <li>
                  Parking:
                  <span className="font-bold">{product.feauture.Parking}</span>
                </li>
              </ul>
              <hr />
              <span className="flex w-full justify-center items-center">
                <button
                  onClick={handleClick}
                  className="bg-black text-white px-8 rounded-xl h-10 text-lg mt-8 hover:bg-[#f35525] "
                >
                  Schedule a visit
                </button>
              </span>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
