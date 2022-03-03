import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Icon,
  Typography,
  MenuItem,
  Grid,
} from "@mui/material";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import MenuIcon from "@mui/icons-material/Menu";

const Header = (props) => {
  const handleDrawerToggle = props.handleDrawerToggle;
  const menuStyle = {
    mt: 3,
    p: "6px",
    "@media (min-width:600px)": {
      pr: 3,
      pl: 3,
    },
  };

  const underline = {
    borderBottom: "2px solid white",
  };

  const changeTab = React.useCallback(
    (tab) => {
      console.log(tab);
      props.setTab(tab);
    },
    [props.setTab]
  );
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 2000, //increase to beyond drawer
      }}
    >
      <Toolbar>
        {props.tab === "coverage" ? (
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
        ) : (
          <></>
        )}
        <Icon
          aria-label="Logo"
          fontSize="large"
          color="secondary"
          edge="start"
          sx={
            props.tab === "coverage"
              ? {
                  mr: 2,
                  display: { sm: "block", xs: "none" },
                }
              : { mr: 2 }
          }
        >
          <OndemandVideoIcon fontSize="large" />
        </Icon>
        <Grid container columns={1}>
          <Grid item xs={1}>
            <Typography
              sx={{
                ml: 0,
                mr: 3,
              }}
              variant="h5"
            >
              Disc
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography
              sx={{
                mt: -1,
              }}
              variant="h5"
            >
              Golf
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography
              sx={{
                mt: -1,
              }}
              variant="h5"
            >
              Media
            </Typography>
          </Grid>
        </Grid>
        <MenuItem
          sx={
            props.tab === "coverage"
              ? { ...menuStyle, ...underline }
              : menuStyle
          }
          key="coverage"
          onClick={() => changeTab("coverage")}
        >
          <Typography
            variant="h4"
            sx={props.tab === "coverage" ? { fontWeight: "600" } : {}}
            textAlign="center"
          >
            Coverage
          </Typography>
        </MenuItem>
        <MenuItem
          sx={
            props.tab === "upcoming"
              ? { ...menuStyle, ...underline }
              : menuStyle
          }
          key="upcoming"
          onClick={() => changeTab("upcoming")}
        >
          <Typography
            variant="h4"
            sx={props.tab === "upcoming" ? { fontWeight: "600" } : {}}
            textAlign="center"
          >
            Upcoming
          </Typography>
        </MenuItem>
        <MenuItem
          sx={
            props.tab === "about" ? { ...menuStyle, ...underline } : menuStyle
          }
          key="about"
          onClick={() => changeTab("about")}
        >
          <Typography
            variant="h4"
            sx={props.tab === "above" ? { fontWeight: "600" } : {}}
            textAlign="center"
          >
            About
          </Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
