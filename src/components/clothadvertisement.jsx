import React, { useState, useEffect, setState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import Helmet from "react-helmet";
import FormControl from "@mui/material/FormControl";
import "react-phone-input-2/lib/style.css";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { CircularProgress } from "@mui/material";
import "date-fns";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import ImageUploading from "react-images-uploading";

import MySelect from "./ModifiedSelect";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { makeStyles } from "@material-ui/core/styles";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import MyTextField from "./ModifiedTextField";
import Autocomplete from "@mui/material/Autocomplete";
import MyAutocomplete from "./ModifiedAutocom";

const Input = styled("input")({
  display: "none",
});

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function Clothadvertisement(props) {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const [files, setFiles] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [images, setImages] = React.useState([]);
  const [imageUrl, setImageUrl] = useState(null);
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

  // const Alert = React.forwardRef(function Alert(props, ref) {
  //   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  // });

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

  const [Countrry, setCountrry] = useState("");

  // const [city, setcity] = useState("");
  const [formtitle, settitle] = useState("");
  const [neighborhoodaddrs, setaddress] = useState("");
  const [expiredate, setexpdate] = useState("");
  const [description, setdesc] = useState("");

  // const [cities, setcities] = useState([]);

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
      case !values.description:
        tmpErrors["description"] = "Please enter your description.";
        break;
      case values.description.length > 300:
        tmpErrors["description"] = "description can be at most 300 characters.";
        break;

      default:
        break;
    }

    switch (true) {
      case !values.clothtype:
        tmpErrors["clothtype"] = "Please enter your clothtype.";
        break;
      default:
        break;
    }
    switch (true) {
      case !values.clothstatus:
        tmpErrors["clothstatus"] = "Please enter your clothstatus.";
        break;
      default:
        break;
    }
    switch (true) {
      case !values.clothsize:
        tmpErrors["clothsize"] = "Please enter your clothsize.";
        break;
      default:
        break;
    }

    // switch (true) {
    //   case !values.pseudonym:
    //     tmpErrors["pseudonym"] = "Please enter your pseudonym.";
    //     break;
    //   case values.pseudonym.length > 100:
    //     tmpErrors["pseudonym"] = "pseudonym can be at most 100 characters.";
    //     break;
    //   default:
    //     break;
    // }
    // switch (true) {
    //   case !values.servicetype:
    //     tmpErrors["servicetype"] = "Please enter your servicetype.";
    //     break;

    //   default:
    //     break;
    // }
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
  const changeCity = (v) => {
    setCity(v);
    console.log("city changed to", v);
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
    setValues({ ...values, [name]: event.target.value });
    // if (name === "province") {
    //   setcities(mycities.filter((x) => x.procode == event.target.value));
    // }
  };
  const onClickSubmit = () => {
    validate();

    let filled = Object.keys(tmpErrors).length === 0;

    if (!filled) {
      console.log("error filling form");
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
      fd.append("cloth_type", values.clothtype);
      fd.append("cloth_status", values.clothstatus);
      fd.append("cloth_size", values.clothsize);
      fd.append("Image", imageUrl);
      // fd.append("owner",values.pseudonym)
      // fd.append("for_men",);
      // fd.append("for_women",);
      // fd.append("for_kids",);
      // fd.append("unlimited",);
      // fd.append("Image",null);
      fd.append("resourcetype", "ClothAdvertisement");
      console.log(images[0], imageUrl);
      var config = {
        method: "post",
        url: "http://172.17.3.154/api/advertisement/addcloth/",
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
            setMessage("error");
            setOpen(true);
            console.log(message);
          }
        })
        .catch(function (error) {
          setLoading(false);
          setMessage("error");
          setOpen(true);
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
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <MyTextField
                      autoFocus
                      required
                      fullWidth
                      autoComplete="firstmane"
                      name="firstname"
                      id="firstname"
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
                        <MyTextField
                          {...params}
                          label="Choose a country"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password", // disable autocomplete and autofill
                          }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {cities == null && (
                      <Grid item xs={12} md={12} sx={{ paddingBottom: "5%" }}>
                        <MyTextField
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
                            <MyTextField
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
                  {/* <Grid item xs={12} sm={6}>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          name="province"
                        >
                          Province
                        </InputLabel>
                        <MySelect
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Province"
                          value={values.province}
                          onChange={handleChange("province")}
                          error={Boolean(errors["province"])}
                          helperText={errors["province"]}
                        >
                          {Provinces.map((c) => (
                            <MenuItem value={c.code}>{c.label} </MenuItem>
                          ))}
                        </MySelect>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          name="province"
                        >
                          City
                        </InputLabel>
                        <MySelect
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
                            <MenuItem value={c.procode}>{c.lable} </MenuItem>
                          ))}
                        </MySelect>
                      </FormControl>
                    </Box>
                  </Grid> */}
                  <br />
                  <br />
                  <br /> <br />
                  <br />
                  <Grid item xs={12}>
                    <MyTextField
                      fullWidth
                      autoComplete="address"
                      name="address"
                      id="address"
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
                  <Grid item xs={12} sm={6}>
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
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          name="marital_status"
                        >
                          cloth type
                        </InputLabel>
                        <MySelect
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Select Marital Status"
                          textAlign="left"
                          value={values.clothtype}
                          onChange={handleChange("clothtype")}
                          error={Boolean(errors["clothtype"])}
                          helperText={errors["clothtype"]}
                        >
                          <MenuItem value={"scarf/shawl"}>scarf/shawl</MenuItem>
                          <MenuItem value={"pants"}>pants</MenuItem>
                          <MenuItem value={"T-shirt"}>T-shirt</MenuItem>
                          <MenuItem value={"hat"}>hat</MenuItem>
                          <MenuItem value={"under wear"}>under wear</MenuItem>
                          <MenuItem value={"jackets/coats"}>
                            jackets/coats
                          </MenuItem>
                        </MySelect>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          name="marital_status"
                        >
                          cloth status
                        </InputLabel>
                        <MySelect
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Select Marital Status"
                          textAlign="left"
                          value={values.clothstatus}
                          onChange={handleChange("clothstatus")}
                          error={Boolean(errors["clothstatus"])}
                          helperText={errors["clothstatus"]}
                        >
                          <MenuItem value={"not used and new"}>
                            not used and new
                          </MenuItem>
                          <MenuItem value={"useable"}>useable</MenuItem>
                          <MenuItem value={"need to be repaired"}>
                            need to be repaired
                          </MenuItem>
                        </MySelect>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          name="marital_status"
                        >
                          cloth size
                        </InputLabel>
                        <MySelect
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Select Marital Status"
                          textAlign="left"
                          value={values.clothsize}
                          onChange={handleChange("clothsize")}
                          error={Boolean(errors["clothsize"])}
                          helperText={errors["clothsize"]}
                        >
                          <MenuItem value={"free size"}>free size</MenuItem>
                          <MenuItem value={"large"}>large</MenuItem>
                          <MenuItem value={"medium"}>medium</MenuItem>
                          <MenuItem value={"small"}>small</MenuItem>
                          <MenuItem value={"extra large"}>extra large</MenuItem>
                          <MenuItem value={"extra small"}>extra small</MenuItem>
                        </MySelect>
                      </FormControl>
                    </Box>
                    <br />
                  </Grid>
                  <Grid>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl>
                      {/* <FormLabel id="demo-form-control-label-placement">labelPlacement</FormLabel> */}
                      <RadioGroup
                        row
                        aria-labelledby="demo-form-control-label-placement"
                        name="position"
                        defaultValue="top"
                      >
                        <FormControlLabel
                          value="for men"
                          control={<Radio />}
                          label="for men"
                        />
                        <FormControlLabel
                          value="for women"
                          control={<Radio />}
                          label="for women"
                        />
                        <FormControlLabel
                          value="for kids"
                          control={<Radio />}
                          label="for kids"
                        />
                        <FormControlLabel
                          value="unlimited"
                          control={<Radio />}
                          label="unlimited"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <br />
                  <br />
                  <Grid item xs={12}>
                    <MyTextField
                      fullWidth
                      autoComplete="bio"
                      name="bio"
                      id="bio"
                      label="Description"
                      type="text"
                      value={values.description}
                      onChange={handleChange("description")}
                      error={Boolean(errors["description"])}
                      helperText={errors["description"]}
                      multiline={true}
                      rows={3}
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
                                    <Input
                                      accept="image/*"
                                      id="icon-button-file"
                                      type="file"
                                    />
                                    <IconButton
                                      style={{ color: "#465832" }}
                                      aria-label="upload picture"
                                      component="label"
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

                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={2}
                      ></Stack>

                      <br />

                      <Grid container>
                        &nbsp;
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
export default Clothadvertisement;
