import React, { useState, useEffect, setState } from 'react';
import {
  Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box,
  Typography, Container
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { createTheme } from '@mui/material/styles';
import Helmet from 'react-helmet';
import { useFormik } from 'formik';
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

import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
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
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
  
    const history = useHistory();
    const [loading, setLoading] = React.useState(false);
    const [state, setState] = useState(null);
    const [open, setOpen] = React.useState(false);
  
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
      // props.clearMessage();
    };
  
    const formik = useFormik({
      initialValues: {
        firstname: '',
        lastname: '',
        country: '',
        city: '',
        phone: '',
        date_birth: '',
        bio: '',
        // marital_status: '',
        gender: '',
        job: '',
        
      },
    //   validationSchema: validationSchema,
    });
  
    const theme = useTheme();
    const [techName, setTechName] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [phone, setPhone] = useState('');
    const [Gennder, setGennder] = useState('');
    const [Countrry, setCountrry] = useState('');
    const [marital, setmarital] = useState('');
    const [spez, setspez] = useState('');
    const [message,setMessage] = React.useState('');
    const [resStatus, setResstatus] = useState([]);
   
    const FileInput = () => {
      return <input accept="image/*" type="file" id="select-image" />;
    };
  
    const [value, setValue] = useState(0);
    const email = "amirizahraza@gmail.com";
    const token = props.a
    useEffect(() => {
       
            }, [])
  
  
    useEffect(() => {
      if (selectedImage) {
        setImageUrl(URL.createObjectURL(selectedImage));
      }
    }, [selectedImage]);
  
  
    const onClickSubmit = () => {
      
      
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
          {/* <Grid container>
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              // textAlign="center"
            >
              <div >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5e83c496d5326b254fd35fd2/1586270601894-0929TEDVYFOG1WN8LXXL/charity-3.jpg?format=1500w"
                  width="1000"
                  height="400"
                  className="responsive"
                />
              </div>
            </Grid>
            </Grid> */}


              <Grid container spacing={2}>
                  
            
            <Grid item xs={12} sm={12}>
                <TextField
                  autoFocus
                  required
                  fullWidth
                  autoComplete="firstmane"
                  name="firstname"
                  id="firstname"
                  label="advertisement title"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                  helperText={formik.touched.firstname && formik.errors.firstname}
                />
              </Grid>
            <br/><br/><br/>

          <Grid item xs={12} sm={6}>
              <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" name='marital_status'>ّFood type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={marital}
                      label="Select Marital Status"
                      textAlign='left'
                      onChange={e => setmarital(e.target.value)}
                    >
                      <MenuItem value={'Eating'}>Eating</MenuItem>
                      <MenuItem value={'Drinking'}>Drinking</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  name="date_birth"
                  label="Expiration date"
                  type="date"
                  style={{ width: '100%' }}
                  required
                  value={formik.values.date_birth}
                  onChange={formik.handleChange}
                  InputLabelProps={{ shrink: true }}
                  onBlur={formik.handleBlur}
                  error={formik.touched.date_birth && Boolean(formik.errors.date_birth)}
                  helperText={formik.touched.date_birth && formik.errors.date_birth}
                />
              </Grid>

              <br/><br/><br/>
            <Grid item xs={12}>
              <TextField
                fullWidth
                autoComplete="bio"
                name="bio"
                id="bio"
                label="Description"
                type="text"
                multiline
                value={formik.values.bio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.bio && Boolean(formik.errors.bio)}
                helperText={formik.touched.bio && formik.errors.bio}
              />
            </Grid>

            <br/><br/><br/>

            <Grid item xs={12} sm={6}>
              </Grid>

            <Grid item xs={12} sm={6}>

           
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
                        <br/><br/><br/><br/><br/>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;
              

                          <Box component="span" sx={{ p: 6 , border: '1px dashed grey' }}>
                            <label htmlFor="icon-button-file">
                              <Input accept="image/*" id="icon-button-file" type="file" />
                                <IconButton 
                                  color="primary" 
                                  aria-label="upload picture" 
                                  component="span"
                                >
                                  <PhotoCamera 
                                  style={isDragging ? { color: 'red' } : undefined}
                                  onClick={onImageUpload}
                                  {...dragProps}  
                                  />
                                </IconButton>
                            </label>
                          </Box>
                        &nbsp;
                        <br/><br/><br/><br/><br/><br/><br/>
                        {imageList.map((image, index) => (
                    
                          <div key={index} className="image-item">                  
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;
                                
                            <img src={image['data_url']} alt="" width="100" />
                            {/* <div className="image-item__btn-wrapper">
                              <button onClick={() => onImageUpdate(index)}>Update</button>
                              <button onClick={() => onImageRemove(index)}>Remove</button>
                            </div> */}
                          </div>
                    
                        ))}
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
  

  export default Foodadvertisment;