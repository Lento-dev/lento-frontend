import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Avatar,
  CssBaseline,
  Link,
  Grid,
  Box,
  Button,
  Typography,
  Container,
  Stack,
  CardActionArea,
  CardHeader,
} from "@mui/material";

// import "../styles/verificate.css";
import Image from "./profile.jpg";
import Paper from "@material-ui/core/Paper";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import Tab from "@mui/material/Tab";
import Tabs from "@material-ui/core/Tabs";
import axios from "axios";
import Helmet from "react-helmet";
// import Image1 from './no_data.svg';
// import Image2 from './add_notes.svg';
import Divider from "@mui/material/Divider";
// import { BackToTop } from "material-ui-back-to-top";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { makeStyles } from "@mui/styles";
import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@mui/material/CircularProgress";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}

const UserProfile = () => {
  // const classes = useStyles();

  const history = useHistory();
  const [data, setData] = useState(null);
  const [value, setValue] = useState(0);

  const [copiedAlertOpen, setCopiedAlertOpen] = useState(false);

  const BASE_URL = "http://172.17.3.154/api";
  const token = localStorage.getItem("token");
  const headers = { Authorization: `Token ${token}` };

  useEffect(() => {
    axios
      .get(BASE_URL + "/account/user-profile/", { headers: headers })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  });

  const handleCopiedClick = () => {
    setCopiedAlertOpen(true);
  };

  const handleCopiedClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setCopiedAlertOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return data ? (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #f0f5eb" }}></Helmet>
      <Container component="main">
        <Grid container>
          <Grid item xs={12} md={12} lg={4}>
            <Grid container>
              <Grid item xs={12}>
                <Grid
                  item
                  xs={4}
                  style={{
                    alignItems: "left",
                    marginTop: "2rem",
                    marginBottom: "1rem",
                    marginLeft: "2rem",
                  }}
                >
                  <Avatar
                    variant="circular"
                    sx={{ bgcolor: "#f0f5eb", width: "150%", height: "150%" }}
                    src={Image}
                  ></Avatar>
                </Grid>

                <Card
                  variant="outlined"
                  style={{ marginTop: "-7rem", paddingTop: "6rem" }}
                >
                  <CardContent>
                    <Grid container style={{ padding: "1rem" }} spacing={3}>
                      <Grid item xs={12} sx={{ display: "inline-flex" }}>
                        <AccountCircleRoundedIcon
                          sx={{ color: "#72825c", marginRight: "4%" }}
                        />

                        <Typography
                          sx={{ textAlign: "left", fontWeight: "bold" }}
                        >
                          {data.first_name} {data.last_name}
                        </Typography>
                      </Grid>

                      <Grid item xs={12} sx={{ display: "inline-flex" }}>
                        <WorkRoundedIcon
                          sx={{ color: "#72825c", marginRight: "4%" }}
                        />

                        <Typography
                          sx={{ textAlign: "left", fontWeight: "bold" }}
                        >
                          {data.job}
                        </Typography>
                      </Grid>

                      <Grid item xs={12} sx={{ display: "inline-flex" }}>
                        <LocationOnRoundedIcon
                          sx={{ color: "#72825c", marginRight: "4%" }}
                        />
                        <Typography
                          sx={{ textAlign: "left", fontWeight: "bold" }}
                        >
                          {data.country} - {data.city}
                        </Typography>
                      </Grid>

                      <Grid item xs={12} sx={{ display: "inline-flex" }}>
                        <CalendarTodayRoundedIcon
                          sx={{ color: "#72825c", marginRight: "4%" }}
                        />

                        <Typography
                          sx={{ textAlign: "left", fontWeight: "bold" }}
                        >
                          {data.date_joined.slice(0, 10)}
                        </Typography>

                        <Typography
                          sx={{ textAlign: "left", display: "contents" }}
                        >
                          &nbsp;&nbsp;joined to Lento
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <Paper
              variant="outlined"
              sx={{ borderRadius: 4 }}
              style={{ marginTop: "5.1rem" }}
            >
              <Tabs
                textColor="black"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#e6835a",
                  },
                }}
                onChange={handleChange}
                value={value}
                centered
              >
                <Tab
                  value={0}
                  style={{ fontWeight: "bold" }}
                  label="About User"
                />
                <Tab value={1} style={{ fontWeight: "bold" }} label="Posts" />
              </Tabs>
                  <Divider/>
                          <TabPanel value={value} index={0}>
                  <Grid container spacing={2} textAlign='left' >
                    <Grid item xs={12}>
                    <Typography variant="h6" fontWeight="bold" >
                    Biography :
                  </Typography>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography>{data.bio}</Typography>
                    <Typography>{data.bio}</Typography>
                    <Typography>{data.bio}</Typography>
                    <Typography>{data.bio}</Typography>

                      </Grid>
                      <Grid item xs={12}>
                      <Typography variant="h6" fontWeight="bold">
                    Experience :
                  </Typography>
                      </Grid>
                      <Grid item xs={12}>
                      <Typography >{data.bio}</Typography>
                      <Typography>{data.bio}</Typography>
                      <Typography>{data.bio}</Typography>
                      <Typography>{data.bio}</Typography>
                      <Typography>{data.bio}</Typography>

                      </Grid>
                  </Grid>
                </TabPanel>
            </Paper>
              
          </Grid>
        </Grid>
      </Container>
    </div>
  ) : (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #f0f5eb" }}></Helmet>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "35vh",
        }}
      >
        <CircularProgress size="3rem" style={{ color: "#8b9b74" }} />
      </Box>
    </div>
  );
};

export default UserProfile;
