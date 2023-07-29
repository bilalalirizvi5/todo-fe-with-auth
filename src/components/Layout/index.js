import React from "react";

// Style
import styles from "./styles";

import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  IconButton,
  Stack,
  TextField,
  Badge,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Icon
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch, FiSettings } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import { FaBell } from "react-icons/fa";

// Component
import ProfileMenu from "./ProfileMenu";
import Navlink from "./Navlink";
import { LogoWithName } from "../LogoWithName";

import { useNavigate } from "react-router-dom";

const drawerWidth = 260;

export const Layout = (props) => {
  const { window, children } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  const email = localStorage.getItem("email");

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const drawer = (
    <div>
      <LogoWithName />
      <Box style={styles.sideBarBody}>
        <Navlink
          to="/"
          name={"Home"}
          icon={
            <AiOutlineHome
              style={{
                ...styles.navlinkIcon,
                fontSize: "16px",
                marginBottom: "4px",
              }}
            />
          }
        />
        <Navlink
          to="/settings"
          name={"Settings"}
          icon={
            <FiSettings style={{ ...styles.navlinkIcon, fontSize: "16px" }} />
          }
        />
      </Box>
      <Box sx={styles.sideBarFooter}>
        <Box sx={styles.sideBarFooterTop}>
          <Avatar
            src={"/profile.png"}
            alt={`${userName}`}
            sx={{ width: 45, height: 45, backgroundColor: "primary.main" }}
          />
          <Box sx={styles.sideBarFooterTextBox}>
            <Typography sx={styles.sideBarFooterText1}>{userName}</Typography>
            <Typography sx={styles.sideBarFooterText2}>{email}</Typography>
          </Box>
        </Box>
        <Button
          sx={styles.sideBarFooterButton}
          variant="contained"
          startIcon={<HiOutlineLogout />}
          onClick={logout}
        >
          Logout
        </Button>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* HEADER */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          backgroundColor: theme.palette.dark.main,
          height: "70px",
          boxShadow: "none",
          color: "black",
          borderBottom: `1px solid ${theme.palette.border.main2}`,
        }}
      >
        <Toolbar sx={{ height: "70px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, marginLeft: "0px" }}
          >
            <GiHamburgerMenu
              style={{ fontSize: "25px", color: "#fff", marginRight: "20px" }}
            />
          </IconButton>
          <Box sx={styles.header}>
            <Stack
              direction="row"
              alignItems="center"
              sx={styles.searchInputBox}
            >
              <FiSearch style={styles.searchIcon} />
              <TextField
                variant="standard"
                placeholder="Search.."
                sx={styles.searchInput}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Stack
                direction="row"
                spacing={2}
                sx={{ display: { xs: "none", sm: "flex" } }}
              >
                <Badge
                  color="error"
                  variant="dot"
                  invisible={true}
                  overlap="circular"
                >
                  <FiSettings
                    size={25}
                    color={"#fff"}
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/settings")}
                  />
                </Badge>
                <Badge
                  color="error"
                  variant="dot"
                  invisible={false}
                  overlap="circular"
                >
                  <FaBell
                    size={25}
                    color={"#fff"}
                    style={{ cursor: "pointer" }}
                  />
                </Badge>
              </Stack>
              <ProfileMenu />
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>

      {/* DRAWER */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              backgroundColor: theme.palette.dark.main,
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: `2px solid ${theme.palette.border.main2}`,
            },
          }}
        >
          <Box component="span" onClick={handleDrawerToggle}>
            {drawer}
          </Box>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              backgroundColor: theme.palette.dark.main,
              borderRight: `1px solid ${theme.palette.border.main2}`,
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* PAGES */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          padding: { xs: "24px 10px", sm: "24px 24px" },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: theme.palette.dark.main2,
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {/* ALL PAGES RENDER HERE */}
        {children}
      </Box>
    </Box>
  );
};
