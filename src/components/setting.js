import React, { useState, useEffect } from 'react';
import {
   Button, CssBaseline, TextField, FormControlLabel, Grid, Box,
  Typography, Container
} from '@mui/material';

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
  const [checked, setChecked] = React.useState(false);
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
        oldpassword: '',
        password: '',
        confirmpassword: '',
    },
    validationSchema: validationSchema,
  });


  const handleCheck = (event) => {
    setChecked(event.target.checked);
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
  return (
      <div>
      <Helmet bodyAttributes={{ style: 'background-color : #e5ecdf' }}></Helmet>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Paper elevation={3} sx={{borderRadius: 4, display: 'flex' }}>
            <Tabs  textColor="secondary" 
              indicatorColor="secondary"
              onChange={handleChange} aria-label="secondary tabs example" value={value}>
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


                  <Grid item xs={12} textAlign="right">
                    <Button type="submit"
                      variant="contained"
                      style={{ backgroundColor: '#e6835a', color: '#FFFFFF', textTransform: 'unset',width:'150px' }}>
                    {loadingE ? 
                        <CircularProgress style={{color: "#fff"}}  size="1.5rem"/>
                        : "Change email"}
                  </Button>


                  </Grid>

                  <Divider style={{ width: '100%', alignItems: "center", marginTop: '2rem' }}/>
                  <Grid item xs={12} textAlign="left">
                <Typography>
                Change your password
                  </Typography>
                </Grid>
                
                  <Grid item xs={12}>
                    <TextField
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

                <Grid item xs={5}>
                <FormControlLabel
                  control={
                    <Switch 
                    checked={checked}
                  onChange={handleCheck}
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
                    <Switch 
                    checked={checked}
                  onChange={handleCheck}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                  }
                  label="Display my profile for other people"
                />
              </Grid>

              </Grid> 

              {/* <Grid container justifyContent="flex-end">
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

              </Grid> */}
 
            </TabPanel>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default Setting;