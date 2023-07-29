import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { InputWrapper } from "@styledComponents/wrappers";
import { ErrorText, Label, TextField } from "@styledComponents/Inputs";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const EmailAddress = () => {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    let newEmail = email.trim().toLowerCase();
    let oldEmail = localStorage.getItem("email").toLowerCase();
    if (newEmail !== oldEmail) {
      if (validateEmail(newEmail)) {
        // dispatch(
        //   updateEmail({
        //     email: newEmail,
        //     docId: authState.docId,
        //   })
        // );
      } else {
        newEmail === ""
          ? setMessage("Please fill the text field")
          : setMessage("Invalid email address");
        setEmailError(true);
      }
    } else {
      setMessage("Matched email");
      setEmailError(true);
    }
  };

  return (
    <>
      <Typography mb={5} variant="h5" sx={{ color: "text.main" }}>
        Edit Email Address
      </Typography>
      <InputWrapper>
        <Label>Enter email address</Label>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
        />
        {emailError && <ErrorText>{message}</ErrorText>}
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

export default EmailAddress;
