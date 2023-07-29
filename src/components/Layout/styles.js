const styles = {
  logo: {
    width: "100px",
    height: "auto",
  },
  linkBox: {
    width: "100%",
    paddingLeft: "15px",
    paddingRight: "6px",
    height: "45px",
    border: "1px solid transparent",
    "&:hover": {
      backgroundColor: "dark.main2",
      borderTopRightRadius: "30px",
      borderBottomRightRadius: "30px",
      border: `1px solid`,
      borderColor: "primary.main",
      borderLeft: "1px solid transparent",
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
    lineHeight: "normal",
  },
  navlinkIcon: {
    color: "#fff",
    fontSize: "20px",
  },
  activeShow: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "primary.main",
    color: "white",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "dark.main3",
    height: "35px",
    width: "300px",
    border: "1px solid",
    borderColor: "border.main2",
    borderRadius: "10px",
    marginLeft: { xs: "0px", md: "40px" },
    display: { xs: "none", sm: "flex" },
  },
  searchInput: {
    width: "100%",
    paddingInline: "10px",
    "& input": {
      color: "text.main",
    },
    "& input::placeholder": {
      fontSize: "14px",
      color: "textGray.main !important",
    },
  },
  searchIcon: {
    color: "#FFFFFF80",
    fontSize: "18px",
    marginLeft: "10px",
  },

  sideBarBody: {
    width: "100%",
    height: "calc(100vh - 195px)",
    overflowY: "auto",
    paddingTop: "24px",
  },

  sideBarFooter: {
    width: "100%",
    height: "130px",
    paddingInline: "20px",
  },
  sideBarFooterTop: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    paddingTop: "20px",
    borderTop: "3px solid",
    borderTopColor: "border.main2",
    alignItems: "center",
  },
  sideBarFooterTextBox: {
    width: "calc(100% - 55px)",
  },
  sideBarFooterText1: {
    color: "text.main",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: 600,
    lineHeight: 1,
    marginBottom: "3px",
  },
  sideBarFooterText2: {
    color: "textGray.main",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "12px",
    lineHeight: 1,
  },
  sideBarFooterButton: {
    marginLeft: "55px",
    marginTop: "5px",
    height: "27px",
    textTransform: "initial",
    letterSpacing: "0.5px",
    fontWeight: 600,
  },
};

export default styles;
