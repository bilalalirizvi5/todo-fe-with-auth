import { styled } from "@mui/system";
import { Button as MuiButton } from "@mui/material";

export const Button = styled(MuiButton)(({ theme }) => ({
  textTransform: "initial",
  width: "100%",
  borderRadius: "8px",
  boxShadow: "none",
  height: "40px",
  fontWeight: "bold",
  "&.Mui-disabled": {
    backgroundColor: theme.palette.primary.main,
    color: "rgb(220,220,220)",
  },
  "&:hover": {
    boxShadow: "none",
  },
}));
