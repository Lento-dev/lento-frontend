import '../styles/profile.scss';
import {React,Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrollableTabsButtonForce from './tabs';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import Follow from './follow'
import '../styles/follow.css'
import axios from 'axios'
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
import Image from '../assets/img/helpHand.jpg';
import Paper from "@material-ui/core/Paper";
import { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Tab from '@mui/material/Tab';
import Tabs from "@material-ui/core/Tabs";
import CircularProgress from '@mui/material/CircularProgress';
import { connect } from "react-redux";
import Helmet from 'react-helmet';
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
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
// import AppRegistrationIcon from '@material-ui/icons/AppRegistration';
import HelpIcon from '@material-ui/icons/Help';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import InfoIcon from '@mui/icons-material/Info';
import RecipeReviewCard from './postcard';
import { purple,green } from '@mui/material/colors';





// https://some-website.com/my-social-media-url


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


class UserProfile extends Component {
  state = { 
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    job:"",
    birthdate:"",
    region:"",
    aboutme:"",
    education:"",
    joineddate:"",
    proimageurl:"",
    res:"",
    value : 0,
   }
  
  componentDidMount()
  {
    var token = localStorage.getItem("token");
    token.replaceAll('"', '')
    console.log(token);
    var config = {
      method: 'get',
      url: 'http://127.0.0.1:8000/api/account/user-profile/',
      headers: { 
        'Authorization': 'Token '+ "213b2e47bc472211c4fa19746271d0973f08a671", 
      }
    };


    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      this.setState({firstname:response.data.firstname})
      this.setState({lastname:response.data.lastname})
      this.setState({email:response.data.email})
      this.setState({username:response.data.username})
      this.setState({birthdate:response.data.date_birth})
      this.setState({region:response.data.country})
      this.setState({job:response.data.job})
      this.setState({education:response.data.education})
      this.setState({joineddate:response.data.date_joined})
      this.setState({aboutme:response.data.bio})
      this.setState({proimageurl:response.data.image})
      this.setState({res:response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }

  handleChange = (event, newValue) => {
    this.setState({value:newValue});
  };




  render() {
    return (
      <div >
<Grid item >
              <div className="backgroundimagehome"> 
              </div>        
              </Grid>
          <Grid item xs={12} container>
          <Stack direction="row" sx={{ maxWidth: 345 }} style={{ marginTop: "-8rem" }}>
              <Stack direction="photo" spacing={2} sx={{ maxWidth: 345 }} style={{ marginLeft: "8.5rem", marginTop: "-2.4rem" }}>               

              {/* <Grid item xs={10}>
                <Stack   style={{ marginLeft: "15rem", marginTop: "-14rem", marginBottom:"2rem" }}>
                    <Stack spacing={2} style={{ marginTop: "1rem" }}> */}
                  <Avatar
                      alt="Remy Sharp"
                      src={this.state.proimageurl}
                      sx={{ width: 330, height: 330 }}
                  />
              </Stack>
          </Stack>
      </Grid>


      <Grid item xs={12}>
       <ScrollableTabsButtonForce data={this.state.res}></ScrollableTabsButtonForce>
        </Grid>

       

      
      
      </div>
    );
  }
}



export default UserProfile;
























