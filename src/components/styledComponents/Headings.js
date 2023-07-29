import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const AuthHeading = styled(Box)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "20px",
  marginTop: "15px",
  color: theme.palette.text.main,
}));
