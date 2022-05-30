import React, { useState, useEffect, setState } from 'react';
import {
  Button,TextField,Grid, Box,Container
} from '@mui/material';
import Helmet from 'react-helmet';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import 'react-phone-input-2/lib/style.css';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import 'date-fns';
import { registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import MuiMenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import MediaControlCard from './adcard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


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

 

 


    
    const history = useHistory();
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [message,setMessage] = React.useState('');
    const [searchItem, setSearchItem] = useState("");
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

    const [errors, setErrors] = useState({});
      
    const [values, setValues] = useState({
      formtitle: "",
      clothstatus:"",
    });

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
     
      };




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
  
      
      
      
  
     
 
      if(cchecked)
      {
        switch (true) {
          case !values.clothtype:
            tmpErrors["clothtype"] = "Please enter your clothtype.";
            break;
          default:
            break;
        }
        
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
          fd.append("cloth_status",values.clothstatus);
      
    
         
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
          fd.append("category_type",values.categorytype);
          
         
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

<Container sx={{ padding: "4%" }} component="main">

<Grid  spacing={0} direction="row" alignItems="center" justifyContent="center">
          
          <Grid item xs={12}>

<Paper
    // className="signinPage"
    elevation={0}
    sx={{
      backgroundColor: "#fff",
      borderRadius: 4,
      width:'100%',
      justify:'flex-end',
    }}
  >
    <Grid container >
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{ backgroundColor: "#fffff", borderRadius: 4 }}
      >
      
            <Grid item xs={12}>
              
      <Grid
          container
          sx={{
            paddingTop: "2%",
            paddingRight: "5%",
            paddingLeft: "15%",
          }}
        >
<br/><br/><br/><br/>

        <Grid container spacing={2}>                
          <Grid item xs={12} sm={5}>
              <div>
              {/* <SearchBar>
                    value={searchItem}
                onChange={value => {
                    setSearchItem(value);
                }}
                onRequestSearch={() => console.log("onRequestSearch")}
                style={{
                    margin: "0 auto",
                    maxWidth: 800
                }}
              </SearchBar> */}
              <Grid item xs={12} sm={12}>
                <TextField
                autoFocus
                required
                fullWidth
                autoComplete="firstmane"
                name="title"
                id="title"
                label="advertisement title"
                // value={formtitle}
                // onChange={e => {settitle(e.target.value)}}
                value={values.formtitle}
                onChange={handleChange("formtitle")}
                error={Boolean(errors["formtitle"])}
                helperText={errors["formtitle"]}
              />
            </Grid>
              </div>
            </Grid>
        
              <Grid item xs={12} sm={5}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label" name='marital_status'>select the category</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select Marital Status"
                        textAlign='left'
                        value={values.clothtype}
                        onChange={handleChange("clothtype")} 
                        error={Boolean(errors["clothtype"])}
                        helperText={errors["clothtype"]}         
                      >
                        <MenuItem value={'food'}>food</MenuItem>
                        <MenuItem value={'service'}>service</MenuItem>
                        <MenuItem value={'cloth'}>cloth</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid container item xs={12} sm={2}>
                    
                    <Button
                     style={{height:'53px',backgroundColor: '#e6835a',borderRadius:'5px'}}   
                     variant="contained">search</Button>
                    
                </Grid>
                  </Grid>
          </Grid>
          </Grid>
          </Grid>
          </Paper>
<br/><br/><br/>


<Grid item xs={12} d={12} lg={12}>
  <Grid container > 
{/* < Paper
          sx={{
            width:"100%",
            backgroundColor: "#fff",
            borderRadius: 4,
            paddingTop:"20rem",
            direction:"column",
            justify:"center",
            alignItems:"center",
          }}
          > */}
       
            <Grid container spacing={6}>
            
            <Grid item md={4}>
              <MediaControlCard />
            </Grid>
           
            <Grid item md={4}>
              <MediaControlCard />
            </Grid>
            
            <Grid item md={4}>
              <MediaControlCard />
            </Grid>
            <Grid item md={4}>
              <MediaControlCard />
            </Grid>
       
            <Grid item md={4}>
              <MediaControlCard />
            </Grid>
           
            <Grid item md={4}>
              <MediaControlCard />
            </Grid>
            <Grid item md={4}>
              <MediaControlCard />
            </Grid>
            <Grid item md={4}>
              <MediaControlCard />
            </Grid>
            <Grid item md={4}>
              <MediaControlCard />
            </Grid>
            <Grid item md={4}>
              <MediaControlCard />
            </Grid>
            <Grid item md={4}>
              <MediaControlCard />
            </Grid>
            <Grid item md={4}>
              <MediaControlCard />
            </Grid>
            <Grid item md={4}>
              <MediaControlCard />
            </Grid>
            <Grid item md={4}>
              <MediaControlCard />
            </Grid>
            <Grid item md={4}>
              <MediaControlCard />
            </Grid>

          </Grid>
      


          {/* </Paper> */}
          </Grid>
      
          </Grid>
          </Grid>
          </Grid>
          </Container>

          <Stack spacing={2}>
            <Pagination count={10} />
          </Stack>
          
</div>


    );
  }



  
  
  
  
  



  


  export default Formdis;



















  