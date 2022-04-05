import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {
    Avatar, CssBaseline, Link, Grid, Box, Button,
    Typography, Container, Stack
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import '../verificate.css';
import Image from '../assets/img/helpHand.jpg';
// import Banner from './compbanner.jpg';
import Paper from "@material-ui/core/Paper";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Tab from '@mui/material/Tab';
import Tabs from "@material-ui/core/Tabs";
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { connect } from "react-redux";
import Helmet from 'react-helmet';
// import Image from './face.jpg';
// import '../UserProfile.css';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import Image1 from '../assets/img/helpHand.jpg';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '0px', transform: 'scale(0.8)' }}
    >
    </Box>
);

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 470,
            md: 770,
            lg: 1070,
            xl: 1406,
        },
    },
    palette: {
        secondary: {
            main: "#b10c59",
        },
    },
    typography: {
        fontFamily: [
            'Nunito',
        ].join(','),
    },


});



const Userpro = (props) => {

    const [value, setValue] = useState(0);
    const [state, setState] = useState(null);
    const [status, setStatus] = useState(null);
    const [copiedAlertOpen, setCopiedAlertOpen] = useState(false);
    const email = "amirizahraza@gmail.com";
    const token = props.a
    useEffect(() => {
        axios.get('http://185.190.39.17:8888/profile/getuserprofilebyuser',
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(res => {
                console.log(res.data);
                setState(res.data);
            })
            .catch(error => {
                if (error.response.data.error === "profile is not complete" ) {
                    setStatus(404);
                }
                  console.log('error status: ',error.response.data.error)
            })
    }, [])


    const handleCopiedClick = () => {
        setCopiedAlertOpen(true);
    };

    const handleCopiedClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setCopiedAlertOpen(false);
    };
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        // setOpen(false);
        props.clearMessage();
      };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (status === 404  ? (

        <div className="container">
        <Helmet bodyAttributes={{ style: 'background-color : #f5f5f5' }}></Helmet>
        <Container component="main">
        <Grid item xs={12}>
            
            
            <Typography component="h1" variant="h5" align="center" style={{fontSize:"2vw"}}>
            Please complete your profile.
            </Typography>
        </Grid>
    </Container>
  </div>

    ) : ( state ? (
        <div>

<Helmet bodyAttributes={{ style: 'background-color : #f5f5f5' }}></Helmet>
            <React.Fragment>
                <CssBaseline />
                {/* <Paper elevation={10}> */}
                <Box style={{ marginTop: "-15px" , borderRadius: "6"}} pt={14} pr={10} pb={14} pl={14} className="back"></Box>
                {/* </Paper>
                <Divider /> */}
            </React.Fragment>
            <Container component="main">
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {/* <Avatar variant="square"
                        style={{ width: "100%", height: "50%" }}
                        src={Banner}>
                    </Avatar> */}
                    <Grid container>
                        <Grid item xs={10}>
                            <Stack direction="row" sx={{ maxWidth: 345 }} style={{ marginLeft: "0.6rem", marginTop: "-3rem" }}>
                                <Stack direction="photo" spacing={2} sx={{ maxWidth: 345 }} style={{ marginLeft: "8.5rem", marginTop: "-2.4rem" }}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={Image}
                                        sx={{ width: 130, height: 130 }}
                                    />
                                </Stack>
                            </Stack>
                        </Grid>

                        <Grid sx={2} style={{ marginTop: "1rem" }}>
                            <Button variant="contained"
                                style={{
                                    backgroundColor: '#000066', color: '#FFFFFF',
                                    marginTop: "1rem", marginLeft: "60px", textTransform: 'unset'
                                }}>
                                <Link href="/user-dashboard" variant="body2" style={{ color: '#ffffff' }}>
                                    Edit profile
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <Grid item xs={4} style={{ alignItems: "left", marginTop: "2rem", marginBottom: "1rem", marginLeft: "2rem" }}>
                                <Avatar variant="rounded"
                                    sx={{ bgcolor: "#f2f2f2", width: "100%", height: "100%" }}
                                    src={Image}>
                                </Avatar>
                            </Grid>

                            <Card className="card-profile shadow" style={{ marginTop: "3rem", marginLeft: "1.6rem" }}>
                                <Typography component="h1" variant="h5" sx={{ fontSize: 18 }} style={{ textAlign: "center", marginTop: "1rem", marginBottom: "1rem", fontWeight: "bold" }}>
                                    {state.firstname + " "}
                                    {state.lastname}
                                </Typography>
                                <Typography component="h1" variant="h5" sx={{ fontSize: 18 }} style={{ textAlign: "center", marginTop: "1rem", marginBottom: "0", fontWeight: "bold" }}>
                                    {state.career}
                                </Typography>

                                <CardContent>
                                    <Grid container style={{ padding: "1rem" }}>
                                        <Grid container sx={{ color: 'text.primary' }}>
                                            <Grid item xs={1.3}>
                                                <EmailIcon sx={{ fontSize: 24 }} color="action" gutterBottom />
                                            </Grid>
                                            <Grid item xs={5}>
                                                {/* <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom> */}
                                                <Typography sx={{ fontSize: 16 }} gutterBottom>
                                                <Link sx={{ color: 'black', cursor: 'pointer' }} 
                                underline="hover" 
                                className="communicate"
                                onClick={() => { navigator.clipboard.writeText(state.email);
                                 handleCopiedClick(); }}> {state.email}</Link>
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid container sx={{ color: 'text.primary' }}>
                                            <Grid item xs={1.3}>
                                                <PlaceIcon sx={{ fontSize: 24 }} color="action" />
                                            </Grid>
                                            <Grid item xs={5}>
                                                <Typography sx={{ fontSize: 16 }} gutterBottom>
                                                    {state.country},
                                                    {" " + state.city}
                                                </Typography>
                                            </Grid>
                                        </Grid>


                                        <Grid container sx={{ color: 'text.primary' }}>
                                            <Grid item xs={1.3}>
                                                <PhoneIcon sx={{ fontSize: 24 }} color="action" />
                                            </Grid>
                                            <Grid item xs={5}>
                                                <Typography sx={{ fontSize: 16 }} gutterBottom>
                                                <Link sx={{ color: 'black', cursor: 'pointer' }} 
                                underline="hover" 
                                className="communicate"
                                onClick={() => { navigator.clipboard.writeText(state.phonenumber);
                                 handleCopiedClick(); }}> {state.phone}</Link>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <h3>
                                            <h6></h6>
                                        </h3>
                                        <Grid item xs={50} style={{ textAlign: "center", marginBottom: "-20px" }}>
                                            <Typography>
                                                <LinkedInIcon sx={{ fontSize: 24 }} color="action" onClick={() => window.open('https://www.linkedin.com/in/shahab-induction-co-0ab165140/')} className="communicate" />
                                                <h7> </h7>
                                                <FacebookIcon sx={{ fontSize: 24 }} color="action" onClick={() => window.open('https://t.me/shahabinductionco')} className="communicate" />
                                                <h7> </h7>
                                                <TwitterIcon sx={{ fontSize: 24 }} color="action" onClick={() => window.open('https://www.instagram.com/shahabinductionco')} className="communicate" />
                                                <h7> </h7>
                                                <LanguageIcon sx={{ fontSize: 24 }} color="action" onClick={() => window.open('https://www.instagram.com/shahabinductionco')} className="communicate" />
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>


                        <Grid item xs={12} md={8} style={{ alignItems: "center", marginTop: "2rem" }}>
                            <Container component="main">


                            <Paper elevation={3} sx={{ borderRadius: 6, display: 'flex' }} style={{ marginTop: "1rem", marginBottom: "1rem", padding: "2rem" }}>
                                    <Grid container style={{ padding: "4px" }}>
                                        <Grid item xs={12}>
                                            <Typography component="h3" style={{ fontWeight: "bold" }}>About me</Typography>
                                            <Divider style={{ width: '100%', marginTop: "0.5rem",marginBottom:"1rem",alignItems: "center" }}/>
                                            <h4></h4>
                                        </Grid>
                                        <Typography style={{ textAlign: "justify" }}>
                                            {state.aboutme}
                                        </Typography>
                                    </Grid>
                                </Paper>
                                <h1></h1>
                                <Paper elevation={3} sx={{ borderRadius: 6, display: 'flex' }} style={{ marginTop: "1rem", marginBottom: "1rem", padding: "2rem" }}>
                                    <Grid container style={{ padding: "4px" }}>
                                        <Grid item xs={12}>
                                            <Typography component="h3" style={{ fontWeight: "bold" }}>Experience</Typography>
                                            <Divider style={{ width: '100%', marginTop: "0.5rem",marginBottom:"1rem",alignItems: "center" }}/>
                                            <h4></h4>
                                        </Grid>
                                        <Typography style={{ textAlign: "justify" }}>
                                            {state.experience}
                                        </Typography>
                                    </Grid>
                                </Paper>

                            </Container>

                        </Grid>

                        <Snackbar
                  open={copiedAlertOpen}
                  autoHideDuration={1150}
                  onClose={handleCopiedClose}
                  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                  <Alert onClose={handleCopiedClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                    Copied to clipboard!
                  </Alert>
                </Snackbar>
                    </Grid>
                    {/* </Container> */}
                </ThemeProvider>
            </Container>
        </div>
    ) : (

        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", marginTop: "45vh" }}>
            <CircularProgress size="3rem" style={{ color: "#000066" }} />
        </Box>
    )))
}

const MapStateToProps = (state) => {
    let a = "";
    let r = "";

    if (state.auth.user != null) {
        a = state.auth.user.access;
        r = state.auth.user.refresh;
    }
    return {
        message: state.message.message,
        openMessage: state.message.openMessage,
        isLoggedIn: state.auth.isLoggedIn,
        a,
        r,
    }
}
// export default connect(MapStateToProps)(Userpro);
export default Userpro;