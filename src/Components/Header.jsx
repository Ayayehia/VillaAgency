import { useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Button from "./Ui/Button";
const Header = () => {
  const [visible, SetVisible] = useState(false);

  const menuDropdown = () => {
    SetVisible(!visible);
  };
  console.log(visible, "visible state");
  return (
    <nav className="flex justify-between p-8 bg-white ">
      <h2 className="text-xl font-extrabold tracking-widest uppercase ">
        Villa
      </h2>
      <section className="lg:hidden">
        {visible ? (
          <CloseIcon onClick={menuDropdown} />
        ) : (
          <DensityMediumIcon onClick={menuDropdown} />
        )}
      </section>
      {visible ? (
        <ul className="absolute bg-white w-11/12 top-14 p-8 lg:hidden text-center z-50">
          <li className="p-2 hover:text-orange-600">home</li>
          <hr />
          <li className="p-2 hover:text-orange-600">properties</li>
          <hr />

          <li className="p-2 hover:text-orange-600">property detial</li>
          <hr />
          <li className="p-2 hover:text-orange-600">contact us</li>
          <hr />
        </ul>
      ) : null}
      <ul className="flex justify-around w-10/12 lg:flex lg:justify-around hidden ">
        <li>home</li>
        <li>properties</li>
        <li> property detial</li>
        <li>contact us</li>
        {/* //Addding new feature */}
        <Button />
        {/* //Addding new feature */}
      </ul>
    </nav>
  );
};

export default Header;
