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

  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #ecf2e8" }} />
      <Grid>
        <div class="slider" style={{ left: "290px", position: "absolute" }}>
          <input type="radio" name="slide_switch" id="id1" />
          <label for="id1">
            <img
              src="https://s6.uupload.ir/files/p1_tsfj.jpg"
              width="50"
              height="70"
            />
          </label>
          <img src="https://s6.uupload.ir/files/p1_tsfj.jpg" />

          <input type="radio" name="slide_switch" id="id2" />
          <label for="id2">
            <img
              src="https://s6.uupload.ir/files/03_jng6.jpg"
              width="50"
              height="70"
            />
          </label>
          <img src="https://s6.uupload.ir/files/03_jng6.jpg" />

          <input type="radio" name="slide_switch" id="id3" />
          <label for="id3">
            <img
              src="https://s6.uupload.ir/files/p2_syi9.jpg"
              width="50"
              height="70"
            />
          </label>
          <img src="https://s6.uupload.ir/files/p2_syi9.jpg" />
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
                    &nbsp;Red Jacket&nbsp;
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
                      &nbsp;Category : cloth
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
                      &nbsp;City and region : Tehran , Hengam street
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
                    <span>&nbsp;Type : jackets/coats - Manly</span>
                  </div>
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
                      <CheckBoxIcon style={{ fontSize: "large" }} />
                      <span>&nbsp;Size : large</span>
                    </div>
                  ) : (
                    <p></p>
                  )}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      color: "#556749",
                    }}
                  >
                    <br />
                    <CheckBoxIcon style={{ fontSize: "large" }} />
                    <span>&nbsp;Status : not used and new</span>
                  </div>
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
              <Card container sx={{ maxWidth: 370, marginLeft: "30px" }}>
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
                      It was a gift from my friend so it is new.It's fit to size
                      meduim to large and a gift for you.
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
