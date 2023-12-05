import React, { Fragment } from "react";

const ApartmentInfo = () => {
  const Apartment = [
    { text: "Total Flat Space", number: 185 + "m2" },
    { text: "Floor Number", number: 26 + "th" },
    { text: "Number of Rooms", number: 4 },
    { text: "Parking Available", number: "yes" },
    { text: "payment Process", number: "Bank" },
  ];
  return Apartment.map((item) => (
    <Fragment key={item.number}>
      <ul className="flex justify-between py-9  ">
        <li className="text-gray-400 w-10/12 whitespace-nowrap md:text-xl lg:text-2xl xl:text-4xl">
          {item.text}
        </li>
        <li className="font-extrabold md:text-xl lg:text-2xl xl:text-4xl">
          {item.number}
        </li>
      </ul>
      <hr className="text-gray-400" />
    </Fragment>
  ));
};

export default ApartmentInfo;
