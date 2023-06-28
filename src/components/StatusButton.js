import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

export const StatusButton = ({ loading = false, status, onClick }) => {
  const getColor = (key) => {
    let color = {
      "not started": "#f0f1f2",
      active: "#acfab3",
      paused: "#fae3ac",
      completed: "#ff9c9c",
      dropped: "#9daaf5",
    };
    return color[key?.toLowerCase()];
  };
  return (
    <Box
      component="button"
      sx={{
        ...styles.statusBtn,
        backgroundColor: getColor(status),
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
