import React, { useState, useEffect, setState } from "react";
import { Button, TextField, Grid, Box, Container } from "@mui/material";
import Helmet from "react-helmet";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import "react-phone-input-2/lib/style.css";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import "date-fns";
import { registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import MuiMenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import MediaControlCard from "./adcard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CategoryIcon from "@mui/icons-material/Category";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { Link } from "react-router-dom";

const MenuItem = withStyles({
  root: {
    justifyContent: "flex-end",
  },
})(MuiMenuItem);

const Input = styled("input")({
  display: "none",
});

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const PROXY_PORT = 8080;

function Ppage(props) {
  console.log(props.location.state.data);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [searchItem, setSearchItem] = useState("");
  const [fchecked, setfChecked] = React.useState(true);
  const [schecked, setsChecked] = React.useState(false);
  const [cchecked, setcChecked] = React.useState(false);

  const ftoggleChecked = () => {
    setfChecked((prev) => !prev);
    setsChecked(false);
    setcChecked(false);
  };
  const stoggleChecked = () => {
    setsChecked((prev) => !prev);
    setfChecked(false);
    setcChecked(false);
  };
  const ctoggleChecked = () => {
    setcChecked((prev) => !prev);
    setfChecked(false);
    setsChecked(false);
  };

  const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    formtitle: "",
    clothstatus: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  let tmpErrors = {};
  const validate = () => {
    switch (true) {
      case !values.formtitle:
        tmpErrors["formtitle"] = "Please enter your form title.";
        break;
      case values.formtitle.length > 150:
        tmpErrors["formtitle"] = "form title can be at most 150 characters.";
        break;
      default:
        break;
    }

    if (cchecked) {
      switch (true) {
        case !values.clothtype:
          tmpErrors["clothtype"] = "Please enter your clothtype.";
          break;
        default:
          break;
      }
    }
  };
  const [prodata, setarray] = useState([]);
  let content = [];

  useEffect(() => {
    console.log("***********************");
    var token = localStorage.getItem("token");
    token.replaceAll('"', "");
    console.log(token);
    var myurl =
      "http://172.17.3.154/api/advertisement/search?province=" +
      props.location.state.data;
    console.log(myurl);
    var config = {
      method: "get",
      url: myurl,
      headers: {
        Authorization: "Token " + token,
      },
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setarray(Object.values(response.data));
        console.log(Object.values(response.data));
        content = prodata.map((item, i) => {
          console.log("content", item, i);
          <Grid item md={4}>
            <MediaControlCard data={item} key={i}></MediaControlCard>
          </Grid>;
        });
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const handlesearch = (e) => {
    console.log("handle search");
    console.log("values => ", values.clothtype, values.formtitle);

    var token = localStorage.getItem("token");
    token.replaceAll('"', "");
    console.log(token);
    var myurl =
      "http://172.17.3.154/api/advertisement/search" +
      "?province=" +
      props.location.state.data;
    if (values.clothtype === "food") {
      myurl += "&ad_type=foodadvertisement";
    } else if (values.clothtype === "service") {
      myurl += "&ad_type=seviceadvertisement";
    } else if (values.clothtype === "cloth") {
      myurl += "&ad_type=clothadvertisement";
    }
    console.log(myurl);
    var config = {
      method: "get",
      url: myurl,
      headers: {
        Authorization: "Token " + token,
      },
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setarray(Object.values(response.data));
        console.log(Object.values(response.data));
      })

      .catch(function (error) {
        console.log(error);
      });
  };
  function handleOnChange(value) {}
  // const c = prodata.map((item, i) => {
  //   // console.log(item, i);
  //   // <Grid item md={4}>
  //   <MediaControlCard data={item} key={i}></MediaControlCard>;
  //   /* </Grid>; */
  // });
  // const content = this.state.items.map((item) => (
  //   <Col md={3}>
  //     <HomeRecipeReviewCard key={item.id} book={item}></HomeRecipeReviewCard>
  //   </Col>
  // ));

  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #ecf2e8" }} />

      <Container sx={{ padding: "4%" }} component="main">
        <Grid
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Paper
              // className="signinPage"
              elevation={0}
              sx={{
                backgroundColor: "#fff",
                borderRadius: 4,
                width: "100%",
                justify: "flex-end",
              }}
            >
              <Grid container></Grid>
              <Grid
                item
                xs={12}
                md={12}
                lg={12}
                sx={{ backgroundColor: "#fffff", borderRadius: 4 }}
              >
                <Grid item xs={12}>
                  <Grid
                    container
                    sx={{
                      paddingTop: "2%",
                      paddingRight: "5%",
                      paddingLeft: "15%",
                    }}
                  >
                    <br />
                    <br />
                    <br />
                    <br />

                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={5}>
                        <div>
                          <Grid item xs={12} sm={12}>
                            <TextField
                              autoFocus
                              required
                              fullWidth
                              autoComplete="firstmane"
                              name="title"
                              id="title"
                              label="advertisement title"
                              value={values.formtitle}
                              onChange={handleChange("formtitle")}
                              error={Boolean(errors["formtitle"])}
                              helperText={errors["formtitle"]}
                            />
                          </Grid>
                        </div>
                      </Grid>

                      <Grid item xs={12} sm={5}>
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel
                              id="demo-simple-select-label"
                              name="marital_status"
                            >
                              select the category
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Select Marital Status"
                              textAlign="left"
                              value={values.clothtype}
                              onChange={handleChange("clothtype")}
                              error={Boolean(errors["clothtype"])}
                              helperText={errors["clothtype"]}
                            >
                              <MenuItem value={"food"}>food</MenuItem>
                              <MenuItem value={"service"}>service</MenuItem>
                              <MenuItem value={"cloth"}>cloth</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>
                      <Grid container item xs={12} sm={2}>
                        <Button
                          style={{
                            height: "53px",
                            backgroundColor: "#e6835a",
                            borderRadius: "5px",
                          }}
                          variant="contained"
                          onClick={handlesearch}
                        >
                          search
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <br />
            <br />
            <br />

            <Grid item xs={12}>
              <Grid container spacing={6}>
                {prodata.map((item, i) => (
                  <Grid item md={4}>
                    <Link
                      to={{
                        pathname: "/jj",
                        state: { data: item.id },
                      }}
                    >
                      <MediaControlCard data={item} key={i}></MediaControlCard>
                    </Link>
                  </Grid>
                ))}

                {/* </Grid> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Ppage;
