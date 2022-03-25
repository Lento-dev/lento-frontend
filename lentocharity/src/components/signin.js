import * as React from "react";
import { useHistory } from 'react-router-dom';

import {
  Button,
  TextField,
  Link,
  Grid,
  Paper,
  Typography,
  Divider,
  Container,
} from "@mui/material";
import { connect } from 'react-redux';
import Helmet from "react-helmet";
import * as yup from "yup";
import { useFormik } from "formik";
import { FcGoogle } from "react-icons/fc";
import Image from "../assets/illustrations/signin.svg";
import { login } from "../actions/auth";
import { clearMessage } from '../actions/message';

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),
  password: yup.string().required("Please enter your password."),
});

function SignIn(props) {
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);



  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
  });
  const handleSignInButton = (e) => {
    let filled = !Boolean(formik.errors.email) 
    && !Boolean(formik.errors.password);

    if  (filled) 
    {
      setLoading(true);
      props.login(formik.values.email, formik.values.password);
    }

    console.log(formik.errors);
    console.log('length : ',formik.errors.count);
    
  }
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
                            <Link href="/signup" underline="none">
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
                        }}
                        fullWidth
                      >
                        Sign in
                      </Button>
                    </Grid>

                    {/* <Grid item xs={12} sx={{ marginTop: "2vh" }}>
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
                        <CircularProgress style={{color: "#fff"}} size="3"/>
                        : "Sign up"}
                  </Button>
                    </Grid> */}



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
