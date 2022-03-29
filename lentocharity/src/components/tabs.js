import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
// import AppRegistrationIcon from '@material-ui/icons/AppRegistration';
import HelpIcon from '@material-ui/icons/Help';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import InfoIcon from '@mui/icons-material/Info';
import RecipeReviewCard from './postcard';
import { purple,green } from '@mui/material/colors';
import {
  Avatar, CssBaseline, Link, Grid, Box, Button,
  Typography, Container, Stack
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Paper from "@material-ui/core/Paper";
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabs: {
    "& .MuiButtonBase-root.MuiTab-root": {
      fontSize: 20,
      // color : "#6d9736"
    },
    "& .MuiTabs-indicator": {
      // display: "none",
      backgroundColor: "#6d9736"
    },
    // "& .Mui-selected": {
    //   textDecoration: "underline"
    // }
  },
 
}));




const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#6d9736',
    },
  },
});

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
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

export default function ScrollableTabsButtonForce(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      
      <Paper elevation={3} sx={{borderRadius: 4, display: 'flex' }} style={{marginTop: "-10rem"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          style={{color:'#465832'}}
          className={classes.tabs}
          centered
        >
          <Tab label={<div style={{fontFamily:'icofont',fontSize:'21px'}}>Posts</div>} icon={<AppRegistrationIcon />} {...a11yProps(0)} />
          <Tab label={<div style={{fontFamily:'icofont',fontSize:'21px'}}>About</div>} icon={<InfoIcon />} {...a11yProps(1)} />
          <Tab label={<div style={{fontFamily:'icofont',fontSize:'21px'}}>Followers</div>} icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label={<div style={{fontFamily:'icofont',fontSize:'21px'}}>Followings</div>} icon={<PersonPinIcon />} {...a11yProps(3)} />
        </Tabs>
      </Paper>
      <TabPanel className='tabs' value={value} index={0}>
        {/* Item One */}
        {/* <div style={{paddingLeft:'800px',paddingTop:'50px'}}> */}
        {/* <Grid container> */}
 

<Grid item xs={8} md={4} style={{marginLeft:"50rem"}}>
    <RecipeReviewCard></RecipeReviewCard>
</Grid>


</TabPanel>

        <TabPanel value={value} index={1}>
        {/* <Grid container direction="column" item xs={4}>
  <Grid
    item
    className={classes.outerColumn}
    container
    direction="column"
    alignItems="flex-end"
    justify="flex-start" //in MUI v5 this prop is renamed justifyContent
  >
    <Typography>Top R.</Typography>
  </Grid>
  <Grid
    item
    className={classes.outerColumn}
    container
    direction="row"
    alignItems="center"
    justify="flex-end"
  >
    <Typography>Center R.</Typography>
  </Grid>
  <Grid
    item
    className={classes.outerColumn}
    container
    direction="column"
    alignItems="flex-end"
    justify="flex-end"
  >
    <Typography>Bottom R.</Typography>
  </Grid>
</Grid> */}

<Grid
  item
  container
  // direction="row"
  alignItems="center"
  justifyContent="flex-end"
  // sx={{marginRight:"50rem"}}
>
                    <Grid item xs={8} md={4} direction="column" display="flex" style={{alignItems: "center", marginTop: "2rem" }}>
                            <Container component="main">
                            <Paper elevation={3} sx={{ borderRadius: 6, display: 'flex' }} style={{ marginTop: "1rem", marginBottom: "1rem", padding: "2rem" }}>
                                    <Grid container style={{ padding: "4px" }}>
                                        <Grid item xs={12}>
                                            <Typography component="h3" style={{ fontWeight: "bold" }}>About me</Typography>
                                            <Divider style={{ width: '100%', marginTop: "0.5rem",marginBottom:"1rem",alignItems: "center" }}/>
                                            <h4></h4>
                                        </Grid>
                                        <Typography style={{ textAlign: "justify" }}>
                                            {props.data.bio}
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
                                            {props.data.experience}
                                        </Typography>
                                    </Grid>
                                </Paper>

                            </Container>

</Grid>
                        </Grid>
      </TabPanel>



      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      
    </div>
  );
}