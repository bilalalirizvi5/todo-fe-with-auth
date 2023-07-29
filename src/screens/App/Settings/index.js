import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProfilePicture from "./ProfilePicture";
import DisplayName from "./DisplayName";
import EmailAddress from "./EmailAddress";
import Password from "./Password";

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.text.main,
  "&.Mui-selected": {
    color: "primary.main",
    background: theme.palette.dark.main3,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            paddingY: { xs: 5, sm: 5 },
            paddingX: { xs: 3, sm: 5 },
            width: { sm: "450px" },
            display: "flex",
            // flexDirection: "row",
            // border: "1px solid #fff",
            // flex: 1,
            height: "450px",
          }}
        >
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Settings = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isScreenSize600pxOrSmaller = useMediaQuery(
    theme.breakpoints.down("sm")
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "dark.main",
        display: "flex",
        minHeight: "500px",
        borderRadius: "8px",
        flexDirection: isScreenSize600pxOrSmaller ? "column" : "row",
      }}
    >
      <Tabs
        orientation={isScreenSize600pxOrSmaller ? "horizontal" : "vertical"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Horizontal tabs example"
        sx={{
          borderBottom: 2,
          borderColor: "border.main2",
          width: { xs: "100%", sm: "auto" },
        }}
        TabIndicatorProps={{ sx: { background: "primary.main" } }}
      >
        <StyledTab
          sx={{
            textTransform: "initial",
            padding: "0px 30px",
            borderTopLeftRadius: "8px",
          }}
          label="Profile Picture"
          {...a11yProps(0)}
        />
        <StyledTab
          sx={{ textTransform: "initial" }}
          label="Display Name"
          {...a11yProps(1)}
        />
        <StyledTab
          sx={{ textTransform: "initial" }}
          label="Email Address"
          {...a11yProps(2)}
        />
        <StyledTab
          sx={{ textTransform: "initial", borderTopRightRadius: "8px" }}
          label="Password"
          {...a11yProps(3)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ProfilePicture />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DisplayName />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EmailAddress />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Password />
      </TabPanel>
    </Box>
  );
};

export default Settings;
