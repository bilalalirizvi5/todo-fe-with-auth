const styles = {
  dialog: {
    "& .MuiDialog-paper": {
      margin: "32px 0px !important",
      width: { xs: "100%", sm: "auto", lg: "auto" },
      maxWidth: { xs: "90% !important", sm: "auto", lg: "auto" },
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
  statusBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    flexWrap: "wrap",
  },
};

export default styles;
