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
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import InfoIcon from '@mui/icons-material/Info';
import RecipeReviewCard from './postcard';
import { purple,green } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
// import { styled } from '@mui/material/styles';
// color: #20b2aa;
// const CustomizedTabs = styled(Tabs)`
//   indicatorColor : #6d9736;
//   textColor : #6d9736;
// `;


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

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
    {/* // <div className={classes.root}> */}
      {/* <AppBar position="static" color="white"> */}
        <Tabs
          value={value}
          onChange={handleChange}
          // variant="scrollable"
          // scrollButtons="on"
          // indicatorColor=	'primary'
          // textColor="primary"
          style={{color:'#465832'}}
          className={classes.tabs}
          centered
        >
          <Tab label={<div style={{fontFamily:'icofont',fontSize:'21px'}}>Posts</div>} icon={<AppRegistrationIcon />} {...a11yProps(0)} />
          <Tab label={<div style={{fontFamily:'icofont',fontSize:'21px'}}>About</div>} icon={<InfoIcon />} {...a11yProps(1)} />
          <Tab label={<div style={{fontFamily:'icofont',fontSize:'21px'}}>Followers</div>} icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label={<div style={{fontFamily:'icofont',fontSize:'21px'}}>Followings</div>} icon={<PersonPinIcon />} {...a11yProps(3)} />
          {/* <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} /> */}
        </Tabs>
      {/* </AppBar> */}
      <TabPanel className='tabs' value={value} index={0}>
        {/* Item One */}
        <div style={{paddingLeft:'800px',paddingTop:'50px'}}>
          <RecipeReviewCard></RecipeReviewCard>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div style={{paddingLeft:'850px',paddingTop:'10px',width:'1700px',textAlign:'left'}}>
      <p style={{fontFamily:'icofont' , fontSize:'30px',fontWeight:'bold'}}>About me : 
          
          <p style={{fontFamily:'icofont' , fontSize:'25px',fontWeight:'normal',width:'800px'}}>I love helping others in any way I can. This is why I am studying nursing. Here I share my experiences of caring for animals and helping others.</p>
        </p>
        <p style={{fontFamily:'icofont' , fontSize:'30px',fontWeight:'bold'}}>Education : 
          
          <p style={{fontFamily:'icofont' , fontSize:'25px',fontWeight:'normal'}}>studying nursing at Columbia uni</p>
        </p>
        <p style={{fontFamily:'icofont' , fontSize:'30px',fontWeight:'bold'}}>Volunteering work experience : 
          <p style={{fontFamily:'icofont' , fontSize:'25px',fontWeight:'normal'}}>worked at refugees' camp in Poland</p>
        </p>
    
        <p></p>
      </div>
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
    {/* // </div> */}
    </div>
  );
}