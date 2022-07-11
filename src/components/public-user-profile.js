
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
    IconButton
  } from "@mui/material";
  
  // import "../styles/verificate.css";
  import Paper from "@material-ui/core/Paper";
  import React, { useState, useEffect } from "react";
  import { useHistory, useParams } from "react-router-dom";
  import Card from '@mui/material/Card';
  import CardContent from '@mui/material/CardContent';
  import Tab from "@mui/material/Tab";
  import Tabs from "@material-ui/core/Tabs";
  import axios from "axios";
  import Helmet from "react-helmet";
  import cardImage from '../assets/img/barfi.jpg'
  import Divider from "@mui/material/Divider";
  // import { BackToTop } from "material-ui-back-to-top";
  import BASE_URL from './baseurl';

  import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
  import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
  import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
  import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
  import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
  import ClearIcon from '@mui/icons-material/Clear';
  import CircularProgress from "@mui/material/CircularProgress";
  import PostCard from './myselfPostCard'
  import Image from "../assets/illustrations/forbiddenProfile.svg";

  
  const PublicUserProfile = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Token ${token}` };
    const [status, setStatus] = useState(null);
    useEffect(() => {
        if(token){
            axios
            .get(BASE_URL + "account/public-profile/" + id, {headers})
            .then((res) => {
              console.log(res.data);
              setData(res.data);
            })
            .catch(err => {
              console.log(err);
            })
        }
        }
, []);
  
  
    return (status === 403 ? (
        <div className="container">
        <Helmet bodyAttributes={{ style: "background-color : #f0f5eb" }}></Helmet>
        <Container component="main">
        <Grid item xs={12}>
            <img src={Image} width="300" height="300" className="profile-not-found" style={{marginTop:"10vh", marginBottom:"10vh",marginLeft:"30%",marginRight:"30%"}}/>
            <Typography component="h1" variant="h5" align="center" style={{fontSize:"2vw"}}>
                Oops...You can not access to this user's profile.
            </Typography>
        </Grid>
    </Container>
  </div>
    ) 
    :( data ? (
      <div>
        <Helmet bodyAttributes={{ style: "background-color : #f0f5eb" }}></Helmet>
        <Container component="main">
          <Grid container justifyContent="center" sx={{marginBottom: '4rem'}}>
            <Grid item xs={8} md={8} lg={8}  justifyContent="center">
            <Grid container justifyContent="center" sx={{marginTop:'2rem'}}>                  
            <Avatar 
                      variant="circular"
                      sx={{ bgcolor: "#f0f5eb", width: "200px", height: "200px"}}
                      src={Image}
                    >
  
                    </Avatar></Grid>
  
  
                  <Card
                    variant="outlined"
                    style={{ paddingTop: "6rem", marginTop: '-6rem' }}
                  >
                    <CardContent>
                      <Grid container style={{ padding: "1rem" }} spacing={3}>
                        <Grid item xs={12} justifyContent= "center"  sx={{ display: "inline-flex" }}>
                          <AccountCircleRoundedIcon
                            sx={{ color: "#e6835a", marginRight: "1%" }}
                          />
  
                          <Typography justifyContent= "center" 
                            sx={{ fontWeight: "bold" }}
                          >
                            {data.first_name} {data.last_name}
                          </Typography>
                        </Grid>
  
                        <Grid item xs={12} justifyContent= "center" sx={{ display: "inline-flex" }}>
                          <WorkRoundedIcon
                            sx={{ color: "#e6835a", marginRight: "1%" }}
                          />
  
                          <Typography
                            sx={{ textAlign: "left", fontWeight: "bold" }}
                          >
                            {data.job}
                          </Typography>
                        </Grid>
  
                        <Grid item xs={12} justifyContent= "center" sx={{ display: "inline-flex" }}>
                          <LocationOnRoundedIcon
                            sx={{ color: "#e6835a", marginRight: "1%" }}
                          />
                          <Typography
                            sx={{ textAlign: "left", fontWeight: "bold" }}
                          >
                            {data.country} - {data.city}
                          </Typography>
                        </Grid>
  
                        <Grid item xs={12} justifyContent= "center"  sx={{ display: "inline-flex" }}>
                          <CalendarTodayRoundedIcon
                            sx={{ color: "#e6835a", marginRight: "1%" }}
                          />
  
                          <Typography
                            sx={{ textAlign: "left", fontWeight: "bold" }}
                          >
                            {/* {data.date_joined.slice(0, 10)} */}
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
                  <Card variant="outlined">
                    <CardContent>
                    <Grid container spacing={4} >
                      <Grid item xs={12}>
                      <Typography variant="h6" fontWeight="bold" textAlign='center'  >
                      Biography
                    </Typography>
                      </Grid>
                      <Grid item xs={12} sx={{textAlign: 'justify'}}>
                      {data.bio && (
                        <Typography textAlign='center' >{data.bio}</Typography>
                      )}
                      {!data.bio && (
                        <Typography textAlign='center' >Nothing to show!</Typography>
                      )}
                  </Grid>
                  
                  </Grid> 
                    </CardContent>
                  </Card>
  
  
                  <Card variant="outlined">
                  <CardContent>
                <Grid container spacing={4}>
                      <Grid item xs={12}>
                      <Typography variant="h6" fontWeight="bold"  textAlign='center'>
                      Experience
                    </Typography>
                      </Grid>
                      <Grid item xs={12} sx={{textAlign: 'justify'}}>
                      {data.experience && (
                        <Typography textAlign='center' >{data.experience}</Typography>
                      )}
                      {!data.experience && (
                        <Typography textAlign='center' >Nothing to show!</Typography>
                      )}
                  </Grid>
                  
                  </Grid>
  
                </CardContent>
                </Card>
  
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
    )
    )
    );
  };
  
  export default PublicUserProfile;
  