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
  Divider,
} from "@mui/material";
import "../styles/signin.css";
import Helmet from "react-helmet";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import Image from "../assets/illustrations/login.svg";
import { register } from "../actions/auth";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { clearMessage } from "../actions/message";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import MyTextField from './ModifiedTextField';
import BASE_URL from './baseurl';
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";

function SignIn() {
  const drfClientId = process.env.REACT_APP_DRF_CLIENT_ID;
  const drfClientSecret = process.env.REACT_APP_DRF_CLIENT_SECRET;

  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState(null);
  const [openm, setOpenm] = useState(false);

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenm(false);
    setMessage(null);
  };

  const validate = () => {
    let tmpErrors = {};

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
      default:
        break;
    }
    switch (true) {
      case !values.password:
        tmpErrors["password"] = "Please enter your password.";
        break;

      default:
        break;
    }

    setErrors(tmpErrors);
  };
  const handleSignInButton = (e) => {
    console.log(BASE_URL);
    // validate();
    // let filled = Object.keys(errors).length === 0;
    // console.log(filled);
    // if (filled) {
    //   console.log("we are in requesting to sign in");
    //   setLoading(true);
    //   var formData = new FormData();
    //   formData.append("login", values.email);
    //   formData.append("password", values.password);

    //   axios
    //     .post(BASE_URL + "/account/login/", formData)

    //     .then((response) => {
    //       localStorage.setItem("user", JSON.stringify(response.data));
    //       localStorage.setItem("userType", JSON.stringify("user"));
    //       localStorage.setItem("token", response.data.token);
    //       localStorage.setItem("isLoggedIn", true);

    //       console.log("user", response.data);
    //       console.log("login was succesfull");
    //       setLoading(false);
    //       history.push("/");
    //     })
    //     .catch((error) => {
    //       setLoading(false);
    //       if (error.response.status == 401) {
    //         setMessage("Email or password is incorrect!");
    //       }

    //       if (error.response.status == 400) {
    //         setMessage("Email or password is invalid!");
    //       }
    //     });

    // }
  };

  const handleContinueWithGoogle = (response) => {
  axios
  .post(`${BASE_URL}/social-auth/convert-token/`, {
    token: response.accessToken,
    backend: "google-oauth2",
    grant_type: "convert_token",
    client_id: drfClientId,
    client_secret: drfClientSecret,
  })
  .then((res) => {
    const { access_token, refresh_token } = res.data;
    console.log({ access_token, refresh_token });
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    localStorage.setItem("token-type", "bearer");
    localStorage.setItem("user", res.data);
    setLoading(false);
    history.push("/");
    console.log('google login succesfully');

  })
  .catch((error) => {

    console.log("Error Google login", error);

  });
  };

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
                            Sign in
                          </Typography>
                        </Grid>
                        <Grid item xs={6} textAlign="right">
                          <Typography fontSize="0.85rem">
                            {" "}
                            Not a member?{" "}
                            <Link href="/signup" underline="none">
                              {"Register"}
                            </Link>{" "}
                          </Typography>
                        </Grid>
                      </Grid>
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
                        role="navigate"
                        onClick={handleSignInButton}
                        sx={{
                          textTransform: "unset",
                          backgroundColor: "#e6835a",
                          ":hover": {
                            bgcolor: "#ffa580",
                          },
                        }}
                        fullWidth
                        disabled={loading}
                      >
                        {loading ? (
                          <CircularProgress
                            style={{ color: "#fff" }}
                            size="1.6rem"
                          />
                        ) : (
                          "Sign in"
                        )}
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider>Or</Divider>
                    </Grid>
                    <Grid item xs={12}>
                      <GoogleLogin
                        clientId={drfClientId}
                        buttonText="LOGIN WITH GOOGLE"
                        onSuccess={(response) =>
                          handleContinueWithGoogle(response)
                        }
                        render={(renderProps) => (
                          <Button
                            variant="outlined"
                            fullWidth
                            size="large"
                            type="submit"
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
                  </Grid>
                </Grid>
              </Grid>
              <Snackbar open={openm} autoHideDuration={4000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {message}
                  </Alert>
                </Snackbar>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default SignIn;