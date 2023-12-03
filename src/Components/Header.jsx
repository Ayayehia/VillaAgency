import { useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

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
          <li className="p-2">home</li>
          <hr />
          <li className="p-2">properties</li>
          <hr />

          <li className="p-2">property detial</li>
          <hr />
          <li className="p-2">contact us</li>
          <hr />
        </ul>
      ) : null}
      <ul className="flex justify-around w-10/12 lg:flex lg:justify-around hidden ">
        <li>home</li>
        <li>properties</li>
        <li> property detial</li>
        <li>contact us</li>

        <section className="relative pl-6 pr-4 hidden lg:block">
          <section className=" absolute w-10 h-10 top-0 left-4 pt-2 rounded-full bg-orange-400 text-center ">
            <CalendarMonthIcon />
          </section>
          <li className="bg-black text-white  px-9  py-2  rounded-full">
            scheule a visit
          </li>
        </section>
      </ul>
    </nav>
  );
};

export default Header;
