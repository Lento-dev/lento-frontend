import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Divider, Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import "../styles/signup.css";
import Helmet from "react-helmet";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import Image from "../assets/illustrations/welcome.svg";
import { register } from "../actions/auth";
import { connect } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { clearMessage } from "../actions/message";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import MyTextField from './ModifiedTextField';

import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";

function SignUp() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [verifyEmailDialogOpen, setVerifyEmailDialogOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [openm, setOpenm] = useState(false);
  const [errors, setErrors] = useState({});
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const BASE_URL = "http://172.17.3.154/api";

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setMessage(null);

    setOpenm(false);
  };

  const handleVerifyEmailDialogClickOpen = () => {
    setVerifyEmailDialogOpen(true);
  };

  const handleVerifyEmailDialogClose = () => {
    setVerifyEmailDialogOpen(false);
    history.push("/signin");
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const validate = () => {
    let tmpErrors = {};

    switch (true) {
      case !values.firstname:
        tmpErrors["firstname"] = "Please enter your first name.";
        break;
      case !values.firstname.match(/^[a-zA-Z]+$/):
        tmpErrors["firstname"] = "First name can include only letters";
        break;
      case values.firstname.length > 150:
        tmpErrors["firstname"] = "First name can be at most 150 characters.";
        break;
      default:
        break;
    }

    switch (true) {
      case !values.lastname:
        tmpErrors["lastname"] = "Please enter your last name.";
        break;
      case !values.lastname.match(/^[a-zA-Z]+$/):
        tmpErrors["lastname"] = "Last name name can include only letters";
        break;
      case values.lastname.length > 150:
        tmpErrors["lastname"] = "Last name can be at most 150 characters.";
        break;
      default:
        break;
    }

    switch (true) {
      case !values.email:
        tmpErrors["email"] = "Please enter your email address.";
        break;
      case values.email !== "":
        var pattern = new RegExp(
          /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        if (!pattern.test(values.email)) {
          tmpErrors["email"] = "Please enter a valid email address!";
        }
        break;
      case values.email.length > 255:
        tmpErrors["email"] = "Email can be at most 255 characters.";
        break;
      case !values.email.length < 1:
        tmpErrors["email"] = "Email can be at least 1 character.";
        break;
      default:
        break;
    }
    switch (true) {
      case !values.username:
        tmpErrors["username"] = "Please enter a username.";
        break;

      default:
        break;
    }

    switch (true) {
      case !values.password:
        tmpErrors["password"] = "Please enter a password.";
        break;
      case values.password.length < 8:
        tmpErrors["password"] = "Passwords must at least be 8 characters.";
        break;
      default:
        break;
    }

    switch (true) {
      case !values.confirmpassword:
        tmpErrors["confirmpassword"] = "Please repeat your password.";
        break;
      case values.password !== values.confirmpassword:
        tmpErrors["confirmpassword"] = "Passwords don't match!";
        break;
      default:
        break;
    }

    setErrors(tmpErrors);
  };

  const handleSignUpButton = (e) => {
    validate();
    let filled = Object.keys(errors).length === 0;
    console.log("error", errors);
    console.log("filled", filled);

    if (filled) {
      setLoading(true);
      var formData = new FormData();
      formData.append("first_name", values.firstname);
      formData.append("last_name", values.lastname);
      formData.append("username", values.username);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("password_confirm", values.confirmpassword);

      return axios
        .post(BASE_URL + "/account/register/", formData)
        .then((res) => {
          setLoading(false);
          handleVerifyEmailDialogClickOpen();
        })
        .catch((error) => {
          setLoading(false);
          console.log(error.response)
          if (error.response.status == 400) {
            let m = "";
            for (var key in error.response.data) {
              m += error.response.data[key] + " ";
            }
            console.log(m);
            setMessage(m);
            setOpenm(true);
          }
        });
    }
  };

  // const handleContinueWithGoogle = (response) => {
  //   props.googleLogin(response, history, setLoading);
  //   console.log(response);
  // };

  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #fff" }}></Helmet>
      <Container component="main">
        <CssBaseline />
        <Box
          className="signupPerson-container"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 4,
            backgroundColor: "#fff",
            flexGrow: 1,
            justifyContent: "center",
          }}
          style={{
            marginTop: "3vh",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <Grid container spacing={3}>
            <Grid
              item
              md
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="col align-items-center signup-img">
                <img
                  src={Image}
                  width="100"
                  height="100"
                  className="responsive"
                  alt="signup logo"
                />
              </div>
            </Grid>
            <Grid item md>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Grid container sx={{ paddingBottom: "3vh" }}>
                        <Grid item xs={6} textAlign="left">
                          <Typography fontWeight="bold" fontSize="1.1rem">
                            Sign up
                          </Typography>
                        </Grid>
                        <Grid item xs={6} textAlign="right">
                          <Typography fontSize="0.85rem">
                            {" "}
                            Have an account?{" "}
                            <Link href="/signin" underline="none">
                              {"Sign in"}
                            </Link>{" "}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <MyTextField
                        label="First Name"
                        name="firstname"
                        id="firstname"
                        variant="outlined"
                        required
                        fullWidth
                        value={values.firstname}
                        onChange={handleChange("firstname")}
                        error={Boolean(errors["firstname"])}
                        helperText={errors["firstname"]}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MyTextField
                        label="Last Name"
                        name="lastname"
                        id="lastname"
                        variant="outlined"
                        required
                        fullWidth
                        value={values.lastname}
                        onChange={handleChange("lastname")}
                        error={Boolean(errors["lastname"])}
                        helperText={errors["lastname"]}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MyTextField
                        label="Email"
                        name="email"
                        id="email"
                        type="email"
                        variant="outlined"
                        required
                        fullWidth
                        value={values.email}
                        onChange={handleChange("email")}
                        error={Boolean(errors["email"])}
                        helperText={errors["email"]}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MyTextField
                        label="User Name"
                        name="username"
                        id="username"
                        variant="outlined"
                        required
                        fullWidth
                        value={values.username}
                        onChange={handleChange("username")}
                        error={Boolean(errors["username"])}
                        helperText={errors["username"]}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MyTextField
                        label="Password"
                        name="password"
                        id="password"
                        type="password"
                        variant="outlined"
                        required
                        fullWidth
                        value={values.password}
                        onChange={handleChange("password")}
                        error={Boolean(errors["password"])}
                        helperText={errors["password"]}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MyTextField
                        label="Confirm Password"
                        name="confirmpassword"
                        id="confirmpassword"
                        type="password"
                        variant="outlined"
                        required
                        fullWidth
                        value={values.confirmpassword}
                        onChange={handleChange("confirmpassword")}
                        error={Boolean(errors["confirmpassword"])}
                        helperText={errors["confirmpassword"]}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: "2vh" }}>
                      <Button
                        variant="contained"
                        size="large"
                        disabled={loading}
                        onClick={handleSignUpButton}
                        sx={{
                          textTransform: "unset",
                          backgroundColor: "#e6835a",
                          ":hover": {
                            bgcolor: "#ffa580",
                          },
                        }}
                        fullWidth
                      >
                        {loading ? (
                          <CircularProgress
                            style={{ color: "#fff" }}
                            size="1.6rem"
                          />
                        ) : (
                          "Sign up"
                        )}
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider>Or</Divider>
                    </Grid>
                    <Grid item xs={12}>
                      <GoogleLogin
                        clientId={googleClientId}
                        buttonText="LOGIN WITH GOOGLE"
                        // onSuccess={(response) =>
                        //   handleContinueWithGoogle(response)
                        // }
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
                      <Snackbar open={openm} autoHideDuration={2000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {message}
                  </Alert>
                </Snackbar>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Dialog
              open={verifyEmailDialogOpen}
              onClose={handleVerifyEmailDialogClose}
            >
              <DialogTitle color="green" >{"Signed up succesfully!"}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please check your email inbox. We have sent you a verification
                  link.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleVerifyEmailDialogClose}>OK</Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default SignUp;
