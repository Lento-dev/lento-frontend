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


function VerifyEmail() {
  const history = useHistory();

const search = useLocation().search;
const user_id = new URLSearchParams(search).get("user_id");
const timestamp = new URLSearchParams(search).get("timestamp");
const signature = new URLSearchParams(search).get("signature");
const [verifyEmailDialogOpen, setVerifyEmailDialogOpen] = useState(false);
const [message, setMessage] = useState(null);

const BASE_URL = "http://172.17.3.154/api";

const handleVerifyEmailDialogClickOpen = () => {
    setVerifyEmailDialogOpen(true);
  };

  const handleVerifyEmailDialogClose = () => {
    setVerifyEmailDialogOpen(false);
    setMessage(null);
  };

  const verifyemail = () => {
    var formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);
  
    return axios.post(BASE_URL + '/account/verify_registration'+ '/' , formData)
      .then(
        (response) => {
          // console.log('base url', BASE_URL)
          // console.log('response.data', response.data)
          setMessage("Your Account has been verified successfully.");
          handleVerifyEmailDialogClickOpen();

        })
        .catch((error) => {
          // console.log('base url', BASE_URL)

          setMessage("Validation link is invalid.");
          handleVerifyEmailDialogClickOpen();
          // console.log(error.data)
        }
        );
  }
  
  useEffect(() => {    
    console.log(BASE_URL);
    verifyemail();
    // console.log("in use effect");  
  });


  return (
    <div>
         <Dialog
              open={verifyEmailDialogOpen}
              onClose={handleVerifyEmailDialogClose}
            >
              <DialogTitle color={message === "Your Account has been verified successfully."
                            ? "green"
                            : "red"} >{message}</DialogTitle>

              <DialogActions>
              <Grid container justifyContent="center">
              <Button variant="contained" onClick={handleVerifyEmailDialogClose} 
              color={message === "Your Account has been verified successfully."
                            ? "success"
                            : "warning"} >
              OK</Button>

              </Grid>
              </DialogActions>
            </Dialog>
    </div>
  );
}



export default VerifyEmail;
