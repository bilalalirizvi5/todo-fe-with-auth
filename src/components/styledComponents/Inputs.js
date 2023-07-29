import { styled } from "@mui/system";
import { TextField as MuiTextField, Typography } from "@mui/material";

export const TextField = styled(MuiTextField)(({ theme }) => ({
  // "& fieldset": {
  //   backgroundColor: theme.palette.dark.main3,
  // },
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "&.Mui-focused fieldset": {
      border: "1px solid #fff !important",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.textGray.main,
    },
  },
  "& input::placeholder": {
    fontSize: "14px",
  },
  "& textarea::placeholder": {
    fontSize: "14px",
  },
  "& input": {
    color: "#fff",
    backgroundColor: theme.palette.dark.main3,
    borderRadius: "8px",
  },
}));

export const Label = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  color: theme.palette.textGray.main,
  marginBottom: "3px",
}));

export const ErrorText = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  color: "red",
  marginTop: "3px",
}));

export const AccountText = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  color: theme.palette.text.main,
}));

export const LinkText = styled("span")(({ theme }) => ({
  fontSize: "13px",
  color: theme.palette.primary.main,
  textDecoration: "underline",
  cursor: "pointer",
  fontWeight: 600,
}));
