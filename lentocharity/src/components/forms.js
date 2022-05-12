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
import { FlareSharp, SettingsAccessibility } from '@mui/icons-material';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import Foodadvertisment from './foodadvertisment';
import Serviceadvertisement from './Serviceadvertisement';
import Clothadvertisement from './clothadvertisement';

const Input = styled('input')({
  display: 'none',
});

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


function Forms(props) {
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
      setLoading(true);
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
        setLoading(false);
        if(response.status == 201)
        {
          setMessage("success");
          setOpen(true);
        }
        else
        {
          setOpen(true);
          setMessage("error");
    
        }
        
      })
      .catch(function (error) {
        setLoading(false);
      });

    }  
  
  
    function handleOnChange(value) {
      
    }
    
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
  
  

    return (

      

      <div >
        
          <Helmet bodyAttributes={{ style: "background-color : #ecf2e8" }} />
          
          
          
<Container sx={{ padding: "2%" }} component="main">
          <Paper
    // className="signinPage"
    elevation={0}
    sx={{
      height:"100px",
      backgroundColor: "#fff",
      borderRadius: 5,
    }}
  >
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    <Grid item xs={2} sm={4} md={4}>
        <FormControlLabel
        control={<Switch checked={fchecked} onChange={ftoggleChecked} />}
        label="food"
        />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
            <FormControlLabel
          control={<Switch checked={cchecked} onChange={ctoggleChecked} />}
          label="cloth"
        />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <FormControlLabel
            control={<Switch checked={schecked} onChange={stoggleChecked} />}
            label="service"
          />
        </Grid>
    </Grid>

  </Paper>
  </Container>
    
    {fchecked ? 
  <Foodadvertisment/>                    
    : 
    <p></p>}

     
  {schecked ? 
  <Serviceadvertisement/>                    
    : 
    <p></p>}

     
  {cchecked ? 
  <Clothadvertisement/>                    
    : 
    <p></p>}
      
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
  
  export default Forms;
