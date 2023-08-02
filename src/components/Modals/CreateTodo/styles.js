const styles = {
  dialog: {
    "& .MuiDialog-paper": {
      margin: "32px 0px !important",
      width: { xs: "100%", sm: "auto", lg: "60%" },
      maxWidth: { xs: "90% !important", sm: "auto", lg: "60%" },
      borderRadius: "12px",
    },
  },
  dialogBox: {
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "12px",
  },
  heading: {
    fontSize: "16px",
    fontWeight: 600,
  },
  mobDatePicker: {
    "& .MuiInputBase-root": {
      borderRadius: "8px",
      height: "40px",
    },
    "& .MuiOutlinedInput-notChedOutline": {
      border: "1px solid black !important",
    },
  },
  input: {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        border: "1px solid #000 !important",
      },
      "&:hover fieldset": {
        borderColor: "#000",
      },
    },
    "& input": {
      color: "black",
      backgroundColor: "#fff",
    },
  },
};

export default styles;
