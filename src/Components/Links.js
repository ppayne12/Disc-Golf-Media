import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

export default function Links(props) {
  let linksJSX = [];
  const roundsJSX = [];

  //build card JSX
  props.descriptions.forEach((element, index) => {
    if (props.links[index] === "") {
      //used to indicated round
      linksJSX.push(<Grid item key={index} xs={1}>{`${element} -`}</Grid>);
    } else if (props.links[index] === " ") {
      //used if uneven number of links
      linksJSX.push(<Grid item key={props.links[index]} xs={1}></Grid>);
    } else {
      //otherwise populate description with link
      linksJSX.push(
        <Grid item key={props.links[index]} xs={1}>
          <Link
            href={`${props.links[index]}`}
            target="_blank"
            rel="noopener"
            sx={{ pr: "10px" }}
          >
            {element}
          </Link>
        </Grid>
      );
    }
    if (index % 3 === 2) {
      roundsJSX.push(
        <Grid
          container
          key={index}
          spacing={1}
          justifyContent="space-evenly"
          sx={{ textAlign: "center" }}
          columns={3}
        >
          {linksJSX}
        </Grid>
      );
      linksJSX = [];
    }
  });

  return (
    <Typography component={"span"} variant="body2" color="text.secondary">
      {roundsJSX}
    </Typography>
  );
}
