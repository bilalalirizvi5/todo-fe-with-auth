import React from "react";

import styles from "./styles";

import { Box, Typography, Stack } from "@mui/material";

import { NavLink } from "react-router-dom";

const Navlink = ({ to, name, icon, count }) => {
  return (
    <NavLink
      to={to}
      style={{ textDecoration: "none" }}
      className={({ isActive }) => (isActive ? "active" : "")}
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
        {count && (
          <Box sx={styles.count}>
            <Typography>{count}</Typography>
          </Box>
        )}
      </Stack>
    </NavLink>
  );
};

export default Navlink;
