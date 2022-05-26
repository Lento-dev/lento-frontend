import React, { useState, useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";

import {
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import { connect } from "react-redux";
import { verifyemail } from "../actions/auth";
import { clearMessage } from "../actions/message";


function VerifyEmail(props) {
  const history = useHistory();

const search = useLocation().search;
const user_id = new URLSearchParams(search).get("user_id");
const timestamp = new URLSearchParams(search).get("timestamp");
const signature = new URLSearchParams(search).get("signature");
const [verifyEmailDialogOpen, setVerifyEmailDialogOpen] = useState(false);


const handleVerifyEmailDialogClickOpen = () => {
    setVerifyEmailDialogOpen(true);
  };

  const handleVerifyEmailDialogClose = () => {
    setVerifyEmailDialogOpen(false);
    props.clearMessage();
    history.push("/signin");
  };
  
  useEffect(() => {
    console.log('in verify page');

    console.log('user_id, timestamp, signature ', user_id, timestamp, signature );
    
    props.verifyemail(user_id, timestamp, signature, history)
    .then(res => {
        handleVerifyEmailDialogClickOpen();
    })
    .catch(err => {
        handleVerifyEmailDialogClickOpen();
    })
    console.log("in use effect");
    console.log(props.message);
  
  });


  return (
    <div>
         <Dialog
              open={verifyEmailDialogOpen}
              onClose={handleVerifyEmailDialogClose}
            >
              <DialogTitle color={props.message === "Your Account has been verified successfully."
                            ? "green"
                            : "red"} >{props.message}</DialogTitle>

              <DialogActions>
              <Grid container justifyContent="center">
              <Button variant="contained" onClick={handleVerifyEmailDialogClose} 
              color={props.message === "Your Account has been verified successfully."
                            ? "success"
                            : "warning"} >
              OK</Button>

              </Grid>
              </DialogActions>
            </Dialog>
    </div>
  );
}

const mapDispatchToProps = { verifyemail, clearMessage };
const mapStateToProps = (state) => {
  return {
    message: state.message.message,
    openMessage: state.message.openMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
