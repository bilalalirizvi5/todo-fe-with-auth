import React from "react";

// Icon
import { BsPencil } from "react-icons/bs";
import { TbTrashFilled } from "react-icons/tb";

import { Box } from "@mui/material";

const style = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const EditIcon = ({ onClick }) => {
  return (
    <Box
      sx={{
        ...style,
        backgroundColor: "#EDF0F8",
      }}
      onClick={onClick}
    >
      <BsPencil style={{ color: "#537FE7", fontSize: "12px" }} />
    </Box>
  );
};

const DeleteIcon = ({ onClick }) => {
  return (
    <Box
      sx={{
        ...style,
        backgroundColor: "#F6EAED",
      }}
      onClick={onClick}
    >
      <TbTrashFilled style={{ color: "red", fontSize: "14px" }} />
    </Box>
  );
};

export { EditIcon, DeleteIcon };
