import React from "react";

import { Box, Typography, CircularProgress } from "@mui/material";

import { getStatusColor } from "@utils";

export const StatusButton = ({ loading = false, status, onClick }) => {
  return (
    <Box
      component="button"
      sx={{
        ...styles.statusBtn,
        backgroundColor: getStatusColor(status),
      }}
      onClick={onClick}
    >
      {loading && <CircularProgress size={15} sx={{ color: "black" }} />}
      <Typography sx={styles.statusText}>{status}</Typography>
    </Box>
  );
};

const styles = {
  statusBtn: {
    padding: "6px 0px",
    borderRadius: "20px",
    cursor: "pointer",
    minWidth: "120px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    border: "none",
  },
  statusText: {
    fontSize: "12px",
    color: "black",
    fontWeight: "500",
  },
};
