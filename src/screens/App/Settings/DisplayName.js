import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { InputWrapper } from "@styledComponents/wrappers";
import { ErrorText, Label, TextField } from "@styledComponents/Inputs";
// import { CustomButton, TextFieldLabel } from "@components";
// import { updateDisplayName } from "../../redux/actions/settingActions";

const DisplayName = () => {
  const [displayName, setDisplayName] = useState(
    localStorage.getItem("userName")
  );
  const [displayNameError, setDisplayNameError] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    let newName = displayName.trim()?.toLowerCase();
    let oldName = localStorage.getItem("userName").toLowerCase();
    if (newName !== oldName) {
      if (newName !== "") {
        // dispatch(
        //   updateDisplayName({
        //     name: displayName,
        //     docId: authState.docId,
        //   })
        // );
      } else {
        setMessage("Please fill the text field");
        setDisplayNameError(true);
      }
    } else {
      setMessage("Matched name");
      setDisplayNameError(true);
    }
  };

  return (
    <>
      <Typography mb={5} variant="h5" sx={{ color: "text.main" }}>
        Edit Display Name
      </Typography>
      <InputWrapper>
        <Label>Enter your name</Label>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          type="text"
          name="displayName"
          value={displayName}
          onChange={(e) => {
            setDisplayName(e.target.value);
            setDisplayNameError(false);
          }}
        />
        {displayNameError && <ErrorText>{message}</ErrorText>}
      </InputWrapper>
      <Stack mt={10} sx={{ alignSelf: "flex-end !important" }}>
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

export default DisplayName;
