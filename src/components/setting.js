import React, { useState, useEffect } from 'react';
import {
   Button, CssBaseline, TextField, FormControlLabel, Grid, Box,
  Typography, Container
} from '@mui/material';
import MyTextField from './ModifiedTextField';
import Helmet from 'react-helmet';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'react-phone-input-2/lib/style.css';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import Tabs from "@material-ui/core/Tabs";
import Switch from '@mui/material/Switch';
import { connect } from "react-redux";
import Snackbar from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert";

import { useHistory } from 'react-router-dom';
import { CircularProgress } from "@mui/material";

import { alpha, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
  

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: orange[600],
    '&:hover': {
      backgroundColor: alpha(orange[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: orange[600],
  },
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };


const validationSchema = yup.object({
  oldpassword: yup.string()
  .required('This field is required.'),
  password: yup.string()
  .required('This field is required.')
    .max(15, 'Must be 15 characters or less')
    .min(8, 'Must be at least 8 characters'),
  confirmpassword: yup.string()
  .required('This field is required.')
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

function Setting() {
  const [loadingE, setLoadingE] = React.useState(false);
  const [loadingP, setLoadingP] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [openm, setOpenm] = useState(false);
  const token = localStorage.getItem('token');
  const headers = {"Authorization": `Token ${token}`};
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [value, setValue] = useState(0);
  const BASE_URL ='http://172.17.3.154/api';


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessage('');
    setOpenm(false);
  };

  const formik = useFormik({
    initialValues: {
        email: '',
        oldpassword: '',
        password: '',
        confirmpassword: '',
        switch1:'',
        switch2:'',
        experience:'',

    },
    validationSchema: validationSchema,
  });


  const handleCheck1 = (event) => {
    setChecked1(event.target.checked1);
  };

  const handleCheck2 = (event) => {
    setChecked2(event.target.checked2);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changePassword = () => {
    let filled = 
    !Boolean(formik.errors.oldpassword) && !Boolean(formik.errors.password) && !Boolean(formik.errors.confirmpassword)
    && formik.values.oldpassword !== '' && formik.values.password !== '' && formik.values.confirmpassword !== '';
     if(filled)
    {
      setLoadingP(true);
      var formData = new FormData();
      formData.append("old_password", formik.values.oldpassword);
      formData.append("password", formik.values.password);
      formData.append("password_confirm", formik.values.confirmpassword);
      console.log(formData)
      axios.post(BASE_URL + '/account/change_password/', formData, {headers})
      .then(res => {
        setLoadingP(false);
        setMessage('Your password changed succesfully.');
        setOpenm(true);
        console.log(res);
      })
      .catch(err => {
        let m = "";
        for (var key in err.response.data) {
          m += err.response.data[key] + " ";
        }
          setMessage(m);
          setOpenm(true);
        
        setLoadingP(false);

      })    
    }
    else{
      setMessage('Please fill the fileds above.');
      setOpenm(true);
    }
    console.log('message ', message);
    console.log('openm ', openm);
  } 

  useEffect(() => {
      axios.get(BASE_URL + '/account/user-profile/', {headers: headers})
          .then(res => {
              console.log(res.data);
              formik.setValues({
                email: res.data.email || '',
                experience: res.data.experience|| '',
              });
          })
          }, [])



  const changeEmail = () => {
    let filled = 
    !Boolean(formik.errors.email) && formik.values.email !== '';
    if (filled){
      setLoadingE(true);
    axios.put(BASE_URL + '/account/edit-profile/', 
    { 
      email: formik.values.email} , {headers})

      .then (res => {
        setLoadingE(false);
        setMessage('Your email changed succesfully.');
        setOpenm(true);
        console.log(res);
      })
      .catch(err => {
        setLoadingE(false);
        setMessage('Please enter new email.');
        setOpenm(true);
      });
  }
}

const changeExp = () => {
  let filled = 
  !Boolean(formik.errors.email) && formik.values.email !== '';
  if (filled){
    setLoadingE(true);
  axios.put(BASE_URL + '/account/edit-profile/', 
  { 
    experience: formik.values.experience} , {headers})

    .then (res => {
      setLoadingE(false);
      setMessage('Your informations was updated successfully!');
      setOpenm(true);
      console.log(res);
    })
    .catch(err => {
      setLoadingE(false);
      setMessage('try again');
      setOpenm(true);
    });
}
}
  
  return (
      <div>
      <Helmet bodyAttributes={{ style: 'background-color : #e5ecdf' }}></Helmet>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Paper elevation={3} sx={{borderRadius: 4, display: 'flex', marginTop: '3rem' }}>
            {/* <Tabs  textColor="secondary" 
              indicatorColor="secondary"
              onChange={handleChange} aria-label="secondary tabs example" value={value}>
              <Tab value={0} style={{marginLeft: "1rem", textTransform: 'unset'}} label="General" />
              <Tab value={1} style={{textTransform: 'unset'}} label="Permission" />
            </Tabs> */}

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
              <Tab value={0} style={{marginLeft: "1rem", textTransform: 'unset'}} label="General" />
              <Tab value={1} style={{textTransform: 'unset'}} label="Permission" />
                </Tabs>
        </Paper>
        <Paper elevation={3} sx={{ borderRadius: 6, display: 'flex' }} style={{ justifyContent: "center", marginTop: "1rem", marginBottom: "1rem", paddingLeft:'3rem' , paddingRight:'3rem', paddingBottom:'1rem'}}>
          
          <Grid container justifyContent="flex">
            <TabPanel value={value} index={0}>
                <Grid container spacing={2}>

                <Grid item xs={12} textAlign="left">
                <Typography>
                    Change your email address
                  </Typography>
                </Grid>

                  <Grid item xs={12}>
                    <MyTextField
                      fullWidth
                      autoComplete="email"
                      name="email"
                      id="email"
                      label="Email Address"
                      InputLabelProps={{
            shrink: true,
          }}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

                  <Grid item xs={12} textAlign="right">
                    <Button type="submit" onClick={changeEmail}
                      variant="contained"
                      style={{ backgroundColor:  '#e6835a', color: '#FFFFFF', textTransform: 'unset', width:'150px' }}>
                    {loadingP ? 
                        <CircularProgress style={{color: "#fff"}}  size="1.5rem"/>
                        : "Change email"}
                  </Button>
                  <Snackbar open={openm} autoHideDuration={2000} onClose={handleClose}>
                  <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
                    {message}
                  </Alert>
                  </Snackbar>


                  </Grid>

                  <Divider style={{ width: '100%', alignItems: "center", marginTop: '2rem' }}/>
                  <Grid item xs={12} textAlign="left">
                <Typography>
                Change your password
                  </Typography>
                </Grid>
                
                  <Grid item xs={12}>
                    <MyTextField
                      fullWidth
                      type="password"
                      autoComplete="given-name"
                      name="oldpassword"
                      id="oldpassword"
                      label="Old password"
                      value={formik.values.oldpassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.oldpassword && Boolean(formik.errors.oldpassword)}
                      helperText={formik.touched.oldpassword && formik.errors.oldpassword}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <MyTextField
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
                    <MyTextField
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

                  <Grid item xs={12} textAlign="right">
                    <Button type="submit" onClick={changePassword}
                      variant="contained"
                      style={{ backgroundColor:  '#e6835a', color: '#FFFFFF', textTransform: 'unset', width:'150px' }}>
                    {loadingP ? 
                        <CircularProgress style={{color: "#fff"}}  size="1.5rem"/>
                        : "Change password"}
                  </Button>
                  <Snackbar open={openm} autoHideDuration={2000} onClose={handleClose}>
                  <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
                    {message}
                  </Alert>
                  </Snackbar>

                  </Grid>
               </Grid>
            </TabPanel>


            <TabPanel value={value} index={1}>
              <Grid container spacing={3} style={{marginTop: "-5px", marginBottom:"1rem"}}>
              <Typography style={{ paddingTop: "0px", paddingLeft:'1.5rem' , paddingRight:'0.7rem', paddingBottom:'0.2rem' }}>
                    Experiences acquired from this site
                </Typography>

                <Grid item xs={12}>
                    <MyTextField
                      fullWidth
                      placeholder="experience"
                      multiline
                      autoComplete="experience"
                      name="experience"
                      id="experience"
                      label="About your experiences"
                      InputLabelProps={{
            shrink: true,
          }}
                  value={formik.values.experience}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.experience && Boolean(formik.errors.experience)}
                  helperText={formik.touched.experience && formik.errors.experience}
                />
                  </Grid>

                <Grid item xs={5}>
                <FormControlLabel
                  control={
                    <GreenSwitch  
                    checked1={checked1}
                  onChange={handleCheck1}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                  }
                  label="Display my phone number"
                />
              </Grid>

              <Divider style={{  color: '#fffff' ,width: '59%',marginLeft: "2.5rem", marginTop: "1rem",marginBottom:"0rem",alignItems: "center" }}/>

              <Grid item xs={6}>
                <FormControlLabel
                  control={
                    <GreenSwitch  
                    checked2={checked2}
                  onChange={handleCheck2}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                  }
                  label="Display my profile for other people"
                />
              </Grid>

              </Grid> 

              <Grid item xs={12} textAlign="right">
                    <Button type="submit" onClick={changeExp}
                      variant="contained"
                      style={{ backgroundColor:  '#e6835a', color: '#FFFFFF', textTransform: 'unset', width:'150px' }}>
                    {loadingP ? 
                        <CircularProgress style={{color: "#fff"}}  size="1.5rem"/>
                        : "Submit"}
                  </Button>
                  <Snackbar open={openm} autoHideDuration={2000} onClose={handleClose}>
                  <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
                    {message}
                  </Alert>
                  </Snackbar>
                </Grid>
 
            </TabPanel>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default Setting;
