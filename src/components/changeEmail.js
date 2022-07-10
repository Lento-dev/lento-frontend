import React, { useState, useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";

import {
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import BASE_URL from "./baseurl";

function ChangeEmail() {
  const token = localStorage.getItem("token");
  const headers = { Authorization: `Token ${token}` };
  const search = useLocation().search;
  const email = new URLSearchParams(search).get("email");
  const history = useHistory();

  const [verifyEmailDialogOpen, setVerifyEmailDialogOpen] = useState(false);
  const [message, setMessage] = useState(null);

  const handleVerifyEmailDialogClickOpen = () => {
    setVerifyEmailDialogOpen(true);
  };

  const handleVerifyEmailDialogClose = () => {
    setVerifyEmailDialogOpen(false);
    setMessage(null);
    history.push('/setting');
  };

  const verifyemail = () => {
    return axios
      .put(
        BASE_URL + "account/edit-profile/",
        { email: email },
        { headers: headers }
      )
      .then((res) => {
        console.log('res', res)
        setMessage("Your new email has been verified.");
        handleVerifyEmailDialogClickOpen();
      })
      .catch((err) => {
        console.log('err', err);
        setMessage("Something went wrong.");
        handleVerifyEmailDialogClickOpen();
      });
  };

  useEffect(() => {
    verifyemail();
    console.log("in use effect");
  });

  return (
    <div>
      <Dialog
        open={verifyEmailDialogOpen}
        onClose={handleVerifyEmailDialogClose}
      >
        <DialogTitle
          color={
            message === "Your new email has been verified."
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
              onClick={handleVerifyEmailDialogClose}
              color={
                message === "Your new email has been verified."
                  ? "success"
                  : "warning"
              }
            >
              OK
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ChangeEmail;
