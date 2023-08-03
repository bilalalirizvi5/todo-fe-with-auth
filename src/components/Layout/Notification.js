import { Box, Menu, Stack, Typography } from "@mui/material";
import * as React from "react";
import { FaBell, FaCircle } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { IoCheckmarkDone } from "react-icons/io5";

const Notification = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <FaBell
        onClick={handleClick}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        size={25}
        color={"#fff"}
        style={{ cursor: "pointer" }}
      />
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={paperProps}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={{
          "& ul": {
            padding: 0,
          },
        }}
      >
        <Box sx={{ width: "340px" }}>
          <Stack
            px={3}
            py={2}
            justifyContent={"space-between"}
            direction={"row"}
            alignItems={"center"}
          >
            <Typography variant="h6" sx={{ lineHeight: 1 }}>
              Notification
            </Typography>
            <Typography variant="p" sx={{ lineHeight: 1, color: "#0074f3" }}>
              <IoCheckmarkDone size={20} style={{ marginBottom: "-4px" }} />{" "}
              Mark as Read
            </Typography>
          </Stack>
          <Box px={2}>
            {/* CARD */}
            {["", "", "", ""]?.map(() => {
              return (
                <Stack
                  py={1}
                  px={1}
                  direction={"row"}
                  spacing={1}
                  sx={{
                    borderBottom: "1px solid rgb(230,230,230)", "&:hover": {
                      backgroundColor: "rgb(230,230,230)"
                    }
                  }}
                >
                  <FaCircle
                    color={"#0074f3"}
                    size={12}
                    style={{ marginTop: "4px" }}
                  />
                  <Stack sx={{ flex: 1 }}>
                    <Typography sx={{ lineHeight: 1.3 }}>
                      Your paswword has been successfully changed!
                    </Typography>
                    <Typography sx={{ color: "gray", fontSize: "13px" }}>
                      Aug 3, 2023 at 04:02 PM
                    </Typography>
                  </Stack>
                  <Stack
                    sx={{ width: "40px" }}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#0074f3",
                      }}
                    >
                      <FiLock size={18} color={"#fff"} />
                    </Box>
                  </Stack>
                </Stack>
              );
            })}
          </Box>
          <Stack px={3}>
            <Stack py={2}>
              <Typography variant="p" sx={{ lineHeight: 1, color: "#0074f3" }}>
                View all notification
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Menu>
    </React.Fragment>
  );
};

// const styles = {
//   notifcationCard:{}
// }

const paperProps = {
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
};

export default Notification;
