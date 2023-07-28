import React from "react";

import styles from "./styles";

import { Box, Typography, Stack } from "@mui/material";

import { NavLink } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";

const Navlink = ({ to, name, icon, count }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active" : "inactive")}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={styles.linkBox}
      >
        <Stack direction="row" alignItems="center">
          <Stack sx={{ width: "30px" }}>{icon}</Stack>
          <Typography sx={styles.linkText}>{name}</Typography>
        </Stack>
        <Box sx={styles.activeShow} className="show">
          <BsArrowRight size={18} />
        </Box>
      </Stack>
    </NavLink>
  );
};

export default Navlink;
