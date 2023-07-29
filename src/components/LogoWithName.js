import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../assets/images/logo.png";

export const LogoWithName = ({ height }) => {
  const logoBox = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: height ? height : "65px",
    "& > p": {
      color: "primary.main",
      fontWeight: "600",
      fontSize: "18px",
    },
  };

  return (
    <Box sx={logoBox}>
      <img src={logo} alt="Logo" style={{ width: "25px" }} />
      &nbsp;
      <Typography>Task Management</Typography>
    </Box>
  );
};
