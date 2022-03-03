import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import SimpleAccordion from "./SimpleAccordion";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import theme from "../Theme";
// import Grid from "@mui/material/Grid";

// const hideColumnSM = {
//   display: { md: "table-cell", sm: "none", xs: "none" },
// };

// const hideColumnXS = {
//   display: { sm: "table-cell", xs: "none" },
// };

const UpcomingTournaments = (props) => {
  // const createData = (
  //   startDate,
  //   endDate,
  //   name,
  //   location,
  //   division,
  //   purse,
  //   coverage
  // ) => {
  //   return { startDate, endDate, name, location, division, purse, coverage };
  // };

  // const PopulateTable = (props) => {
  //   return (
  //     <React.Fragment>
  //       {props.rows.map((row) => (
  //         <TableRow key={row.name}>
  //           <TableCell align="center">
  //             {row.startDate.toLocaleDateString("en-US")}
  //           </TableCell>
  //           <TableCell align="center" sx={hideColumnSM}>
  //             {row.endDate.toLocaleDateString("en-US")}
  //           </TableCell>
  //           <TableCell align="center">{row.name}</TableCell>
  //           <TableCell align="center" sx={hideColumnXS}>
  //             {row.location}
  //           </TableCell>
  //           <TableCell align="center" sx={hideColumnSM}>
  //             {row.division}
  //           </TableCell>
  //         </TableRow>
  //       ))}
  //     </React.Fragment>
  //   );
  // };

  // const rows = [
  //   createData(
  //     new Date("April 23, 2021"),
  //     new Date("April 25, 2021"),
  //     "Joe Machens Toyota’s Mid America Open a DGPT Silver Series Event presented by Discraft",
  //     "Columbia, Missouri, United States",
  //     "A"
  //   ),
  //   createData(
  //     new Date("April 08, 2022"),
  //     new Date("April 10, 2022"),
  //     "The Vintage Open a DGPT Silver Series Event",
  //     "Russellville, Arkansas, United States",
  //     "A"
  //   ),
  // ];

  return (
    <div style={props.show ? { display: "block" } : { display: "none" }}>
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
          Upcoming Tournaments
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ textAlign: "center", fontSize: "medium" }}
        >
          Coming Soon!
        </Typography>
      </Box>
      {/* <Grid container spacing={2} columns={1} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h2" align="center" gutterBottom>
            Upcoming Tournaments
          </Typography>
        </Grid>
        <Grid item>
          <TableContainer component={Paper}>
            <Table aria-label="Upcoming Tournaments">
              <TableHead>
                <TableRow sx={{ backgroundColor: theme.palette.primary.light }}>
                  <TableCell align="center">Start Date</TableCell>
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
                </TableRow>
              </TableHead>
              <TableBody>
                <PopulateTable rows={rows}></PopulateTable>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default UpcomingTournaments;
