import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#af5be9",
    },
    secondary: {
      main: "#19857b",
    },
    bgColor: {
      main: "black",
    },
    dark: {
      main: "#131313",
      main2: "#1c1a1c",
      main3: "rgb(35,35,35)",
    },
    text: {
      main: "#fff",
    },
    textGray: {
      main: "#FFFFFF80",
    },
    border: {
      main: "black",
      main2: "#1e1e1e",
    },
    error: {
      main: red.A400,
    },
  },
});

export const lightTheme = createTheme({
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
