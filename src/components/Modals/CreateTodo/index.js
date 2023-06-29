import React, { useState } from "react";

import styles from "./styles";

import {
  Box,
  Typography,
  Stack,
  Grid,
  Dialog,
  CircularProgress,
} from "@mui/material";

// Component
import { Button } from "@styledComponents/Buttons";
import { InputWrapper } from "@styledComponents/wrappers";
import { ErrorText, Label, TextField } from "@styledComponents/Inputs";
import { SelectBox } from "@components";

import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";

const CreateTodo = () => {
  const { loading } = useSelector((state) => state.todo);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const createStaffSchema = Yup.object().shape({
    todo: Yup.string().trim().required("Required"),
    description: Yup.string().trim().required("Required"),
    status: Yup.string().required("Required"),
    dueDate: Yup.string().required("Required"),
  });

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      todo: "",
      description: "",
      status: "",
      dueDate: moment(),
    },
    validationSchema: createStaffSchema,
    onSubmit: (values) => {
      _createTodo(values);
    },
  });

  const _createTodo = async (values) => {};

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Create Todo
      </Button>
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
              Create Todo
            </Typography>
          </Stack>
          <Box
            component="form"
            autoComplete="off"
            sx={{ width: "100%" }}
            px={{ xs: 2, sm: 4 }}
            pb={4}
            pt={5}
            onSubmit={handleSubmit}
          >
            <Grid
              container
              columnSpacing={{ xs: 0, sm: 0, md: 4 }}
              rowSpacing={1}
            >
              <Grid item xs={12} sm={12} md={6}>
                <InputWrapper>
                  <Label>Todo</Label>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    name="todo"
                    value={values.todo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Todo here"
                  />
                  {errors.todo && touched.todo && errors.todo && (
                    <ErrorText>{errors.todo}</ErrorText>
                  )}
                </InputWrapper>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <InputWrapper>
                  <Label>Description</Label>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Description here"
                  />
                  {errors.description &&
                    touched.description &&
                    errors.description && (
                      <ErrorText>{errors.description}</ErrorText>
                    )}
                </InputWrapper>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <InputWrapper>
                  <Label>Status</Label>
                  <SelectBox
                    name="status"
                    data={[
                      { value: "Not Started", label: "Not Started" },
                      { value: "Active", label: "Active" },
                      { value: "Paused", label: "Paused" },
                      { value: "Dropped", label: "Dropped" },
                    ]}
                    value={values.status}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.status && touched.status && errors.status && (
                    <ErrorText>{errors.status}</ErrorText>
                  )}
                </InputWrapper>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <InputWrapper>
                  <Label>Due Date</Label>
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <MobileDatePicker
                      disablePast
                      closeOnSelect={true}
                      format="DD-MMMM-YYYY"
                      name="dueDate"
                      value={values.dueDate}
                      onChange={(date) => setFieldValue("dueDate", date)}
                      sx={{
                        "& .MuiInputBase-root": {
                          borderRadius: "8px",
                          height: "40px",
                        },
                        "& .MuiOutlinedInput-notChedOutline": {
                          border: "1px solid black !important",
                        },
                      }}
                    />
                  </LocalizationProvider>
                  {errors.dueDate && touched.dueDate && errors.dueDate && (
                    <ErrorText>{errors.dueDate}</ErrorText>
                  )}
                </InputWrapper>
              </Grid>
            </Grid>
            <Box mt={2} sx={{ textAlign: { xs: "center", sm: "right" } }}>
              <Button
                variant="contained"
                type="submit"
                sx={{ width: { xs: "100%", sm: "max-content" } }}
                disabled={loading ? true : false}
              >
                {loading && (
                  <CircularProgress
                    size={15}
                    sx={{ color: "white", marginRight: "10px" }}
                  />
                )}
                Create
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};

export default CreateTodo;
