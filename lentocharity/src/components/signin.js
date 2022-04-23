import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import {
  Button,
  TextField,
  Link,
  Grid,
  Paper,
  Typography,
  Divider,
  CircularProgress,  Snackbar,
  Alert,
  Container,
} from "@mui/material";
import { connect } from 'react-redux';
import Helmet from "react-helmet";
import { FcGoogle } from "react-icons/fc";
import Image from "../assets/illustrations/signin.svg";
import { login, googleLogin } from "../actions/auth";
import { clearMessage } from '../actions/message';
import GoogleLogin from "react-google-login";
const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;



function SignIn(props) {
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    
    props.clearMessage();

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
    switch (true) {
      case !values.password:
        tmpErrors["password"] = "Please enter your password."
        break;

      default:
        break;
    }


    setErrors(tmpErrors);
  }
  const handleSignInButton = (e) => {
    validate();
    let filled = Object.keys(errors).length === 0;
    console.log(filled)
    if  (filled) 
    {
      console.log('we are in requesting to sign in')
      setLoading(true);
      props.login(values.email, values.password)
      .then((res) => {
        setLoading(false);
        history.push('/profile');
      })
      .catch(err => {
        setLoading(false);
      })
    }
    
  }

  const handleContinueWithGoogle = (response) => {
    props.googleLogin(response, history, setLoading);
    console.log(response);
  };


  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #fff" }} />

      <Container sx={{ padding: "4%" }} component="main">
        <Paper
          className="signinPage"
          elevation={0}
          sx={{
            backgroundColor: "#ecf2e8",
            borderRadius: 4,
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={5}
              lg={5}
              textAlign="center"
              sx={{ borderRadius: 4, backgroundColor: "#8b9b74" }}
            >
              <div className="signin-img">
                <img
                  src={Image}
                  width="500"
                  height="500"
                  className="responsive"
                  alt="login logo"
                />
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              md={7}
              lg={7}
              sx={{ backgroundColor: "#ecf2e8", borderRadius: 4 }}
            >
              <Grid
                container
                sx={{
                  paddingTop: "5%",
                  paddingRight: "15%",
                  paddingLeft: "15%",
                }}
              >
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Grid container sx={{ paddingBottom: "5vh" }}>
                        <Grid item xs={6} textAlign="left">
                          <Typography fontWeight="bold" fontSize="1.1rem">
                            Sign in
                          </Typography>
                        </Grid>
                        <Grid item xs={6} textAlign="right">
                          <Typography fontSize="0.85rem">
                            {" "}
                            Not a member?{" "}
                            <Link href="/" underline="none">
                              {"Register"}
                            </Link>{" "}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
                      <TextField
                        label="Password"
                        name="password"
                        id="password"
                        type="password"
                        variant="outlined"
                        required
                        fullWidth
                        value = {values.password}
                        onChange = {handleChange('password')}
                        error={
                          Boolean(errors["password"])
                        }
                        helperText={
                          errors["password"]
                        }
                      />
                    </Grid>
                    <Grid item xs={12} textAlign="left">
                      <Typography fontSize="0.85rem">
                        <Link href="/forgot-password" underline="none">
                          {"Forgot password?"}
                        </Link>{" "}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ marginTop: "2vh" }}>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={handleSignInButton}
                        sx={{
                          textTransform: "unset",
                          backgroundColor: "#e6835a",
                          ":hover" : {
                            bgcolor: '#ffa580'
                          }
                        }}
                        fullWidth
                        disabled = {loading}
                      >
                    {loading ? 
                        <CircularProgress style={{color: "#fff"}} size="1.6rem"/>
                        : "Sign in"}
                  </Button>
                    </Grid>

                    <Grid item xs={12}>
                      <Divider>Or</Divider>
                    </Grid>
                    <Grid item xs={12}>
                    <GoogleLogin
                        clientId={googleClientId}
                        buttonText="LOGIN WITH GOOGLE"
                        onSuccess={(response) =>
                          handleContinueWithGoogle(response)
                        }
                        render={(renderProps) => (
                          <Button
                            variant="outlined"
                            fullWidth
                            size="large"
                            disabled={renderProps.disabled}
                            onClick={renderProps.onClick}
                            sx={{
                              textTransform: "unset",
                              borderColor: "#e6835a",
                              color: "black",
                            }}
                            startIcon={<FcGoogle />}
                          >
                            Continue with Google
                          </Button>
                        )}
                        onFailure={(err) =>
                          console.log("Google Login failed", err)
                        }
                      />

                    </Grid>
                    <Snackbar
                      open={props.openMessage}
                      autoHideDuration={4000}
                      onClose={handleClose}
                      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                      <Alert
                        onClose={handleClose}
                        variant="filled"
                        severity={
                          props.message === "Signed up successfully!" 
                            ? "success"
                            : "error"
                        }
                        sx={{ width: "100%" }}
                      >
                        {props.message}
                      </Alert>
                    </Snackbar>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}



const mapDispatchToProps = { login, clearMessage };
const mapStateToProps = ( state ) => {
  return{
    message: state.message.message,
    openMessage: state.message.openMessage,
  }
}

export default connect(mapStateToProps ,mapDispatchToProps)(SignIn);
// export default SignIn;
