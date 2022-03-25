import * as React from "react";
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
import * as yup from "yup";
import { useFormik } from "formik";
import { FcGoogle } from "react-icons/fc";
import Image from "../assets/img/forgotpassword.png";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address!"),
});

const useStyles = makeStyles((theme) => ({
  Title: {
    color: "orange",
    fontSize: "3rem",
  },
  Descp: {
    color: "black",
    fontSize: "1.5rem",
  },
}));

function ForgotPassword() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
  });
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
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={3} sx={{verticalAlign: 'middle', display: 'inline-flex'}}>
                  <Button
                    
                    variant="contained"
                    fullWidth
                    sx={{
                      textTransform: "unset",
                      backgroundColor: "#556749",
                      marginLeft: '-2vh'
                      
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

export default ForgotPassword;
