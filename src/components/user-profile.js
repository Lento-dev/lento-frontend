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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/verificate.css";
import Image from "./profile.jpg";
import Paper from "@material-ui/core/Paper";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Tab from "@mui/material/Tab";
import Tabs from "@material-ui/core/Tabs";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Helmet from "react-helmet";
// import Image1 from './no_data.svg';
// import Image2 from './add_notes.svg';
import Divider from "@mui/material/Divider";
// import JobOffercard from './jobofferCard';
import { BackToTop } from "material-ui-back-to-top";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { makeStyles } from "@mui/styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#ed00c2",
    },
  },
  typography: {
    fontFamily: ["Nunito"].join(","),
  },
});

// const useStyles = makeStyles(theme => ({
//   ".PrivateTabIndicator-colorSecondary-3": {
//     backgroundColor: "#ed00c2"
//   },
// }))

const UserProfile = ({ children }) => {
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

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    // setOpen(false);
  };

  //   useEffect(() => {
  //     axios.get('http://185.190.39.17:8888/c-profile/company-profile-by-comp/', headers)
  //     .then(res => {
  //       console.log(res.data);
  //       setState(res.data[0]);
  //     })
  //     .catch(response => {
  //       setStatus(404);
  //       console.log("status code: ",response);
  //     })

  //   }, [])

  //   useEffect(async () => {
  //     await axios.get('http://185.190.39.17:8888/jobs/company-dashboard/', headers)
  //         .then(res => {
  //             setJobs(res.data.sort((a, b) => (a.id < b.id) ? 1 : -1));
  //             console.log('response: ',res.data);
  //         })
  //         .catch(error =>{
  //           if (error.response.status === 404 ) {
  //             setJobStatus(404);
  //         }
  //           console.log('error status: ',error.response.status)
  //         })
  // }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return data ? (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #f0f5eb" }}></Helmet>
      <Container component="main">
        <ThemeProvider theme={theme}>
          <CssBaseline />

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
                    className="card-profile shadow"
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
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
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
                          </div>
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
                style={{ marginTop: "5.2rem"}}
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
                  <Tab value={0} style={{fontWeight: 'bold'}} label="About User" />
                  <Tab value={1} style={{fontWeight: 'bold'}} label="Posts" />
                </Tabs>
              </Paper>
              {/* <TabPanel value={value} index={0}>
              {data.bio}
              </TabPanel> */}
            </Grid>

            {/* <Card variant="outlined" sx={{ borderRadius: 2, borderWidth: 1, borderColor: "#cccccc", marginBottom:'30px' }}>
                        <CardContent sx={{ padding: '20px' }}>
                        <Grid container style={{padding: "4px"}}>
                        <Grid item xs={12}>
                          <Typography component="h4" style={{fontWeight: "bold"}}>
                            Technologies
                          </Typography> */}

            {/* <Divider style={{ width: '100%', marginTop: "0.5rem",marginBottom:"1rem",alignItems: "center" }}/>

                          <Grid xs={12} style={{}}>  
                          {
                            state.technologies.map((chip) => {
                                return <Chip style={{color:"#B10C59", marginBottom: "1rem", marginRight: "0.5rem"}} icon={<DoneIcon style={{color:"#B10C59"}}/>} label={chip} variant="filled" />
                                
                            }) 
                          }                        
                          </Grid>
                        </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
  
                    <Card variant="outlined" sx={{ borderRadius: 2, borderWidth: 1, borderColor: "#cccccc", marginBottom:'30px' }}>
                      <CardContent sx={{ padding: '20px' }}>
                      <Grid container style={{padding: "4px"}}>
                        <Grid item xs={12}>
                          <Typography component="h3" style={{fontWeight: "bold"}}>About company</Typography>

                          <Divider style={{ width: '100%', marginTop: "0.5rem",marginBottom:"1rem",alignItems: "center" }}/>

                        </Grid>
                        <Typography style={{textAlign: "justify"}}>
                          {state.about}
                        </Typography>  
                      </Grid>
                      </CardContent>
                    </Card>
                    </TabPanel>
  
                    <TabPanel value={value} index={1}>

                    { jobstatus === 404 ?(
                      <div className="container">
                      <Helmet bodyAttributes={{ style: 'background-color : #f5f5f5' }}></Helmet>
                      <Container component="main">
                      <Grid item xs={12}>
                          <img src={Image2} width="300" height="300" className="profile-not-found" style={{marginTop:"10vh", marginBottom:"10vh",marginLeft:"30%",marginRight:"30%"}}/>
                          <Typography component="h1" variant="h5" align="center" style={{fontSize:"2vw"}}>
                              You haven't add any job offer yet!
                          </Typography>
                      </Grid>
                  </Container>
                </div>
                    ) 
                    : (
                      jobs ? (

                        <div>
                            <Helmet bodyAttributes={{ style: 'background-color : #f5f5f5' }}></Helmet>

                                <Grid item xs={12} style={{marginTop:'72px'}}>
                                    {jobs.map(job => (
                                        <JobOffercard job={job} />
                                    ))}
                                </Grid>

                            <BackToTop color="#92085b" />
                            {children}
                        </div>
                        ) :
                        (
                            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", marginTop: "45vh" }}>
                                <CircularProgress size="3rem" style={{ color: "#000066" }} />
                            </Box>
                        )
                    )}
                    
                    </TabPanel>
  
                  </Container>
  
                </Grid> */}

            <Snackbar
              open={copiedAlertOpen}
              autoHideDuration={1150}
              onClose={handleCopiedClose}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert
                onClose={handleCopiedClose}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
              >
                Copied to clipboard!
              </Alert>
            </Snackbar>
          </Grid>
        </ThemeProvider>
      </Container>
    </div>
  ) : (
    <Typography>Loading</Typography>
  );
};

export default UserProfile;
