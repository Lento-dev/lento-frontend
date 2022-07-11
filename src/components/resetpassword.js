import React, { useState } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";

import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Container,
  Snackbar,
  Alert,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import BASE_URL from './baseurl';
import axios from "axios";

import Helmet from "react-helmet";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  alignItemsAndJustifyContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "500",
  },
}));

function ResetPassword() {

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = React.useState(null);
  const [openm, setOpenm] = useState(false);
  const [forgotPassDialogOpen, setForgotPassDialogOpen] = useState(false);

  const [values, setValues] = useState({
    password: "",
  });

  const search = useLocation().search;
  const user_id = new URLSearchParams(search).get("user_id");
  const timestamp = new URLSearchParams(search).get("timestamp");
  const signature = new URLSearchParams(search).get("signature");

  const handleForgotPassDialogClickOpen = () => {
    setForgotPassDialogOpen(true);
  };

  const handleForgotPassDialogClose = () => {
    setForgotPassDialogOpen(false);
    setOpenm(false);
    history.push("/signin");
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const validate = () => {
    let tmpErrors = {};

    if (!values.password) tmpErrors["password"] = "Please enter a password.";
    if (values.password.length < 8 && values.password)
      tmpErrors["password"] = "Passwords must at least be 8 characters.";
    setErrors(tmpErrors);
  };

  const handleSubmitButton = (e) => {
    validate();
    let filled = Object.keys(errors).length === 0;

    if (filled) {
      setLoading(true);
      var formData = new FormData();
      formData.append("user_id", user_id);
      formData.append("timestamp", timestamp);
      formData.append("signature", signature);
      formData.append("password", values.password);
    
      return axios.post(BASE_URL + 'account/reset_password/', formData)
        .then(
          (response) => {
            setMessage('Password has changed successfully.');
            handleForgotPassDialogClickOpen();
          })
        .catch((error) => {
          setMessage('Unknown error.');
          handleForgotPassDialogClose();

          }
          );

    console.log(values);
  };
}

  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #fff" }} />

      <Container
        // className={classes.alignItemsAndJustifyContent}
        component="main"
        sx={{width : "50%", padding: "4%" }}
      >
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
              ></Grid>
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
                      <Grid container sx={{ paddingBottom: "6vh" }}>
                        <Grid item xs={12} textAlign="center">
                          <Typography fontSize="1.8rem" fontWeight="600">
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
                        type="password"
                        value={values.password}
                        onChange={handleChange("password")}
                        fullWidth
                        required
                        error={Boolean(errors["password"])}
                        helperText={errors["password"]}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{ marginTop: "6vh", direction: "center" }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={loading}
                        onClick={handleSubmitButton}
                        sx={{
                          textTransform: "unset",
                          backgroundColor: "#e6835a",
                          ":hover": {
                            bgcolor: "#ffa580",
                          },
                        }}
                      >
                        {loading ? (
                          <CircularProgress
                            style={{ color: "#fff" }}
                            size="1.6rem"
                          />
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </Grid>

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
              ></Grid>
            </Grid>
            <Dialog
              open={forgotPassDialogOpen}
              onClose={handleForgotPassDialogClose}
            >
              <DialogTitle
                color={
                  message === "Password has changed successfully."
                    ? "green"
                    : "red"
                }
              >
                {message}
              </DialogTitle>

              <DialogActions>
                <Grid container justifyContent="center">
                  <Button
                    variant="contained"
                    onClick={handleForgotPassDialogClose}
                    color={
                      message === "Password has changed successfully."
                        ? "success"
                        : "warning"
                    }
                  >
                    OK
                  </Button>
                </Grid>
              </DialogActions>
            </Dialog>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default ResetPassword;
