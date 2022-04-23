import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, CssBaseline, Link, Grid, Box, Button,
  Typography, Container, Stack, CardActionArea } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../verificate.css';
import Image from './company-illustration.jpg';
import Banner from './compbanner2.jpg';
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
import Image1 from './no_data.svg';
import Image2 from './add_notes.svg';
import Divider from '@mui/material/Divider';
import JobOffercard from './jobofferCard';
import { getalljobs } from "../actions/auth";
import { BackToTop } from "material-ui-back-to-top";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const theme = createTheme({
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


const Companyprofile = (props, { children }) => {

  // const { id,name } = useParams();
  const history = useHistory();
  const [value, setValue] = useState(0);
  const [state, setState] = useState(null);
  const [status, setStatus] = useState(null);
  const [jobstatus, setJobStatus] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [copiedAlertOpen, setCopiedAlertOpen] = useState(false);
  const headers = {
        headers: {
            "Authorization": `Bearer ${props.access}`
        }};

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


  useEffect(() => {
    axios.get('http://185.190.39.17:8888/c-profile/company-profile-by-comp/', headers)
    .then(res => {
      console.log(res.data);
      setState(res.data[0]);
    })
    .catch(response => {
      setStatus(404);
      console.log("status code: ",response);
    })

  }, [])

  useEffect(async () => {
    await axios.get('http://185.190.39.17:8888/jobs/company-dashboard/', headers)
        .then(res => {
            setJobs(res.data.sort((a, b) => (a.id < b.id) ? 1 : -1));
            console.log('response: ',res.data);
        })
        .catch(error =>{
          if (error.response.status === 404 ) {
            setJobStatus(404);
        }
          console.log('error status: ',error.response.status)
        })
}, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return ( status === 404 ? (
      <div className="container">
            <Helmet bodyAttributes={{ style: 'background-color : #f5f5f5' }}></Helmet>
            <Container component="main">
            <Grid item xs={12}>
                <img src={Image1} width="300" height="300" className="profile-not-found" style={{marginTop:"10vh", marginBottom:"10vh",marginLeft:"30%",marginRight:"30%"}}/>
                <Typography component="h1" variant="h5" align="center" style={{fontSize:"2vw"}}>
                    Please complete your profile.
                </Typography>
            </Grid>
        </Container>
      </div>
  
    ) 
    :(
      state ? (
        <div>
          <Helmet bodyAttributes={{ style: 'background-color : #f5f5f5' }}></Helmet>
          <Container component="main">
            <ThemeProvider theme={theme}>
              {/* <React.Fragment> */}
                  <CssBaseline />
                    <img className='banner-image' src={Banner} style={{marginTop:"-0.5rem"}}/>
              {/* </React.Fragment> */}
            {/* <Container component="main" maxWidth="xl"> */}
            <Grid container>
              <Grid item xs={10}>
                <Stack direction="row" sx={{ maxWidth: 345 }} style={{ marginLeft: "2.3rem", marginTop: "-4.8rem" }}>
                    <Avatar variant="rounded" sx={{ bgcolor: "#f2f2f2" ,width: "70%", height: "70%" }} src={Image}>
                    </Avatar>
                    <Grid item xs={12} direction="row" style={{marginLeft: "1rem", marginRight: "3rem"}}>
                    <Typography variant="h6" display="inline" style={{color: "#ffffff"}}>
                      {/* Shahab Induction CO. */}
                    </Typography>
                    </Grid>
                </Stack>
              </Grid>
  
              <Grid sx={2}>
                    <Button variant="contained"
                     style={{backgroundColor: '#000066', color: '#FFFFFF',
                      marginTop:"1.5rem" ,textTransform: 'unset', marginLeft:"2rem"}}>
                        <Link href="/company-dashboard" variant="body2" style={{ color: '#ffffff' }}>
                        Edit profile
                      </Link>
                    </Button>
              </Grid>
              </Grid>
  
              <Paper elevation={3} sx={{borderRadius: 4, display: 'flex' }} style={{marginTop: "1rem"}}>
                <Breadcrumbs aria-label="breadcrumb" style={{marginTop: "0.7rem",marginRight:"13rem",marginLeft:"1rem"}}>
                  <Link underline="hover" color="inherit">
                    About Company
                  </Link>
                  <Link
                    underline="hover"
                    color="inherit"
                    // href="/"
                  >
                    Job offers
                  </Link>
                </Breadcrumbs>
  
                {/* <Tabs value={value} style={{marginLeft:"10rem", color:"#B10C59"}}> */}
                  {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
                    <Tabs textColor="secondary"
                      indicatorColor="secondary"
                      onChange={handleChange} aria-label="secondary tabs example" value={value}>
                      <Tab value={0} label="About Company" />
                      <Tab value={1} label="Job Offers" />
                      {/* <Tab value={2} label="Gallery" /> */}
                    </Tabs>
                </Paper>
              <Grid container>
                <Grid item xs={12} md={4}>
                <Grid item xs={4} style={{ alignItems: "left", marginTop: "2rem", marginBottom: "1rem" ,marginLeft: "2rem" }}>
                  <Avatar variant="rounded" 
                    sx={{ bgcolor: "#f2f2f2" ,width: "100%", height: "100%" }} 
                    src={Image}>
                  </Avatar> 
                </Grid>
  
                <Card className="card-profile shadow" sx={{borderRadius: 2, borderWidth: 1, borderColor: "#cccccc"}} style={{ marginTop: "-2rem"}}>
                      <Typography component="h1" variant="h5" style={{textAlign: "center",marginTop: "2rem", marginBottom: "1rem", fontWeight: "bold"}}>
                        {state.companyname}
                        {/* {state.summery.title} */}
                      </Typography>
                      <CardContent>
                        <Grid container style={{padding:"1rem"}}>
                            
                            <Grid item xs={8} style={{textAlign: "left", marginBottom: "10px", fontWeight: "bold"}}>
                              <Typography>
                                Establishment
                              </Typography>
                            </Grid>
                            <Grid item xs={4} style={{textAlign: "right", color: "slategray"}}>
                              <Typography>
                                {state.establishment}
                              </Typography>
                            </Grid>
  
                            <Grid item xs={8} style={{textAlign: "left", marginBottom: "10px", fontWeight: "bold"}}>
                              <Typography>
                                Number Of Employees
                              </Typography>
                            </Grid>
                            <Grid item xs={4} style={{textAlign: "right", color: "slategray"}}>
                              <Typography>
                                {state.nofemployees}
                              </Typography>
                            </Grid>
                            
                            <Grid item xs={8} style={{textAlign: "left", marginBottom: "10px", fontWeight: "bold"}}>
                              <Typography>
                                Years Of Experience
                              </Typography>
                            </Grid>
                            <Grid item xs={4} style={{textAlign: "right", color: "slategray"}}>
                              <Typography>
                                {state.yearsofexperience}
                              </Typography>
                            </Grid>
  
                            <Grid item xs={12} style={{textAlign: "left", marginBottom: "10px", fontWeight: "bold"}}>
                              <Typography>
                                Field of activity
                              </Typography>
                              </Grid>
                              <Grid item xs={12} style={{textAlign: "left", marginBottom: "25px", color: "slategray"}}>
                              <Typography>
                                {state.fieldactivity}
                              </Typography>
                            </Grid>
  
                            <Grid item xs={7} style={{textAlign: "left", marginBottom: "20px", fontWeight: "bold"}}>
                                <Typography>
                                  Communication Ways
                                </Typography>
                              </Grid>
                              <Grid item xs={5} style={{textAlign: "right", marginBottom: "1rem", color: "slategray"}}>
                                  {state.linkedin != "" &&(
                                    <LinkedInIcon onClick={ () => window.open(state.linkedin)} className='communicate'/>
                                  )}
                                  {state.telegram != "" &&(
                                    <TelegramIcon onClick={ () =>  window.open(state.telegram)} className='communicate'/>
                                  )}
                                  {state.instagram != "" &&(
                                    <InstagramIcon onClick={ () =>  window.open(state.instagram)} className='communicate'/>
                                  )}
                                  {state.linkedin === "" && state.telegram === "" && state.instagram === "" &&(
                                    <Typography>-</Typography>
                                  )}
                            </Grid>
  
                            <Grid container direction="row" style={{ justifyContent: "start"}}>
                            <Grid item>
                              <LocationOnOutlinedIcon/>
                            </Grid>
                            <Grid item>
                              <Typography>
                                {state.address}
                              </Typography>
                            </Grid>
                            </Grid>
                              
                        </Grid>
                      </CardContent>
                  </Card>
                </Grid>
              
              
                <Grid item xs={12} md={8} style={{alignItems:"center"}}>
                  <Container component="main">
                    <TabPanel value={value} index={0}>
                      <Card variant="outlined" sx={{marginTop:'72px', borderRadius: 2, borderWidth: 1, borderColor: "#cccccc", marginBottom:'30px' }}>
                      {/* <CardActionArea> */}
                      <CardContent sx={{ padding: '20px' }}>
                        <Grid container>
                          <Grid item xs={12}>
                            <Typography component="h4" style={{fontWeight: "bold"}}>Company Profile</Typography>

                            <Divider style={{ width: '100%', marginTop: "0.5rem",marginBottom:"1rem",alignItems: "center" }}/>

                              </Grid>        
                                <Grid item xs={8} style={{textAlign: "left"}}>
                                  <Typography>Company name</Typography>
                                </Grid>
                                <Grid item xs={4} style={{textAlign: "right"}}>
                                  <Typography>{state.companyname}</Typography>
                                </Grid>
          
                                <Grid item xs={8} style={{textAlign: "left"}}>
                                  <Typography>Email</Typography>
                                </Grid>
                                <Grid item xs={4} style={{textAlign: "right"}}>
                                <Link sx={{ color: 'black', cursor: 'pointer' }} 
                                underline="hover" 
                                className="communicate"
                                onClick={() => { navigator.clipboard.writeText(state.email);
                                 handleCopiedClick(); }}> {state.email}</Link>
                                </Grid>
                                
                                <Grid item xs={8} style={{textAlign: "left"}}>
                                  <Typography>Phone Number</Typography>
                                </Grid>
                                <Grid item xs={4} style={{textAlign: "right"}}>
                                <Link sx={{ color: 'black', cursor: 'pointer' }} 
                                underline="hover" 
                                className="communicate"
                                onClick={() => { navigator.clipboard.writeText(state.phonenumber);
                                 handleCopiedClick(); }}> {state.phonenumber}</Link>
                                </Grid>        
                                
                                <Grid item xs={8} style={{textAlign: "left"}}>
                                  <Typography>Website</Typography>
                                </Grid>
                                <Grid item xs={4} style={{textAlign: "right"}}>
                                <Link sx={{ color: 'black', cursor: 'pointer' }} 
                                underline="hover" 
                                className="communicate"
                                onClick={() => { navigator.clipboard.writeText(state.website);
                                 handleCopiedClick(); }}> {state.website}</Link>
                                </Grid> 
          
                                <Grid item xs={8} style={{textAlign: "left"}}>
                                  <Typography>Postal Code</Typography>
                                </Grid>
                                <Grid item xs={4} style={{textAlign: "right"}}>
                                  <item>{state.postalcode}</item>
                                </Grid> 
                              </Grid>
                              </CardContent>
                          {/* </CardActionArea> */}
                      </Card>
                    
  
                      <Card variant="outlined" sx={{ borderRadius: 2, borderWidth: 1, borderColor: "#cccccc", marginBottom:'30px' }}>
                        <CardContent sx={{ padding: '20px' }}>
                        <Grid container style={{padding: "4px"}}>
                        <Grid item xs={12}>
                          <Typography component="h4" style={{fontWeight: "bold"}}>
                            Technologies
                          </Typography>

                          <Divider style={{ width: '100%', marginTop: "0.5rem",marginBottom:"1rem",alignItems: "center" }}/>

                          <Grid xs={12} style={{}}>  
                          {
                            state.technologies.map((chip) => {
                                return <Chip style={{color:"#B10C59", marginBottom: "1rem", marginRight: "0.5rem"}} icon={<DoneIcon style={{color:"#B10C59"}}/>} label={chip} variant="filled" />
                                
                            }) 
                          }                        
                            {/* <Chip style={{color:"#B10C59", marginBottom: "1rem", marginRight: "0.5rem"}} icon={<DoneIcon style={{color:"#B10C59"}}/>} label={state.technologies[0]} variant="filled" />
                            <Chip style={{color:"#B10C59", marginBottom: "1rem", marginRight: "0.5rem"}} icon={<DoneIcon style={{color:"#B10C59"}}/>} label={state.technologies[1]} variant="filled" />
                            <Chip style={{color:"#B10C59", marginBottom: "1rem", marginRight: "0.5rem"}} icon={<DoneIcon style={{color:"#B10C59"}}/>} label={state.technologies[2]} variant="filled" />
                            <Chip style={{color:"#B10C59", marginBottom: "1rem", marginRight: "0.5rem"}} icon={<DoneIcon style={{color:"#B10C59"}}/>} label={state.technologies[3]} variant="filled" /> */}
                            {/* <Chip style={{color:"#B10C59", marginBottom: "1rem", marginRight: "0.5rem"}} icon={<DoneIcon style={{color:"#B10C59"}}/>} label={state.technologies[4]} variant="filled" /> */}
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

                            {/* <Container component="main"> */}
                                {/* <Grid container spacing={4} maxWidth='lg' sx={{ paddingTop: '70px', paddingBottom: '60px', alignItems:"center"}}> */}
                                    {/* {jobs.length == 0 && (
                                        <Grid item xs={12} md={8} sx={{ marginTop: '-90px' }} style={{ alignItems: "center" }}>
                                            <Grid container>

                                                <Grid item xs={12}>
                                                    <img src={Image} width="100" height="100" align="center" className="responsive center" alt="nothing found" loading="nothing found" />

                                                </Grid>

                                                <Grid item xs={12} sx={{ marginLeft: '33%', marginRight: '25%', marginTop: '-60px' }}>
                                                    <Typography sx={{ fontSize: '1.8rem', fontWeight: '600' }} style={{ letterSpacing: '1.5px' }}>
                                                        Oops! No job found
                                    </Typography>
                                                </Grid>
                                            </Grid>

                                        </Grid>

                                    )} */}

                                <Grid item xs={12} style={{marginTop:'72px'}}>
                                    {jobs.map(job => (
                                    // <Grid item xs={12} key={job.id} >
                                        <JobOffercard job={job} />
                                    ))}
                                </Grid>
                                {/* </Grid> */}
                            {/* </Container> */}
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
                    
                    
                      {/* <Paper elevation={3}
                      sx={{ width: '100%',
                        borderRadius: 6,
                        display: 'flex',
                        justifyContent: "flex-end",
                        alignItems: "center",
                        flexDirection: 'column'}} 
                        style={{padding:"8rem",marginRight:"25rem"}}>
                        <Typography variant="h4">
                          Nothing here yet!
                        </Typography>
                      </Paper> */}
                    </TabPanel>
  
                    {/* <TabPanel value={value} index={2}>
                      <Paper elevation={3}
                      sx={{ width: '100%',
                        borderRadius: 6,
                        display: 'flex',
                        justifyContent: "flex-end",
                        alignItems: "center",
                        flexDirection: 'column'}} 
                        style={{padding:"8rem",marginRight:"25rem"}}>
                        <Typography variant="h4">
                          Also here!
                        </Typography>
                      </Paper>
                    </TabPanel> */}
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
      ) : 
        <Box sx={{ display: 'flex', justifyContent:"center", alignItems:"center", marginTop:"45vh" }}>
          <CircularProgress size="5rem" style={{color: "#000066"}}/>
        </Box>
      )
      
    );
  };

  const mapStateToProps = (state) => {
    let access = "";
    let refresh = "";

    if (state.auth.user != null) {
        access = state.auth.user.access;
        refresh = state.auth.user.refresh;
    }
    return {
        message: state.message.message,
        openMessage: state.message.openMessage,
        isLoggedIn: state.auth.isLoggedIn,
        access,
        refresh,
    }
}

  // const mapStateToProps = ( state ) => {
  //   return{
  //     access: state.auth.user.access,
  //     refresh: state.auth.user.refresh,
  //   }
  // }
  export default connect(mapStateToProps)(Companyprofile);
  
  // export default Companyprofile;

    
