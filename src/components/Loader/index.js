import { Box } from "@mui/material";
import "./styles.css";

export const Loader = () => {
  return (
    <Box className="container">
      <Box className="loader"></Box>
    </Box>
  );
};

export const Progress = () => {
  return <Box component="span" className="loader-small"></Box>;
};
