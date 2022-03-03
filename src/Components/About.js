import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const About = (props) => {
  return (
    <div style={props.show ? { display: "block" } : { display: "none" }}>
      <Box
        sx={{ p: "15px", mb: "15px", justifyContent: "center" }}
        gutterBottom
      >
        <Typography
          component="h1"
          variant="h1"
          color="inherit"
          gutterBottom
          align="center"
        >
          About
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ textAlign: "center", fontSize: "medium" }}
        >
          Disc Golf Media was created to pull together post-production disc golf
          coverage in one spot. New links and channels will be added over time.
          If you have for a channel to be added please email me. Also, don't
          forget to support the awesome content creators by liking and
          subscribing to videos and through their patreon.
          <br />
          <br />
          Thanks for stopping by!
        </Typography>
      </Box>
    </div>
  );
};

export default About;
