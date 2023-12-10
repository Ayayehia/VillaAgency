import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Button = () => {
  return (
    <section className="relative pl-6 pr-4 hidden lg:block">
      <section className=" absolute w-10 h-10 top-0 left-4 pt-2 rounded-full bg-orange-400 text-center ">
        <CalendarMonthIcon />
      </section>
      <li className="bg-black text-white  px-9  py-2  rounded-full">
        scheule a visit
      </li>
    </section>
  );
};

export default Button;
