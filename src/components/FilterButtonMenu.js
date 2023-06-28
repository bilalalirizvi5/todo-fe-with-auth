import React, { useState } from "react";

import { Menu, MenuItem } from "@mui/material";

import { FilterButton } from "@styledComponents/Filter";

// Icon
import { BsFilter } from "react-icons/bs";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

export const FilterButtonMenu = ({ handleFilter }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (orderBy) => {
    setAnchorEl(null);
    handleFilter(orderBy);
  };

  return (
    <div>
      <FilterButton
        variant="contained"
        startIcon={<BsFilter />}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Filter By
      </FilterButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          sx={{ fontSize: "13px" }}
          onClick={() => handleClose("Not Started")}
        >
          <FaLongArrowAltDown /> &nbsp; Not Started
        </MenuItem>
        <MenuItem
          sx={{ fontSize: "13px" }}
          onClick={() => handleClose("Active")}
        >
          <FaLongArrowAltUp /> &nbsp; Active
        </MenuItem>
        <MenuItem
          sx={{ fontSize: "13px" }}
          onClick={() => handleClose("Paused")}
        >
          <FaLongArrowAltUp /> &nbsp; Paused
        </MenuItem>
        <MenuItem
          sx={{ fontSize: "13px" }}
          onClick={() => handleClose("Completed")}
        >
          <FaLongArrowAltUp /> &nbsp; Completed
        </MenuItem>
        <MenuItem
          sx={{ fontSize: "13px" }}
          onClick={() => handleClose("Dropped")}
        >
          <FaLongArrowAltUp /> &nbsp; Dropped
        </MenuItem>
      </Menu>
    </div>
  );
};
