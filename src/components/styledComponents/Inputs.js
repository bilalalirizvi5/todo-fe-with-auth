import { styled } from "@mui/system";
import { TextField as MuiTextField, Typography } from "@mui/material";

export const TextField = styled(MuiTextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "&.Mui-focused fieldset": {
      border: "1px solid black",
    },
  },
  "& input::placeholder": {
    fontSize: "14px",
  },
  "& textarea::placeholder": {
    fontSize: "14px",
  },
}));

export const Label = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  color: "black",
}));

export const ErrorText = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  color: "red",
}));

export const AccountText = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  color: "black",
}));

export const LinkText = styled("span")(({ theme }) => ({
  fontSize: "13px",
  color: "blue",
  textDecoration: "underline",
  cursor: "pointer",
}));
