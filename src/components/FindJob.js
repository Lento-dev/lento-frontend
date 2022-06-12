import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Helmet from "react-helmet";
import Autocomplete from "@mui/material/Autocomplete";
import JobCard from "./JobCard";
import { Search, Tune } from "@mui/icons-material";
import InputBase from "@mui/material/InputBase";
import { getalljobs } from "../actions/auth";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { connect } from "react-redux";
import axios from "axios";
import SearchBar from "./SearchBar";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import LoadingButton from "@mui/lab/LoadingButton";
import Pagination from "@mui/material/Pagination";
import Backdrop from "@mui/material/Backdrop";
import Image from "./nothingfound.png";
import { BackToTop } from "material-ui-back-to-top";
import PaginationItem from "@mui/material/PaginationItem";

import "../JobCss.css";
import FormLabel from "@mui/material/FormLabel";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  Chip,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardActionArea,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const technology = [
  "Angular",
  "jQuery",
  "Polymer",
  "React",
  "Vue.js",
  "Python",
  "Javascript",
  "Java",
  "C#",
  "Electronics",
  "Induction welding",
  "Heat treatment",
  "Medical industry",
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#92085b",
    },
    typography: {
      fontFamily: ["Nunito"].join(","),
    },
  },
});
function Jobs(props, { children }) {
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [loadingF, setLoadingF] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState(null);

  // for checking search and filter start
  const [filterStart, setFilterStart] = useState(false);
  const [removeF, setRemoveF] = useState(false);
  const [searchStart, setSearchStart] = useState(false);
  // for checking if serach is on or filter
  const [filterIsOn, setFilterIsOn] = useState(false);
  const [searchIsOn, setSearchIsOn] = useState(false);

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState(null);
  // total countries and cities from json
  const [cc, setCC] = useState([]);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [technologies, setTechnologies] = useState([]);
  // cooperation
  const [ht, setHt] = React.useState(false);
  const [ft, setFt] = React.useState(false);
  const [proj, setProj] = React.useState(false);
  const [remote, setRemote] = React.useState(false);
  const [found, setFound] = React.useState(false);
  const [pageLoading, setPageLoading] = React.useState(false);
  // for experience level
  const [junior, setJunior] = React.useState(false);
  const [senior, setSenior] = React.useState(false);
  const [intern, setIntern] = React.useState(false);
  const [lead, setLead] = React.useState(false);

  // for expanding filter parts
  const [ccExpanded, setCcExpanded] = React.useState(true);
  const [expExpanded, setExpExpanded] = React.useState(true);
  const [jobtypeExpanded, setJobtypeExpanded] = React.useState(true);
  const [techExpanded, setTechExpanded] = React.useState(true);
  const headers = {
    headers: {
      Authorization: `Bearer ${props.a}`,
    },
  };

  const setCitiesWithCountry = (countryName) => {
    if (countryName != null) {
      setCities(cc[countryName]);
    } else {
      setCities(null);
      console.log("set cities empty");
    }
  };
  const changeCountry = (v) => {
    setCountry(v);
    console.log("country changed to", v);
  };
  const changeCity = (v) => {
    setCity(v);
    console.log("city changed to", v);
  };
  const handleChange = (event, value) => {
    setPageLoading(true);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    props.getalljobs().then((res) => {
      // setJobs(res.data.sort((a, b) => (a.id < b.id) ? 1 : -1));
      setPage(value);
      setPageLoading(false);
    });
  };

  const removeFiltersForSearch = () => {
    if (ht) setHt(false);
    if (ft) setFt(false);
    if (proj) setProj(false);
    if (remote) setRemote(false);
    if (senior) setSenior(false);
    if (junior) setJunior(false);
    if (intern) setIntern(false);
    if (lead) setLead(false);
    if (technologies) setTechnologies([]);
    if (country != null) setCountry(null);
    if (city != null) {
      setCity(null);
      setCities(null);
    }
    console.log("city", city);
    console.log("country", country);
  };

  const removeFilters = async () => {
    setRemoveF(true);
    if (ht) setHt(false);
    if (ft) setFt(false);
    if (proj) setProj(false);
    if (remote) setRemote(false);
    if (senior) setSenior(false);
    if (junior) setJunior(false);
    if (intern) setIntern(false);
    if (lead) setLead(false);
    if (technologies) setTechnologies([]);
    if (country != null) setCountry(null);
    if (city != null) {
      setCity(null);
      setCities(null);
    }
    setRemoveF(false);
    console.log("city", city);
    console.log("country", country);
    await props.getalljobs().then((res) => {
      setJobs(res.data.sort((a, b) => (a.id < b.id ? 1 : -1)));
      setRemoveF(false);
      setFilterIsOn(false);
    });
  };

  const handleSearchClick = async () => {
    removeFiltersForSearch();
    setFilterIsOn(false);
    setLoading(true);
    // setJobs(null);
    setSearchStart(true);

    await axios
      .get("http://185.190.39.17:8888/jobs/search-job?search=" + query)
      .then((res) => {
        setSearchIsOn(true);
        setLoading(false);
        console.log(res.data);
        setJobs(res.data.sort((a, b) => (a.id < b.id ? 1 : -1)));
        setSearchStart(false);
      });
  };

  const filterClick = async () => {
    setLoadingF(true);
    setFilterStart(true);

    console.log("click on filter and loading is:", loading);

    var url = "";
    if (country != null) {
      url += "country=" + country + "&";
    }
    if (country != null && city != null) {
      url += "city=" + city + "&";
    }

    // cooperation
    if (ht) {
      url += "cooperation=HT&";
    }
    if (ft) {
      url += "cooperation=F&";
    }
    if (proj) {
      url += "cooperation=P&";
    }
    if (remote) {
      url += "workingdistance=true&";
    }

    // experiencelevel
    if (intern) {
      url += "experiencelevel=I&";
    }
    if (junior) {
      url += "experiencelevel=J&";
    }
    if (senior) {
      url += "experiencelevel=S&";
    }
    if (lead) {
      url += "experiencelevel=L&";
    }

    if (technologies.length != 0) {
      url += "technologies=";
      for (let index = 0; index < technologies.length; index++) {
        if (technologies[index] == "C#") {
          url += "C%23,";
        } else {
          url += technologies[index] + ",";
        }
      }
      url += "&";
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    await axios
      .get("http://185.190.39.17:8888/jobs/search-job?" + url)
      .then((res) => {
        setJobs(res.data.sort((a, b) => (a.id < b.id ? 1 : -1)));
        setFilterIsOn(true);
        setLoadingF(false);
        setFilterStart(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingF(false);
        return;
      });

    console.log("jobs : ", jobs);
    console.log("jobs length:", jobs.length);
    setFound(true);
  };

  useEffect(async () => {
    await axios
      .get(
        "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json"
      )
      .then((res) => {
        setCountries(Object.keys(res.data));
        setCC(res.data);
      });

    await props
      .getalljobs()
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return jobs ? (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #f5f5f5" }}></Helmet>

      <Container component="main">
        <Grid
          container
          spacing={4}
          sx={{ paddingTop: "70px", paddingBottom: "60px" }}
        >
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container spacing={5}>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{ justifyContent: "center" }}
              >
                {/* {((filterIsOn == true || searchIsOn == true) && jobs.length == 1) && (
                        <Typography sx={{paddingLeft: '3px', letterSpacing: '0.7px'}} >
                        Just 1 job is found
                        </Typography>
                )}
                {((filterIsOn == true || searchIsOn == true) && jobs.length != 1 && jobs.length !=0) && (
                        <Typography sx={{paddingLeft: '3px', letterSpacing: '1.2px'}} >
                        {jobs.length} jobs is found 
                    </Typography>
                )}

                {(filterIsOn == true) && (
                    <Button classname="buttonFilter" onClick={() => history.go(0)} style={{color: 'black', backgroundColor: '#e6eaf0', textTransform: 'unset', letterSpacing: '1px'}} >
                        Remove all filters
                    </Button>
                )} */}
              </Grid>

              <Grid item xs={12} sm={12} md={8} lg={8}>
                <Grid container spacing={4}>
                  <Grid item xs={6} sm={9} md={10} lg={10}>
                    <TextField
                      id="outlined-search"
                      fullWidth
                      placeholder="Search by any tag, country, city, job type and ..."
                      onChange={(e) => {
                        setQuery(e.target.value);
                      }}
                      type="search"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3} md={2} lg={2}>
                    <Button
                      fullWidth
                      disabled={loading}
                      onClick={handleSearchClick}
                      style={{ backgroundColor: "#000066", height: "92%" }}
                      variant="contained"
                    >
                      {loading ? (
                        <CircularProgress
                          style={{ color: "#fff" }}
                          size="1.5rem"
                        />
                      ) : (
                        "search"
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Grid container spacing={2}>
              {/* {found == true && (
                    <Grid item xs={12} sm={12}>
                <Typography sx={{ flexShrink: 0, fontWeight: 'bold' }}>
                                            {jobs.length} jobs found
</Typography>
</Grid>
                )} */}
              <Grid item xs={12} md={12}>
                <Accordion
                  expanded={ccExpanded}
                  variant="outlined"
                  onChange={() => setCcExpanded(!ccExpanded)}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandCircleDownRoundedIcon
                        style={{ color: "#92085b" }}
                      />
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    style={{ backgroundColor: "#f5f5f5", color: "black" }}
                  >
                    <Typography sx={{ flexShrink: 0, fontWeight: "bold" }}>
                      Country and City
                    </Typography>
                  </AccordionSummary>
                  <Divider />
                  <AccordionDetails
                    sx={{ marginButtom: "5%" }}
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <Grid
                      item
                      xs={12}
                      md={12}
                      sx={{ paddingBottom: "10%", paddingTop: "7%" }}
                    >
                      <Autocomplete
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
                    </Grid>
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
                        <Autocomplete
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
                  </AccordionDetails>
                </Accordion>
              </Grid>

              <Grid item xs={12} md={12}>
                <Accordion
                  expanded={jobtypeExpanded}
                  variant="outlined"
                  onChange={() => setJobtypeExpanded(!jobtypeExpanded)}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandCircleDownRoundedIcon
                        style={{ color: "#92085b" }}
                      />
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    style={{ backgroundColor: "#f5f5f5", color: "black" }}
                  >
                    <Typography sx={{ flexShrink: 0, fontWeight: "bold" }}>
                      Job type
                    </Typography>
                  </AccordionSummary>
                  <Divider />
                  <AccordionDetails style={{ backgroundColor: "#ffffff" }}>
                    <Grid container>
                      <Grid item xs={12}>
                        <FormGroup>
                          <FormControlLabel
                            checked={ht}
                            control={<Checkbox onClick={() => setHt(!ht)} />}
                            label="Part time"
                          />
                        </FormGroup>{" "}
                      </Grid>
                      <Grid item xs={12}>
                        <FormGroup>
                          <FormControlLabel
                            checked={ft}
                            control={<Checkbox onClick={() => setFt(!ft)} />}
                            label="Full time"
                          />
                        </FormGroup>{" "}
                      </Grid>
                      <Grid item xs={12}>
                        <FormGroup>
                          <FormControlLabel
                            checked={proj}
                            control={
                              <Checkbox onClick={() => setProj(!proj)} />
                            }
                            label="Project"
                          />
                        </FormGroup>
                        <Grid item xs={12}>
                          <FormGroup>
                            <FormControlLabel
                              checked={remote}
                              control={
                                <Checkbox onClick={() => setRemote(!remote)} />
                              }
                              label="Remote"
                            />
                          </FormGroup>
                        </Grid>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>

              <Grid item xs={12} md={12}>
                <Accordion
                  expanded={techExpanded}
                  variant="outlined"
                  onChange={() => setTechExpanded(!techExpanded)}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandCircleDownRoundedIcon
                        style={{ color: "#92085b" }}
                      />
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    style={{ backgroundColor: "#f5f5f5", color: "black" }}
                  >
                    <Typography sx={{ flexShrink: 0, fontWeight: "bold" }}>
                      Technologies
                    </Typography>
                  </AccordionSummary>
                  <Divider />
                  <AccordionDetails
                    style={{ backgroundColor: "#ffffff", paddingTop: "5%" }}
                  >
                    <Autocomplete
                      sx={{ width: "100%" }}
                      multiple
                      value={technologies}
                      id="technologies"
                      options={technology}
                      onChange={(event, value) => {
                        setTechnologies(value);
                        console.log("technologies : ", technologies);
                      }}
                      getOptionLabel={(option) => option}
                      filterSelectedOptions
                      renderInput={(params) => (
                        <TextField
                          fullWidth
                          required
                          {...params}
                          label="Technologies"
                        />
                      )}
                    />
                  </AccordionDetails>
                </Accordion>
              </Grid>

              <Grid item xs={12} md={12}>
                <Accordion
                  expanded={expExpanded}
                  variant="outlined"
                  onChange={() => setExpExpanded(!expExpanded)}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandCircleDownRoundedIcon
                        style={{ color: "#92085b" }}
                      />
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    style={{ backgroundColor: "#f5f5f5", color: "black" }}
                  >
                    <Typography sx={{ flexShrink: 0, fontWeight: "bold" }}>
                      Experience level
                    </Typography>
                  </AccordionSummary>
                  <Divider />
                  <AccordionDetails style={{ backgroundColor: "#ffffff" }}>
                    <Grid container>
                      <Grid item xs={12}>
                        <FormGroup>
                          <FormControlLabel
                            checked={intern}
                            control={
                              <Checkbox onClick={() => setIntern(!intern)} />
                            }
                            label="Intern"
                          />
                        </FormGroup>{" "}
                      </Grid>
                      <Grid item xs={12}>
                        <FormGroup>
                          <FormControlLabel
                            checked={junior}
                            control={
                              <Checkbox onClick={() => setJunior(!junior)} />
                            }
                            label="Junior"
                          />
                        </FormGroup>{" "}
                      </Grid>
                      <Grid item xs={12}>
                        <FormGroup>
                          <FormControlLabel
                            checked={senior}
                            control={
                              <Checkbox onClick={() => setSenior(!senior)} />
                            }
                            label="Senior"
                          />
                        </FormGroup>
                        <Grid item xs={12}>
                          <FormGroup>
                            <FormControlLabel
                              checked={lead}
                              control={
                                <Checkbox onClick={() => setLead(!lead)} />
                              }
                              label="Lead"
                            />
                          </FormGroup>
                        </Grid>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12} md={12}>
                <Button
                  fullWidth
                  disabled={loadingF}
                  onClick={filterClick}
                  style={{
                    backgroundColor: "#000066",
                    color: "white",
                    letterSpacing: "3",
                  }}
                  variant="outlined"
                >
                  {loadingF ? (
                    <CircularProgress style={{ color: "#fff" }} size="1.5rem" />
                  ) : (
                    "serach"
                  )}
                </Button>
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={filterStart || searchStart}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress
                      size="3rem"
                      style={{ color: "#000066" }}
                    />
                  </Box>
                </Backdrop>
              </Grid>
            </Grid>
          </Grid>
          {jobs.length == 0 && (
            <Grid
              item
              xs={12}
              md={8}
              sx={{ marginTop: "-100px" }}
              style={{ alignItems: "center" }}
            >
              <Grid container>
                <Grid item xs={12} textAlign="center">
                  <img
                    src={Image}
                    width="100"
                    height="100"
                    className="responsive center"
                    alt="nothing found"
                    loading="nothing found"
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{ textAlign: "center", marginTop: "-15%" }}
                >
                  <Typography
                    sx={{ fontSize: "1.8rem", fontWeight: "600" }}
                    style={{ letterSpacing: "1.5px" }}
                  >
                    Oops! No job found
                  </Typography>
                  {filterIsOn == true && (
                    <Typography sx={{ textAlign: "center" }}>
                      <Button
                        style={{
                          color: "black",
                          backgroundColor: "#b5b5b5",
                          textTransform: "unset",
                          letterSpacing: "1px",
                          marginTop: "15px",
                        }}
                      >
                        <Link
                          underline="hover"
                          sx={{ cursor: "pointer" }}
                          color="inherit"
                          onClick={removeFilters}
                        >
                          Remove all filters
                        </Link>
                      </Button>
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
          )}

          {jobs.length != 0 && (
            <Grid item xs={12} md={8} style={{ alignItems: "center" }}>
              <Grid container>
                {(filterIsOn == true || searchIsOn == true) &&
                  jobs.length == 1 && (
                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          paddingLeft: "6px",
                          letterSpacing: "0.3px",
                          paddingBottom: "10px",
                        }}
                      >
                        Just 1 job found
                      </Typography>
                    </Grid>
                  )}
                {(filterIsOn == true || searchIsOn == true) &&
                  jobs.length != 1 &&
                  jobs.length != 0 && (
                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          paddingLeft: "6px",
                          letterSpacing: "1.2px",
                          paddingBottom: "10px",
                        }}
                      >
                        {jobs.length} jobs found
                      </Typography>
                    </Grid>
                  )}
                {filterIsOn == true && (
                  <Grid item xs={6} sx={{ textAlign: "right" }}>
                    {/* <Button classname="buttonFilter" onClick={() => history.go(0)} style={{color: 'black',backgroundColor: '#e6eaf0', textTransform: 'unset', letterSpacing: '1px', marginLeft: '-50%'}} >
                        Remove all filters
                    </Button> */}
                    <Typography>
                      <Link
                        underline="hover"
                        sx={{ cursor: "pointer" }}
                        color="inherit"
                        onClick={removeFilters}
                      >
                        Remove all filters
                      </Link>
                    </Typography>
                  </Grid>
                )}
              </Grid>

              <Grid container spacing={2}>
                {jobs.slice((page - 1) * 6, page * 6 - 1).map((job) => (
                  <Grid item xs={12} sm={12} md={12} key={job.id}>
                    <JobCard job={job} />
                  </Grid>
                ))}
                <ThemeProvider theme={theme}>
                  {jobs.length > 6 && (
                    <Grid item xs={12} sm={12} md={12}>
                      <Pagination
                        count={Math.ceil(jobs.length / 6)}
                        page={page}
                        size="large"
                        color="primary"
                        variant="outlined"
                        onChange={handleChange}
                      />
                    </Grid>
                  )}
                </ThemeProvider>

                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={pageLoading}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress
                      size="3rem"
                      style={{ color: "#000066" }}
                    />
                  </Box>
                </Backdrop>

                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={removeF}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress
                      size="3rem"
                      style={{ color: "#000066" }}
                    />
                  </Box>
                </Backdrop>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
      <BackToTop />
      {children}
      <Footer />
    </div>
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "45vh",
      }}
    >
      <CircularProgress size="3rem" style={{ color: "#000066" }} />
    </Box>
  );
}

const MapStateToProps = (state) => {
  let a = "";
  let r = "";

  if (state.auth.user != null) {
    a = state.auth.user.access;
    r = state.auth.user.refresh;
  }
  return {
    message: state.message.message,
    openMessage: state.message.openMessage,
    isLoggedIn: state.auth.isLoggedIn,
    a,
    r,
  };
};
const mapDispatchToProps = { getalljobs };
export default connect(MapStateToProps, mapDispatchToProps)(Jobs);
