import React, { useState } from "react";

import styles from "./styles";

import { Box, Typography, Stack, Dialog } from "@mui/material";

import { StatusButton } from "@components";

const UpdateStatus = ({ status }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const handleStatusUpdate = (value) => {
    console.log(value);
  };

  return (
    <div>
      <StatusButton status={status} onClick={handleOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={"body"}
        sx={styles.dialog}
      >
        <Box sx={styles.dialogBox}>
          <Stack
            px={4}
            pt={4}
            pb={2}
            sx={{ borderBottom: "1px solid #E2E2E2" }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={styles.heading}
            >
              Update Status
            </Typography>
          </Stack>

          <Box sx={styles.statusBox} px={{ xs: 2, sm: 4 }} py={4}>
            {["Not Started", "Active", "Paused", "Completed", "Dropped"].map(
              (v, i) => {
                return (
                  status !== v && (
                    <StatusButton
                      key={i}
                      status={v}
                      onClick={() => handleStatusUpdate(v)}
                    />
                  )
                );
              }
            )}
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};

export default UpdateStatus;
