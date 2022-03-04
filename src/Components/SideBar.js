import * as React from "react";
import {
  Box,
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  Typography,
  ListItemText,
} from "@mui/material";
import FilterList from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import Jomez from "../images/jomez.png";
import GateKeeper from "../images/gatekeeper.png";
import Acerunpro from "../images/acerunpro.png";
import GKpro from "../images/gkpro.webp";
import DiscGolfGuy from "../images/discgolfguy.png";

const icons = {
  margin: "0 5px",
};

const SideBar = (props) => {
  const container = props.container;
  const mobileOpen = props.mobileOpen;
  const handleDrawerToggle = props.handleDrawerToggle;
  const drawerWidth = props.drawerWidth;
  const handleDivisionFilterToggle = props.handleDivisionFilterToggle;
  const handleChannelFilterToggle = props.handleChannelFilterToggle;
  const handleClearFilter = props.handleClearFilter;
  const channelFilter = props.channelFilter;
  const divisionFilter = props.divisionFilter;

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem>
          <FilterList sx={icons}></FilterList>
          <Typography variant="h2">Coverage</Typography>{" "}
        </ListItem>

        <ListItem
          selected={divisionFilter["NT"]}
          button
          id="NT"
          onClick={handleDivisionFilterToggle}
        >
          <Avatar sx={{ bgcolor: `#db222a`, mr: "5px" }} aria-label="division">
            NT
          </Avatar>
          <ListItemText primary="National Tour" />
        </ListItem>
        <ListItem
          selected={divisionFilter["A"]}
          button
          id="A"
          onClick={handleDivisionFilterToggle}
        >
          <Avatar sx={{ bgcolor: `#723C70`, mr: "5px" }} aria-label="division">
            A
          </Avatar>
          <ListItemText primary="A Tier" />
        </ListItem>
        <ListItem
          selected={divisionFilter["B"]}
          button
          id="B"
          onClick={handleDivisionFilterToggle}
        >
          <Avatar sx={{ bgcolor: `#0091AD`, mr: "5px" }} aria-label="division">
            B
          </Avatar>
          <ListItemText primary="B Tier" />
        </ListItem>
        <Divider />
        <ListItem
          selected={channelFilter["Jomez"]}
          button
          id="Jomez"
          onClick={handleChannelFilterToggle}
        >
          <img
            src={Jomez}
            alt="Jomez Pro"
            style={{ width: "20%", height: "auto", margin: "5px" }}
          ></img>
          <ListItemText primary="Jomez Productions" />
        </ListItem>
        <ListItem
          selected={channelFilter["GateKeeper"]}
          button
          id="GateKeeper"
          onClick={handleChannelFilterToggle}
        >
          <img
            src={GateKeeper}
            alt="GateKeeper"
            style={{ width: "20%", height: "auto", margin: "5px" }}
          ></img>
          <ListItemText primary="GateKeeper Media" />
        </ListItem>

        <ListItem
          selected={channelFilter["GKPro"]}
          button
          id="GKPro"
          onClick={handleChannelFilterToggle}
        >
          <img
            src={GKpro}
            alt="GK Pro"
            style={{ width: "30%", height: "auto", margin: "5px" }}
          ></img>
          <ListItemText primary="GK Pro" />
        </ListItem>
        <ListItem
          selected={channelFilter["AceRunPro"]}
          button
          id="AceRunPro"
          onClick={handleChannelFilterToggle}
        >
          <img
            src={Acerunpro}
            alt="Ace Run Pro"
            style={{ width: "20%", height: "auto", margin: "5px" }}
          ></img>
          <ListItemText primary="Ace Run Productions" />
        </ListItem>
        <ListItem
          selected={channelFilter["DiscGolfGuy"]}
          button
          id="DiscGolfGuy"
          onClick={handleChannelFilterToggle}
        >
          <img
            src={DiscGolfGuy}
            alt="Disc Golf Guy"
            style={{ width: "20%", height: "auto", margin: "5px" }}
          ></img>
          <ListItemText primary="Disc Golf Guy" />
        </ListItem>
        <Divider />
        <ListItem button id="Clear" onClick={handleClearFilter}>
          <ListItemText primary="Clear Filters" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box
      sx={
        props.tab === "coverage"
          ? {
              width: { sm: drawerWidth },
              flexShrink: { sm: 0 },
            }
          : { display: "none" }
      }
      component="nav"
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
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default SideBar;
