import { styled } from "@mui/system";
import { Box, Button } from "@mui/material";

export const FilterBox = styled(Box)(({ theme }) => ({
  background: "#FFFFFF",
  border: "1px solid #E4E4E7",
  borderRadius: "9px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingInline: "10px",
  paddingBlock: "8px",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

export const FilterButton = styled(Button)(({ theme }) => ({
  marginLeft: "30px",
  height: "35px",
  background: "#FFFFFF",
  border: "1px solid #D0D5DD",
  boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
  borderRadius: "8px",
  fontWeight: 500,
  fontSize: "13px",
  color: "#344054",
  textTransform: "initial",
  "&:hover": {
    background: "#FFFFFF",
    boxShadow: "none",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
