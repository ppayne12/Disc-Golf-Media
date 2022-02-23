import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Links from "./Links";
import Jomez from "../images/jomez.png";
import GateKeeper from "../images/gatekeeper.png";
import AceRunPro from "../images/acerunpro.png";
import GKPro from "../images/gkpro.webp";
import CHSports from "../images/chsport.jpeg";
import * as FirestoreService from "../Services/Firestore";
import PublicIcon from "@mui/icons-material/Public";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function TournamentCard(props) {
  const images = {
    Jomez,
    AceRunPro,
    GateKeeper,
    GKPro,
    CHSports,
  };

  const [expanded, setExpanded] = React.useState(false);
  const [channels, setChannels] = React.useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await FirestoreService.getCoverage(props.id);
      let objArray = [];
      data.forEach((snap) => {
        let obj = snap.data();
        obj.id = snap.id;
        objArray.push(obj);
      });
      handleAdd(objArray);
    };

    fetchData().catch(console.error);
  }, [props.id]);

  const handleAdd = (channel) => {
    setChannels((channels) => [...channels, ...channel]);
  };

  const cardHeaderColor = (date) => {
    if (date.toDate().getFullYear() <= 2021) {
      return "rgba(5,60,94,0.25)";
    } else {
      return "rgba(0,173,104,0.5)";
    }
  };

  const avatarColor = (division) => {
    switch (division) {
      case "A":
        return "#723C70";
      case "B":
        return "#0091AD";
      case "NT":
        return "#db222a";
      default:
        return "#523D73";
    }
  };

  const cardActions = (
    <CardActions disableSpacing>
      <Typography component={"span"} variant="h3">
        Other Cards
      </Typography>

      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
  );

  return (
    <Card sx={{ minWidth: 290 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: `${avatarColor(props.division)}` }}
            aria-label="division"
          >
            {props.division}
          </Avatar>
        }
        title={props.name}
        subheader={
          <div>
            {props.dates}
            <br />
            <Grid container columns={3} sx={{ alignItems: "center" }}>
              <Grid item xs={2} sx={{ alignItems: "center" }}>
                <Typography color="text.secondary" variant="subtitle2">
                  <PublicIcon
                    sx={{ verticalAlign: "middle" }}
                    fontSize="small"
                    style={{ position: "relative", bottom: "2px" }}
                  />{" "}
                  {props.location}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography
                  color="text.secondary"
                  align="right"
                  variant="subtitle2"
                >
                  <EmojiEventsIcon
                    sx={{ verticalAlign: "middle" }}
                    fontSize="small"
                    style={{ position: "relative", bottom: "2px" }}
                  />{" "}
                  {props.purse}
                </Typography>
              </Grid>
            </Grid>
          </div>
        }
        titleTypographyProps={{ fontWeight: "bold" }}
        sx={{ backgroundColor: cardHeaderColor(props.startdate) }}
      />

      {channels[0] ? (
        <CardContent sx={{ pb: "0px" }}>
          <Typography component={"span"} variant="h3">
            <img
              src={images[channels[0].channel]}
              alt={channels[0].channel}
              style={{ width: "7%", height: "auto" }}
            ></img>{" "}
            {`${channels[0].card}`}{" "}
          </Typography>
          <Links
            descriptions={channels[0].links.descriptions}
            links={channels[0].links.links}
            key={`T${props.id}C${channels[0].id}`}
          ></Links>{" "}
        </CardContent>
      ) : (
        ""
      )}

      {channels[1] ? cardActions : ""}

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {(channels.slice(1) || []).map((snap, index) => (
          <CardContent key={`${snap.channel}`} sx={{ pb: "0px" }}>
            <Typography component={"span"} variant="h3" gutterBottom>
              <img
                src={images[snap.channel]}
                alt={`${snap.channel}`}
                style={{ width: "7%", height: "auto" }}
              ></img>{" "}
              {`${snap.card}`}
            </Typography>
            <Links
              descriptions={snap.links.descriptions}
              links={snap.links.links}
              key={`T${props.id}C${snap.id}`}
            ></Links>
          </CardContent>
        ))}
      </Collapse>
    </Card>
  );
}
