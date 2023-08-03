import { Avatar, Menu, MenuItem, Stack, Typography } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const STATE = useSelector((state) => state.auth.user);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = (trigger) => {
    setAnchorEl(null);
    if (trigger === "logout") {
      localStorage.clear();
      navigate("/login");
    }
  };

  return (
    <React.Fragment>
      <Stack direction="row" alignItems={"center"} spacing={1}>
        <Typography sx={styles.name}>{STATE?.userName}</Typography>
        <Avatar
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          src={STATE?.photoUrl}
          alt={`${STATE?.userName}`}
          sx={styles.avatar}
        />
      </Stack>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={styles.paperProps}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => handleClose("logout")} sx={{ width: "200px" }}>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

const styles = {
  avatar: {
    width: 35,
    height: 35,
    backgroundColor: "primary.main",
    cursor: "pointer",
  },
  name: {
    textAlign: "right",
    lineHeight: 1,
    fontWeight: 600,
    fontSize: "16px",
    display: { xs: "block", md: "none" },
    width: "max-content",
    color: "text.main",
  },
  paperProps: {
    elevation: 0,
    sx: {
      overflow: "visible",
      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
      mt: 1.5,
      "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: "background.paper",
        transform: "translateY(-50%) rotate(45deg)",
        zIndex: 0,
      },
    },
  },
};

export default ProfileMenu;
