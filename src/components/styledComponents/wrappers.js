import { styled } from "@mui/system";
import { Box } from "@mui/material";
import bgImg from "@images/bg.jpeg";

export const AuthContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.bgColor.main,
  padding: "20px",
  background: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

export const AuthBox = styled(Box)(({ theme }) => ({
  width: "400px",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  borderRadius: "8px",
  padding: "40px 20px",
  boxShadow: "0px 0px 20px rgb(0,0,0)",
  backgroundColor: theme.palette.dark.main,
  border: "2px solid",
  borderColor: theme.palette.border.main2,
  [theme.breakpoints.down("xs")]: {
    width: "100%",
  },
}));

export const InputWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
}));
