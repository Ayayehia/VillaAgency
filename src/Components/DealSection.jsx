import React, { useState } from "react";
import DealHeading from "./DealHeading";
import DealTable from "./DealTable";
const DealSection = ({ scroll }) => {
  const deals = ["Apartment", "Villa House", "Penthouse"];
  const [category, SetCategory] = useState("Apartment");
  return (
    <main className="bg-gray-100 p-3 rounded-lg m-3">
      <DealHeading
        deals={deals}
        categorysetting={SetCategory}
        category={category}
      />
      <DealTable scroll={scroll} category={category} />
    </main>
  );
};

export default DealSection;
