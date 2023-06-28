import React from "react";
import { Typography, MenuItem } from "@mui/material";
import { TextField } from "@styledComponents/Inputs";

export const SelectBox = (props) => {
  const { data, name, value, onChange, onBlur, border = "#C8C8C8" } = props;

  const selectedLabel = data?.find((option) => option.value === value)?.label;

  return (
    <TextField
      id="select"
      fullWidth
      size="small"
      variant="outlined"
      sx={{
        ...styles.textField,
        // "& fieldset": {
        //   border: `1px solid ${border}`,
        // },
      }}
      select
      InputLabelProps={{ shrink: true }}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      SelectProps={{
        displayEmpty: true,
        renderValue: () => {
          if (!selectedLabel) {
            return <Typography sx={styles.selectText}>Select</Typography>;
          }
          return selectedLabel;
        },
      }}
    >
      <MenuItem value="" disabled>
        <em>Select</em>
      </MenuItem>
      {data?.map(({ value, label }, i) => {
        return (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

const styles = {
  textField: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#fff",
      borderRadius: "8px",
      "&.Mui-focused fieldset": {
        border: "1px solid black",
      },
    },
    "& input::placeholder": {
      fontSize: "14px",
    },
  },
  selectText: {
    fontSize: "14px",
    color: "#A2A2A2",
    marginTop: "2px",
  },
};
