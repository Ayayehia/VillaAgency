import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: "none",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section
      className="p-1 !rounded-xl m-4 mb-12 md:m-8 md:w-10/12 md:p-4 "
      style={{ backgroundColor: "#fafafa" }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          style={{ backgroundColor: "#fafafa" }}
        >
          <Typography>Best Useful Link?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#fafafa" }}>
          <Typography>
            Get the best villa website template in HTML CSS and Bootstrap for
            your business. TemplateMo provides you the
            <a
              className="text-blue-400 p-1"
              href="https://www.google.com/search?q=best+free+css+templates"
            >
              best free CSS templates
            </a>
            in the world. Please tell your friends about it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          style={{ backgroundColor: "#fafafa" }}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography>How Does this work?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#fafafa" }}>
          <Typography>
            Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod
            tempor incididunt ut labore{" "}
            <span className="text-pink-600">consectetur adipiscing elit</span>,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          style={{ backgroundColor: "#fafafa" }}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography>Why is the villa agency the best?</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: "#fafafa" }}>
          <Typography>
            Dolor almesit amet, consectetur adipiscing elit, sed doesn't eiusmod
            tempor incididunt utlabore
            <span className="text-pink-600 p-1"> consectetur adipiscing</span>
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
