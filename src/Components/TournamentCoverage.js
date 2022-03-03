import * as React from "react";
import TournamentCard from "./TournamentCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as FirestoreService from "../Services/Firestore";

const TournamentCoverage = (props) => {
  const [TD, setTD] = React.useState([]);

  React.useEffect(() => {
    console.log("retrieved tournament");
    const fetchData = async () => {
      const data = await FirestoreService.getTournaments();
      let objArray = [];
      data.forEach((snap) => {
        let obj = snap.data();
        obj.id = snap.id;
        obj.display = true;
        objArray.push(obj);
      });
      handleAdd(objArray);
    };

    fetchData().catch(console.error);
  }, []);

  const handleAdd = (td) => {
    setTD((TD) => [...TD, ...td]);
  };

  const divisionFiltered = !Object.values(props.divisionFilter).every(
    (element) => element === false
  );

  return (
    <div style={props.show ? { display: "block" } : { display: "none" }}>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        rowSpacing={2}
        columns={{ xs: 1, sm: 2, md: 4, lg: 6, xl: 8, xxl: 12 }}
        justifyContent="center"
      >
        <Grid item key="pageDesc" xs={12}>
          <Box
            sx={{ p: "15px", mb: "15px", justifyContent: "center" }}
            gutterBottom
          >
            <Typography
              component="h1"
              variant="h1"
              color="inherit"
              gutterBottom
              align="center"
            >
              Post-Production Coverage
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ textAlign: "center", fontSize: "medium" }}
            >
              Consolidated links for the latest disc golf pro tour and
              tournament coverage. Coverage can be filtered by channel and tier
              using the side bar. New links will added as they come.
            </Typography>
          </Box>
        </Grid>
        {(TD || []).map((snap) =>
          divisionFiltered && !props.divisionFilter[snap.division] ? (
            ""
          ) : (
            <TournamentCard
              name={snap.name}
              dates={snap.dates}
              division={snap.division}
              location={snap.location}
              purse={snap.purse}
              startdate={snap.startdate}
              id={snap.id}
              key={snap.id}
              channelFilter={props.channelFilter}
            />
          )
        )}
      </Grid>
    </div>
  );
};

export default TournamentCoverage;
