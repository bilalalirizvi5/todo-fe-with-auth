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
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Icon
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch, FiSettings } from "react-icons/fi";
import { TfiBell } from "react-icons/tfi";
import { AiOutlineHome } from "react-icons/ai";

import logo from "../../assets/images/logo.png";

// Component
import ProfileMenu from "./ProfileMenu";
import Navlink from "./Navlink";

const drawerWidth = 260;

export const Layout = (props) => {
  const { window, children } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <div>
      <Box mb={3} sx={styles.logoBox}>
        <img src={logo} alt="Logo" style={{ width: "25px" }} />
        &nbsp;
        <Typography>Task Management</Typography>
      </Box>
      <Box>
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
            <Stack direction="row" alignItems="center" spacing={3}>
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
                  <Box sx={styles.headerIcon}>
                    <FiSettings color="#64748B" />
                  </Box>
                </Badge>
                <Badge
                  color="error"
                  variant="dot"
                  invisible={false}
                  overlap="circular"
                >
                  <Box sx={styles.headerIcon}>
                    <TfiBell color="#64748B" />
                  </Box>
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
