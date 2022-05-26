import React, { useState, useEffect, setState } from 'react';
import {
  Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box,
  Typography, Container
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useTheme } from '@mui/material/styles';
// import '../signup.css';
import Helmet from 'react-helmet';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'react-phone-input-2/lib/style.css';
import { Input } from '@mui/material';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import Tabs from "@material-ui/core/Tabs";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { connect } from "react-redux";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { useHistory } from 'react-router-dom';
import { CircularProgress } from "@mui/material";

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
  

const tags = [
    'Angular' ,
    'jQuery' ,
    'Polymer' ,
    'React' ,
    'Vue.js' ,
    'Python' ,
    'Javascript' ,
    'Java' ,
    'C#' ,
    'Electronics' ,
    'Induction welding' ,
    'Heat treatment' ,
    'Medical industry',
];

const validationSchema = yup.object({
  password: yup.string()
    .max(15, 'Must be 15 characters or less')
    .min(8, 'Must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, 'Your password should contain at least 1 lowercase letter, 1 uppercase letter and a number.'),
  confirmpassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords don\'t match!'),
  email: yup.string().email('Invalid email address'),
});


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div {...other}>
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  }

function UserSetting(props) {
  const [loadingE, setLoadingE] = React.useState(false);
  const [loadingP, setLoadingP] = React.useState(false);
  const [loadingT, setLoadingT] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    // props.clearMessage();
  };

  const formik = useFormik({
    initialValues: {
        password: '',
        confirmpassword: '',
        skill:'',
        tags:[],
        switch:'',
        email:'',
    },
    validationSchema: validationSchema,
  });

//   const theme = useTheme();
  const history = useHistory();
  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = useState(0);
  const [techName, setTechName] = useState([]);
  const [benName, setBenName] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [message,setMessage] = React.useState('');
  const [resStatus, setResstatus] = useState([]);
  const [state, setState] = useState(null);

  const headers = {"Authorization": `Bearer ${props.access}`};

  const handlechangepass = () => {
    let filled = !Boolean(formik.errors.password) && !Boolean(formik.errors.confirmpassword);

    if  (filled){
      setLoadingP(true);
        axios.put('http://185.190.39.17:8888/profile/changepasswordinprofile/', 
        {newpassword: formik.values.password, confirmnewpassword: formik.values.confirmpassword,}, {headers})
        .then(function (response) {
          setLoadingP(false);
          setOpen(true);
          console.log('status :', response.status);
          if (response.status === 200){
            setResstatus(response.status);
            setMessage('Your password was changed successfully!');
            setResstatus(response.status);
          }
          console.log(response);
        })
        .catch(function (error) {
          setLoadingP(false);
          setOpen(true);
          setMessage("Please enter new password.");
          // setResstatus(error);
          console.log(error);
        });
    }
    
  };


  const handletag = () => {
    
    let filled = 
    !Boolean(formik.errors.skill) && (techName);

    if (filled){
      setLoadingT(true);
    axios.put('http://185.190.39.17:8888/profile/usertags/', 
      {
        recveiveemails: checked,
        tags: techName,
        skill: formik.values.skill},{headers})
        .then(function (response) {
          setLoadingT(false);
          setOpen(true);
          console.log('status :', response.status);
          if (response.status === 200){
            setResstatus(response.status);
            setMessage('Your informations was updated successfully!');
            setResstatus(response.status);
          }
          console.log(response);
        })
        .catch(function (error) {
          setLoadingT(false);
          setOpen(true);
          setMessage('Please fill in the blanks.');
          // setResstatus(error);
          console.log(error);
        });
  }
}

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleemail = () => {
    console.log(formik.values.email);
    let filled = 
    !Boolean(formik.errors.email);

    if (filled){
      setLoadingE(true);
    axios.put('http://185.190.39.17:8888/profile/changeemailinprofile/', 
      {
        email: formik.values.email},{headers})
        .then(function (response) {
          setLoadingE(false);
          setOpen(true);
          console.log('status :', response.status);
          if (response.status === 200){
            setResstatus(response.status);
            setMessage('Your email address was changed successfully!');
            setResstatus(response.status);
          }
          console.log(response);
        })
        .catch(function (error) {
          setLoadingE(false);
          setOpen(true);
          setMessage('Please enter new email.');
          // setResstatus(error);
          console.log(error);
        });
    }
  }


  useEffect(() => {
    axios.get('http://185.190.39.17:8888/profile/getsetting/' ,{headers})
    .then(res => {
      console.log(res.data);
      setState(res.data);
      formik.setValues({
        // recveiveemails: checked,
        skill: res.data.skill || '',
        email: res.data.email || '',
        // resive: res.data.establishment || '',
      });
      setTechName(res.data.tags)
      setChecked(res.data.recveiveemails)
  })
  }, [])


  // useEffect(() => {
  //   axios.get('http://185.190.39.17:8888/profile/getemail/' ,{headers})
  //   .then(res => {
  //     console.log(res.data);
  //     setState(res.data);
  //     formik.setValues({
  //       email: res.data.email || '',
  //     });
  // })
  // }, [])


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div style={{ backgroundColor: '#e5ecdf', backgroundSize:'cover'}}>
      <Helmet bodyAttributes={{ style: 'background-color : #e5ecdf' }}></Helmet>
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Typography component="h1" variant="h5" style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem", paddingLeft: "1.5rem" }}>
          {/* Setting */}
        </Typography>
        <Paper elevation={3} sx={{borderRadius: 4, display: 'flex' }} style={{marginTop: "1rem"}}>
            <Tabs textColor="secondary"
              indicatorColor="secondary"
              onChange={handleChange} aria-label="secondary tabs example" value={value}>
              <Tab value={0} style={{marginLeft: "1rem", textTransform: 'unset'}} label="General" />
              <Tab value={1} style={{textTransform: 'unset'}} label="Permission" />
              {/* <Tab value={2} label="Gallery" /> */}
            </Tabs>
        </Paper>
        <Paper elevation={3} sx={{ borderRadius: 6, display: 'flex' }} style={{ justifyContent: "center", marginTop: "1rem", marginBottom: "1rem", paddingTop: "1rem", paddingLeft:'3rem' , paddingRight:'3rem', paddingBottom:'1rem'}}>
          
          <Grid container justifyContent="flex">
            <TabPanel value={value} index={0}>
                <Grid container spacing={3} style={{ marginTop: "-5px", marginBottom: "1rem" }}>


                <Typography style={{ paddingTop: "0px", paddingLeft:'1.5rem' , paddingRight:'0.7rem', paddingBottom:'0rem' }}>
                    Change your email address
                  </Typography>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      autoComplete="given-name"
                      name="email"
                      id="email"
                      label="Email Address"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>


                  <Grid container justifyContent="flex-end">
                    <Button type="submit"
                      variant="contained"
                      sx={{ mt: 2.5, mb: 0 }} onClick={handleemail}
                      style={{ backgroundColor: '#e6835a', color: '#FFFFFF', textTransform: 'unset',width:'150px' }}>
                    {loadingE ? 
                        <CircularProgress style={{color: "#fff"}}  size="1.5rem"/>
                        : "Change email"}
                  </Button>

                    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity={message === 'Please enter new email.' ? "error" : "success"} sx={{ width: '100%' }}>
                    {message}
                  </Alert>
                </Snackbar>
                  </Grid>

                  <Divider style={{ width: '100%', marginTop: "1rem",marginBottom:"1rem",alignItems: "center" }}/>

                
                  <Typography style={{ paddingTop: "0.3rem", paddingLeft:'1.5rem' , paddingRight:'0.7rem', paddingBottom:'0rem' }}>
                    Change your password
                  </Typography>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="password"
                      autoComplete="given-name"
                      name="password"
                      id="password"
                      label="New password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      helperText={formik.touched.password && formik.errors.password}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      type="password"
                      autoComplete="given-name"
                      name="confirmpassword"
                      id="confirmpassword"
                      label="Confirm new password"
                      value={formik.values.confirmpassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.confirmpassword && Boolean(formik.errors.confirmpassword)}
                      helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
                    />
                  </Grid>

                  <Grid container justifyContent="flex-end">
                    <Button type="submit"
                      variant="contained"
                      sx={{ mt: 2.5, mb: 0 }} onClick={handlechangepass}
                      style={{ backgroundColor:  '#e6835a', color: '#FFFFFF', textTransform: 'unset', width:'150px' }}>
                    {loadingP ? 
                        <CircularProgress style={{color: "#fff"}}  size="1.5rem"/>
                        : "Change password"}
                  </Button>

                    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity={message === "Please enter new password." ? "error" : "success"} sx={{ width: '100%' }}>
                    {message}
                  </Alert>
                </Snackbar>

                  </Grid>
               </Grid>
            </TabPanel>

            {/* <Divider style={{ width: '100%', marginTop: "1rem", alignItems: "center" }} /> */}

            <TabPanel value={value} index={1}>
              <Grid container spacing={3} style={{marginTop: "-5px", marginBottom:"1rem"}}>
              <Typography style={{ paddingTop: "0px", paddingLeft:'1.5rem' , paddingRight:'0.7rem', paddingBottom:'0.2rem' }}>
                    Experiences acquired from this site
                </Typography>

                <Grid item xs={12}>
                    <TextField
                      fullWidth
                      placeholder="skill"
                      multiline
                      autoComplete="given-name"
                      name="skill"
                      id="skill"
                      label="About your experiences"
                      value={formik.values.skill}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.skill && Boolean(formik.errors.skill)}
                      helperText={formik.touched.skill && formik.errors.skill}
                    />
                  </Grid>

                  {/* <Grid item xs={12}>
                  <Stack spacing={3}>
                    <Autocomplete
                      multiple
                      id="tags"
                      value={techName}
                      options={tags}
                      getOptionLabel={(option) => option}
                      onChange={(event, value) => { setTechName(value) }}
                      filterSelectedOptions
                      renderInput={(params) => (
                        <TextField
                          fullWidth 
                          required
                          {...params}
                          label="Technologies"
                        />
                      )}
                    />
                  </Stack>
                </Grid> */}



                <Grid item xs={5}>
                <FormControlLabel
                  control={
                    <Switch 
                    checked={checked}
                  onChange={handleCheck}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                    //<Switch onChange={handleChange} name="gilad" />
                  }
                  label="Display my phone number"
                />
              </Grid>

              <Divider style={{  color: '#fffff' ,width: '59%',marginLeft: "2.5rem", marginTop: "1rem",marginBottom:"0rem",alignItems: "center" }}/>

              <Grid item xs={6}>
                <FormControlLabel
                  control={
                    <Switch 
                    checked={checked}
                  onChange={handleCheck}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                    //<Switch onChange={handleChange} name="gilad" />
                  }
                  label="Display my profile for other people"
                />
              </Grid>

              </Grid> 


              <Grid container justifyContent="flex-end">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 2, mb: 2 }}
                      onClick={handletag}
                      style={{ backgroundColor:  '#e6835a', color: '#FFFFFF', textTransform: 'unset', width: '120px' }}>
                    {loadingT ? 
                        <CircularProgress style={{color: "#fff"}}  size="1.55rem"/>
                        : "Submit"}
                  </Button>

                    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity={message === "Please fill in the blanks." ? "error" : "success"} sx={{ width: '100%' }}>
                    {message}
                  </Alert>
                </Snackbar>

              </Grid>
            </TabPanel>
          </Grid>
        </Paper>
      </Container>
      </ThemeProvider>
    </div>
  );
}

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

export default UserSetting;
// export default connect(mapStateToProps)(UserSetting);
