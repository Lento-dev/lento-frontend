import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Container,Snackbar,Alert,CircularProgress
} from "@mui/material";
import { connect } from 'react-redux';
import { register } from "../actions/auth";
import { clearMessage } from '../actions/message';
import Helmet from "react-helmet";
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles(theme => ({
  alignItemsAndJustifyContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%'
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: '500',
  }
}))

function ResetPassword(props) {
  const classes = useStyles();

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    password: '',
    confirmpassword: '',
  });


const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const validate = () => {
    let tmpErrors = {};

    if (!values.password)
      tmpErrors["password"] = "Please enter a password.";
    if (values.password.length < 6 && values.password)
    tmpErrors["password"] = "Passwords must at least be 6 characters.";
    if(!values.confirmPassword)
      tmpErrors["confirmpassword"] = "Please repeat your password.";
    if(values.password !== values.confirmPassword && values.confirmPassword)
    tmpErrors["confirmpassword"] = "Passwords don't match!";
    setErrors(tmpErrors);
  }
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
    validate();
    let filled = errors.count === 0;

    if  (filled) 
    {
      setLoading(true);
      props.register(values.password, values.confirmpassword, history,loading, setLoading);
      history.push('/signin')
    }

    console.log(values);
    
  }



  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #fff" }} />

      <Container className={classes.alignItemsAndJustifyContent} sx={{ padding: "4%" }}  component="main"  >
        <Paper
          elevation={0}
          component="form"
          sx={{
            backgroundColor: "#ecf2e8",
            borderRadius: 4,
          }}
        >
          <Grid container >
            <Grid
              item
              xs={1}

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
                
              </Grid>
            </Grid>

            <Grid
              item
              xs={10}

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
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <Grid container sx={{ paddingBottom: "6vh" }} >
                        <Grid item xs={12} textAlign="center">
                          <Typography className={classes.title}>
                            Reset password
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        label="Password"
                        name="password"
                        id="password"
                        variant="outlined"
                        type = "password"
                        value = {values.password}
                        onChange = {handleChange('password')}
                        fullWidth
                        required
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
                        fullWidth
                        required
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
                    <Grid item xs={12} sx={{ marginTop: "6vh", direction: 'center'}}>
                      <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={loading}
                        onClick={handleSignUpButton}
                        
                        sx={{
                          textTransform: "unset",
                          backgroundColor: "#e6835a",
                          ":hover" : {
                            bgcolor: '#ffa580'
                          }
                          
                        }}
                      >
                    {loading ? 
                        <CircularProgress style={{color: "#fff"}} size="1.6rem"/>
                        : "Submit"}
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
            <Grid
              item
              xs={1}

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

export default connect(mapStateToProps ,mapDispatchToProps)(ResetPassword);