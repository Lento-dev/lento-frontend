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
import ScrollableTabsButtonForce from './tabs';

const Input = styled('input')({
  display: 'none',
});

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


function Reprofile() {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const BASE_URL ='http://172.17.3.154/api';
    const token = localStorage.getItem('token');
    const headers = {"Authorization": `Token ${token}`};
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
  
    // const Alert = React.forwardRef(function Alert(props, ref) {
    //   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    // });
  
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
    const [fname,setfn] = useState('');
    const [lname,setln] = useState('');
    const [un,setun] = useState('');
    const [email,setemail] = useState('');
    const [job,setjob] = useState('');
    const [birthdate,setbd] = useState('');
    const [region,setregion] = useState('');
    const [bio,setbio] = useState('');
    const [education,seteducation] = useState('');
    const [joineddate,setjoineddate] = useState('');
    const [proimageurl,setproimage] = useState('');
    const [res,setres] = useState('');
    // const [values, setValues] = useState({
    //     firstname:"",
    //     lastname:"",
    //     username:"",
    //     email:"",
    //     job:"",
    //     birthdate:"",
    //     region:"",
    //     aboutme:"",
    //     education:"",
    //     joineddate:"",
    //     proimageurl:"",
    //     res:"",
    //     value : 0,    
    //   });
    
    
    const FileInput = () => {
      return <input accept="image/*" type="file" id="select-image" />;
    };
  
    const [value, setValue] = useState(0);
    // const email = "amirizahraza@gmail.com";


    useEffect(() => {
    console.log("***********************");
    // var token = localStorage.getItem("token");
    // token.replaceAll('"', '');
    // console.log(token);
    var config = {
        method: 'get',
        url: BASE_URL + '/account/user-profile/',
        headers: { 
            'Authorization': 'Token '+ token, 
        }
    };

    axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    setfn(response.data.first_name);
    setln(response.data.last_name);
    setemail(response.data.email);
    setun(response.data.username);
    setbd(response.data.date_birth);
    setregion(response.data.countrry);
    setjob(response.data.job);
    seteducation(response.data.education);
    setjoineddate(response.data.date_joined);
    setbio(response.data.bio);
    setproimage(response.data.image);
    setres(response.data);

    })
    
    .catch(function (error) {
      console.log(error);
    });
            }, [])
  
  
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
          {/* ecf2e8 */}
          
<Container component="main">
          <Paper
    elevation={0}
    sx={{
    //   height:"350px",
      backgroundColor: "#fff",
      borderRadius: 5,
    }}
  >
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{ backgroundColor: "#fffff", borderRadius: 4 }}
      >
                    
      <Grid
  container
  spacing={0}
  direction="row"
  alignItems="center"
  justifyContent="center"
>

  <Grid item xs={3} sx={{alignItems: 'center', justifyContent: 'center', display: 'inline-flex', marginTop: '2rem'}}>
          <Stack direction="row" >
              <Stack direction="photo" spacing={1} >               

                  <Avatar
                      alt="Remy Sharp"
                      src={proimageurl}
                      sx={{ width: 120, height: 120 }}
                  />
                   
              </Stack>
          </Stack>
        </Grid>
      </Grid>
<br></br>
      <br></br>

      <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
>

  <Grid item xs={12} > 

       <ScrollableTabsButtonForce data={res}></ScrollableTabsButtonForce>
      
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
  
  export default Reprofile;
