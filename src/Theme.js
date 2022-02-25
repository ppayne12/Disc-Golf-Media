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
        fontSize: "1.8rem",
      },
    },
    h2: {
      fontSize: "large",
    },
    h3: {
      fontSize: "medium",
    },
    h4: {
      fontSize: "medium",
      fontWeight: 500,
      "@media (min-width:600px)": {
        fontSize: "large",
      },
    },
    h5: {
      fontSize: "medium",
      fontWeight: 600,
      textTransform: "uppercase",
      "@media (min-width:600px)": {
        fontSize: "large",
      },
    },
    MenuItem: {
      "@media (min-width:600px)": {
        p: 1,
      },
    },
    subtitle2: {
      fontStyle: "italic",
    },
    subtitle: {
      fontWeight: 300,
      fontSize: "medium",
      fontStyle: "italic",
    },
  },
});

export default theme;
