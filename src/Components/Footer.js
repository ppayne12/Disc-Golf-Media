import * as React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const icons = {
  margin: "0 5px",
};

const Copyright = () => {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://www.discgolf.media">
        Disc Golf Media
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
};

const Footer = () => {
  return (
    <footer>
      <Container>
        <Grid container alignItems="center" justifyContent="center">
          <Link href="mailto:paul@discgolf.media">
            <MailIcon sx={icons} fontSize="medium" />
          </Link>
          <Link href="https://www.instagram.com/disgolf.media/" target="_blank">
            <InstagramIcon sx={icons} fontSize="medium" />
          </Link>
          <Link href="https://twitter.com/discgolfmedia" target="_blank">
            <TwitterIcon sx={icons} fontSize="medium" />
          </Link>
        </Grid>
        <Typography variant="subtitle1" align="center">
          <Copyright />
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
