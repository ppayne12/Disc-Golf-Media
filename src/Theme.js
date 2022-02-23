import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#053c5e",
      light: "rgba(5,60,94,0.25)",
    },
    secondary: {
      main: "#db222a",
    },
    text: {
      secondary: "rgba(32,32,32,0.60)",
      primary: "rgba(32,32,32,0.90)",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 2200,
    },
  },
  typography: {
    fontFamily: "Inter",

    h1: {
      fontWeight: 500,
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      fontSize: "x-large",
    },
    h3: {
      fontSize: "medium",
    },
    h4: {
      fontSize: "medium",
    },
    h5: {
      fontSize: "medium",
      fontWeight: 500,
      textTransform: "uppercase",
    },
    subtitle2: {
      fontWeight: 300,
      fontSize: "medium",
      fontStyle: "italic",
    },
  },
});

export default theme;
