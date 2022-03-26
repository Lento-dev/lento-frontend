import React, { useState, useEffect, setState } from 'react';
import {
  Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box,
  Typography, Container
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { createTheme } from '@mui/material/styles';
// import '../signup.css';
import Helmet from 'react-helmet';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Autocomplete from '@mui/material/Autocomplete';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Input } from '@mui/material';
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

const validationSchema = yup.object({
  firstname: yup.string()
    .max(20, 'Must be 20 characters or less')
    .min(2, 'Must be at least 2 characters')
    .required('Required!'),
  lastname: yup.string()
    .max(25, 'Must be 25 characters or less')
    .min(2, 'Must be at least 2 characters')
    .required('Required!'),
  username: yup.string()
    .max(15, 'Must be 20 characters or less')
    .min(2, 'Must be at least 2 characters')
    .required('Required!'),
  password: yup.string()
    .max(15, 'Must be 15 characters or less')
    .min(6, 'Must be at least 6 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, 'Your password should contain at least 1 lowercase letter, 1 uppercase letter and a number.')
    .required('Required!'),
  confirmpassword: yup.string()
    .required('Required!')
    .oneOf([yup.ref('password'), null], 'Passwords don\'t match!'),
  marital_status: yup.string()
    .required('Required!'),
  birthdate: yup.string()
    .required('Required!'),
  gender: yup.string()
    .required('Required!'),
  country: yup.string()
    .required('Required!'),
  phone: yup.string()
    .required('Required!'),
  career: yup.string()
    .required('Required!'),
  website: yup.string()
    .required('Required')
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!'
    ),
  linkedin: yup.string()
    .matches(
      /^(ftp|http|https):\/\/?((www|\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
      'Not a valid linkedin link!'
    ),
  twitter: yup.string()
    .matches(
      /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/,
      'Not a valid twitter link!'
    ),
  facebook: yup.string()
    .matches(
      /(?:https?:\/\/)?(?:www\.)?(?:facebook|fb|m\.facebook)\.(?:com|me)\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]+)(?:\/)?/i,
      'Not a valid facebook link!'
    ),




});



function UserInfo(props) {
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
      birthdate: '',
      aboutme: '',
      experience: '',
      marital_status: '',
      gender: '',
      website: '',
      linkedin: '',
      facebook: '',
      twitter: '',
      career: '',
      
    },
    validationSchema: validationSchema,
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
  // useEffect(() => {
  //     axios.get('http://185.190.39.17:8888/profile/getuserprofilebyuser',
  //         {
  //             headers: {
  //                 "Authorization": `Bearer ${token}`
  //             }
  //         })
  //         .then(res => {
  //             console.log(res.data);
  //             setState(res.data);
  //             formik.setValues({
  //               city: res.data.city || '',
  //               aboutme: res.data.aboutme || '',
  //               birthdate: res.data.birthdate || '',
  //               email: res.data.email || '',
  //               experience: res.data.experience || '',
  //               facebook: res.data.facebook || '',
  //               firstname: res.data.firstname || '',
  //               lastname: res.data.lastname || '',
  //               linkedin: res.data.linkedin || '', 
  //               // phone: res.data.phone || '',
  //               twitter: res.data.twitter || '',
  //               website: res.data.website || '',
  //             });
  //             setCountrry(res.data.country)
  //             setGennder(res.data.gender)
  //             setmarital(res.data.marital_status)
  //             setspez(res.data.career)
  //             setPhone(res.data.phone || '')
  //         })
  //         }, [])





  // useEffect(() => {
  //   if (selectedImage) {
  //     setImageUrl(URL.createObjectURL(selectedImage));
  //   }
  // }, [selectedImage]);


  // const onClickSubmit = () => {
  //   const headers = {"Authorization": `Bearer ${props.a}`}
  //   let filled = 
  //   !Boolean(formik.errors.firstname) && !Boolean(formik.errors.lastname) &&
  //   (Countrry) && !Boolean(formik.errors.city) &&
  //   (Gennder) && (phone.length != 0 ) &&
  //   !Boolean(formik.errors.birthdate);
  //   console.log('filled: ' ,filled);
  //   if (filled){
  //     setLoading(true);
  //   axios.put('http://185.190.39.17:8888/profile/edit/', 
  //     { firstname: formik.values.firstname,
  //       lastname: formik.values.lastname,
  //       country: Countrry,
  //       city: formik.values.city,
  //       phone: phone,
  //       birthdate: formik.values.birthdate,
  //       aboutme: formik.values.aboutme,
  //       experience: formik.values.experience,
  //       marital_status: marital,
  //       gender: Gennder,
  //       website: formik.values.website,
  //       linkedin: formik.values.linkedin,
  //       career: spez,
  //       facebook: formik.values.facebook,
  //       // userimage: selectedImage,
  //       twitter: formik.values.twitter} , {headers})
  //       .then(function (response) {
  //         setOpen(true);
  //         setLoading(false);
  //         console.log('status :', response.status);
  //         if (response.status === 200){
  //           setResstatus(response.status);
  //           setMessage('Your informations was updated successfully!');
  //           setResstatus(response.status);
  //         }
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         setOpen(true);
  //         setMessage('Please fill in the blanks.');
  //         // setResstatus(error);
  //         console.log(error);
  //       });
  //   }
    
  //   console.log(formik.values.firstname, formik.values.lastname, Countrry,
  //       formik.values.city, marital,
  //       phone, formik.values.birthdate, Gennder, spez,
  //   )
  //     // .then(function (response) {
  //     //   console.log(response);
  //     // })
  //     // .catch(function (error) {
  //     //   console.log(error);
  //     // });
  // }  


  function handleOnChange(value) {
    setState({
      phone: value
    });
  }
  const current = new Date().toISOString().split("T")[0]

  const Input = styled('input')({
    display: 'none',
  });

  return (
    <div style={{ backgroundColor: ' #e5ecdf', backgroundSize:'cover', height: '150vh'}}>
      <Helmet bodyAttributes={{ style: 'background-color : #f5f5f5' }}></Helmet>
      {/* <ThemeProvider theme={theme}> */}
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Typography component="h1" variant="h5" style={{paddingTop:"0rem", paddingBottom:"1.5rem", paddingLeft: "2rem"}}>
              {/* Edit Profile */}
            </Typography>

        <Paper elevation={0} sx={{ borderRadius: 6, display: 'flex' }} style={{ justifyContent: "center", marginTop: "1rem", marginBottom: "1rem", padding: "3rem", backgroundColor: ' #e5ecdf', backgroundSize:'cover', height: '100vh'}}>
          <Grid container justifyContent="flex">
            <Grid container spacing={3} style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            

                        <Grid item xs={10}>
                            <Stack direction="row" sx={{ maxWidth: 345 }} style={{ marginLeft: "19rem", marginTop: "-4rem", marginBottom:"2rem" }}>
                                <Stack direction="photo" spacing={2} sx={{ maxWidth: 345 }} style={{ marginTop: "1rem" }}>

                                
                                    <Avatar
                                        alt="m"
                                        src={Image}
                                        sx={{ width: 130, height: 130 }}
                                    />

{/* <EditIcon fontSize="small" sx={{ maxWidth: 345 }} style={{ marginTop: "3rem", marginLeft:"-18px" }} /> */}

                                                    <Grid item xs={12} style={{ marginTop: "5rem", marginLeft:"-37px" }}>
                  <input accept="image/*" type="file" id="select-image"
                    style={{ display: 'none' }} onChange={e => setSelectedImage(e.target.files[0])} />
                  <label htmlFor="select-image">
                  <IconButton aria-label="delete" size="5" variant="contained" component="span" style={{ backgroundColor: '#e6835a', color: '#FFFFFF', textTransform: 'unset' }}>
        <EditIcon fontSize="inherit" />
      </IconButton>
                    {/* <Button  variant="contained" component="span" style={{ backgroundColor: '#000066', color: '#FFFFFF', textTransform: 'unset' }}>
                    <EditIcon fontSize="small" />
                    </Button> */}
                  </label>
                    {imageUrl && selectedImage && (
                    <Box mt={2} textAlign="left">
                      <div>Image Preview:</div>
                      <img className="company-logo" src={imageUrl} alt={selectedImage.name} height="62px !important" width="100px !important" />
                    </Box>
                    )}
                </Grid>
                                </Stack>
                            </Stack>
                        </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoFocus
                  required
                  fullWidth
                  autoComplete="firstmane"
                  name="firstname"
                  id="firstname"
                  label="First Name"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                  helperText={formik.touched.firstname && formik.errors.firstname}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  autoComplete="family-name"
                  name="lastname"
                  id="lastname"
                  label="Last Name"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                  helperText={formik.touched.lastname && formik.errors.lastname}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
              <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" name='gender'>Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Gennder}
          label="Gender"
          onChange={e => setGennder(e.target.value)}
        >
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
              <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" name='marital_status'>Select Marital Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={marital}
          label="Select Marital Status"
          onChange={e => setmarital(e.target.value)}
        >
          <MenuItem value={'Single'}>Single</MenuItem>
          <MenuItem value={'Married'}>Married</MenuItem>
        </Select>
      </FormControl>
    </Box>
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  name="birthdate"
                  label="birthdate"
                  type="date"
                  style={{ width: '100%' }}
                  required
                  value={formik.values.birthdate}
                  onChange={formik.handleChange}
                  InputLabelProps={{ shrink: true }}
                  onBlur={formik.handleBlur}
                  error={formik.touched.birthdate && Boolean(formik.errors.birthdate)}
                  helperText={formik.touched.birthdate && formik.errors.birthdate}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                  <MuiPhoneNumber
                    // <TextField/> 
                    required
                    fullWidth
                    defaultCountry={'us'}
                    name="phone"
                    id="phone"
                    label="Phone Number"
                    variant="outlined"
                    value={phone}
                    onChange={e => setPhone(e)}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
              <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" name='counrty'>Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={formik.values.country}
          value={Countrry}
          label="Country"
          onChange={e => setCountrry(e.target.value)}
        >
        {countries.map((c) => (
          <MenuItem value={c.label}>{c.label}  ({c.code})</MenuItem>
        ))}

        </Select>
      </FormControl>
    </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  autoComplete="given-city"
                  name="city"
                  id="city"
                  label="City"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                  helperText={formik.touched.lastname && formik.errors.lastname}
                />
              </Grid>


              <Grid item xs={12}>
                <TextField
                  fullWidth
                  autoComplete="career"
                  name="career"
                  id="career"
                  label="Select your job"
                  value={formik.values.career}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.career && Boolean(formik.errors.career)}
                  helperText={formik.touched.career && formik.errors.career}
                />
              </Grid>

              {/* <Grid item xs={12}>
              <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" name='career'>Select your job</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select your specialization"
          value={spez}
          onChange={e => setspez(e.target.value)}
        >
        {career.map((c) => (
          <MenuItem value={c.label}>{c.label}</MenuItem>
        ))}

        </Select>
      </FormControl>
    </Box>
              </Grid> */}


 <Grid item xs={12}>
                <TextField
                  fullWidth
                  autoComplete="aboutme"
                  name="aboutme"
                  id="aboutme"
                  label="About me"
                  type="text"
                  multiline
                  value={formik.values.aboutme}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.aboutme && Boolean(formik.errors.aboutme)}
                  helperText={formik.touched.aboutme && formik.errors.aboutme}
                />
              </Grid>

                            {/*<Grid item xs={12}>
                <TextField
                  fullWidth
                  autoComplete="experience"
                  name="experience"
                  id="experience"
                  label="Experience"
                  type="text"
                  multiline
                  value={formik.values.experience}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.experience && Boolean(formik.errors.experience)}
                  helperText={formik.touched.experience && formik.errors.experience}
                />
              </Grid>



              <Grid item xs={12} sm={6}>
                <TextField

                  fullWidth
                  autoComplete="linkedin"
                  name="linkedin"
                  id="linkedin"
                  label="LinkedIn"
                  type="linkedin"
                  value={formik.values.linkedin}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
                  helperText={formik.touched.linkedin && formik.errors.linkedin}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField

                  fullWidth
                  autoComplete="facebook"
                  name="facebook"
                  id="facebook"
                  label="Facebook"
                  type="facebook"
                  value={formik.values.facebook}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.facebook && Boolean(formik.errors.facebook)}
                  helperText={formik.touched.facebook && formik.errors.facebook}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField

                  fullWidth
                  autoComplete="twitter"
                  name="twitter"
                  id="twitter"
                  label="Twitter"
                  type="twitter"
                  value={formik.values.twitter}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.twitter && Boolean(formik.errors.twitter)}
                  helperText={formik.touched.twitter && formik.errors.twitter}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField

                  fullWidth
                  autoComplete="website"
                  name="website"
                  id="website"
                  label="Website"
                  type="website"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.website && Boolean(formik.errors.website)}
                  helperText={formik.touched.website && formik.errors.website}
                />
              </Grid> */}



              <Grid container justifyContent="flex-end">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 4, mb: 0 }}
                  // onClick={onClickSubmit}
                  style={{ backgroundColor: '#e6835a', color: '#FFFFFF', textTransform: 'unset', width: '110px' }}
                >
                    {loading ? 
                        <CircularProgress style={{color: "#fff"}}  size="1.55rem"/>
                        : "Edit Profile"}
                  </Button>

                <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity={message === "Please fill in the blanks." ? "error" : "success"} sx={{ width: '100%' }}>
                    {message}
                  </Alert>
                </Snackbar>

              </Grid>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    {/* Already have an account? Sign in */}
                  </Link>
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

const career = [

  { label: 'actress' },
  { label: 'actor' },
  { label: 'architect ' },
  { label: 'singer' },
  { label: 'dentist' },
  { label: 'detective' },
  { label: 'writer' },
  { label: 'farmer' },
  { label: 'nurse' },
  { label: 'pilot' },
  { label: 'engineer' },
  { label: 'accountant' },
  { label: 'butcher' },
  { label: 'cashier' },
  { label: 'barber' },
  { label: 'carpenter' },
  { label: 'lifeguard' },
  { label: 'baker' },
  { label: 'electrician' },
  { label: 'receptionist' },
  { label: 'researcher' },
  { label: 'scientist' },
  { label: 'bus driver' },
  { label: 'photographer' },
  { label: 'musician' },
  { label: 'painter' },
  { label: 'model' },
  { label: 'mechanic' },
  { label: 'florist' },
  { label: 'dancer' },
  { label: 'travel guide' },
  { label: 'programmer' },
  { label: 'hairdresser' },



  // //Business

  // { label: 'Project manager' },
  // { label: 'Sales manager' },
  // { label: 'Actuary' },
  // { label: 'Business teacher' },
  // { label: 'Business reporter' },
  // { label: 'Admissions representative' },
  // { label: 'Office manager' },
  // { label: 'Office clerk' },
  // { label: 'Assistant buyer' },
  // { label: 'Business development manager' },


  // //Engineering

  // { label: 'Civil engineer' },
  // { label: 'Mechanical engineer' },
  // { label: 'Chemical engineer' },
  // { label: 'Biological engineer' },
  // { label: 'Nuclear engineer' },
  // { label: 'Aerospace engineer' },
  // { label: 'Electrical engineer' },
  // { label: 'Environmental engineer' },
  // { label: 'Geological engineer' },
  // { label: 'Marine engineer' },
  // { label: 'Petroleum engineer' },
  // { label: 'Safety engineer' },
  // { label: 'Product engineer' },
  // { label: 'Compliance engineer' },
  // { label: 'Senior process engineer' },


  // //Information technology

  // { label: 'UX designer' },
  // { label: 'UI developer' },
  // { label: 'IT manager' },
  // { label: 'Computer programmer' },
  // { label: 'SQL developer' },
  // { label: 'Software developer' },
  // { label: 'Web administrator' },
  // { label: 'Data architect' },
  // { label: 'Business intelligence developer' },
  // { label: 'Mobile application developer' },
  // { label: 'Information security analyst' },
  // { label: 'Front-end web developer' },
  // { label: 'Java developer' },
  // { label: 'Database manager' },
  // { label: 'Software engineer' },

]





const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    phone: '971',
  },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  {
    code: 'AG',
    label: 'Antigua and Barbuda',
    phone: '1-268',
  },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AM', label: 'Armenia', phone: '374' },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'AQ', label: 'Antarctica', phone: '672' },
  { code: 'AR', label: 'Argentina', phone: '54' },
  { code: 'AS', label: 'American Samoa', phone: '1-684' },
  { code: 'AT', label: 'Austria', phone: '43' },
  {
    code: 'AU',
    label: 'Australia',
    phone: '61',
    suggested: true,
  },
  { code: 'AW', label: 'Aruba', phone: '297' },
  { code: 'AX', label: 'Alland Islands', phone: '358' },
  { code: 'AZ', label: 'Azerbaijan', phone: '994' },
  {
    code: 'BA',
    label: 'Bosnia and Herzegovina',
    phone: '387',
  },
  { code: 'BB', label: 'Barbados', phone: '1-246' },
  { code: 'BD', label: 'Bangladesh', phone: '880' },
  { code: 'BE', label: 'Belgium', phone: '32' },
  { code: 'BF', label: 'Burkina Faso', phone: '226' },
  { code: 'BG', label: 'Bulgaria', phone: '359' },
  { code: 'BH', label: 'Bahrain', phone: '973' },
  { code: 'BI', label: 'Burundi', phone: '257' },
  { code: 'BJ', label: 'Benin', phone: '229' },
  { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
  { code: 'BM', label: 'Bermuda', phone: '1-441' },
  { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
  { code: 'BO', label: 'Bolivia', phone: '591' },
  { code: 'BR', label: 'Brazil', phone: '55' },
  { code: 'BS', label: 'Bahamas', phone: '1-242' },
  { code: 'BT', label: 'Bhutan', phone: '975' },
  { code: 'BV', label: 'Bouvet Island', phone: '47' },
  { code: 'BW', label: 'Botswana', phone: '267' },
  { code: 'BY', label: 'Belarus', phone: '375' },
  { code: 'BZ', label: 'Belize', phone: '501' },
  {
    code: 'CA',
    label: 'Canada',
    phone: '1',
    suggested: true,
  },
  {
    code: 'CC',
    label: 'Cocos (Keeling) Islands',
    phone: '61',
  },
  {
    code: 'CD',
    label: 'Congo, Democratic Republic of the',
    phone: '243',
  },
  {
    code: 'CF',
    label: 'Central African Republic',
    phone: '236',
  },
  {
    code: 'CG',
    label: 'Congo, Republic of the',
    phone: '242',
  },
  { code: 'CH', label: 'Switzerland', phone: '41' },
  { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
  { code: 'CK', label: 'Cook Islands', phone: '682' },
  { code: 'CL', label: 'Chile', phone: '56' },
  { code: 'CM', label: 'Cameroon', phone: '237' },
  { code: 'CN', label: 'China', phone: '86' },
  { code: 'CO', label: 'Colombia', phone: '57' },
  { code: 'CR', label: 'Costa Rica', phone: '506' },
  { code: 'CU', label: 'Cuba', phone: '53' },
  { code: 'CV', label: 'Cape Verde', phone: '238' },
  { code: 'CW', label: 'Curacao', phone: '599' },
  { code: 'CX', label: 'Christmas Island', phone: '61' },
  { code: 'CY', label: 'Cyprus', phone: '357' },
  { code: 'CZ', label: 'Czech Republic', phone: '420' },
  {
    code: 'DE',
    label: 'Germany',
    phone: '49',
    suggested: true,
  },
  { code: 'DJ', label: 'Djibouti', phone: '253' },
  { code: 'DK', label: 'Denmark', phone: '45' },
  { code: 'DM', label: 'Dominica', phone: '1-767' },
  {
    code: 'DO',
    label: 'Dominican Republic',
    phone: '1-809',
  },
  { code: 'DZ', label: 'Algeria', phone: '213' },
  { code: 'EC', label: 'Ecuador', phone: '593' },
  { code: 'EE', label: 'Estonia', phone: '372' },
  { code: 'EG', label: 'Egypt', phone: '20' },
  { code: 'EH', label: 'Western Sahara', phone: '212' },
  { code: 'ER', label: 'Eritrea', phone: '291' },
  { code: 'ES', label: 'Spain', phone: '34' },
  { code: 'ET', label: 'Ethiopia', phone: '251' },
  { code: 'FI', label: 'Finland', phone: '358' },
  { code: 'FJ', label: 'Fiji', phone: '679' },
  {
    code: 'FK',
    label: 'Falkland Islands (Malvinas)',
    phone: '500',
  },
  {
    code: 'FM',
    label: 'Micronesia, Federated States of',
    phone: '691',
  },
  { code: 'FO', label: 'Faroe Islands', phone: '298' },
  {
    code: 'FR',
    label: 'France',
    phone: '33',
    suggested: true,
  },
  { code: 'GA', label: 'Gabon', phone: '241' },
  { code: 'GB', label: 'United Kingdom', phone: '44' },
  { code: 'GD', label: 'Grenada', phone: '1-473' },
  { code: 'GE', label: 'Georgia', phone: '995' },
  { code: 'GF', label: 'French Guiana', phone: '594' },
  { code: 'GG', label: 'Guernsey', phone: '44' },
  { code: 'GH', label: 'Ghana', phone: '233' },
  { code: 'GI', label: 'Gibraltar', phone: '350' },
  { code: 'GL', label: 'Greenland', phone: '299' },
  { code: 'GM', label: 'Gambia', phone: '220' },
  { code: 'GN', label: 'Guinea', phone: '224' },
  { code: 'GP', label: 'Guadeloupe', phone: '590' },
  { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
  { code: 'GR', label: 'Greece', phone: '30' },
  {
    code: 'GS',
    label: 'South Georgia and the South Sandwich Islands',
    phone: '500',
  },
  { code: 'GT', label: 'Guatemala', phone: '502' },
  { code: 'GU', label: 'Guam', phone: '1-671' },
  { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
  { code: 'GY', label: 'Guyana', phone: '592' },
  { code: 'HK', label: 'Hong Kong', phone: '852' },
  {
    code: 'HM',
    label: 'Heard Island and McDonald Islands',
    phone: '672',
  },
  { code: 'HN', label: 'Honduras', phone: '504' },
  { code: 'HR', label: 'Croatia', phone: '385' },
  { code: 'HT', label: 'Haiti', phone: '509' },
  { code: 'HU', label: 'Hungary', phone: '36' },
  { code: 'ID', label: 'Indonesia', phone: '62' },
  { code: 'IE', label: 'Ireland', phone: '353' },
  { code: 'IL', label: 'Israel', phone: '972' },
  { code: 'IM', label: 'Isle of Man', phone: '44' },
  { code: 'IN', label: 'India', phone: '91' },
  {
    code: 'IO',
    label: 'British Indian Ocean Territory',
    phone: '246',
  },
  { code: 'IQ', label: 'Iraq', phone: '964' },
  {
    code: 'IR',
    label: 'Iran',
    phone: '98',
  },
  { code: 'IS', label: 'Iceland', phone: '354' },
  { code: 'IT', label: 'Italy', phone: '39' },
  { code: 'JE', label: 'Jersey', phone: '44' },
  { code: 'JM', label: 'Jamaica', phone: '1-876' },
  { code: 'JO', label: 'Jordan', phone: '962' },
  {
    code: 'JP',
    label: 'Japan',
    phone: '81',
    suggested: true,
  },
  { code: 'KE', label: 'Kenya', phone: '254' },
  { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
  { code: 'KH', label: 'Cambodia', phone: '855' },
  { code: 'KI', label: 'Kiribati', phone: '686' },
  { code: 'KM', label: 'Comoros', phone: '269' },
  {
    code: 'KN',
    label: 'Saint Kitts and Nevis',
    phone: '1-869',
  },
  {
    code: 'KP',
    label: "Korea, Democratic People's Republic of",
    phone: '850',
  },
  { code: 'KR', label: 'Korea, Republic of', phone: '82' },
  { code: 'KW', label: 'Kuwait', phone: '965' },
  { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
  { code: 'KZ', label: 'Kazakhstan', phone: '7' },
  {
    code: 'LA',
    label: "Lao People's Democratic Republic",
    phone: '856',
  },
  { code: 'LB', label: 'Lebanon', phone: '961' },
  { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
  { code: 'LI', label: 'Liechtenstein', phone: '423' },
  { code: 'LK', label: 'Sri Lanka', phone: '94' },
  { code: 'LR', label: 'Liberia', phone: '231' },
  { code: 'LS', label: 'Lesotho', phone: '266' },
  { code: 'LT', label: 'Lithuania', phone: '370' },
  { code: 'LU', label: 'Luxembourg', phone: '352' },
  { code: 'LV', label: 'Latvia', phone: '371' },
  { code: 'LY', label: 'Libya', phone: '218' },
  { code: 'MA', label: 'Morocco', phone: '212' },
  { code: 'MC', label: 'Monaco', phone: '377' },
  {
    code: 'MD',
    label: 'Moldova, Republic of',
    phone: '373',
  },
  { code: 'ME', label: 'Montenegro', phone: '382' },
  {
    code: 'MF',
    label: 'Saint Martin (French part)',
    phone: '590',
  },
  { code: 'MG', label: 'Madagascar', phone: '261' },
  { code: 'MH', label: 'Marshall Islands', phone: '692' },
  {
    code: 'MK',
    label: 'Macedonia, the Former Yugoslav Republic of',
    phone: '389',
  },
  { code: 'ML', label: 'Mali', phone: '223' },
  { code: 'MM', label: 'Myanmar', phone: '95' },
  { code: 'MN', label: 'Mongolia', phone: '976' },
  { code: 'MO', label: 'Macao', phone: '853' },
  {
    code: 'MP',
    label: 'Northern Mariana Islands',
    phone: '1-670',
  },
  { code: 'MQ', label: 'Martinique', phone: '596' },
  { code: 'MR', label: 'Mauritania', phone: '222' },
  { code: 'MS', label: 'Montserrat', phone: '1-664' },
  { code: 'MT', label: 'Malta', phone: '356' },
  { code: 'MU', label: 'Mauritius', phone: '230' },
  { code: 'MV', label: 'Maldives', phone: '960' },
  { code: 'MW', label: 'Malawi', phone: '265' },
  { code: 'MX', label: 'Mexico', phone: '52' },
  { code: 'MY', label: 'Malaysia', phone: '60' },
  { code: 'MZ', label: 'Mozambique', phone: '258' },
  { code: 'NA', label: 'Namibia', phone: '264' },
  { code: 'NC', label: 'New Caledonia', phone: '687' },
  { code: 'NE', label: 'Niger', phone: '227' },
  { code: 'NF', label: 'Norfolk Island', phone: '672' },
  { code: 'NG', label: 'Nigeria', phone: '234' },
  { code: 'NI', label: 'Nicaragua', phone: '505' },
  { code: 'NL', label: 'Netherlands', phone: '31' },
  { code: 'NO', label: 'Norway', phone: '47' },
  { code: 'NP', label: 'Nepal', phone: '977' },
  { code: 'NR', label: 'Nauru', phone: '674' },
  { code: 'NU', label: 'Niue', phone: '683' },
  { code: 'NZ', label: 'New Zealand', phone: '64' },
  { code: 'OM', label: 'Oman', phone: '968' },
  { code: 'PA', label: 'Panama', phone: '507' },
  { code: 'PE', label: 'Peru', phone: '51' },
  { code: 'PF', label: 'French Polynesia', phone: '689' },
  { code: 'PG', label: 'Papua New Guinea', phone: '675' },
  { code: 'PH', label: 'Philippines', phone: '63' },
  { code: 'PK', label: 'Pakistan', phone: '92' },
  { code: 'PL', label: 'Poland', phone: '48' },
  {
    code: 'PM',
    label: 'Saint Pierre and Miquelon',
    phone: '508',
  },
  { code: 'PN', label: 'Pitcairn', phone: '870' },
  { code: 'PR', label: 'Puerto Rico', phone: '1' },
  {
    code: 'PS',
    label: 'Palestine, State of',
    phone: '970',
  },
  { code: 'PT', label: 'Portugal', phone: '351' },
  { code: 'PW', label: 'Palau', phone: '680' },
  { code: 'PY', label: 'Paraguay', phone: '595' },
  { code: 'QA', label: 'Qatar', phone: '974' },
  { code: 'RE', label: 'Reunion', phone: '262' },
  { code: 'RO', label: 'Romania', phone: '40' },
  { code: 'RS', label: 'Serbia', phone: '381' },
  { code: 'RU', label: 'Russian Federation', phone: '7' },
  { code: 'RW', label: 'Rwanda', phone: '250' },
  { code: 'SA', label: 'Saudi Arabia', phone: '966' },
  { code: 'SB', label: 'Solomon Islands', phone: '677' },
  { code: 'SC', label: 'Seychelles', phone: '248' },
  { code: 'SD', label: 'Sudan', phone: '249' },
  { code: 'SE', label: 'Sweden', phone: '46' },
  { code: 'SG', label: 'Singapore', phone: '65' },
  { code: 'SH', label: 'Saint Helena', phone: '290' },
  { code: 'SI', label: 'Slovenia', phone: '386' },
  {
    code: 'SJ',
    label: 'Svalbard and Jan Mayen',
    phone: '47',
  },
  { code: 'SK', label: 'Slovakia', phone: '421' },
  { code: 'SL', label: 'Sierra Leone', phone: '232' },
  { code: 'SM', label: 'San Marino', phone: '378' },
  { code: 'SN', label: 'Senegal', phone: '221' },
  { code: 'SO', label: 'Somalia', phone: '252' },
  { code: 'SR', label: 'Suriname', phone: '597' },
  { code: 'SS', label: 'South Sudan', phone: '211' },
  {
    code: 'ST',
    label: 'Sao Tome and Principe',
    phone: '239',
  },
  { code: 'SV', label: 'El Salvador', phone: '503' },
  {
    code: 'SX',
    label: 'Sint Maarten (Dutch part)',
    phone: '1-721',
  },
  {
    code: 'SY',
    label: 'Syrian Arab Republic',
    phone: '963',
  },
  { code: 'SZ', label: 'Swaziland', phone: '268' },
  {
    code: 'TC',
    label: 'Turks and Caicos Islands',
    phone: '1-649',
  },
  { code: 'TD', label: 'Chad', phone: '235' },
  {
    code: 'TF',
    label: 'French Southern Territories',
    phone: '262',
  },
  { code: 'TG', label: 'Togo', phone: '228' },
  { code: 'TH', label: 'Thailand', phone: '66' },
  { code: 'TJ', label: 'Tajikistan', phone: '992' },
  { code: 'TK', label: 'Tokelau', phone: '690' },
  { code: 'TL', label: 'Timor-Leste', phone: '670' },
  { code: 'TM', label: 'Turkmenistan', phone: '993' },
  { code: 'TN', label: 'Tunisia', phone: '216' },
  { code: 'TO', label: 'Tonga', phone: '676' },
  { code: 'TR', label: 'Turkey', phone: '90' },
  {
    code: 'TT',
    label: 'Trinidad and Tobago',
    phone: '1-868',
  },
  { code: 'TV', label: 'Tuvalu', phone: '688' },
  {
    code: 'TW',
    label: 'Taiwan, Province of China',
    phone: '886',
  },
  {
    code: 'TZ',
    label: 'United Republic of Tanzania',
    phone: '255',
  },
  { code: 'UA', label: 'Ukraine', phone: '380' },
  { code: 'UG', label: 'Uganda', phone: '256' },
  {
    code: 'US',
    label: 'United States',
    phone: '1',
    suggested: true,
  },
  { code: 'UY', label: 'Uruguay', phone: '598' },
  { code: 'UZ', label: 'Uzbekistan', phone: '998' },
  {
    code: 'VA',
    label: 'Holy See (Vatican City State)',
    phone: '379',
  },
  {
    code: 'VC',
    label: 'Saint Vincent and the Grenadines',
    phone: '1-784',
  },
  { code: 'VE', label: 'Venezuela', phone: '58' },
  {
    code: 'VG',
    label: 'British Virgin Islands',
    phone: '1-284',
  },
  {
    code: 'VI',
    label: 'US Virgin Islands',
    phone: '1-340',
  },
  { code: 'VN', label: 'Vietnam', phone: '84' },
  { code: 'VU', label: 'Vanuatu', phone: '678' },
  { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
  { code: 'WS', label: 'Samoa', phone: '685' },
  { code: 'XK', label: 'Kosovo', phone: '383' },
  { code: 'YE', label: 'Yemen', phone: '967' },
  { code: 'YT', label: 'Mayotte', phone: '262' },
  { code: 'ZA', label: 'South Africa', phone: '27' },
  { code: 'ZM', label: 'Zambia', phone: '260' },
  { code: 'ZW', label: 'Zimbabwe', phone: '263' },
];


const mapStateToProps = ( state ) => {
  return{
    access: state.auth.user.access,
    refresh: state.auth.user.refresh,
  }
}

// const MapStateToProps = (state) => {
//   let a = "";
//   let r = "";

//   if (state.auth.user != null) {
//       a = state.auth.user.access;
//       r = state.auth.user.refresh;
//   }
//   return {
//       message: state.message.message,
//       openMessage: state.message.openMessage,
//       isLoggedIn: state.auth.isLoggedIn,
//       a,
//       r,
//   }
// }


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
  }
}
// export default connect(MapStateToProps)(UserInfo);

export default UserInfo;
