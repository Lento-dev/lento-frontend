import * as React from "react";
import Helmet from "react-helmet";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Foodadvertisment from "./foodadvertisment";
import Clothadvertisement from "./clothadvertisement";
import Serviceadvertisement from "./Serviceadvertisement";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    "& .MuiButtonBase-root.MuiTab-root": {
      fontSize: 15,
      color: "#6d9736",
    },
    "& .MuiTabs-indicator": {
      // display: "none",
      backgroundColor: "#6d9736",
    },
    // "& .Mui-selected": {
    //   textDecoration: "underline",
    // },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

export default function Formtabs() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #ecf2e8" }} />

      <Container sx={{ padding: "4%" }} component="main">
        <Paper
          // className="signinPage"
          elevation={0}
          sx={{
            backgroundColor: "#fff",
            borderRadius: 4,
          }}
        >
          <br />
          <br />
          <br />

          <Tabs
            value={value}
            onChange={handleChange}
            style={{ color: "#465832", textTransform: "unset" }}
            className={classes.tabs}
            centered
          >
            <Tab
              style={{ color: "#465832" }}
              label=" Food advertisment "
              {...a11yProps(0)}
            />
            <Tab
              style={{ color: "#465832" }}
              label=" Cloth advertisement "
              {...a11yProps(1)}
            />
            <Tab
              style={{ color: "#465832" }}
              label=" Service advertisement "
              {...a11yProps(2)}
            />
          </Tabs>

          <TabPanel
            style={{ color: "#465832" }}
            className="tabs"
            value={value}
            index={0}
          >
            <Foodadvertisment />
          </TabPanel>
          <TabPanel className="tabs" value={value} index={1}>
            <Clothadvertisement />
          </TabPanel>
          <TabPanel className="tabs" value={value} index={2}>
            <Serviceadvertisement />
          </TabPanel>
        </Paper>
      </Container>
    </div>
  );
}
