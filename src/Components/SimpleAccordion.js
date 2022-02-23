import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Jomez - Lead Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            R1 F9 <br />
            R1 B9 <br />
            R2 F9 <br />
            R2 B9 <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Gatekeeper Media - Chase Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            R1 F9 <br />
            R1 B9 <br />
            R2 F9 <br />
            R2 B9 <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
