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
      secondary: "#f5f5f5",
      primary: "rgba(32,32,32,0.87)",
    },
  },
  typography: {
    h3: {
      lineHeight: 0.8,
      fontWeight: 400,
      fontFamily: "Inter",
    },
    fontFamily: "Inter",
    h6: {
      fontFamily: "Inter",
      fontWeight: 500,
      textTransform: "uppercase",
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
    },
  },
});

export default theme;
