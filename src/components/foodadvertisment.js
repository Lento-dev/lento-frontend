import React, { useState, useEffect, setState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { createTheme } from "@mui/material/styles";
import Helmet from "react-helmet";
import { Formik, useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Autocomplete from "@mui/material/Autocomplete";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { Input } from '@mui/material';
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MuiPhoneNumber from "material-ui-phone-number";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import { CircularProgress } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import ImageUploading from "react-images-uploading";
import Alert from "@mui/material/Alert";

import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { FlareSharp, SettingsAccessibility } from "@mui/icons-material";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import MyTextField from "./ModifiedTextField";
import MyAutocomplete from "./ModifiedAutocom";

const Input = styled("input")({
  display: "none",
});

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function Foodadvertisment(props) {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const [files, setFiles] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [images, setImages] = React.useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log("image list =>", imageList, addUpdateIndex);

    setImages(imageList);

    setImageUrl(imageList[0].file);
  };

  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [state, setState] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const theme = useTheme();
  const [techName, setTechName] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const [phone, setPhone] = useState("");
  const [Gennder, setGennder] = useState("");
  const [marital, setmarital] = useState("");
  const [spez, setspez] = useState("");
  const [message, setMessage] = React.useState("");
  const [resStatus, setResstatus] = useState([]);

  const [formtitle, settitle] = useState("");
  const [neighborhoodaddrs, setaddress] = useState("");
  const [expiredate, setexpdate] = useState("");
  const [description, setdesc] = useState("");
  const [file, setfile] = useState(null);

  const handleinputchange = (e) => {
    console.log("handle file changed");
    console.log(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    setfile(e.target.files[0]);
    console.log(file);
  };

  const [value, setValue] = useState(0);
  const email = "amirizahraza@gmail.com";
  const token = props.a;

  const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    formtitle: "",
    province: "",
    city: "",
    neighborhoodaddrs: "",
    expiredate: "",
    description: "",
    clothtype: "",
    clothstatus: "",
    clothsize: "",
    pseudonym: "",
    servicetype: "",
  });

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

    switch (true) {
      case !country:
        tmpErrors["province"] = "Please select your province.";
        break;
      default:
        break;
    }

    switch (true) {
      case !city:
        tmpErrors["city"] = "Please select your city.";
        break;

      default:
        break;
    }
    switch (true) {
      case !values.neighborhoodaddrs:
        tmpErrors["neighborhoodaddrs"] = "Please enter a neighborhoodaddrs.";
        break;
      case values.neighborhoodaddrs.length > 300:
        tmpErrors["neighborhoodaddrs"] =
          "neighborhoodaddrs can be at most 300 characters.";
        break;

      default:
        break;
    }

    switch (true) {
      case !values.expiredate:
        tmpErrors["expiredate"] = "Please enter a expiredate.";
        break;
      default:
        break;
    }

    switch (true) {
      case !values.pseudonym:
        tmpErrors["pseudonym"] = "Please enter your pseudonym.";
        break;
      case values.pseudonym.length > 100:
        tmpErrors["pseudonym"] = "pseudonym can be at most 100 characters.";
        break;
      default:
        break;
    }

    switch (true) {
      case !values.description:
        tmpErrors["description"] = "Please enter your description.";
        break;
      case values.description.length > 300:
        tmpErrors["description"] = "description can be at most 300 characters.";
        break;

      default:
        break;
    }

    setErrors(tmpErrors);
  };

  const [cities, setCities] = useState(null);
  const [cc, setCC] = useState([]);
  const [countries, setCountries] = useState([]);

  const [country, setCountry] = useState(null);
  const [city, setCity] = useState("");

  const setCitiesWithCountry = (countryName) => {
    if (countryName != null) {
      setCities(cc[countryName]);
      console.log("****", cities);
    } else {
      setCities(null);
      console.log("set cities empty");
    }
  };

  useEffect(async () => {
    await axios
      .get(
        "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json"
      )
      .then((res) => {
        console.log(Object.keys(res.data));
        setCountries(Object.keys(res.data));
        setCC(res.data);
      });

    await props
      .getalljobs()
      .then((res) => {
        // setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const changeCountry = (v) => {
    setCountry(v);
    console.log("country changed to", v);
  };

  const handleChange = (name) => (event) => {
    console.log("pro h c", event.target.value);
    setValues({ ...values, [name]: event.target.value });
    // if (name === "province") {
    //   setcities(mycities.filter((x) => x.procode == event.target.value));
    // }
  };
  const changeCity = (v) => {
    setCity(v);
    console.log("city changed to", v);
  };

  const onClickSubmit = () => {
    validate();

    let filled = Object.keys(tmpErrors).length === 0;

    if (!filled) {
      console.log("error filling form");
      console.log(tmpErrors);
      setMessage("error");
      setOpen(true);
    }

    if (filled) {
      var token = localStorage.getItem("token");
      token.replaceAll('"', "");
      setLoading(true);
      var fd = new FormData();
      fd.append("Title", values.formtitle);
      fd.append("Description", values.description);
      fd.append("province", country);
      fd.append("City", city);
      fd.append("Address", values.neighborhoodaddrs);
      fd.append("expiration_date", values.expiredate);
      fd.append("Image", imageUrl);

      fd.append("resourcetype", "FoodAdvertisement");

      console.log(file);

      var config = {
        method: "post",
        url: "http://172.17.3.154/api/advertisement/addfood/",
        headers: {
          Authorization: "Token " + token,
        },
        data: fd,
      };

      axios(config)
        .then((response) => {
          setLoading(false);
          if (response.status == 201) {
            setMessage("success");
            setOpen(true);
          } else {
            setOpen(true);
            setMessage("error");
          }
        })
        .catch(function (error) {
          setLoading(false);
          setOpen(true);
          setMessage("error");
        });
    }
  };

  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #ecf2e8" }} />

      <Container sx={{ padding: "2%" }} component="main">
        <Paper
          className="signinPage"
          elevation={0}
          sx={{
            backgroundColor: "#fff",
            borderRadius: 4,
          }}
        >
          <Grid container></Grid>
          <Grid
            item
            xs={12}
            md={7}
            lg={7}
            sx={{ backgroundColor: "#fffff", borderRadius: 4 }}
          >
            <Grid item xs={12}>
              <Grid
                container
                sx={{
                  paddingTop: "5%",
                  paddingRight: "15%",
                  paddingLeft: "15%",
                }}
              >
                {/* <Grid item xs={12}>
<h1>Food advertisement</h1>
  </Grid>
  <br/><br/><br/><br/>
  <br/><br/> */}
                {/* <br/><br/><br/> */}

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <MyTextField
                      autoFocus
                      required
                      fullWidth
                      name="title"
                      id="title"
                      label="advertisement title"
                      value={values.formtitle}
                      onChange={handleChange("formtitle")}
                      error={Boolean(errors["formtitle"])}
                      helperText={errors["formtitle"]}
                    />
                  </Grid>
                  <br />
                  <br />
                  <br /> <br />
                  <br />
                  <Grid item xs={12} sm={12}>
                    <MyTextField
                      fullWidth
                      autoComplete="pseudonym"
                      name="pseudonym"
                      id="pseudonym"
                      label="pseudonym"
                      type="text"
                      value={values.pseudonym}
                      onChange={handleChange("pseudonym")}
                      error={Boolean(errors["pseudonym"])}
                      helperText={errors["pseudonym"]}
                      multiline={true}
                      rows={1}
                    />
                  </Grid>
                  <br />
                  <br />
                  <br /> <br />
                  <br />
                  <Grid item xs={12} sm={6}>
                    <MyAutocomplete
                      style={{ display: "fix-inside" }}
                      onChange={(e, v) => {
                        setCitiesWithCountry(v);
                        changeCountry(v);
                        console.log("change in country");
                        console.log("country : ", v);
                      }}
                      id="country-select-demo"
                      sx={{ width: "100%" }}
                      options={countries}
                      autoHighlight
                      value={country}
                      getOptionLabel={(option) => option}
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                          {...props}
                        >
                          {option}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Choose a country"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          }}
                        />
                      )}
                    />
                    {/* <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          name="province"
                        >
                          Province
                        </InputLabel>
                        <Select
                          name="country"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          label="Country"
                          value={values.province}
                          onChange={handleChange("province")}
                          error={Boolean(errors["province"])}
                          helperText={errors["province"]}
                        >
                          {countries.map((c) => (
                            <MenuItem value={c.label}>
                              {c.label} ({c.code})
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box> */}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {cities == null && (
                      <Grid item xs={12} md={12} sx={{ paddingBottom: "5%" }}>
                        <TextField
                          sx={{ width: "100%" }}
                          disabled
                          id="outlined-disabled"
                          label="Choose a city"
                          defaultValue="First, please choose a country"
                        />
                      </Grid>
                    )}
                    {cities != null && (
                      <Grid item xs={12} md={12} sx={{ paddingBottom: "5%" }}>
                        <MyAutocomplete
                          id="country-select-demo"
                          sx={{ width: "100%" }}
                          options={cities}
                          value={city}
                          autoHighlight
                          onChange={(e, v) => {
                            changeCity(v);
                          }}
                          getOptionLabel={(option) => option}
                          renderOption={(props, option) => (
                            <Box
                              component="li"
                              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                              {...props}
                            >
                              {option}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Choose a city"
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password", // disable autocomplete and autofill
                              }}
                            />
                          )}
                        />
                      </Grid>
                    )}
                  </Grid>
                  {/* <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          name="province"
                        >
                          City
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={formik.values.country}
                          label="city"
                          value={values.city}
                          onChange={handleChange("city")}
                          error={Boolean(errors["city"])}
                          helperText={errors["city"]}
                        >
                          {cities.map((c) => (
                            <MenuItem value={c.lable}>{c.lable} </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box> */}
                  <br />
                  <br />
                  <br /> <br />
                  <br />
                  <Grid item xs={12}>
                    <MyTextField
                      fullWidth
                      autoComplete="bio"
                      name="bio"
                      id="bio"
                      label="Neighborhood address"
                      type="text"
                      multiline
                      value={values.neighborhoodaddrs}
                      onChange={handleChange("neighborhoodaddrs")}
                      error={Boolean(errors["neighborhoodaddrs"])}
                      helperText={errors["neighborhoodaddrs"]}
                    />
                  </Grid>
                  <br />
                  <br />
                  <br /> <br />
                  <br />
                  <Grid item xs={12} sm={12}>
                    <MyTextField
                      name="date_birth"
                      label="Expiration date"
                      type="date"
                      style={{ width: "100%" }}
                      required
                      InputLabelProps={{ shrink: true }}
                      value={values.expiredate}
                      onChange={handleChange("expiredate")}
                      error={Boolean(errors["expiredate"])}
                      helperText={errors["expiredate"]}
                    />
                  </Grid>
                  <br />
                  <br />
                  <br /> <br />
                  <br />
                  <Grid item xs={12}>
                    <MyTextField
                      fullWidth
                      autoComplete="bio"
                      name="bio"
                      id="bio"
                      label="Description"
                      type="text"
                      multiline="true"
                      rows={3}
                      value={values.description}
                      onChange={handleChange("description")}
                      error={Boolean(errors["description"])}
                      helperText={errors["description"]}
                    />
                  </Grid>
                  {/* <br/><br/><br/> */}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    container
                    // direction="row"
                    // justifyContent="flex-end"
                  >
                    <div className="container mt-4">
                      <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                      >
                        {({
                          imageList,
                          onImageUpload,
                          onImageRemoveAll,
                          onImageUpdate,
                          onImageRemove,
                          isDragging,
                          dragProps,
                        }) => (
                          <div className="upload__image-wrapper">
                            <Grid
                              item
                              xs={12}
                              md={12}
                              lg={12}
                              direction="column"
                              display="flex"
                              style={{
                                alignItems: "center",
                                marginTop: "3rem",
                              }}
                            >
                              <Grid container>
                                <Box
                                  component="span"
                                  sx={{ p: 6, border: "1px dashed grey" }}
                                >
                                  <label htmlFor="icon-button-file">
                                    <IconButton
                                      style={{ color: "#465832" }}
                                      aria-label="upload picture"
                                      component="span"
                                    >
                                      <PhotoCamera
                                        style={
                                          isDragging
                                            ? { color: "red" }
                                            : undefined
                                        }
                                        onClick={onImageUpload}
                                        {...dragProps}
                                      />
                                      <Input
                                        accept="image/*"
                                        id="icon-button-file"
                                        type="file"
                                        onChange={handleinputchange}
                                      />
                                    </IconButton>
                                  </label>
                                </Box>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {imageList.map((image, index) => (
                                  <div key={index} className="image-item">
                                    &nbsp;&nbsp;&nbsp;
                                    <img
                                      src={image["data_url"]}
                                      alt=""
                                      width="100"
                                    />
                                    &nbsp;&nbsp;&nbsp;
                                  </div>
                                ))}
                              </Grid>
                            </Grid>
                          </div>
                        )}
                      </ImageUploading>

                      <br />
                      <br />
                      <br />

                      <Grid container justifyContent="flex-start">
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{ mt: 4, mb: 6 }}
                          onClick={onClickSubmit}
                          style={{
                            backgroundColor: "#e6835a",
                            color: "#FFFFFF",
                            textTransform: "unset",
                            width: "70px",
                            height: "40px",
                          }}
                        >
                          {loading ? (
                            <CircularProgress
                              style={{ color: "#fff" }}
                              size="0rem"
                            />
                          ) : (
                            <h3>Save</h3>
                          )}
                        </Button>

                        <Grid sx={{ mt: 4, mb: 6 }}>
                          <Snackbar
                            open={open}
                            autoHideDuration={4000}
                            onClose={handleClose}
                          >
                            <Alert
                              onClose={handleClose}
                              severity={
                                message === "error" ? "error" : "success"
                              }
                              sx={{ width: "100%" }}
                            >
                              {message}
                            </Alert>
                          </Snackbar>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

const Gender = [{ label: "Female" }, { label: "Male" }, { label: "Other" }];

const Maritalstatus = [{ label: "Single" }, { label: "Married" }];

const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  {
    code: "CA",
    label: "Canada",
    phone: "1",
    suggested: true,
  },
  {
    code: "CC",
    label: "Cocos (Keeling) Islands",
    phone: "61",
  },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
  },
  {
    code: "CF",
    label: "Central African Republic",
    phone: "236",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  { code: "CK", label: "Cook Islands", phone: "682" },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CM", label: "Cameroon", phone: "237" },
  { code: "CN", label: "China", phone: "86" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "CR", label: "Costa Rica", phone: "506" },
  { code: "CU", label: "Cuba", phone: "53" },
  { code: "CV", label: "Cape Verde", phone: "238" },
  { code: "CW", label: "Curacao", phone: "599" },
  { code: "CX", label: "Christmas Island", phone: "61" },
  { code: "CY", label: "Cyprus", phone: "357" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  {
    code: "DE",
    label: "Germany",
    phone: "49",
    suggested: true,
  },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1-767" },
  {
    code: "DO",
    label: "Dominican Republic",
    phone: "1-809",
  },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "EH", label: "Western Sahara", phone: "212" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "FI", label: "Finland", phone: "358" },
  { code: "FJ", label: "Fiji", phone: "679" },
  {
    code: "FK",
    label: "Falkland Islands (Malvinas)",
    phone: "500",
  },
  {
    code: "FM",
    label: "Micronesia, Federated States of",
    phone: "691",
  },
  { code: "FO", label: "Faroe Islands", phone: "298" },
  {
    code: "FR",
    label: "France",
    phone: "33",
    suggested: true,
  },
  { code: "GA", label: "Gabon", phone: "241" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "GD", label: "Grenada", phone: "1-473" },
  { code: "GE", label: "Georgia", phone: "995" },
  { code: "GF", label: "French Guiana", phone: "594" },
  { code: "GG", label: "Guernsey", phone: "44" },
  { code: "GH", label: "Ghana", phone: "233" },
  { code: "GI", label: "Gibraltar", phone: "350" },
  { code: "GL", label: "Greenland", phone: "299" },
  { code: "GM", label: "Gambia", phone: "220" },
  { code: "GN", label: "Guinea", phone: "224" },
  { code: "GP", label: "Guadeloupe", phone: "590" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  { code: "GR", label: "Greece", phone: "30" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
  },
  { code: "GT", label: "Guatemala", phone: "502" },
  { code: "GU", label: "Guam", phone: "1-671" },
  { code: "GW", label: "Guinea-Bissau", phone: "245" },
  { code: "GY", label: "Guyana", phone: "592" },
  { code: "HK", label: "Hong Kong", phone: "852" },
  {
    code: "HM",
    label: "Heard Island and McDonald Islands",
    phone: "672",
  },
  { code: "HN", label: "Honduras", phone: "504" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HT", label: "Haiti", phone: "509" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IM", label: "Isle of Man", phone: "44" },
  { code: "IN", label: "India", phone: "91" },
  {
    code: "IO",
    label: "British Indian Ocean Territory",
    phone: "246",
  },
  { code: "IQ", label: "Iraq", phone: "964" },
  {
    code: "IR",
    label: "Iran",
    phone: "98",
  },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "JE", label: "Jersey", phone: "44" },
  { code: "JM", label: "Jamaica", phone: "1-876" },
  { code: "JO", label: "Jordan", phone: "962" },
  {
    code: "JP",
    label: "Japan",
    phone: "81",
    suggested: true,
  },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KG", label: "Kyrgyzstan", phone: "996" },
  { code: "KH", label: "Cambodia", phone: "855" },
  { code: "KI", label: "Kiribati", phone: "686" },
  { code: "KM", label: "Comoros", phone: "269" },
  {
    code: "KN",
    label: "Saint Kitts and Nevis",
    phone: "1-869",
  },
  {
    code: "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
  },
  { code: "KR", label: "Korea, Republic of", phone: "82" },
  { code: "KW", label: "Kuwait", phone: "965" },
  { code: "KY", label: "Cayman Islands", phone: "1-345" },
  { code: "KZ", label: "Kazakhstan", phone: "7" },
  {
    code: "LA",
    label: "Lao People's Democratic Republic",
    phone: "856",
  },
  { code: "LB", label: "Lebanon", phone: "961" },
  { code: "LC", label: "Saint Lucia", phone: "1-758" },
  { code: "LI", label: "Liechtenstein", phone: "423" },
  { code: "LK", label: "Sri Lanka", phone: "94" },
  { code: "LR", label: "Liberia", phone: "231" },
  { code: "LS", label: "Lesotho", phone: "266" },
  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "LY", label: "Libya", phone: "218" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "MC", label: "Monaco", phone: "377" },
  {
    code: "MD",
    label: "Moldova, Republic of",
    phone: "373",
  },
  { code: "ME", label: "Montenegro", phone: "382" },
  {
    code: "MF",
    label: "Saint Martin (French part)",
    phone: "590",
  },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MH", label: "Marshall Islands", phone: "692" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { code: "ML", label: "Mali", phone: "223" },
  { code: "MM", label: "Myanmar", phone: "95" },
  { code: "MN", label: "Mongolia", phone: "976" },
  { code: "MO", label: "Macao", phone: "853" },
  {
    code: "MP",
    label: "Northern Mariana Islands",
    phone: "1-670",
  },
  { code: "MQ", label: "Martinique", phone: "596" },
  { code: "MR", label: "Mauritania", phone: "222" },
  { code: "MS", label: "Montserrat", phone: "1-664" },
  { code: "MT", label: "Malta", phone: "356" },
  { code: "MU", label: "Mauritius", phone: "230" },
  { code: "MV", label: "Maldives", phone: "960" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "NA", label: "Namibia", phone: "264" },
  { code: "NC", label: "New Caledonia", phone: "687" },
  { code: "NE", label: "Niger", phone: "227" },
  { code: "NF", label: "Norfolk Island", phone: "672" },
  { code: "NG", label: "Nigeria", phone: "234" },
  { code: "NI", label: "Nicaragua", phone: "505" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "NP", label: "Nepal", phone: "977" },
  { code: "NR", label: "Nauru", phone: "674" },
  { code: "NU", label: "Niue", phone: "683" },
  { code: "NZ", label: "New Zealand", phone: "64" },
  { code: "OM", label: "Oman", phone: "968" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PF", label: "French Polynesia", phone: "689" },
  { code: "PG", label: "Papua New Guinea", phone: "675" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "PL", label: "Poland", phone: "48" },
  {
    code: "PM",
    label: "Saint Pierre and Miquelon",
    phone: "508",
  },
  { code: "PN", label: "Pitcairn", phone: "870" },
  { code: "PR", label: "Puerto Rico", phone: "1" },
  {
    code: "PS",
    label: "Palestine, State of",
    phone: "970",
  },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "PW", label: "Palau", phone: "680" },
  { code: "PY", label: "Paraguay", phone: "595" },
  { code: "QA", label: "Qatar", phone: "974" },
  { code: "RE", label: "Reunion", phone: "262" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "RU", label: "Russian Federation", phone: "7" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SB", label: "Solomon Islands", phone: "677" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SH", label: "Saint Helena", phone: "290" },
  { code: "SI", label: "Slovenia", phone: "386" },
  {
    code: "SJ",
    label: "Svalbard and Jan Mayen",
    phone: "47",
  },
  { code: "SK", label: "Slovakia", phone: "421" },
  { code: "SL", label: "Sierra Leone", phone: "232" },
  { code: "SM", label: "San Marino", phone: "378" },
  { code: "SN", label: "Senegal", phone: "221" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SR", label: "Suriname", phone: "597" },
  { code: "SS", label: "South Sudan", phone: "211" },
  {
    code: "ST",
    label: "Sao Tome and Principe",
    phone: "239",
  },
  { code: "SV", label: "El Salvador", phone: "503" },
  {
    code: "SX",
    label: "Sint Maarten (Dutch part)",
    phone: "1-721",
  },
  {
    code: "SY",
    label: "Syrian Arab Republic",
    phone: "963",
  },
  { code: "SZ", label: "Swaziland", phone: "268" },
  {
    code: "TC",
    label: "Turks and Caicos Islands",
    phone: "1-649",
  },
  { code: "TD", label: "Chad", phone: "235" },
  {
    code: "TF",
    label: "French Southern Territories",
    phone: "262",
  },
  { code: "TG", label: "Togo", phone: "228" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "TJ", label: "Tajikistan", phone: "992" },
  { code: "TK", label: "Tokelau", phone: "690" },
  { code: "TL", label: "Timor-Leste", phone: "670" },
  { code: "TM", label: "Turkmenistan", phone: "993" },
  { code: "TN", label: "Tunisia", phone: "216" },
  { code: "TO", label: "Tonga", phone: "676" },
  { code: "TR", label: "Turkey", phone: "90" },
  {
    code: "TT",
    label: "Trinidad and Tobago",
    phone: "1-868",
  },
  { code: "TV", label: "Tuvalu", phone: "688" },
  {
    code: "TW",
    label: "Taiwan, Province of China",
    phone: "886",
  },
  {
    code: "TZ",
    label: "United Republic of Tanzania",
    phone: "255",
  },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "UG", label: "Uganda", phone: "256" },
  {
    code: "US",
    label: "United States",
    phone: "1",
    suggested: true,
  },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  {
    code: "VA",
    label: "Holy See (Vatican City State)",
    phone: "379",
  },
  {
    code: "VC",
    label: "Saint Vincent and the Grenadines",
    phone: "1-784",
  },
  { code: "VE", label: "Venezuela", phone: "58" },
  {
    code: "VG",
    label: "British Virgin Islands",
    phone: "1-284",
  },
  {
    code: "VI",
    label: "US Virgin Islands",
    phone: "1-340",
  },
  { code: "VN", label: "Vietnam", phone: "84" },
  { code: "VU", label: "Vanuatu", phone: "678" },
  { code: "WF", label: "Wallis and Futuna", phone: "681" },
  { code: "WS", label: "Samoa", phone: "685" },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];

const Provinces = [
  { code: 1, label: "ALborz" },
  { code: 2, label: "Ardabil" },
  { code: 3, label: "Azerbaijan, East" },
  { code: 4, label: "Azerbaijan, West" },
  { code: 5, label: "Bushehr" },
  { code: 6, label: "Chahar Mahaal and Bakhtiari" },
  { code: 7, label: "Fars" },
  { code: 8, label: "Gilan" },
  { code: 9, label: "Golestan" },
  { code: 10, label: "Hamadan" },
  { code: 11, label: "Isfahan" },
  { code: 12, label: "Kerman" },
  { code: 13, label: "Isfahanshah" },
  { code: 14, label: "Khorasan, North" },
  { code: 15, label: "Khorasan, Razavi" },
  { code: 16, label: "Khorasan, South" },
  { code: 17, label: "Khuzestan" },
  { code: 18, label: "Kohgiluyeh and Boyer-Ahmad" },
  { code: 19, label: "Kurdistan" },
  { code: 20, label: "Lorestan" },
  { code: 21, label: "Markazi" },
  { code: 22, label: "Mazandaran" },
  { code: 23, label: "Qazvin" },
  { code: 24, label: "Qom" },
  { code: 25, label: "Semnan" },
  { code: 26, label: "Sistan and Baluchestan" },
  { code: 27, label: "Tehran" },
  { code: 28, label: "Yazd" },
  { code: 29, label: "Zanjan" },
];

const mycities = [
  { procode: 1, lable: "Maragheh" },
  { procode: 1, lable: "shabestar" },
  { procode: 1, lable: "sarab" },
  { procode: 1, lable: "charavimagh" },
  { procode: 1, lable: "osko" },
  { procode: 1, lable: "jolfa" },
  { procode: 1, lable: "ahar" },
  { procode: 1, lable: "bonab" },
  { procode: 1, lable: "tabriz" },
  { procode: 1, lable: "bostan abad" },
  { procode: 1, lable: "azar shahr" },
  { procode: 2, lable: "naghadeh" },
  { procode: 2, lable: "bookan" },
  { procode: 2, lable: "piranshahr" },
  { procode: 2, lable: "chaldoran" },
  { procode: 2, lable: "khoy" },
  { procode: 2, lable: "takab" },
  { procode: 2, lable: "sardasht" },
  { procode: 2, lable: "salmas" },
  { procode: 2, lable: "shahindezh" },
  { procode: 2, lable: "makou" },
  { procode: 2, lable: "mahabad" },
  { procode: 2, lable: "ashnoyeh" },
  { procode: 2, lable: "miandoab" },
  { procode: 2, lable: "oromieh" },
  { procode: 3, lable: "ardabil" },
  { procode: 3, lable: "pileh savar" },
  { procode: 3, lable: "pars abad" },
  { procode: 3, lable: "khalkhal" },
  { procode: 3, lable: "garmi" },
  { procode: 3, lable: "meshkin shahr" },
  { procode: 3, lable: "namin" },
  { procode: 3, lable: "nir" },
  { procode: 3, lable: "kosar" },
  { procode: 4, lable: "natanz" },
  { procode: 4, lable: "najaf abad" },
  { procode: 4, lable: "naeen" },
  { procode: 4, lable: "golpaygan" },
  { procode: 4, lable: "lanjan" },
  { procode: 4, lable: "mobarakeh" },
  { procode: 4, lable: "felavarjan" },
  { procode: 4, lable: "semirom sofla" },
  { procode: 4, lable: "semirom" },
  { procode: 4, lable: "kashan" },
  { procode: 4, lable: "khomein shahr" },
  { procode: 4, lable: "mimeh" },
  { procode: 4, lable: "ardestan" },
  { procode: 4, lable: "aran o bidgol" },
  { procode: 4, lable: "feriden" },
  { procode: 4, lable: "chadegan" },
];
export default Foodadvertisment;
