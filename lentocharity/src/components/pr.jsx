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
import { makeStyles } from '@mui/styles';
import MuiMenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import SearchBar from "material-ui-search-bar";

// import MenuItem from '@mui/material/MenuItem';
const MenuItem = withStyles({
  root: {
    justifyContent: "flex-end"
  }
})(MuiMenuItem);




const Input = styled('input')({
  display: 'none',
});

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


function Formdis(props) {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const [files, setFiles] = useState([]);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const [images, setImages] = React.useState([]);
    const [imageUrl, setImageUrl] = useState(null);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
      
      console.log("image list =>",imageList, addUpdateIndex);
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
    const [servicetype, setservicetype] = useState('');
    const [spez, setspez] = useState('');
    const [message,setMessage] = React.useState('');
    const [resStatus, setResstatus] = useState([]);
    const [marital,setmarital] = useState('');
    const [clothtype, setclothtype] = useState('');
    const [clothstatus, setclothstatus] = useState('');
    const [clothsize, setclothsize] = useState('');
    const [Countrry, setCountrry] = useState('');
    const [cities, setcities] = useState([]);
    const [city,setcity]=useState('');
    const [formtitle,settitle]=useState('');
    const [neighborhoodaddrs,setaddress]=useState('');
    const [expiredate,setexpdate]=useState('');
    const [description,setdesc]=useState('');

 
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
    const [searchItem, setSearchItem] = useState("");

    const [errors, setErrors] = useState({});
      
    const [values, setValues] = useState({
      formtitle: "",
      province: "",
      city: "",
      neighborhoodaddrs: "",
      expiredate: "",
      description: "",
      clothtype:"",
      clothstatus:"",
      clothsize:"",
      pseudonym:"",
      servicetype:"",
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
        case !values.province:
          tmpErrors["province"] = "Please select your province.";
          break;
        default:
          break;
      }
  
      switch (true) {
        case !values.city:
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
            tmpErrors["neighborhoodaddrs"] = "neighborhoodaddrs can be at most 300 characters.";
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
      if(cchecked)
      {
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
      }
      if(schecked)
      {
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
          case !values.servicetype:
            tmpErrors["servicetype"] = "Please enter your servicetype.";
            break;
          
          default:
            break;
        }
      }
      setErrors(tmpErrors);
    };

    const FileInput = () => {
      return <input accept="image/*" type="file" id="select-image" />;
    };
  
    const [value, setValue] = useState(0);
    const email = "amirizahraza@gmail.com";
    const token = props.a

    // useEffect(() => {
    //   console.log("***********************");
    //         }, [])

      const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
        if(name === "province")
        {
          setcities(mycities.filter(x => x.procode == event.target.value));
        }
      };

    const onClickSubmit = () => { 
      validate();

      let filled = Object.keys(tmpErrors).length === 0;
      console.log('error', errors);
      console.log('filled', filled);
      console.log('values',values);
      if(!filled)
      {
        console.log("error filling form");
        setMessage("error");
        setOpen(true);
      }
      if(filled)
      {
        var token = localStorage.getItem("token");
        token.replaceAll('"', '');
        if(fchecked)
        {
            setLoading(true);
            var fd = new FormData();
            fd.append("Title",values.formtitle);
            fd.append("Description",values.description);
            fd.append("province",values.province);
            fd.append("City",values.city);
            fd.append("Address",values.neighborhoodaddrs);
            // fd.append("Food_type",null);
            fd.append("expiration_date",values.expiredate);
            // fd.append("Image",null);
            // console.log(images[0],imageUrl);
            var config = {
              method: 'post',
              url: 'http://127.0.0.1:8000/advertisement/addfood/',
              headers: { 
                'Authorization': 'Token '+ "213b2e47bc472211c4fa19746271d0973f08a671", 
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
              setOpen(true);
              setMessage("error");
            });
        }
        if(cchecked)
        {
          setLoading(true);
          var fd = new FormData();
          fd.append("Title",values.formtitle);
          fd.append("Description",values.description);
          fd.append("province",values.province);
          fd.append("City",values.city);
          fd.append("Address",values.neighborhoodaddrs);
          fd.append("expiration_date",values.expiredate);
          fd.append("cloth_type",values.clothtype);
          fd.append("cloth_status",values.clothstatus);
          fd.append("cloth_size",values.clothsize);
          // fd.append("for_men",);
          // fd.append("for_women",);
          // fd.append("for_kids",);
          // fd.append("unlimited",);
          // fd.append("Image",null);
          console.log(images[0],imageUrl);
          var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/advertisement/addcloth/',
            headers: { 
              'Authorization': 'Token '+ "213b2e47bc472211c4fa19746271d0973f08a671", 
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
        if(schecked)
        {
          setLoading(true);
          var fd = new FormData();
          fd.append("Title",values.formtitle);
          fd.append("Description",values.description);
          fd.append("province",values.province);
          fd.append("City",values.city);
          fd.append("Address",values.neighborhoodaddrs);
          fd.append("expiration_date",values.expiredate);
          fd.append("service_type",values.servicetype);
          // fd.append("Image",null);
          console.log(images[0],imageUrl);
          var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/advertisement/addservice/',
            headers: { 
              'Authorization': 'Token '+ "213b2e47bc472211c4fa19746271d0973f08a671", 
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

      }
      
    }  
  
  
    function handleOnChange(value) {
      
    }
   
  
  

    return (

      
        <div >
        <Helmet bodyAttributes={{ style: "background-color : #ecf2e8" }} />

<Container sx={{ padding: "2%" }} component="main">

  <br/><br/>

<Paper
    // className="signinPage"
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
<br/><br/><br/><br/><br/><br/><br/>

        <Grid container spacing={2}>                
          <Grid item xs={12} sm={6}>
          <SearchBar
          value={searchItem}
          onChange={value => {
            setSearchItem(value);
          }}
          onRequestSearch={() => console.log("onRequestSearch")}
          style={{
            margin: "0 auto",
            maxWidth: 800
          }}
        />
            </Grid>
            
  
            
            <Grid item xs={12} sm={6}>
                <Box sx={{ minWidth: 120 }}>
                <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
               
                  </Box>
                </Grid>

                

          

            




              
              

             
              
            
             

                
        



                

                 




   








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

  export default Formdis;



















  