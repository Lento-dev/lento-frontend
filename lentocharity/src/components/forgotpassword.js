import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Helmet from "react-helmet";
import Image from "../assets/img/forgotpassword.png";
import { connect } from 'react-redux';
import { login } from "../actions/auth";
import { clearMessage } from '../actions/message';


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


function ForgotPassword(props) {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: ''
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
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
  
  const handleSubmitButton = (e) => {
    validate();
    let filled = errors.count === 0;

    if  (filled) 
    {
      setLoading(true);
      props.ForgotPassword(values.email,);
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
                    
                    onClick={handleSubmitButton}
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
                    Submit
                  </Button>
                </Grid>
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

const mapDispatchToProps = { login, clearMessage };
const mapStateToProps = ( state ) => {
  return{
    message: state.message.message,
    openMessage: state.message.openMessage,
  }
}

export default connect(mapStateToProps ,mapDispatchToProps)(ForgotPassword);