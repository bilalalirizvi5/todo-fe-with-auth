import * as React from "react";
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Stack,
  Avatar,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event, trigger) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    if (trigger === "logout") {
      localStorage.clear();
      navigate("/login");
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Box sx={styles.box}>
          <Stack spacing={0.5}>
            <Typography sx={styles.name}>{userName}</Typography>
            {/* <Typography sx={styles.role}>Admin</Typography> */}
          </Stack>
          {/* <Tooltip title="Account settings"> */}
          <IconButton
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            disableRipple
          >
            <Avatar
              src={"/profile.png"}
              alt={`${userName}`}
              sx={{ width: 45, height: 45 }}
            />
          </IconButton>
          {/* </Tooltip> */}
        </Box>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-end"
          transition
          disablePortal
          sx={{ minWidth: "150px" }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                    {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                    <MenuItem onClick={(e) => handleClose(e, "logout")}>
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
};

export default ProfileMenu;

const styles = {
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  name: {
    color: "black",
    textAlign: "right",
    lineHeight: 1,
    fontWeight: 500,
    fontSize: "16px",
  },
  role: {
    color: "#637381",
    textAlign: "right",
    lineHeight: 1,
    fontWeight: 500,
    fontSize: "12px",
  },
};
