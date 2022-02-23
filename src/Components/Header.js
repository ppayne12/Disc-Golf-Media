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
  return (
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
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: { sm: "block", xs: "none" },
          }}
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
          sx={{
            mt: 3,
            borderBottom: "2px solid white",
            p: "4px",

            "@media (min-width:600px)": {
              pr: 3,
              pl: 3,
            },
          }}
          key="coverage"
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "600" }}
            textAlign="center"
          >
            Coverage
          </Typography>
        </MenuItem>
        <MenuItem
          sx={{
            mt: 3,
            p: "4px",
            "@media (min-width:600px)": {
              pr: 3,
              pl: 3,
            },
          }}
          key="coverage"
        >
          <Typography variant="h4" textAlign="center">
            Upcoming
          </Typography>
        </MenuItem>
        <MenuItem
          sx={{
            mt: 3,
            p: "4px",

            "@media (min-width:600px)": {
              pr: 3,
              pl: 3,
            },
          }}
          key="coverage"
        >
          <Typography variant="h4" textAlign="center">
            About
          </Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
