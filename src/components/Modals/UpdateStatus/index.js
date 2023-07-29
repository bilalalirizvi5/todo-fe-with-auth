import React from "react";

import styles from "./styles";

import { Box, Typography, Stack, Dialog } from "@mui/material";

import { StatusButton } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { setStatusModal } from "@redux/slices/modalSlice";
import { updateStatus } from "@redux/services/todo";
import { setStatusId } from "@redux/slices/todoSlice";

const UpdateStatus = ({ status, id }) => {
  const { statusModal } = useSelector((state) => state.modal);
  const {
    createLoading,
    statusId,
    status: statusForLoading,
  } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(setStatusModal(true));
    dispatch(setStatusId(id));
  };
  const handleClose = () => {
    dispatch(setStatusModal(false));
    dispatch(setStatusId(""));
  };

  const handleStatusUpdate = (value) => updateStatus({ status: value }, id);

  return (
    <div>
      <StatusButton status={status} onClick={handleOpen} />
      <Dialog
        open={statusId === id && statusModal}
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
                      onClick={
                        statusForLoading
                          ? () => {}
                          : () => handleStatusUpdate(v)
                      }
                      loading={statusForLoading === v && createLoading}
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
