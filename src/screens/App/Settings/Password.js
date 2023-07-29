import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { InputWrapper } from "@styledComponents/wrappers";
import { ErrorText, Label, TextField } from "@styledComponents/Inputs";

const Password = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: "",
  });
  const [confirmPasswordError, setConfirmPasswordError] = useState({
    error: false,
    message: "",
  });
  const dispatch = useDispatch();

  const handleClick = () => {
    if (password.length < 8) {
      setPasswordError({
        error: true,
        message: "Password should be at least 8 characters!",
      });
      return;
    }
    if (confirmPassword.length < 8) {
      setConfirmPasswordError({
        error: true,
        message: "Password should be at least 8 characters!",
      });
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError({
        error: true,
        message: "Passwords do not match",
      });
      return;
    }
    // dispatch(updatePassword(password));
  };

  return (
    <>
      <Typography mb={5} variant="h5" sx={{ color: "text.main" }}>
        Edit Email Address
      </Typography>
      <InputWrapper mb={2}>
        <Label>Enter your name</Label>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          type="text"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError({ ...password, error: false });
          }}
        />
        {passwordError.error && <ErrorText>{passwordError.message}</ErrorText>}
      </InputWrapper>
      <InputWrapper>
        <Label>Enter your name</Label>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          type="text"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setConfirmPasswordError({ ...password, error: false });
          }}
        />
        {confirmPasswordError.error && (
          <ErrorText>{confirmPasswordError.message}</ErrorText>
        )}
      </InputWrapper>
      <Stack mt={10}>
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{ width: "150px" }}
        >
          Save
        </Button>
      </Stack>
    </>
  );
};

export default Password;
