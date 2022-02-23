import * as React from "react";
import TournamentCard from "./TournamentCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import * as FirestoreService from "../Services/Firestore";

const TournamentCoverage = () => {
  const [TD, setTD] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await FirestoreService.getTournaments();
      let objArray = [];
      data.forEach((snap) => {
        let obj = snap.data();
        obj.id = snap.id;
        objArray.push(obj);
      });
      handleAdd(objArray);
    };

    fetchData().catch(console.error);
  }, []);

  const handleAdd = (td) => {
    setTD((TD) => [...TD, ...td]);
  };

  return (
    <Grid
      container
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      rowSpacing={2}
      columns={{ xs: 1, sm: 2, md: 4, lg: 6, xl: 8, xxl: 12 }}
      justifyContent="center"
    >
      <Box sx={{ p: "15px", mb: "15px" }} gutterBottom>
        <Typography
          component="h1"
          variant="h1"
          color="inherit"
          gutterBottom
          align="center"
        >
          Post-Production Coverage
        </Typography>
        <Typography variant="subtitle2" align="center">
          Consolidates links to the latest Disc Golf pro tour and tournament
          coverage. New links will added as they come. Filter by channel and
          tier.
        </Typography>
      </Box>
      {(TD || []).map((snap) => (
        <Grid item xs={2} key={snap.id}>
          <TournamentCard
            name={snap.name}
            dates={snap.dates}
            division={snap.division}
            location={snap.location}
            purse={snap.purse}
            startdate={snap.startdate}
            id={snap.id}
            key={snap.id}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TournamentCoverage;
