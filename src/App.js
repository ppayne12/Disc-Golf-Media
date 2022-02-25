import * as React from "react";
import PropTypes from "prop-types";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import UpcomingTournaments from "./Components/UpcomingTournaments";
import theme from "./Theme";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import TournamentCoverage from "./Components/TournamentCoverage";

const drawerWidth = 200;

const App = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [divisionFilter, setDivisionFilter] = React.useState({
    NT: false,
    A: false,
    B: false,
  });
  const [channelFilter, setChannelFilter] = React.useState({
    Jomez: false,
    GateKeeper: false,
    GKPro: false,
    AceRunPro: false,
  });
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDivisionFilterToggle = (e) => {
    e.preventDefault();
    let updatedFilter = { ...divisionFilter };
    updatedFilter[e.currentTarget.id] = !divisionFilter[e.currentTarget.id];
    setDivisionFilter((divisionFilter) => ({
      ...updatedFilter,
    }));
  };

  const handleChannelFilterToggle = (e) => {
    e.preventDefault();
    let updatedFilter = { ...channelFilter };
    updatedFilter[e.currentTarget.id] = !channelFilter[e.currentTarget.id];
    setChannelFilter((channelFilter) => ({
      ...updatedFilter,
    }));
  };

  const handleClearFilter = (e) => {
    e.preventDefault();
    setChannelFilter((channelFilter) => ({
      Jomez: false,
      GateKeeper: false,
      GKPro: false,
      AceRunPro: false,
    }));
    setDivisionFilter((divisionFilter) => ({
      NT: false,
      A: false,
      B: false,
    }));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header handleDrawerToggle={handleDrawerToggle} />

        <SideBar
          handleDrawerToggle={handleDrawerToggle}
          handleDivisionFilterToggle={handleDivisionFilterToggle}
          handleChannelFilterToggle={handleChannelFilterToggle}
          handleClearFilter={handleClearFilter}
          mobileOpen={mobileOpen}
          container={container}
          drawerWidth={drawerWidth}
          divisionFilter={divisionFilter}
          channelFilter={channelFilter}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            backgroundColor: grey[50],
          }}
        >
          <Toolbar />
          <main>
            <TournamentCoverage
              divisionFilter={divisionFilter}
              channelFilter={channelFilter}
            />
          </main>
          {/* <UpcomingTournaments /> */}

          <Toolbar />
          <Footer />
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default App;
