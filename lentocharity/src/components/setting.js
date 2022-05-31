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
import MuiAlert from '@mui/material/Alert';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from "@mui/material";
  

const validationSchema = yup.object({
  oldpassword: yup.string()
  .required('Required.'),
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

function Setting() {
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
        oldpassword: '',
        password: '',
        confirmpassword: '',
    },
    validationSchema: validationSchema,
  });
  const token = localStorage.getItem('token')

  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = useState(0);
  const [message,setMessage] = React.useState('');
  const BASE_URL = process.env.BASE_URL;

  const headers = {"Authorization": `Bearer ${token}`};

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changePassword = () => {
    let filled = Object.keys(formik.errors).length === 0;
    if(filled)
    {
      var formData = new FormData();
      formData.append("old_password", formik.oldpassword);
      formData.append("password", formik.password);
      formData.append("password_confirm", formik.confirmpassword);
      axios.post(BASE_URL + '/account/change_password/', formData)
      .then(res => console.log(res))
      .else(err => console.log(err))
    }
  }
  return (
      <div>
      <Helmet bodyAttributes={{ style: 'background-color : #e5ecdf' }}></Helmet>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Typography component="h1" variant="h5" style={{ paddingTop: "1.5rem", paddingBottom: "0.5rem", paddingLeft: "1.5rem" }}>
        </Typography>
        <Paper elevation={3} sx={{borderRadius: 4, display: 'flex' }} style={{marginTop: "0.2rem"}}>
            <Tabs  textColor="secondary" 
              indicatorColor="secondary"
              onChange={handleChange} aria-label="secondary tabs example" value={value}>
              <Tab value={0} style={{marginLeft: "1rem", textTransform: 'unset'}} label="General" />
              <Tab value={1} style={{textTransform: 'unset'}} label="Permission" />
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
                      sx={{ mt: 2.5, mb: 0 }} 
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

                  <Grid container justifyContent="flex-end">
                    <Button type="submit" onClick={changePassword}
                      variant="contained"
                      sx={{ mt: 2.5, mb: 0 }} 
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

                    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity={message === "Please fill in the blanks." ? "error" : "success"} sx={{ width: '100%' }}>
                    {message}
                  </Alert>
                </Snackbar>

              </Grid> */}
            </TabPanel>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   let access = "";
//   let refresh = "";

//   if (state.auth.user != null) {
//       access = state.auth.user.access;
//       refresh = state.auth.user.refresh;
//   }
//   return {
//       message: state.message.message,
//       openMessage: state.message.openMessage,
//       isLoggedIn: state.auth.isLoggedIn,
//       access,
//       refresh,
//   }
// }

export default Setting;
