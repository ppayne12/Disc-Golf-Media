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
  const [filter, setFilter] = React.useState({
    Jomez: false,
    GateKeeper: false,
    GKPro: false,
    AceRunPro: false,
    NT: false,
    A: false,
    B: false,
  });
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleFilterToggle = (e) => {
    e.preventDefault();
    let updatedFilter;
    if (e.currentTarget.id === "Clear") {
      updatedFilter = {
        Jomez: false,
        GateKeeper: false,
        GKPro: false,
        AceRunPro: false,
        NT: false,
        A: false,
        B: false,
      };
    } else {
      updatedFilter = { ...filter };
      updatedFilter[e.currentTarget.id] = !filter[e.currentTarget.id];
    }
    setFilter((filter) => ({
      ...updatedFilter,
    }));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header handleDrawerToggle={handleDrawerToggle} />

        <SideBar
          handleDrawerToggle={handleDrawerToggle}
          handleFilterToggle={handleFilterToggle}
          mobileOpen={mobileOpen}
          container={container}
          drawerWidth={drawerWidth}
          filter={filter}
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
            <TournamentCoverage />
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
