import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CategoryIcon from "@mui/icons-material/Category";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import PersonIcon from '@mui/icons-material/Person';
import "../styles/Productdetail.css";

import Helmet from "react-helmet";
import {
  Button,
  Typography,
  Container,
  Grid,
  Alert,
  CircularProgress,
} from "@mui/material";
import { height } from "@mui/system";

export default function BasicCard(props) {
  console.log(props.location.state.data);
  let resourcech = (props.location.state.data.resourcetype).replace("Advertisement","")
  var image = "https://s6.uupload.ir/files/newwwww_3y3i.jpg";
  if (props.location.state.data.Image === null) {
    image = "https://s6.uupload.ir/files/newwwww_3y3i.jpg";
  } else {
    image = props.location.state.data.Image;
  }

  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #ecf2e8" }} />
      <Grid>
        <div class="slider" style={{ left: "290px", position: "absolute" }}>
          <input type="radio" name="slide_switch" id="id1" />
          <label for="id1">
            <img
              src={image}
              width="50"
              height="70"
            />
          </label>
          
          
          <img src={image} />
          
          {/* {( props.location.state.data.Image === null) ? (
            <p> */}
          
          
          <input type="radio" name="slide_switch" id="id2" />
          <label for="id2">
            <img
              src={image}
              width="50"
              height="70"
            />
          </label>
          <img src={image} />

          <input type="radio" name="slide_switch" id="id3" />
          <label for="id3">
            <img
              src={image}
              width="50"
              height="70"
            />
          </label>
          <img src={image} />
          {/* </p>
          
           ): (<p></p>)} */}
        </div>
      </Grid>
      <div style={{ display: "inline-block", position: "absolute" }}>
        <Grid item sx={12} sm={6}>
          <Container sx={{ paddingTop: "100px" }} component="main">
            <Grid item xs={3}>
              <Card container sx={{ maxWidth: 370, marginLeft: "30px" }}>
                <CardContent style={{ textAlign: "left", lineHeight: "175%" }}>
                  <Typography
                    style={{
                      display: "inline",
                      borderRadius: "4px",
                      textShadow: "0 0 1px grey",
                      color: "#556749",
                      fontSize: "30px",
                      marginLeft: "-5px",
                    }}
                  >
                    &nbsp;{props.location.state.data.Title}&nbsp;
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      paddingTop: "10px",
                      alignItems: "center",
                    }}
                    
                  >
                    <CategoryIcon style={{ fontSize: "large" }} />
                    <span style={{ color: "black", fontSize: "16px" }}>
                      &nbsp;Category : {resourcech}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <LocationCityIcon style={{ fontSize: "large" }} />
                    <span style={{ color: "black", fontSize: "16px" }}>
                      &nbsp;City : {props.location.state.data.City} 
                       
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <br />
                    <EventNoteIcon style={{ fontSize: "large" }} />
                    <span style={{ color: "black" }}>
                      &nbsp;Published date : 22/03/2022
                    </span>
                  </div>
                  {props.location.state.data.resourcetype ===
                  "ServiceAdvertisement" ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      paddingTop: "12px",
                      color: "#556749",
                    }}
                  >
                    <br />
                    <CheckBoxIcon style={{ fontSize: "large" }} />
                    <span>&nbsp;Type : {props.location.state.data.service_type}</span>
                  </div>
                  ): (<p></p>)}
                  {props.location.state.data.resourcetype ===
                  "ClothAdvertisement" ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      paddingTop: "12px",
                      color: "#556749",
                    }}
                  >
                    <br />
                    {/* <CheckBoxIcon style={{ fontSize: "large" }} /> */}
                    <span>&nbsp;Type : {props.location.state.data.cloth_type} - Manly</span>
                  </div>
                  ): (<p></p>)}
                  {props.location.state.data.resourcetype ===
                  "ClothAdvertisement" ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        color: "#556749",
                      }}
                    >
                      <br />
                      {/* <CheckBoxIcon style={{ fontSize: "large" }} /> */}
                      <span>&nbsp;Size : {props.location.state.data.cloth_size} </span>
                    </div>
                  ) : (
                    <p></p>
                  )}
                  {props.location.state.data.resourcetype ===
                  "ClothAdvertisement" ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      color: "#556749",
                    }}
                  >
                    <br />
                    {/* <CheckBoxIcon style={{ fontSize: "large" }} /> */}
                    <span>&nbsp;Status : {props.location.state.data.cloth_status}</span>
                  </div>
                  ) : (<p></p>)}
                </CardContent>
                <br />
                <Grid container item xs={12}>
                  <Button
                    variant="contained"
                    style={{ display: "inline-block" }}
                    // onClick={handleSubmitButton}
                    sx={{
                      backgroundColor: "#556749",
                      height: "40px",
                      width: "120px",
                      display: "inline-block",
                      marginLeft: "55px",

                      ":hover": {
                        bgcolor: "#e6835a",
                      },
                    }}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid container item xs={12}>
                  <Button
                    variant="contained"
                    style={{ display: "inline-block" }}
                    // onClick={handleSubmitButton}
                    sx={{
                      backgroundColor: "#e6835a",
                      height: "40px",
                      width: "120px",
                      display: "inline-block",
                      top: "-40px",
                      marginLeft: "200px",

                      ":hover": {
                        bgcolor: "#556749 ",
                      },
                    }}
                  >
                    Chat
                    {/* {loading ? 
                        <CircularProgress style={{color: "#fff"}} size="1.6rem"/>
                        : "Save"}                  */}
                  </Button>
                </Grid>
              </Card>
            </Grid>
            <br />
            <Grid item xs={3}>
              <Card container sx={{marginLeft: "30px" ,width:'370px' }}>
                <CardContent style={{ textAlign: "left", lineHeight: "175%" }}>
                  <Typography
                    style={{
                      display: "inline",
                      borderRadius: "4px",
                      color: "#556749",
                      marginLeft: "-5px",
                    }}
                  >
                    <span
                      style={{ fontSize: "20px", textShadow: "0 0 1px grey" }}
                    >
                      &nbsp;Description&nbsp;
                    </span>

                    <br />
                    <span style={{ fontSize: "14px" }}>
                      
                    {props.location.state.data.Description}
                    
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Container>
        </Grid>
      </div>
    </div>
  );
}
