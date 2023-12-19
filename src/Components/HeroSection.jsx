import { Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import imgone from "../assets/Images/Villaonee.webp";
import imgtwo from "../assets/Images/Buildingone.webp";
import imgthree from "../assets/Images/Villatwo.webp";
//using webp for lighter images size
const HeroSection = () => {
  const images = [imgone, imgtwo, imgthree];
  const Text = [
    [
      `"hurry!
 get the best villa for you"`,
    ],
    [
      `"be quick!
 get the best villa in town"`,
    ],
    [
      `"act now!
 get the highest level penthouse"`,
    ],
  ];
  const textLabel = [
    [" miami,south florida"],
    ["toronto,canada"],
    ["melbourne,Australia"],
  ];

  //   the text element
  const TextRendering = (
    <Typography className="absolute z-50 w-9/12 text-white text-6xl font-extrabold uppercase ">
      <section className="text-xs w-[100px] pr-36 p-1 bg-white text-black whitespace-nowrap lg:w-1/4 lg:py-4 lg:px-1 lg:text-center mb-4">
        {textLabel.map((text, index) => (
          <h3 key={index}>{text[index]}</h3>
        ))}
      </section>
      {Text.map((text, index) => (
        <h2
          key={index}
          className="text-lg md:text-4xl lg:text-6xl font-extrabold w-full lg:w-1/2 "
        >
          {text[index]}
        </h2>
      ))}
    </Typography>
  );

  return (
    <section>
      <Carousel>
        {images.map((img) => (
          <Paper
            key={img}
            className="flex flex-col justify-center items-center w-full  "
          >
            {TextRendering}
            <Typography className=" relative  ">
              {<img fetchpriority="high" src={img} />}
            </Typography>
          </Paper>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
