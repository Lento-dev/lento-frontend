import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Container, Snackbar, Alert, CircularProgress
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Helmet from "react-helmet";
import Image from "../assets/img/forgotpassword.png";
import BASE_URL from './baseurl';
import axios from "axios";

const useStyles = makeStyles(theme => ({
  Title: {
    color: 'orange',
    fontSize: '3rem'
  },
  Descp: {
    color: 'black',
    fontSize: '1.5rem'
  }
}))


function ForgotPassword() {
  const classes = useStyles();
  const history = useHistory();
  const [message, setMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = useState({});
  const [openm, setOpenm] = useState(false);

  const [values, setValues] = useState({
    email: ''
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    
    setOpenm(false);

  };



  const validate = () => {
    let tmpErrors = {};

    switch (true) {
      case !values.email:
        tmpErrors["email"] = "Please enter your email address.";
        break;
      case values.email !== '':
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(values.email)) {
          tmpErrors["email"] = "Please enter a valid email address!";
        }
        break;
      default:
        break;
    }
    
    setErrors(tmpErrors);
  }

  const submitForgotPassword = () => {
    validate();
    let filled = Object.keys(errors).length === 0;
    if  (filled) 
    {
      setLoading(true);
      axios.post(BASE_URL + 'account/send_reset_password_link/', { "login": values.email })
      .then(
        (response) => {
          setMessage('Reset password link has been sent to your email address.');
          setOpenm(true);
          console.log(response);
          setLoading(false);

        })
        .catch((error) => {
  
          console.log(error);
          setMessage('This email has not been registered.');
          setOpenm(true);
          setLoading(false);

        })
    }

  }
  
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #ecf2e8" }} />

      <Container sx={{ padding: "4%" }} component="main">
        <Paper
          className="signinPage"
          elevation={0}
          sx={{
            borderRadius: 4,
            backgroundColor: "#ecf2e8",
          }}
        >
          <Grid container>
            <Grid item xs={7} textAlign="left" direction="column">
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Typography className={classes.Title} fontSize="3rem">
                    Forgot
                  </Typography>
                  <Typography className={classes.Title} fontSize="3rem">
                    Your Password?
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    className={classes.Descp}
                    fontSize="1.2rem"
                  >
                    Enter your email address to receive reset password link.
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    required
                    fullWidth
                    value={values.email}
                        onChange={handleChange('email')}
                        error={
                          Boolean(errors["email"])
                        }
                        helperText={
                          errors["email"]
                        }
                  />
                </Grid>
                <Grid item xs={3}>
                  <Button
                    
                    variant="contained"
                    fullWidth
                    size="large"
                    
                    onClick={submitForgotPassword}
                    sx={{
                      textTransform: "unset",
                      backgroundColor: "#556749",
                      marginLeft: '-2vh',
                      height: '55px',
                      ":hover" : {
                            bgcolor: '#e6835a'
                          }
                      
                    }}
                  >
                    {loading ? 
                        <CircularProgress style={{color: "#fff"}} size="1.6rem"/>
                        : "Submit"}                  </Button>
                </Grid>
                <Snackbar open={openm} autoHideDuration={2000} onClose={handleClose}>
                  <Alert variant="filled" onClose={handleClose} severity={message === 'Reset password link has been sent to your email address.' ? "success" : "error"} sx={{ width: '100%' }}>
                    {message}
                  </Alert>
                </Snackbar>
              </Grid>
            </Grid>

            <Grid item xs={5} sx={{ marginTop: "22vh" }}>
              <img
                src={Image}
                className="responsive"
                alt="forgot-password logo"
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default ForgotPassword;