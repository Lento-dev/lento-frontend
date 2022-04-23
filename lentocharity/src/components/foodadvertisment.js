import React, { useState, useEffect, setState } from 'react';
import {
  Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box,
  Typography, Container
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { createTheme } from '@mui/material/styles';
import Helmet from 'react-helmet';
import { Formik,useFormik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Autocomplete from '@mui/material/Autocomplete';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// import { Input } from '@mui/material';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MuiPhoneNumber from 'material-ui-phone-number';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
import { CircularProgress } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import ImageUploading from 'react-images-uploading';
import Alert from '@mui/material/Alert';

import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { SettingsAccessibility } from '@mui/icons-material';
const Input = styled('input')({
  display: 'none',
});

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


function Foodadvertisment(props) {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const [files, setFiles] = useState([]);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const [images, setImages] = React.useState([]);
    const [imageUrl, setImageUrl] = useState(null);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log("image list =>",imageList, addUpdateIndex);

      setImages(imageList);
      // console.log(images);
      // setImageUrl(URL.createObjectURL(imageList[0]));

      // console.log("image url",imageUrl);

     
    };
    
    const history = useHistory();
    const [loading, setLoading] = React.useState(false);
    const [state, setState] = useState(null);
    const [open, setOpen] = React.useState(false);
  
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
  
    const handleClose = (event, reason) => {
      // if (reason === 'clickaway') {
      //   return;
      // }
  
      setOpen(false);
      // props.clearMessage();
    };
  
    const theme = useTheme();
    const [techName, setTechName] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    
    const [phone, setPhone] = useState('');
    const [Gennder, setGennder] = useState('');
    const [marital, setmarital] = useState('');
    const [spez, setspez] = useState('');
    const [message,setMessage] = React.useState('');
    const [resStatus, setResstatus] = useState([]);

    const [Countrry, setCountrry] = useState('');
    const [cities, setcities] = useState([]);
    const [city,setcity]=useState('');
    const [formtitle,settitle]=useState('');
    const [neighborhoodaddrs,setaddress]=useState('');
    const [expiredate,setexpdate]=useState('');
    const [description,setdesc]=useState('');

    // const formik = useFormik({
    //   initialValues: {
    //     formtitle: '',
    //     // province: '',
    //     // city: '',
    //     neighborhoodadd: '' ,
    //     expiredate: '',
    //     description: '',

        
    //   },
    //   // validationSchema: validationSchema,
    // });


    const FileInput = () => {
      return <input accept="image/*" type="file" id="select-image" />;
    };
  
    const [value, setValue] = useState(0);
    const email = "amirizahraza@gmail.com";
    const token = props.a

    useEffect(() => {
      console.log("***********************");
            }, [])
  
  
    // useEffect(() => {
    //   if (selectedImage) {
    //     setImageUrl(URL.createObjectURL(selectedImage));
    //   }
    // }, [selectedImage]);
  
  
    const onClickSubmit = () => { 

      var token = localStorage.getItem("token");
      token.replaceAll('"', '')
      console.log(token);
      
      var fd = new FormData();
      fd.append("Title",formtitle);
      fd.append("Description",description);
      fd.append("province",Countrry);
      fd.append("City",city);
      fd.append("Address",neighborhoodaddrs);
      fd.append("Food_type",null);
      fd.append("expiration_date",expiredate);
      // fd.append("Image",null);
      console.log(images[0],imageUrl);
      var config = {
        method: 'post',
        url: 'http://127.0.0.1:8000/advertisement/addfood/',
        headers: { 
          'Authorization': 'Token '+ token, 
        },
        data: fd,
      };
  
      axios(config)
      .then((response) => {
        // console.log(response);
        if(response.status == 201)
        {
          setMessage("success");
          setOpen(true);
          // return (<Snackbar open={open} autoHideDuration={4000} >  
          //     <Alert severity={message === "Please fill in the blanks." ? "error" : "success"} sx={{ width: '100%' }}>
          //       {message}
          //     </Alert>
          // </Snackbar>);
        }
        else
        {
          setOpen(true);
          setMessage("error");
    
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });

    }  
  
  
    function handleOnChange(value) {
      
    }
    
    

    return (

      <div >
          <Helmet bodyAttributes={{ style: "background-color : #ecf2e8" }} />

<Container sx={{ padding: "4%" }} component="main">
  <Paper
    className="signinPage"
    elevation={0}
    sx={{
      backgroundColor: "#fff",
      borderRadius: 4,
    }}
  >
    <Grid container>
      </Grid>
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

<Grid item xs={12}>
<h1>Food advertisement</h1>
  </Grid>
  <br/><br/><br/><br/><br/><br/>
  <br/><br/><br/>
         


              <Grid container spacing={2}>
                  
            
            <Grid item xs={12} sm={12}>
                  <TextField
                  autoFocus
                  required
                  fullWidth
                  // autoComplete="firstmane"
                  name="title"
                  id="title"
                  label="advertisement title"
                  value={formtitle}
                  onChange={e => {settitle(e.target.value)}}
                  // onBlur={formik.handleBlur}
                  // error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                  // helperText={formik.touched.firstname && formik.errors.firstname}
                />
              </Grid>
            
            <br/><br/><br/> <br/><br/>

            <Grid item xs={12} sm={6}>
              <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label" name='province'>Province</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={formik.values.country}
                        value={Countrry}
                        label="Province"
                        onChange={e => {setCountrry(e.target.value);setcities(mycities.filter(x => x.procode == e.target.value));}}
                      >
                      {Provinces.map((c) => (
                          <MenuItem value={c.code}>{c.label} </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label" name='province'>City</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={formik.values.country}
                        value={city}
                        label="city"
                        onChange={e => {setcity(e.target.value); console.log(cities) } }
                      >
                      {cities.map((c) => (
                          <MenuItem value={c.procode}>{c.lable} </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
              </Grid>

              <br/><br/><br/> <br/><br/>

              <Grid item xs={12}>
              <TextField
                fullWidth
                autoComplete="bio"
                name="bio"
                id="bio"
                label="Neighborhood address"
                type="text"
                multiline
                value={neighborhoodaddrs}
                onChange={e => setaddress(e.target.value)}
                // onBlur={formik.handleBlur}
                // error={formik.touched.bio && Boolean(formik.errors.bio)}
                // helperText={formik.touched.bio && formik.errors.bio}
              />
            </Grid>

<br/><br/><br/> <br/><br/>

         


              <Grid item xs={12} sm={6}>
                <TextField
                  name="date_birth"
                  label="Expiration date"
                  type="date"
                  style={{ width: '100%' }}
                  required
                  value={expiredate}
                  onChange={e => setexpdate(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  // onBlur={formik.handleBlur}
                  // error={formik.touched.date_birth && Boolean(formik.errors.date_birth)}
                  // helperText={formik.touched.date_birth && formik.errors.date_birth}
                />
              </Grid>

              <br/><br/><br/> <br/><br/>
            <Grid item xs={12}>
              <TextField
                fullWidth
                autoComplete="bio"
                name="bio"
                id="bio"
                label="Description"
                type="text"
                multiline="true"
                rows={3}
                value={description}
                onChange={e => setdesc(e.target.value)}
                // onBlur={formik.handleBlur}
                // error={formik.touched.bio && Boolean(formik.errors.bio)}
                // helperText={formik.touched.bio && formik.errors.bio}
              />
            </Grid>

            {/* <br/><br/><br/> */}




            <Grid item xs={12} sm={12}  container
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
                        <br/><br/><br/>

                         <Grid item xs={12} md={12} lg={12} direction="column" display="flex" style={{alignItems: "center", marginTop: "3rem" }}>
                <Grid container >
            

                          <Box component="span" sx={{ p: 6 , border: '1px dashed grey' }}>
                            <label htmlFor="icon-button-file">
                              <Input 
                                accept="image/*" 
                                id="icon-button-file" 
                                type="file" 
                              />
                                <IconButton 
                                  style={{color:'#465832'}} 
                                  aria-label="upload picture" 
                                  component="label"
                                >
                                  <PhotoCamera 
                                  style={isDragging ? { color: 'red' } : undefined}
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
                      <img src={image['data_url']} alt="" width="100" />
                      &nbsp;&nbsp;&nbsp;
                    </div>
              
                  ))}        
                    
                    
                      </Grid>
                  </Grid>
                    
                      </div>
                    )}
                  </ImageUploading>
      <Stack direction="row" alignItems="center" spacing={2}>
      {/* <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label> */}
    </Stack>

    <br/><br/><br/><br/><br/><br/><br/>

    <Grid container >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 4, mb: 6 }}
                  onClick={onClickSubmit}
                  style={{ backgroundColor: '#465832', color: '#FFFFFF', textTransform: 'unset', width: '110px',height: '55px' }}
                >
                    {loading ? 
                        <CircularProgress style={{color: "#fff"}}  size="1.55rem"/>
                        : "save"}

                  </Button>

                  <Grid sx={{ mt: 4, mb: 6 }}>
                  <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                  <Alert centered onClose={handleClose}  severity={message === "Please fill in the blanks." ? "error" : "success"} sx={{width: '100%' }}>
                    {message}
                  </Alert>
                </Snackbar>
                </Grid>

                {/* <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity={message === "Please fill in the blanks." ? "error" : "success"} sx={{paddingTop:"1000px", width: '100%' }}>
                    {message}
                  </Alert>
                </Snackbar> */}

              </Grid>


      </div>
              </Grid>

         


<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/>




                    </Grid>
            </Grid>
            </Grid>
            </Grid>
            </Paper>
            </Container>
</div>
    );
  }
  
  
  
  const Gender = [
    { label: 'Female' },
    { label: 'Male' },
    { label: 'Other' },
  ]
  
  const Maritalstatus = [
    { label: 'Single' },
    { label: 'Married' },
  ]
  
  // const data = {
  //   provinces: [
  //     { id: 1, name: 'P1' },
  //     { id: 2, name: 'P2' },
  //     { id: 3, name: 'P3' },
  //     { id: 4, name: 'P4' },
  //   ],
  //   cities: [
  //     { id: 1, name: 'C1', provinceId: 1 },
  //     { id: 2, name: 'C2', provinceId: 1 },
  //     { id: 3, name: 'C3', provinceId: 1 },
  //     { id: 4, name: 'C4', provinceId: 2 },
  //     { id: 5, name: 'C5', provinceId: 2 },
  //     { id: 6, name: 'C6', provinceId: 3 },
  //     { id: 7, name: 'C7', provinceId: 4 },
  //   ]
  // };  


  const Provinces = [
    {code : 1 , label : 'ALborz' },
    {code : 2 , label : 'Ardabil' },
    {code : 3 , label : 'Azerbaijan, East' },
    {code : 4 , label : 'Azerbaijan, West' },
    {code : 5 , label : 'Bushehr' },
    {code : 6 , label : 'Chahar Mahaal and Bakhtiari' },
    {code : 7 , label : 'Fars' },
    {code : 8 , label : 'Gilan' },
    {code : 9 , label : 'Golestan' },
    {code : 10 , label : 'Hamadan' },
    {code : 11 , label : 'Isfahan' },
    {code : 12 , label : 'Kerman' },
    {code : 13 , label : 'Isfahanshah' },
    {code : 14 , label : 'Khorasan, North' },
    {code : 15 , label : 'Khorasan, Razavi' },
    {code : 16 , label : 'Khorasan, South'},
    {code : 17 , label : 'Khuzestan'},
    {code : 18 , label : 'Kohgiluyeh and Boyer-Ahmad'},
    {code : 19 , label : 'Kurdistan'},
    {code : 20 , label : 'Lorestan'},
    {code : 21 , label : 'Markazi'},
    {code : 22 , label : 'Mazandaran'},
    {code : 23 , label : 'Qazvin'},
    {code : 24 , label : 'Qom'},
    {code : 25 , label : 'Semnan'},
    {code : 26 , label : 'Sistan and Baluchestan'},
    {code : 27 , label : 'Tehran'},
    {code : 28 , label : 'Yazd'},
    {code : 29 , label : 'Zanjan'},
  ]


  
  const mycities = [
    {procode : 1 , lable : 'Maragheh' },
    {procode : 1 , lable :'shabestar' },
    {procode : 1 , lable : 'sarab'},
    {procode : 1 , lable : 'charavimagh'},
    {procode : 1 , lable : 'osko'},
    {procode : 1 , lable : 'jolfa'},
    {procode : 1 , lable : 'ahar'},
    {procode : 1 , lable : 'bonab'},
    {procode : 1 , lable : 'tabriz'},
    {procode : 1 , lable : 'bostan abad'},
    {procode : 1 , lable : 'azar shahr'},
    {procode : 2 , lable : 'naghadeh' },
    {procode : 2 , lable : 'bookan'},
    {procode : 2 , lable :'piranshahr' },
    {procode : 2 , lable : 'chaldoran'},
    {procode : 2 , lable : 'khoy'},
    {procode : 2 , lable : 'takab' },
    {procode : 2 , lable : 'sardasht'},
    {procode : 2 , lable : 'salmas'},
    {procode : 2 , lable : 'shahindezh'},
    {procode : 2 , lable : 'makou'},
    {procode : 2 , lable : 'mahabad'},
    {procode : 2 , lable :'ashnoyeh' },
    {procode : 2 , lable : 'miandoab' },
    {procode : 2 , lable :'oromieh' },
    {procode : 3 , lable :'ardabil' },
    {procode : 3 , lable :'pileh savar' },
    {procode : 3 , lable :'pars abad' },
    {procode : 3 , lable : 'khalkhal'},
    {procode : 3 , lable :'garmi' },
    {procode : 3 , lable : 'meshkin shahr'},
    {procode : 3 , lable :'namin' },
    {procode : 3 , lable :'nir' },
    {procode : 3 , lable : 'kosar'},
    {procode : 4 , lable :'natanz' },
    {procode : 4 , lable :'najaf abad' },
    {procode : 4 , lable :'naeen' },
    {procode : 4 , lable :'golpaygan' },
    {procode : 4 , lable : 'lanjan'},
    {procode : 4 , lable : 'mobarakeh'},
    {procode : 4 , lable :'felavarjan' },
    {procode : 4 , lable : 'semirom sofla'},
    {procode : 4 , lable : 'semirom'},
    {procode : 4 , lable : 'kashan'},
    {procode : 4 , lable : 'khomein shahr'},
    {procode : 4 , lable : 'mimeh'},
    {procode : 4 , lable : 'ardestan'},
    {procode : 4 , lable : 'aran o bidgol'},
    {procode : 4 , lable : 'feriden'},
    {procode : 4 , lable : 'chadegan'},
  ]
  export default Foodadvertisment;










