import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const AuthContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.bgColor.main,
}));
