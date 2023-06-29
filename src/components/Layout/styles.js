const styles = {
  logoBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBlock: "20px",
    "& > p": {
      color: "#fff",
      fontWeight: "bold",
      fontStyle: "italic",
      fontSize: "20px",
      textDecoration: "underline",
    },
  },
  logo: {
    width: "100px",
    height: "auto",
  },
  linkBox: {
    width: "100%",
    paddingInline: "15px",
    height: "45px",
    "&:hover": {
      color: "#fff",
      background:
        "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(98, 202, 204, 0.1) 100%)",
      boxShadow: "inset 4px 0px 0px black",
    },
  },
  active: {
    width: "100%",
    paddingInline: "15px",
    height: "45px",
    color: "#fff",
    background:
      "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(98, 202, 204, 0.1) 100%)",
    boxShadow: "inset 4px 0px 0px black",
  },
  linkText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: "16px",
  },
  navlinkIcon: {
    color: "#fff",
    fontSize: "20px",
  },
  count: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "red",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > p": {
      fontSize: "13px",
    },
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: { xs: "flex-end", sm: "space-between" },
    alignItems: "center",
    gap: { xs: "0px", sm: "20px" },
  },
  searchInputBox: {
    height: "35px",
    width: "300px",
    border: "1px solid #AEAEAE",
    borderRadius: "10px",
    marginLeft: { xs: "0px", md: "40px" },
    display: { xs: "none", sm: "flex" },
  },
  searchInput: {
    width: "100%",
    paddingInline: "10px",
    "& input::placeholder": {
      fontSize: "14px",
    },
  },
  searchIcon: { color: "#8A8A8A", fontSize: "18px", marginLeft: "10px" },
  headerIcon: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    background: "#EFF4FB",
    border: "0.5px solid #E2E8F0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
};

export default styles;
