import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#7F3F5E",
    },
    secondary: {
      main: "#19857b",
    },
    bgColor: {
      main: "F0F2F5",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
