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
  Container,Snackbar,Alert,CircularProgress
} from "@mui/material";
import { connect } from 'react-redux';
import { register } from "../actions/auth";
import { clearMessage } from '../actions/message';
import Helmet from "react-helmet";
import * as yup from "yup";
import { useFormik, Formik } from "formik";
import { FcGoogle } from "react-icons/fc";

const validationSchema = yup.object({
  firstname: yup.string().required("Please write your first name."),
  lastname: yup.string().required("Please write your last name."),
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),
  username: yup.string().required("Please write your user name."),
  password: yup
    .string()
    .min(6, "Passwords must at least be 6 characters.")
    .required("Please enter a password."),
  confirmpassword: yup
    .string()
    .required("Please repeat your password.")
    .oneOf([yup.ref("password")], "Passwords don't match!"),
});

function SignUp(props) {
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.clearMessage();
  };

  const handleSignUpButton = (e) => {
    let filled = !Boolean(formik.errors.firstname) 
    && !Boolean(formik.errors.lastname) && !Boolean(formik.errors.email)
    && !Boolean(formik.errors.password) && !Boolean(formik.errors.confirmpassword);

    if  (filled) 
    {
      setLoading(true);
      props.register(formik.values.firstname, formik.values.lastname, formik.values.email,formik.values.username,
         formik.values.password, formik.values.confirmpassword, history,loading, setLoading);
      history.push('/signin')
    }

    console.log(formik.errors);
    console.log('length : ',formik.errors.count);
    
  }


  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      username:"",
      password: "",
      confirmpassword: "",
    },
    validationSchema: validationSchema,
  });

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

                <Grid item xs={12} textAlign="left" sx={{ marginTop: '18vh'}}>
                <Typography fontSize="1.3rem">You can communicate with others.</Typography>
                </Grid>
                <Grid item xs={12} textAlign="left">
                <Typography fontSize="1.3rem">You can share your experiences with our charity.</Typography>
                </Grid>
                <Grid item xs={12} textAlign="left">
                <Typography fontSize="1.3rem">You can be helpful for the hurted animal.</Typography>
                </Grid>
                <Grid item xs={12} textAlign="left">
                <Typography fontSize="1.3rem">You can help people with what you don't need.</Typography>
                </Grid>
                <Grid item xs={12} textAlign="left">
                <Typography fontSize="1.8rem">Enjoy using our app.</Typography>
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
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.firstname &&
                          Boolean(formik.errors.firstname)
                        }
                        helperText={
                          formik.touched.firstname && formik.errors.firstname
                        }
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
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.lastname &&
                          Boolean(formik.errors.lastname)
                        }
                        helperText={
                          formik.touched.lastname && formik.errors.lastname
                        }
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
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
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
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.username &&
                          Boolean(formik.errors.username)
                        }
                        helperText={
                          formik.touched.username && formik.errors.username
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
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
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
                        value={formik.values.confirmpassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.confirmpassword &&
                          Boolean(formik.errors.confirmpassword)
                        }
                        helperText={
                          formik.touched.confirmpassword &&
                          formik.errors.confirmpassword
                        }
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
                        }}
                        fullWidth
                      >
                    {loading ? 
                        <CircularProgress style={{color: "#fff"}} size="1.6rem"/>
                        : "Sign up"}
                  </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider>Or</Divider>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
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
                      </Button>
                    </Grid>
                    <Snackbar open={props.openMessage} autoHideDuration={4000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity={props.message == "Signed up successfully!" ? "success" : "error"} sx={{ width: '100%' }}>
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

const mapDispatchToProps = { register, clearMessage };
const mapStateToProps = ( state ) => {
  return{
    message: state.message.message,
    openMessage: state.message.openMessage,
  }
}

export default connect(mapStateToProps ,mapDispatchToProps)(SignUp);