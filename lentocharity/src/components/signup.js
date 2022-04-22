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
import { FcGoogle } from "react-icons/fc";


function SignUp(props) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    confirmpassword: ''
  });

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.clearMessage();
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const validate = () => {
    let tmpErrors = {};

    switch (true) {
      case !values.firstname:
        tmpErrors["firstname"] = "Please enter your first name."
        break;
        case !values.firstname.match(/^[a-zA-Z]+$/):
          tmpErrors["firstname"] = "First name can include only letters"
          break;
      default:
        break;
    }

    switch (true) {
      case !values.lastname:
        tmpErrors["lastname"] = "Please enter your last name."
        break;
        case !values.lastname.match(/^[a-zA-Z]+$/):
          tmpErrors["lastname"] = "Last name name can include only letters"
          break;
      default:
        break;
    }

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
      case !values.username:
        tmpErrors["username"] = "Please enter a username.";
        break;

      default:
        break;
    }
    
    switch (true) {
      case !values.password:
        tmpErrors["password"] = "Please enter a password."
        break;
        case values.password.length < 6:
          tmpErrors["password"] = "Passwords must at least be 6 characters."
          break;
      default:
        break;
    }

    switch (true) {
      case !values.confirmpassword:
        tmpErrors["confirmpassword"] = "Please repeat your password."
        break;
        case values.password !== values.confirmpassword:
          tmpErrors["confirmpassword"] = "Passwords don't match!"
          break;
      default:
        break;
    }

    setErrors(tmpErrors);
  }

  const handleSignUpButton = (e) => {
    validate();
    let filled = errors.count === 0;

    if  (filled) 
    {
      setLoading(true);
      props.register(values.firstname, values.lastname, values.email,values.username,
         values.password, values.confirmpassword, history,loading, setLoading);
      history.push('/signin')
    }

    console.log(errors);
    console.log('length : ',errors.count);
    
  }


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
                        value={values.firstname}
                        onChange={handleChange('firstname')}
                        error={
                          Boolean(errors["firstname"])
                        }
                        helperText={
                          errors["firstname"]
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
                        value={values.lastname}
                        onChange={handleChange('lastname')}
                        error={
                          Boolean(errors["lastname"])
                        }
                        helperText={
                          errors["lastname"]
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
                        label="User Name"
                        name="username"
                        id="username"
                        variant="outlined"
                        required
                        fullWidth
                        value={values.username}
                        onChange={handleChange('username')}
                        error={
                          Boolean(errors["username"])
                        }
                        helperText={
                          errors["username"]
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
                        onChange={handleChange('confirmpassword')}
                        error={
                          Boolean(errors["confirmpassword"])
                        }
                        helperText={
                          errors["confirmpassword"]
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
                  <Alert onClose={handleClose} severity={props.message === "Signed up successfully!" ? "success" : "error"} sx={{ width: '100%' }}>
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