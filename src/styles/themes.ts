import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1a56db",
    },
    background: {
      default: "#111827",
      paper: "#111827",
    },
  },
  typography: {
    h1: {
      fontWeight: "bold",
    },
  },
});

export default theme;
