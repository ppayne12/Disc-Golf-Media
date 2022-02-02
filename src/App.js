import * as React from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import { ThemeProvider } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Jomez from "./images/jomez.png";
import GateKeeper from "./images/gatekeeper.png";
import Acerunpro from "./images/acerunpro.png";
import GKpro from "./images/gkpro.webp";
import theme from "./Theme";

import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

const drawerWidth = 200;
const icons = {
  margin: "0 5px",
};

const hideColumnSM = {
  display: { md: "table-cell", sm: "none", xs: "none" },
};

const hideColumnXS = {
  display: { sm: "table-cell", xs: "none" },
};

const App = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const createData = (
    startDate,
    endDate,
    name,
    location,
    division,
    purse,
    coverage
  ) => {
    return { startDate, endDate, name, location, division, purse, coverage };
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

  const PopulateTable = (props) => {
    return (
      <React.Fragment>
        {props.rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell align="center" sx={hideColumnXS}>
              {row.startDate.toLocaleDateString("en-US")}
            </TableCell>
            <TableCell align="center" sx={hideColumnSM}>
              {row.endDate.toLocaleDateString("en-US")}
            </TableCell>
            <TableCell align="center">{row.name}</TableCell>
            <TableCell align="center" sx={hideColumnXS}>
              {row.location}
            </TableCell>
            <TableCell align="center" sx={hideColumnSM}>
              {row.division}
            </TableCell>
            <TableCell align="center" sx={hideColumnSM}>
              {row.purse}
            </TableCell>
            <TableCell align="center">{row.coverage}</TableCell>
          </TableRow>
        ))}
      </React.Fragment>
    );
  };

  const rows = [
    createData(
      new Date("April 23, 2021"),
      new Date("April 23, 2021"),
      "test",
      "test",
      "test",
      "test",
      "test"
    ),
    createData(
      new Date("April 23, 2021"),
      new Date("April 25, 2021"),
      "Joe Machens Toyota’s Mid America Open a DGPT Silver Series Event presented by Discraft",
      "Columbia, Missouri, United States",
      "A",
      31625,
      "link"
    ),
    createData(
      new Date("April 08, 2022"),
      new Date("April 10, 2022"),
      "The Vintage Open a DGPT Silver Series Event",
      "Russellville, Arkansas, United States",
      "A",
      24865,
      "link"
    ),
  ];

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem>
          <Typography variant="h5">Channels</Typography>
        </ListItem>
        <ListItem button key="jomez">
          <img
            src={Jomez}
            alt="Jomez Pro"
            style={{ width: "20%", height: "auto", margin: "5px" }}
          ></img>
          <ListItemText primary="Jomez Productions" />
        </ListItem>
        <ListItem button key="gatekeeper">
          <img
            src={GateKeeper}
            alt="GateKeeper"
            style={{ width: "20%", height: "auto", margin: "5px" }}
          ></img>
          <ListItemText primary="GateKeeper Media" />
        </ListItem>
        <ListItem button key="acerun">
          <img
            src={Acerunpro}
            alt="Ace Run Pro"
            style={{ width: "20%", height: "auto", margin: "5px" }}
          ></img>
          <ListItemText primary="Ace Run Productions" />
        </ListItem>
        <ListItem button key="gk">
          <img
            src={GKpro}
            alt="GK Pro"
            style={{ width: "30%", height: "auto", margin: "5px" }}
          ></img>
          <ListItemText primary="GK Pro" />
        </ListItem>
      </List>
    </div>
  );

  const header = (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 2000, //increase to beyond drawer
      }}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          color="secondary"
          fontSize="large"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon fontSize="large" color="secondary" />
        </IconButton>
        <Icon
          aria-label="Logo"
          fontSize="large"
          color="secondary"
          edge="start"
          sx={{
            mr: 2,
            display: { sm: "block", xs: "none" },
          }}
        >
          <OndemandVideoIcon fontSize="large" />
        </Icon>
        <Typography
          sx={{
            ml: 2,
          }}
          variant="h6"
        >
          Disc Golf Media
        </Typography>
      </Toolbar>
    </AppBar>
  );

  const footer = (
    <footer>
      <Container>
        <Grid container alignItems="center" justifyContent="center">
          <MailIcon sx={icons} fontSize="medium" />

          <InstagramIcon sx={icons} fontSize="medium" />
          <TwitterIcon sx={icons} fontSize="medium" />
        </Grid>
        <Typography variant="subtitle1" align="center">
          <Copyright />
        </Typography>
      </Container>
    </footer>
  );

  const upcoming = (
    <React.Fragment>
      <Typography variant="h5" align="center" gutterBottom>
        Upcoming Tournaments
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="Upcoming Tournaments">
          <TableHead>
            <TableRow sx={{ backgroundColor: theme.palette.primary.light }}>
              <TableCell align="center" sx={hideColumnXS}>
                Start Date
              </TableCell>
              <TableCell align="center" sx={hideColumnSM}>
                End Date
              </TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center" sx={hideColumnXS}>
                Location
              </TableCell>
              <TableCell align="center" sx={hideColumnSM}>
                Division
              </TableCell>
              <TableCell align="center" sx={hideColumnSM}>
                Purse
              </TableCell>
              <TableCell align="center">Coverage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <PopulateTable rows={rows}></PopulateTable>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );

  const past = (
    <React.Fragment>
      <Typography variant="h5" align="center" gutterBottom>
        Past Tournaments
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="Past Tournaments">
          <TableHead>
            <TableRow sx={{ backgroundColor: theme.palette.primary.light }}>
              <TableCell align="center" sx={hideColumnXS}>
                Start Date
              </TableCell>
              <TableCell align="center" sx={hideColumnSM}>
                End Date
              </TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center" sx={hideColumnXS}>
                Location
              </TableCell>
              <TableCell align="center" sx={hideColumnSM}>
                Division
              </TableCell>
              <TableCell align="center" sx={hideColumnSM}>
                Purse
              </TableCell>
              <TableCell align="center">Coverage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <PopulateTable rows={rows}></PopulateTable>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {header}
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
          }}
          aria-label="Channels"
        >
          <Drawer //mobile display
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile according to MUI template.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer //large display
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                padding: "16px",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />

          {upcoming}
          <Toolbar />

          {past}
          <Toolbar />
          {footer}
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default App;
