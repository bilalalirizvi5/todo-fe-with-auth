import React, { useState } from "react";

import { Box, Menu, MenuItem } from "@mui/material";

import { FilterButton } from "@styledComponents/Filter";

// Icon
import { BsFilter } from "react-icons/bs";

import { getStatusColor } from "@utils";

export const FilterButtonMenu = ({ handleFilter }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (filterBy) => {
    setAnchorEl(null);
    handleFilter(filterBy);
  };

  const Dot = ({ status }) => {
    return (
      <Box
        component="span"
        sx={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: getStatusColor(status),
          marginRight: "10px",
        }}
      ></Box>
    );
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
        {[
          "All Todo",
          "Not Started",
          "Active",
          "Paused",
          "Completed",
          "Dropped",
        ].map((v) => {
          return (
            <MenuItem
              key={v}
              sx={{ fontSize: "13px" }}
              onClick={() => handleClose(v)}
            >
              <Dot status={v} /> {v} &nbsp;&nbsp;&nbsp;
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};
