import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Button,
  TextField,
  Link,
  Grid,
  Paper,
  Typography,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Container,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { connect } from "react-redux";
import { register, googleLogin } from "../actions/auth";
import { clearMessage } from "../actions/message";
import Helmet from "react-helmet";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";

function SignUp(props) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [verifyEmailDialogOpen, setVerifyEmailDialogOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
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
    props.openMessage = false;
    props.clearMessage();
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
    console.log('error', errors);
    console.log('filled', filled);
    if (filled) {
      setLoading(true);
      props
        .register(
          values.firstname,
          values.lastname,
          values.email,
          values.username,
          values.password,
          values.confirmpassword,
          history,
        )
        .then((res) => {
          setLoading(false);
          handleVerifyEmailDialogClickOpen();
        })
        .catch(err => {

          setLoading(false);
        })
    }
  };

  const handleContinueWithGoogle = (response) => {
    props.googleLogin(response, history, setLoading);
    console.log(response);
  };

  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #fff" }} />

      <Container sx={{ padding: "4%" }} component="main" className="signupPage">
        <Paper
          elevation={0}
          component="form"
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
              sx={{ borderRadius: 4, backgroundColor: "#8b9b74" }}
            >
              <Grid
                container
                sx={{
                  paddingTop: "5%",
                  paddingRight: "10%",
                  paddingLeft: "10%",
                  paddingBottom: "7%",
                  color: "white",
                }}
                spacing={2}
              >
                <Grid item xs={12}>
                  <Typography
                    fontWeight="bold"
                    textAlign="left"
                    fontSize="2rem"
                  >
                    Welcome to
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    fontWeight="bold"
                    textAlign="left"
                    fontSize="2.5rem"
                  >
                    Lento Charity
                  </Typography>
                </Grid>

                <Grid item xs={12} textAlign="left" sx={{ marginTop: "18vh" }}>
                  <Typography fontSize="1.3rem">
                    You can communicate with others.
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="left">
                  <Typography fontSize="1.3rem">
                    You can share your experiences with our charity.
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="left">
                  <Typography fontSize="1.3rem">
                    You can be helpful for the hurted animal.
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="left">
                  <Typography fontSize="1.3rem">
                    You can help people with what you don't need.
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="left">
                  <Typography fontSize="1.8rem">
                    Enjoy using our app.
                  </Typography>
                </Grid>
              </Grid>
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
                  paddingBottom: "7%",
                }}
                spacing={2}
              >
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
                      <TextField
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
                      <TextField
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
                      <TextField
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
                      <TextField
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
                      <TextField
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
                      <TextField
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
                          ":hover" : {
                            bgcolor: '#ffa580'
                          }
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
                      {/* <Button
                        variant="outlined"
                        fullWidth
                        size="large"
                        sx={{
                          textTransform: "unset",
                          borderColor: "#e6835a",
                          color: "black",
                        }}
                        startIcon={<FcGoogle />}
                      >
                        Continue with Google
                      </Button> */}
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
        </Paper>
      </Container>
    </div>
  );
}

const mapDispatchToProps = { register, googleLogin, clearMessage };
const mapStateToProps = (state) => {
  return {
    message: state.message.message,
    openMessage: state.message.openMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
