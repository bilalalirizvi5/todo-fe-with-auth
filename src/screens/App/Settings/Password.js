import React, { useState } from "react";
import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { InputWrapper } from "@styledComponents/wrappers";
import { ErrorText, Label, TextField } from "@styledComponents/Inputs";
import { updateUser } from "@redux/services/setting";

const Password = () => {
  const { loading } = useSelector((state) => state.setting);
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

  const handleClick = async () => {
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
    await updateUser({ password });
  };

  return (
    <>
      <Typography mb={5} variant="h5" sx={{ color: "text.main" }}>
        Edit Password
      </Typography>
      <InputWrapper mb={2}>
        <Label>Password</Label>
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
        <Label>Confirm Password</Label>
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
          onClick={loading ? () => {} : handleClick}
          variant="contained"
          sx={{ width: "150px" }}
        >
          {loading && <CircularProgress size={15} color={"text"} />} &nbsp; Save
        </Button>
      </Stack>
    </>
  );
};

export default Password;
