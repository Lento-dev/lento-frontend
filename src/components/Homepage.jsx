import React, { useState, useEffect, setState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { createTheme } from "@mui/material/styles";
import Helmet from "react-helmet";
import { Formik, useFormik } from "formik";
import axios from "axios";
import "react-phone-input-2/lib/style.css";
import { useHistory } from "react-router-dom";
import "filepond/dist/filepond.min.css";
import backg from "../assets/img/charity.jpg";
import ImageBackground from "react";
// import SearchBar from "material-ui-search-bar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import cardimg2 from "../assets/img/charitycard2.jpg";
import cardimg3 from "../assets/img/charitycard3.png";
import ci1 from "../assets/img/cardimage2.jpg";
import ci2 from "../assets/img/cardimage3.jpg";
import ci3 from "../assets/img/cardimag4.jpg";
import ci4 from "../assets/img/cartimage1.jpg";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import kindmind from "../assets/img/kind-mind.jpg";
import donate from "../assets/img/cardimag4.jpg";
import kadoo from "../assets/img/kadoo.jpg";
import tabiat from "../assets/img/tabiat.jpg";
import book from "../assets/img/books.jpg";
import tashvigh from "../assets/img/tashvigh.jpg";
import hamipic from "../assets/img/hamipic.jpg";
import MyTextField from "./ModifiedTextField";
import MyAutocomplete from "./ModifiedAutocom";
import { ThemeProvider } from '@mui/material/styles';

// const filterOptions = createFilterOptions({
//   matchFrom: "start",
//   stringify: (option: FilmOptionType) => option.label,
// });

const theme = createTheme({
  palette: {
    primary: {
      main: '#e6835a',
    },
  }
});

export default function Homepage(props) {
  let history = useHistory();

  
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);

  const [myOptions, setMyOptions] = useState([]);

  const changeCountry = (v) => {
    setCountry(v);
    console.log("country changed to", v);
  };

  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(50);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 50 }).map((_, index) => `Slide ${index + 1}`)
  );

 
  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  const [array , setarray] = useState([]);

 
  


 

  useEffect(async () => {
    await axios
      .get(
        "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json"
      )
      .then((res) => {
        console.log("homepage", Object.keys(res.data));
        setCountries(Object.keys(res.data));
        // setCC(res.data);
      });

    await props
      .getalljobs()
      .then((res) => {
        // setJobs(res.data);
      })
      .catch((err) => console.log(err));
      
  
 
  }, []);
  useEffect(() => {
    console.log("***********************");
    var token = localStorage.getItem("token");
    token.replaceAll('"', "");
    console.log(token);
    var myurl =
      "http://62.3.41.86/api/advertisement/homepageads/" 
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
      
  }, []);
  const getDataFromAPI = () => {
    console.log("Options Fetched from API");

    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          myOptions.push(res.data[i].employee_name);
        }
        setMyOptions(myOptions);
      });
  };
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #ecf2e8" }} />
            <ThemeProvider theme={theme}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          // sx={{ borderRadius: 4, backgroundColor: "#8b9b74" }}
        >
          <Grid
            container
            sx={{
              paddingTop: "20%",
              paddingRight: "25%",
              paddingLeft: "15%",
              // paddingBottom: "37%",
              color: "white",
            }}
            spacing={0}
          >
            <Grid item xs={12}>
              <Typography
                color="black"
                fontWeight="bold"
                textAlign="left"
                fontSize="2rem"
                fontFamily='San Francisco'
              >
                Welcome To
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                color="black"
                fontWeight="bold"
                textAlign="left"
                fontSize="2.5rem"
                fontFamily='San Francisco'
              >
                Lento Charity
              </Typography>
            </Grid>
            <br />
            <br />
            <br />
            <br />
            <br />


            <MyAutocomplete
              style={{ display: "fix-inside" , fontFamily:'San Francisco'}}
              onChange={(e, v) => {
                // setCitiesWithCountry(v);
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
                  InputLabelProps={{style: {fontFamily:'San Francisco'}}}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              
        
              )}
              onKeyDown={(e) => {
                e.key === "Enter"
                  ? history.push({
                      pathname: "/ppage",
                      state: { data: e.target.value },
                    })
                  : console.log("not entered");
              }}
            />

            <Grid item xs={12} textAlign="left" sx={{ marginTop: "7vh" }}>
              <Typography color="black" fontSize="1.3rem" style={{fontFamily:'San Francisco'}}>
                You can communicate with others.
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="left" >
              <Typography color="black" fontSize="1.3rem" style={{fontFamily:'San Francisco'}}>
                You can share your experiences with our charity.
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="left">
              <Typography color="black" fontSize="1.3rem" style={{fontFamily:'San Francisco'}}>
                You can be helpful for the hurted animals.
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="left">
              <Typography color="black" fontSize="1.3rem" style={{fontFamily:'San Francisco'}}>
                You can help others with what you do not need.
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="left">
              <Typography color="black" fontSize="1.8rem" style={{fontFamily:'San Francisco'}}>
                Enjoy Lento.
              </Typography>
            </Grid>
            <br />
            <br />
            <br />
            <br />

            {/* </Grid> */}
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          // sx={{ borderRadius: 4, backgroundColor: "#8b9b74" }}
        >
          <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12}>
              <Grid
                container
                sx={{
                  // paddingTop: "15%",
                  // paddingRight: "10%",
                  paddingLeft: "2%",
                  // paddingBottom: "37%",
                  color: "white",
                }}
                spacing={0}
              >
                <img
                  src={backg}
                  // src={'http://www.upsara.com/images/k554754_.jpg'}
                  // src={'http://www.upsara.com/images/k874425_.jpg'}
                  // src={'http://www.upsara.com/images/t163606_.jpg'}
                  style={{
                    width: "92.15vh",
                    height: "96vh",
                  
                    position: "sticky",
                    zIndex: "-1",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* </Grid> */}
          {/* <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ paddingTop: "50vh", paddingLeft: "100vh" }}
          >
            
          </Grid> */}
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={12} lg={4} md={4}>
            <div
              elevation={3}
              sx={{ borderRadius: 6, display: "flex" }}
              style={{
                marginTop: "7rem",
                marginBottom: "1rem",
                marginLeft: "3rem",
                marginRight: "2rem",
                padding: "1rem",
              }}
            >
              <Grid container style={{ padding: "6px" }}>
                <Grid item xs={12}>
                  <Typography
                    component="h3"
                    style={{ fontWeight: "bold" }}
                  ></Typography>
                  <img
                    // src={ci3}
                    src={'http://www.upsara.com/images/o021193_.jpg'}
                    style={{
                      width: "118%",
                      height: "30vh",
                    
                    }}
                  />
                  <h4></h4>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <br/>
                  <Typography color="#8b9b74" fontSize="15px" fontFamily={'San Francisco'}>
                    AN UPDATE FROM CHARITY : FOOD
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Typography color="black" fontSize="1.5rem" fontFamily={'San Francisco'}>
                    When We Are Well
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Typography color="black" fontSize="1rem" fontFamily={'San Francisco'}>
                  Learn about the burden of dirty food on mental health.
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Typography  fontSize="1rem" fontFamily={'San Francisco'}>
                    <a href="https://www.wfp.org/" style={{color:'#465832'}}>Continue To Article</a>
                  
                  </Typography>
                </Grid>
                <br></br>
                <br></br>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={12} lg={4} md={4}>
            <div
              elevation={3}
              sx={{ borderRadius: 6, display: "flex" }}
              style={{
                marginTop: "7rem",
                marginBottom: "1rem",
                marginLeft: "2.1rem",
                marginRight: "3.1rem",
                padding: "1rem",
              }}
            >
              <Grid container style={{ padding: "6px" }}>
                <Grid item xs={12}>
                  <Typography
                    component="h3"
                    style={{ fontWeight: "bold" }}
                  ></Typography>
                  <img
                    // src={ci4}
                    src={'http://www.upsara.com/images/j971308_.jpg'}
                    style={{
                      width: "120%",
                      height: "30vh",
                      // marginTop: "0rem",
                      // marginBottom: "rem",
                      alignItems: "center",
                    }}
                  />
                  <h4></h4>
                </Grid>
                <Grid item xs={12} textAlign="center" style={{paddingLeft:'50px'}}>
                  <br/>
                  <Typography color="#8b9b74" fontSize="15px" fontFamily={'San Francisco'}>
                    STORIES FROM THE FIELD
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center" style={{paddingLeft:'50px'}}>
                  <Typography color="black" fontSize="1.5rem" fontFamily={'San Francisco'}>
                    What They Taught Us
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center" style={{paddingLeft:'35px'}}>
                  <Typography color="black" fontSize="1rem" fontFamily={'San Francisco'}>
                  Meet they, who talked about life in a way we’d never heard before.
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Typography  fontSize="1rem" fontFamily={'San Francisco'} style={{paddingLeft:'50px'}}>
                    <a href="https://www.un.org/en/global-issues/africa#" style={{color:'#465832'}}>Continue To Article</a>
                  
                  </Typography>
                </Grid>
           
                
                <br></br>
                <br></br>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={12} lg={4} md={4}>
            <div
              elevation={3}
              sx={{ borderRadius: 6, display: "flex" }}
              style={{
                marginTop: "7rem",
                marginBottom: "1rem",
                marginLeft: "1rem",
                marginRight: "6rem",
                padding: "1rem",
              }}
            >
              <Grid container style={{ padding: "6px" }}>
                <Grid item xs={12}>
                  <Typography
                    component="h3"
                    style={{ fontWeight: "bold" }}
                  ></Typography>
                  <img
                    // src={ci2}
                    src={'http://www.upsara.com/images/v245451_.jpg'}
                    style={{
                      width: "120%",
                      height: "30vh",
                      marginTop: "0rem",
                      marginBottom: "rem",
                      alignItems: "center",
                      
                    }}
                  />
                  <h4></h4>
                </Grid>
                  <Grid item xs={12} textAlign="center" style={{paddingLeft:'40px'}}>
                  <br/>
                  <Typography color="#8b9b74" fontSize="15px" fontFamily={'San Francisco'}>
                    OUR NATURE
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center" style={{paddingLeft:'27px'}}>
                  <Typography color="black" fontSize="1.5rem" fontFamily={'San Francisco'}>
                    For the People and the Planet
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center" style={{paddingLeft:'40px'}}>
                  <Typography color="black" fontSize="1rem" fontFamily={'San Francisco'}>
                  See how our local partners are setting new standards for sustainability.
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center" style={{paddingLeft:'40px'}}>
                  <Typography  fontSize="1rem" fontFamily={'San Francisco'}>
                    <a href="https://www.un.org/en/chronicle/article/planet-un" style={{color:'#465832'}}>Continue To Article</a>
                  
                  </Typography>
                </Grid>
                
                
              </Grid>
            </div>
          </Grid>

          <Grid>
            <br/><br/><br/><br/>

          <Typography class="dynamic-text-shadow" style={{fontFamily:'San Fransisco',paddingLeft:'585px',fontSize:'27px'}}> The Latest Advertisements</Typography>
          
          {/* <Typography style={{fontFamily:'San Francisco',fontSize:'22px', marginLeft: "3rem",marginRight: "2rem",paddingTop:'70px'}}>The latest advertisements</Typography> */}
          </Grid>
    
                    
      <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={5}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: false }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log("slide change")}
                    style={{ paddingTop: "2rem" }}
                  >



                  {array.map((item, i) => (

                                    <Grid item md={4}>

                                      

                                        <SwiperSlide
                                        className="swipercl"

                                        style={{ color: "black", paddingBottom: "5rem" }}
                                        >

                                        <Card sx={{ maxWidth: 345 }}>
                                          <CardMedia
                                            component="img"
                                            height="250px"
                                            
                                            image={item.Image !== null? item.Image:'http://www.upsara.com/images/g382390_.jpg'}
                                            alt="ad image"
                                          />
                                          <CardContent>
                                            <Typography variant="body2" color="text.secondary" style={{textAlign:'left',fontFamily:'San Fransisco',fontSize:'22px',color:'#465832'}}>
                                              {item.Title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" style={{textAlign:'left',fontFamily:'San Fransisco',fontSize:'15px',fontSize:'17px'}}>
                                            <div
                                                style={{
                                                  display: "flex",
                                                  alignItems: "center",
                                                  flexWrap: "wrap",
                                                }}
                                              >
                                                <CategoryIcon style={{ fontSize: "large" }} />
                                                <span style={{ color: "grey", lineHeight: "160%" }}>
                                                  {item.resourcetype}
                                                </span>
                                              </div>
                                              
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" style={{textAlign:'left',fontFamily:'San Fransisco',fontSize:'17px'}}>
                                              
                                              <div
                                                  style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    flexWrap: "wrap",
                                                  }}
                                                >
                                                  
                                                  <LocationCityIcon style={{ fontSize: "large" }} />
                                                  <span style={{ color: "grey", lineHeight: "160%" }}>
                                                  {item.province} 
                                                  </span>
                                                </div>
                                            </Typography>
                                            <Link
                                                      style={{color:'#8b9b74',marginRight:'135px'}}
                                                      to={{
                                                        pathname: "/jj",
                                                        state: { data: item },
                                                      }}
                                                    >
                                                      Read more
                                                      </Link>
  
                                            
                                            
                                             
                                          </CardContent>
          
                                                      
        
                                          
                                        </Card>
                                        

                                        </SwiperSlide>
                                        
                                    </Grid>
                                  ))}
 
                   
</Swiper>

          


          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            // sx={{ borderRadius: 4, backgroundColor: "#8b9b74" }}
          >
            <Grid
              container
              spacing={0}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12}>
                <Grid
                  container
                  sx={{
                    // paddingTop: "15%",
                    // paddingRight: "10%",
                    paddingLeft: "2%",
                    // paddingBottom: "37%",
                    color: "white",
                  }}
                  spacing={0}
                >
                  <br />
                  <br />
                  <br />
                  <br />
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    // spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    // style={{ paddingTop: "2rem" }}
                  >
                    <SwiperSlide
                      style={{ color: "black", paddingBottom: "2rem" }}
                    >
                      <Card
                        elevation={3}
                        sx={{ borderRadius: 6, display: "flex"  }}
                        style={{
                          marginTop: "7rem",
                          marginBottom: "1rem",
                          marginLeft: "4rem",
                          marginRight: "4rem",
                          padding: "1rem",
                        }}
                      >
                        <Grid container style={{ padding: "6px" }}>
                          {/* <Grid item xs={6}></Grid> */}
                          <Grid item xs={12} md={12} lg={4}>
                            <img
                              src={kindmind}
                              style={{
                                paddingTop: "2rem",
                                // paddingRight: "15rem",
                                width: "50%",
                                height: "40vh",
                                position: "sticky",
                              }}
                            />
                          </Grid>

                          <Grid item xs={12} md={12} lg={8}>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{
                                fontWeight: "bold",
                                paddingTop: "1.5rem",
                              }}
                            >
                              The effects of good work on mental health
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold", paddingTop: "3rem" }}
                            >
                              In fact, good deeds and benevolence is a good
                              thing that more or less everyone wants to do, and
                              this is due to the good effect of good deeds on
                              the human psyche.
                            </Typography>

                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold" }}
                            >
                              A person who has not done a good deed and has not
                              been a pioneer in it, is in fact oppressing
                              himself, which is considered oppression of himself
                              and his soul.
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold" }}
                            >
                              People who are mentally healthy are not only
                              recipients of love and kindness, but also do good
                              to others. In fact, this love goes back to the
                              individual.
                            </Typography>
                            {/* <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              Psychologically, a person who loves and helps a
                              poor and helpless person, gives him a good sense
                              of power, which this time positive and energy is
                              able to have good effects on the soul and psyche
                              of the volunteer and increase trust.
                            </Typography> */}
                            {/* <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              To one's self and self-esteem. On the other hand,
                              in these situations, facing the problems of others
                              makes a person thank God at any time because of
                              the peace he has in the moment and is so free of
                              thought and action that he is even able to spend
                              part of his time on things.
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              Other people slow down to help them. Now, if a
                              person does not face a problem in life for any
                              reason, the soul and psyche are strengthened and
                              it is easier to try to solve the problem and
                              succeed.
                            </Typography> */}
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            textAlign="left"
                            sx={{ marginTop: "4vh" }}
                          ></Grid>
                        </Grid>
                      </Card>
                    </SwiperSlide>
                    <SwiperSlide
                      style={{ color: "black", paddingBottom: "2rem" }}
                    >
                      {" "}
                      <div
                        elevation={3}
                        sx={{ borderRadius: 6, display: "flex" }}
                        style={{
                          marginTop: "7rem",
                          marginBottom: "1rem",
                          marginLeft: "4rem",
                          marginRight: "4rem",
                          padding: "1rem",
                        }}
                      >
                        <Grid container style={{ padding: "6px" }}>
                          {/* <Grid item xs={6}></Grid> */}
                          <Grid item xs={12} md={12} lg={4}>
                            <img
                              src={donate}
                              style={{
                                paddingTop: "2rem",
                                // paddingRight: "15rem",
                                width: "50%",
                                height: "30vh",
                                position: "sticky",
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={12} lg={8}>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{
                                fontWeight: "bold",
                                paddingTop: "1.5rem",
                              }}
                            >
                              Recognize authentic charity
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              fontFamily="San Fransisco"
                              style={{ fontWeight: "bold", paddingTop: "3rem"  }}
                            >
                              In fact, good deeds and benevolence is a good
                              thing that more or less everyone wants to do, and
                              this is due to the good effect of good deeds on
                              the human psyche.
                            </Typography>

                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold" , fontFamily:'San Fransisco'}}
                            >
                              A person who has not done a good deed and has not
                              been a pioneer in it, is in fact oppressing
                              himself, which is considered oppression of himself
                              and his soul.
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold" }}
                            >
                              People who are mentally healthy are not only
                              recipients of love and kindness, but also do good
                              to others. In fact, this love goes back to the
                              individual.
                            </Typography>
                            {/* <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              Psychologically, a person who loves and helps a
                              poor and helpless person, gives him a good sense
                              of power, which this time positive and energy is
                              able to have good effects on the soul and psyche
                              of the volunteer and increase trust.
                            </Typography> */}
                            {/* <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              To one's self and self-esteem. On the other hand,
                              in these situations, facing the problems of others
                              makes a person thank God at any time because of
                              the peace he has in the moment and is so free of
                              thought and action that he is even able to spend
                              part of his time on things.
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              Other people slow down to help them. Now, if a
                              person does not face a problem in life for any
                              reason, the soul and psyche are strengthened and
                              it is easier to try to solve the problem and
                              succeed.
                            </Typography> */}
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            textAlign="left"
                            sx={{ marginTop: "4vh" }}
                          ></Grid>
                        </Grid>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      style={{ color: "black", paddingBottom: "2rem" }}
                    >
                      {" "}
                      <div
                        elevation={3}
                        sx={{ borderRadius: 6, display: "flex" }}
                        style={{
                          marginTop: "7rem",
                          marginBottom: "1rem",
                          marginLeft: "4rem",
                          marginRight: "4rem",
                          padding: "1rem",
                        }}
                      >
                        <Grid container style={{ padding: "6px" }}>
                          {/* <Grid item xs={6}></Grid> */}
                          <Grid item xs={12} md={12} lg={4}>
                            <img
                              src={kadoo}
                              style={{
                                paddingTop: "2rem",
                                // paddingRight: "15rem",
                                width: "50%",
                                height: "30vh",
                                position: "sticky",
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={12} lg={8}>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{
                                fontWeight: "bold",
                                paddingTop: "1.5rem",
                              }}
                            >
                              Give gifts to the needy that you do not like
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold", paddingTop: "3rem" }}
                            >
                              In fact, good deeds and benevolence is a good
                              thing that more or less everyone wants to do, and
                              this is due to the good effect of good deeds on
                              the human psyche.
                            </Typography>

                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold" }}
                            >
                              A person who has not done a good deed and has not
                              been a pioneer in it, is in fact oppressing
                              himself, which is considered oppression of himself
                              and his soul.
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold" }}
                            >
                              People who are mentally healthy are not only
                              recipients of love and kindness, but also do good
                              to others. In fact, this love goes back to the
                              individual.
                            </Typography>
                            {/* <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              Psychologically, a person who loves and helps a
                              poor and helpless person, gives him a good sense
                              of power, which this time positive and energy is
                              able to have good effects on the soul and psyche
                              of the volunteer and increase trust.
                            </Typography> */}
                            {/* <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              To one's self and self-esteem. On the other hand,
                              in these situations, facing the problems of others
                              makes a person thank God at any time because of
                              the peace he has in the moment and is so free of
                              thought and action that he is even able to spend
                              part of his time on things.
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              Other people slow down to help them. Now, if a
                              person does not face a problem in life for any
                              reason, the soul and psyche are strengthened and
                              it is easier to try to solve the problem and
                              succeed.
                            </Typography> */}
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            textAlign="left"
                            sx={{ marginTop: "4vh" }}
                          ></Grid>
                        </Grid>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      style={{ color: "black", paddingBottom: "2rem" }}
                    >
                      {" "}
                      <div
                        elevation={3}
                        sx={{ borderRadius: 6, display: "flex" }}
                        style={{
                          marginTop: "7rem",
                          marginBottom: "1rem",
                          marginLeft: "4rem",
                          marginRight: "4rem",
                          padding: "1rem",
                        }}
                      >
                        <Grid container style={{ padding: "6px" }}>
                          {/* <Grid item xs={6}></Grid> */}
                          <Grid item xs={12} md={12} lg={4}>
                            <img
                              src={tabiat}
                              style={{
                                paddingTop: "2rem",
                                // paddingRight: "15rem",
                                width: "50%",
                                height: "30vh",
                                position: "sticky",
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={12} lg={8}>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{
                                fontWeight: "bold",
                                paddingTop: "1.5rem",
                              }}
                            >
                              The vow of nature
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold", paddingTop: "3rem" }}
                            >
                              In fact, good deeds and benevolence is a good
                              thing that more or less everyone wants to do, and
                              this is due to the good effect of good deeds on
                              the human psyche.
                            </Typography>

                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold" }}
                            >
                              A person who has not done a good deed and has not
                              been a pioneer in it, is in fact oppressing
                              himself, which is considered oppression of himself
                              and his soul.
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold" }}
                            >
                              People who are mentally healthy are not only
                              recipients of love and kindness, but also do good
                              to others. In fact, this love goes back to the
                              individual.
                            </Typography>
                            {/* <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              Psychologically, a person who loves and helps a
                              poor and helpless person, gives him a good sense
                              of power, which this time positive and energy is
                              able to have good effects on the soul and psyche
                              of the volunteer and increase trust.
                            </Typography> */}
                            {/* <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              To one's self and self-esteem. On the other hand,
                              in these situations, facing the problems of others
                              makes a person thank God at any time because of
                              the peace he has in the moment and is so free of
                              thought and action that he is even able to spend
                              part of his time on things.
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              Other people slow down to help them. Now, if a
                              person does not face a problem in life for any
                              reason, the soul and psyche are strengthened and
                              it is easier to try to solve the problem and
                              succeed.
                            </Typography> */}
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            textAlign="left"
                            sx={{ marginTop: "4vh" }}
                          ></Grid>
                        </Grid>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      style={{ color: "black", paddingBottom: "2rem" }}
                    >
                      {" "}
                      <div
                        elevation={3}
                        sx={{ borderRadius: 6, display: "flex" }}
                        style={{
                          marginTop: "7rem",
                          marginBottom: "1rem",
                          marginLeft: "4rem",
                          marginRight: "4rem",
                          padding: "1rem",
                        }}
                      >
                        <Grid container style={{ padding: "6px" }}>
                          <Grid item xs={12} md={12} lg={4}>
                            <img
                              src={book}
                              style={{
                                paddingTop: "2rem",
                                // paddingRight: "15rem",
                                width: "50%",
                                height: "30vh",
                                position: "sticky",
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={12} lg={8}>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{
                                fontWeight: "bold",
                                paddingTop: "1.5rem",
                              }}
                            >
                              Book donation, thought donation
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold", paddingTop: "3rem" }}
                            >
                              In fact, good deeds and benevolence is a good
                              thing that more or less everyone wants to do, and
                              this is due to the good effect of good deeds on
                              the human psyche.
                            </Typography>

                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold" }}
                            >
                              A person who has not done a good deed and has not
                              been a pioneer in it, is in fact oppressing
                              himself, which is considered oppression of himself
                              and his soul.
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold" }}
                            >
                              People who are mentally healthy are not only
                              recipients of love and kindness, but also do good
                              to others. In fact, this love goes back to the
                              individual.
                            </Typography>
                            {/* <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              Psychologically, a person who loves and helps a
                              poor and helpless person, gives him a good sense
                              of power, which this time positive and energy is
                              able to have good effects on the soul and psyche
                              of the volunteer and increase trust.
                            </Typography> */}
                            {/* <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              To one's self and self-esteem. On the other hand,
                              in these situations, facing the problems of others
                              makes a person thank God at any time because of
                              the peace he has in the moment and is so free of
                              thought and action that he is even able to spend
                              part of his time on things.
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              Other people slow down to help them. Now, if a
                              person does not face a problem in life for any
                              reason, the soul and psyche are strengthened and
                              it is easier to try to solve the problem and
                              succeed.
                            </Typography> */}
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            textAlign="left"
                            sx={{ marginTop: "4vh" }}
                          ></Grid>
                        </Grid>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      style={{ color: "black", paddingBottom: "2rem" }}
                    >
                      {" "}
                      <div
                        elevation={3}
                        sx={{ borderRadius: 6, display: "flex" }}
                        style={{
                          marginTop: "7rem",
                          marginBottom: "1rem",
                          marginLeft: "4rem",
                          marginRight: "4rem",
                          padding: "1rem",
                        }}
                      >
                        <Grid container style={{ padding: "6px" }}>
                          {/* <Grid item xs={6}></Grid> */}
                          <Grid item xs={12} md={12} lg={4}>
                            <img
                              src={tashvigh}
                              style={{
                                paddingTop: "2rem",
                                // paddingRight: "15rem",
                                width: "50%",
                                height: "30vh",
                                position: "sticky",
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={12} lg={8}>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{
                                fontWeight: "bold",
                                paddingTop: "1.5rem",
                              }}
                            >
                              Encourage others to do charity work
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold", paddingTop: "3rem" }}
                            >
                              In fact, good deeds and benevolence is a good
                              thing that more or less everyone wants to do, and
                              this is due to the good effect of good deeds on
                              the human psyche.
                            </Typography>

                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold" }}
                            >
                              A person who has not done a good deed and has not
                              been a pioneer in it, is in fact oppressing
                              himself, which is considered oppression of himself
                              and his soul.
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold" }}
                            >
                              People who are mentally healthy are not only
                              recipients of love and kindness, but also do good
                              to others. In fact, this love goes back to the
                              individual.
                            </Typography>
                            {/* <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              Psychologically, a person who loves and helps a
                              poor and helpless person, gives him a good sense
                              of power, which this time positive and energy is
                              able to have good effects on the soul and psyche
                              of the volunteer and increase trust.
                            </Typography> */}
                            {/* <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              To one's self and self-esteem. On the other hand,
                              in these situations, facing the problems of others
                              makes a person thank God at any time because of
                              the peace he has in the moment and is so free of
                              thought and action that he is even able to spend
                              part of his time on things.
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              Other people slow down to help them. Now, if a
                              person does not face a problem in life for any
                              reason, the soul and psyche are strengthened and
                              it is easier to try to solve the problem and
                              succeed.
                            </Typography> */}
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            textAlign="left"
                            sx={{ marginTop: "4vh" }}
                          ></Grid>
                        </Grid>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      style={{ color: "black", paddingBottom: "2rem" }}
                    >
                      {" "}
                      <div
                        elevation={3}
                        sx={{ borderRadius: 6, display: "flex" }}
                        style={{
                          marginTop: "7rem",
                          marginBottom: "1rem",
                          marginLeft: "4rem",
                          marginRight: "4rem",
                          padding: "1rem",
                        }}
                      >
                        <Grid container style={{ padding: "6px" }}>
                          {/* <Grid item xs={6}></Grid> */}
                          <Grid item xs={12} md={12} lg={4}>
                            <img
                              src={hamipic}
                              style={{
                                paddingTop: "2rem",
                                // paddingRight: "15rem",
                                width: "50%",
                                height: "30vh",
                                position: "sticky",
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={12} lg={8}>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{
                                fontWeight: "bold",
                                paddingTop: "1.5rem",
                              }}
                            >
                              Recognize authentic charity
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold", paddingTop: "3rem" }}
                            >
                              In fact, good deeds and benevolence is a good
                              thing that more or less everyone wants to do, and
                              this is due to the good effect of good deeds on
                              the human psyche.
                            </Typography>

                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold" }}
                            >
                              A person who has not done a good deed and has not
                              been a pioneer in it, is in fact oppressing
                              himself, which is considered oppression of himself
                              and his soul.
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1rem"
                              style={{ fontWeight: "bold" }}
                            >
                              People who are mentally healthy are not only
                              recipients of love and kindness, but also do good
                              to others. In fact, this love goes back to the
                              individual.
                            </Typography>
                            {/* <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              Psychologically, a person who loves and helps a
                              poor and helpless person, gives him a good sense
                              of power, which this time positive and energy is
                              able to have good effects on the soul and psyche
                              of the volunteer and increase trust.
                            </Typography> */}
                            {/* <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              To one's self and self-esteem. On the other hand,
                              in these situations, facing the problems of others
                              makes a person thank God at any time because of
                              the peace he has in the moment and is so free of
                              thought and action that he is even able to spend
                              part of his time on things.
                            </Typography>
                            <Typography
                              component="h3"
                              textAlign="left"
                              fontSize="1.3rem"
                              style={{ fontWeight: "bold" }}
                            >
                              Other people slow down to help them. Now, if a
                              person does not face a problem in life for any
                              reason, the soul and psyche are strengthened and
                              it is easier to try to solve the problem and
                              succeed.
                            </Typography> */}
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            textAlign="left"
                            sx={{ marginTop: "4vh" }}
                          ></Grid>
                        </Grid>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12} lg={12} md={12}>
              <div
                // elevation={3}
                // sx={{ borderRadius: 0, display: "flex" }}
                style={{
                  marginTop: "3rem",
                  // marginBottom: "1rem",
                  // marginLeft: "4rem",
                  // marginRight: "3rem",
                  padding: "1rem",
                }}
              >
                <Grid
                  container
                  spacing={0}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={12}>
                    <Grid item xs={12}>
                      <Typography color="black" fontSize="1rem">
                        follow us
                      </Typography>
                    </Grid>
                    {/* <br /> */}
                    <SocialMediaIconsReact
                      borderColor="rgba(46,107,15,0.25)"
                      borderWidth="5"
                      // borderStyle="dashed"
                      icon="twitter"
                      iconColor="rgba(251,253,249,1)"
                      backgroundColor="rgba(139,155,116,1)"
                      iconSize="2"
                      roundness="50%"
                      url="https://some-website.com/my-social-media-url"
                      size="30"
                    />
                    &nbsp;&nbsp;
                    <SocialMediaIconsReact
                      borderColor="rgba(46,107,15,0.25)"
                      borderWidth="5"
                      // borderStyle="dashed"
                      icon="instagram"
                      iconColor="rgba(251,253,249,1)"
                      backgroundColor="rgba(139,155,116,1)"
                      iconSize="2"
                      roundness="50%"
                      url="https://some-website.com/my-social-media-url"
                      size="30"
                    />
                    &nbsp;&nbsp;
                    <SocialMediaIconsReact
                      borderColor="rgba(46,107,15,0.25)"
                      borderWidth="5"
                      // borderStyle="dashed"
                      icon="linkedin"
                      iconColor="rgba(251,253,249,1)"
                      backgroundColor="rgba(139,155,116,1)"
                      iconSize="2"
                      roundness="50%"
                      url="https://some-website.com/my-social-media-url"
                      size="30"
                    />
                    &nbsp;&nbsp;
                    <SocialMediaIconsReact
                      borderColor="rgba(46,107,15,0.25)"
                      borderWidth="5"
                      // borderStyle="dashed"
                      icon="github"
                      iconColor="rgba(251,253,249,1)"
                      backgroundColor="rgba(139,155,116,1)"
                      iconSize="2"
                      roundness="50%"
                      url="https://some-website.com/my-social-media-url"
                      size="30"
                    />
                    <br />
                    {/* <br /> */}
                    <Grid container>
                      <Grid
                        container
                        spacing={0}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                      >
                        {/* <Grid item xs={12}> */}
                        <Typography color="blue" fontSize="1rem">
                          info
                        </Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Typography color="blue" fontSize="1rem">
                          support
                        </Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Typography color="blue" fontSize="1rem">
                          marketing
                        </Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Typography color="blue" fontSize="1rem">
                          privacy policy
                        </Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Typography color="blue" fontSize="1rem">
                          term of use
                        </Typography>
                        {/* </Grid> */}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <Container style={{ width: "100%" }}>
        <Grid xs={6}>
          
        </Grid>
        <Grid xs={6}></Grid>

        <Grid xs={4} md={4}></Grid>
      </Container> */}
      </ThemeProvider>
    </div>
  );
}

// interface FilmOptionType {
//   title: string;
//   year: number;
// }

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
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

// {
/* <img
            src={backg}
            style={{
              width: "100vh",
              height: "100vh",
              justifyContent: "center",
              position: "sticky",
            }}
          /> */
// }

{
  /* <Autocomplete
            style={{ width: 500 }}
            freeSolo
            autoComplete
            autoHighlight
            options={myOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={getDataFromAPI}
                variant="outlined"
                label="Search Box"
              />
            )}
          /> */
}

{
  /* lg={12} md={12} */
}
{
  /* <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  // spaceBetween={50}
  slidesPerView={5}
  navigation
  pagination={{ clickable: true }}
  // scrollbar={{ draggable: true }}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log("slide change")}
  // style={{ paddingTop: "2rem" }}
>
  <SwiperSlide style={{ paddingBottom: "2rem" }}>
    {" "}
    <Grid item xs={12}>
      <div
        elevation={3}
        sx={{ borderRadius: 6, display: "flex" }}
        style={{
          marginTop: "7rem",
          marginBottom: "1rem",
          marginLeft: "2rem",
          // marginRight: "1rem",
          padding: "1rem",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <img
              src={ci2}
              style={{
                width: "100%",
                height: "20vh",
                marginTop: "0rem",
                marginBottom: "0rem",
                alignItems: "center",
              }}
            />
            <h4></h4>
          </Grid>
          <Grid
            item
            xs={12}
            textAlign="left"
            sx={{ marginTop: "4vh" }}
          >
            <Typography color="black" fontSize="1.3rem">
              You can communicate with others.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can share your experiences with our charity.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can be helpful for the hurted animal.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can help people with what you don't need.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Grid>
  </SwiperSlide>
  <SwiperSlide style={{ paddingBottom: "2rem" }}>
    {" "}
    <Grid item xs={12}>
      <div
        elevation={3}
        sx={{ borderRadius: 6, display: "flex" }}
        style={{
          marginTop: "7rem",
          marginBottom: "1rem",
          marginLeft: "2rem",
          // marginRight: "3rem",
          padding: "1rem",
        }}
      >
        <Grid container style={{ padding: "6px" }}>
          <Grid item xs={12}>
            <Typography
              component="h3"
              style={{ fontWeight: "bold" }}
            ></Typography>
            <img
              src={ci2}
              style={{
                width: "100%",
                height: "20vh",
                marginTop: "0rem",
                marginBottom: "rem",
                alignItems: "center",
              }}
            />
            <h4></h4>
          </Grid>
          <Grid
            item
            xs={12}
            textAlign="left"
            sx={{ marginTop: "4vh" }}
          >
            <Typography color="black" fontSize="1.3rem">
              You can communicate with others.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can share your experiences with our charity.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can be helpful for the hurted animal.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can help people with what you don't need.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Grid>
  </SwiperSlide>
  <SwiperSlide style={{ paddingBottom: "2rem" }}>
    {" "}
    <Grid item xs={12}>
      <div
        elevation={3}
        sx={{ borderRadius: 6, display: "flex" }}
        style={{
          marginTop: "7rem",
          marginBottom: "1rem",
          marginLeft: "2rem",
          // marginRight: "3rem",
          padding: "1rem",
        }}
      >
        <Grid container style={{ padding: "6px" }}>
          <Grid item xs={12}>
            <Typography
              component="h3"
              style={{ fontWeight: "bold" }}
            ></Typography>
            <img
              src={ci2}
              style={{
                width: "100%",
                height: "20vh",
                marginTop: "0rem",
                marginBottom: "rem",
                alignItems: "center",
              }}
            />
            <h4></h4>
          </Grid>
          <Grid
            item
            xs={12}
            textAlign="left"
            sx={{ marginTop: "4vh" }}
          >
            <Typography color="black" fontSize="1.3rem">
              You can communicate with others.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can share your experiences with our charity.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can be helpful for the hurted animal.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can help people with what you don't need.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Grid>
  </SwiperSlide>
  <SwiperSlide style={{ paddingBottom: "2rem" }}>
    {" "}
    <Grid item xs={12}>
      <div
        elevation={3}
        sx={{ borderRadius: 6, display: "flex" }}
        style={{
          marginTop: "7rem",
          marginBottom: "1rem",
          marginLeft: "2rem",
          // marginRight: "3rem",
          padding: "1rem",
        }}
      >
        <Grid container style={{ padding: "6px" }}>
          <Grid item xs={12}>
            <Typography
              component="h3"
              style={{ fontWeight: "bold" }}
            ></Typography>
            <img
              src={ci2}
              style={{
                width: "100%",
                height: "20vh",
                marginTop: "0rem",
                marginBottom: "rem",
                alignItems: "center",
              }}
            />
            <h4></h4>
          </Grid>
          <Grid
            item
            xs={12}
            textAlign="left"
            sx={{ marginTop: "4vh" }}
          >
            <Typography color="black" fontSize="1.3rem">
              You can communicate with others.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can share your experiences with our charity.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can be helpful for the hurted animal.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can help people with what you don't need.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Grid>
  </SwiperSlide>
  <SwiperSlide style={{ paddingBottom: "2rem" }}>
    {" "}
    <Grid item xs={12}>
      <div
        elevation={3}
        sx={{ borderRadius: 6, display: "flex" }}
        style={{
          marginTop: "7rem",
          marginBottom: "1rem",
          marginLeft: "2rem",
          // marginRight: "3rem",
          padding: "1rem",
        }}
      >
        <Grid container style={{ padding: "6px" }}>
          <Grid item xs={12}>
            <Typography
              component="h3"
              style={{ fontWeight: "bold" }}
            ></Typography>
            <img
              src={ci2}
              style={{
                width: "100%",
                height: "20vh",
                marginTop: "0rem",
                marginBottom: "rem",
                alignItems: "center",
              }}
            />
            <h4></h4>
          </Grid>
          <Grid
            item
            xs={12}
            textAlign="left"
            sx={{ marginTop: "4vh" }}
          >
            <Typography color="black" fontSize="1.3rem">
              You can communicate with others.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can share your experiences with our charity.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can be helpful for the hurted animal.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can help people with what you don't need.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Grid>
  </SwiperSlide>
  <SwiperSlide style={{ paddingBottom: "2rem" }}>
    {" "}
    <Grid item xs={12}>
      <div
        elevation={3}
        sx={{ borderRadius: 6, display: "flex" }}
        style={{
          marginTop: "7rem",
          marginBottom: "1rem",
          marginLeft: "2rem",
          // marginRight: "3rem",
          padding: "1rem",
        }}
      >
        <Grid container style={{ padding: "6px" }}>
          <Grid item xs={12}>
            <Typography
              component="h3"
              style={{ fontWeight: "bold" }}
            ></Typography>
            <img
              src={ci2}
              style={{
                width: "100%",
                height: "20vh",
                marginTop: "0rem",
                marginBottom: "rem",
                alignItems: "center",
              }}
            />
            <h4></h4>
          </Grid>
          <Grid
            item
            xs={12}
            textAlign="left"
            sx={{ marginTop: "4vh" }}
          >
            <Typography color="black" fontSize="1.3rem">
              You can communicate with others.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can share your experiences with our charity.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can be helpful for the hurted animal.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can help people with what you don't need.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Grid>
  </SwiperSlide>
  <SwiperSlide style={{ paddingBottom: "2rem" }}>
    {" "}
    <Grid item xs={12}>
      <div
        elevation={3}
        sx={{ borderRadius: 6, display: "flex" }}
        style={{
          marginTop: "7rem",
          marginBottom: "1rem",
          marginLeft: "2rem",
          // marginRight: "3rem",
          padding: "1rem",
        }}
      >
        <Grid container style={{ padding: "6px" }}>
          <Grid item xs={12}>
            <Typography
              component="h3"
              style={{ fontWeight: "bold" }}
            ></Typography>
            <img
              src={ci2}
              style={{
                width: "100%",
                height: "20vh",
                marginTop: "0rem",
                marginBottom: "rem",
                alignItems: "center",
              }}
            />
            <h4></h4>
          </Grid>
          <Grid
            item
            xs={12}
            textAlign="left"
            sx={{ marginTop: "4vh" }}
          >
            <Typography color="black" fontSize="1.3rem">
              You can communicate with others.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can share your experiences with our charity.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can be helpful for the hurted animal.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="left">
            <Typography color="black" fontSize="1.3rem">
              You can help people with what you don't need.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Grid>
  </SwiperSlide>
</Swiper> */
}
