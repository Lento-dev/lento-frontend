import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CategoryIcon from "@mui/icons-material/Category";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import PersonIcon from '@mui/icons-material/Person';
import "../styles/Productdetail.css";
import PersonIcon from '@mui/icons-material/Person';
import axios from "axios";
import { Link } from "react-router-dom";
import { IconButton } from '@mui/material';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Helmet from "react-helmet";
import MyTextField from "./ModifiedTextField";
import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Typography,
  Container, Divider,
  Grid,
  Alert,
  CircularProgress,
} from "@mui/material";
import { height } from "@mui/system";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";


import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BASE_URL from './baseurl';

export default function BasicCard(props) {
  const id = props.location.state.data.id;
  const commentsIDs = props.location.state.data.comments;
  const [comments, setComments] = React.useState([]);
  const [loadingComment, setlLoadingComment] = React.useState(false);

  console.log(props.location.state.data);
  let resourcech = (props.location.state.data.resourcetype).replace("Advertisement","")
  var image = "http://www.upsara.com/images/g382390_.jpg";
  if (props.location.state.data.Image === null) {
    image = "http://www.upsara.com/images/g382390_.jpg";
  } else {
    image = props.location.state.data.Image;
  }
  var image1 = "http://www.upsara.com/images/g382390_.jpg";
  if (props.location.state.data.Image1 === null) {
    image1 = "http://www.upsara.com/images/g382390_.jpg";
  } else {
    image1 = props.location.state.data.Image1;
  }
  var image2 = "http://www.upsara.com/images/g382390_.jpg";
  if (props.location.state.data.Image2 === null) {
    image2 = "http://www.upsara.com/images/g382390_.jpg";
  } else {
    image2 = props.location.state.data.Image2;
  }

  const[username,setusername] = useState("")
  const[save , setsave] = useState("unsave")

  useEffect(() => {
    console.log("***********************");
    var token = localStorage.getItem("token");
    token.replaceAll('"', "");
    console.log(token);
    var myurl = "http://62.3.41.86/api/advertisement/userview/" + props.location.state.data.owner ;
    console.log(myurl) ;
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
        console.log(Object.values(response.data));
        setusername(response.data.username);
    
      })
  
      .catch(function (error) {
        console.log(error);
      });
      
  }, []);

  const handlesave = () => {
    console.log("***********************");
    var token = localStorage.getItem("token");
    token.replaceAll('"', "");
    console.log(token);
    var fd = new FormData();
    fd.append("post_n",props.location.state.data.id);
    fd.append("user_n",props.location.state.data.owner);
    var myurl = "http://62.3.41.86/api/advertisement/Saves/";
    console.log(myurl) ;
    var config = {
      method: "post",
      url: myurl,
      headers: {
        Authorization: "Token " + token,
      },
      data : fd,
    };
  
    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setsave(response.data.save);
      })
  
      .catch(function (error) {
        console.log(error);
      });
      
  };

  useEffect(() => {
    console.log("*********");
    var token = localStorage.getItem("token");
    token.replaceAll('"', "");
    console.log(token);
    var fd = new FormData();
    fd.append("post_n",props.location.state.data.id);
    fd.append("user_n",props.location.state.data.owner);
    var myurl = "http://62.3.41.86/api/advertisement/Save_condition/?post=" + props.location.state.data.id ;
    console.log(myurl) ;
    var config = {
      method: "get",
      url: myurl,
      headers: {
        Authorization: "Token " + token,
      },
     
    };
  
    axios(config)
      .then((response) => {
        setsave(response.data.save_condition)
    
      })
  
      .catch(function (error) {
        console.log(error);
      });
      
  }, []);
  useEffect(async () => {
      await axios.get(BASE_URL + 'advertisement/commentposts/?post=' + id, {headers: headers})
      .then(res => {
          setComments(res.data);
          console.log('comments', res.data)
      })        
    }, comments)
        

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [comment, setComment] = React.useState('');
  const token = localStorage.getItem("token");
  const headers = { Authorization: `Token ${token}` };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

    const handleSaveAddvertisment = () => {
      
    }
  const handleClose = () => {
    setOpen(false);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value );
  };

  const addComment = () => {
    setlLoadingComment(true);
    var formData = new FormData();
    formData.append("body", comment);
    formData.append("post", id);
    console.log(comment);
    axios.post(BASE_URL + 'advertisement/comments/', formData, { headers: headers })
    .then(res => {
      console.log(res)
      comments.push(comment)
      setlLoadingComment(false);
      setComment('');
    })
    .catch(err => {
      setlLoadingComment(false);
      console.log(err)
    })
  }

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background-color : #ecf2e8" }} />

      <Grid>


      
        <div class="slider" style={{ left: "290px", position: "absolute" }}>
        <img src={image} />
          <input type="radio" name="slide_switch" id="id1" />
          <label for="id1">
            <img
              src={image}
              width="50"
              height="70"
            />
          </label>
          
          
          <img src={image} />
          
          {/* {( props.location.state.data.Image === null) ? (
            <p> */}
          
          
          <input type="radio" name="slide_switch" id="id2" />
          <label for="id2">
            <img
              src={image1}
              width="50"
              height="70"
            />
          </label>
          <img src={image1} />

          <input type="radio" name="slide_switch" id="id3" />
          <label for="id3">
            <img
              src={image2}
              width="50"
              height="70"
            />
          </label>
          <img src={image2} />
          {/* </p>
          
           ): (<p></p>)} */}
        </div>
      </Grid>
      
      <div style={{ display: "inline-block", position: "absolute" }}>
        <Grid item sx={12} sm={6}>
          <Container sx={{ paddingTop: "100px" }} component="main">
            <Grid item sx={3}>
              <Card container sx={{ maxWidth: 370, marginLeft: "30px" }}>
                <CardContent style={{ textAlign: "left", lineHeight: "175%" }}>
                <Grid container>
                  <Grid item xs={6}>
                  <Typography
                    style={{
                      // display: "inline",
                      // borderRadius: "4px",
                      // textShadow: "0 0 1px grey",
                      color: "#556749",
                      fontSize: "25px",
                      // marginLeft: "-5px", 
                      display: "flex",
                      flexWrap: "wrap",
                      paddingTop: "10px",
                      alignItems: "right",
                    }}
                  >
                                        
                    
                    {props.location.state.data.Title}

                  </Typography>
                  </Grid>
                  <Grid item xs={6} sx={{justifyContent: 'flex-end', display: 'flex'}}>
                    <IconButton   onClick={handlesave}  >
                      {save == "save"?  <BookmarkAddedIcon ></BookmarkAddedIcon> : 

                      <BookmarkAddIcon   ></BookmarkAddIcon>}
                    </IconButton>
                    </Grid>
                  {/* <Grid item xs={6} sx={{justifyContent: 'flex-end', display: 'flex'}}>
                  <IconButton sx={{marginLeft: '4rem'}}>
                    <BookmarkAddIcon/>
                  </IconButton>
                  </Grid> */}
                </Grid>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      paddingTop: "10px",
                      alignItems: "center",
                    }}
                    
                  >
                    <CategoryIcon style={{ fontSize: "large" }} />
                    <span style={{ color: "black", fontSize: "16px" }}>
                      &nbsp;Category : {resourcech}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <PersonIcon style={{ fontSize: "large" }} />
                    &nbsp;Owner :&nbsp;
                    <Link
                      style={{color:'#8b9b74'}}
                      to={{
                        pathname: "/user-profile/"+props.location.state.data.owner,
                        
                      }}
                    >
                                          <span style={{ color: "black", fontSize: "16px" }}>
                       { username }
                       
                    </span>
                      

          </Link>

                  </div>
                  

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <LocationCityIcon style={{ fontSize: "large" }} />
                    <span style={{ color: "black", fontSize: "16px" }}>
                      &nbsp;City : {props.location.state.data.City} 
                       
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <br />
                    <EventNoteIcon style={{ fontSize: "large" }} />
                    <span style={{ color: "black" }}>
                      &nbsp;Published date : 22/03/2022
                    </span>
                  </div>
                  {props.location.state.data.resourcetype ===
                  "ServiceAdvertisement" ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      paddingTop: "12px",
                      color: "#556749",
                    }}
                  >
                    <br />
                    <CheckBoxIcon style={{ fontSize: "large" }} />
                    <span>&nbsp;Type : {props.location.state.data.service_type}</span>
                  </div>
                  ): (<p></p>)}
                  {props.location.state.data.resourcetype ===
                  "ClothAdvertisement" ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      paddingTop: "12px",
                      color: "#556749",
                    }}
                  >
                    <br />
                    {/* <CheckBoxIcon style={{ fontSize: "large" }} /> */}
                    <span>&nbsp;Type : {props.location.state.data.cloth_type} - Manly</span>
                  </div>
                  ): (<p></p>)}
                  {props.location.state.data.resourcetype ===
                  "ClothAdvertisement" ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        color: "#556749",
                      }}
                    >
                      <br />
                      {/* <CheckBoxIcon style={{ fontSize: "large" }} /> */}
                      <span>&nbsp;Size : {props.location.state.data.cloth_size} </span>
                    </div>
                  ) : (
                    <p></p>
                  )}
                  {props.location.state.data.resourcetype ===
                  "ClothAdvertisement" ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      color: "#556749",
                    }}
                  >
                    <br />
                    {/* <CheckBoxIcon style={{ fontSize: "large" }} /> */}
                    <span>&nbsp;Status : {props.location.state.data.cloth_status}</span>
                  </div>
                  ) : (<p></p>)}
                </CardContent>
                <br />
                {/* <Button>hi</Button> */}
                <Grid container item xs={12}>
                  {/* <Button
                    // variant="contained"
                    // style={{ display: "inline-block"}}
                    
                    // onClick={handleSubmitButton}
                    sx={{
                      color:'white',
                      backgroundColor: "#556749",
                      height: "40px",
                      width: "120px",
                      // display: "inline-block",
                      marginLeft: "125px",

                      ":hover": {
                        bgcolor: "#e6835a",
                      },
                    }}
                  >
                    Save
                  </Button> */}
                </Grid>
                <br/>
                <Grid container item xs={12}>
                  <Button
                    variant="outlined"
                    style={{ display: "inline-block" }}
                    onClick={handleClickOpen('paper')}
                    fullWidth
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      backgroundColor: '#e6835a',
                      display: "inline-block",
                        textTransform: 'none',
                        "&:hover": {backgroundColor: '#eef5e4', color: '#5f6e4b', borderColor: 'white'}

                    }}
                  >
                    Comments
                 
                  </Button>
                  <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
              <Grid container>
                    <Grid item xs={6}>
        <DialogTitle id="scroll-dialog-title" style={{fontWeight: 'bold'}}>Comments

        </DialogTitle>
        </Grid>
        <Grid item xs={6}>
        <DialogActions>

<IconButton sx={{textAlign: 'right', color:'#e6835a'}} onClick={() => setOpen(false)}>
<CloseIcon/>
              </IconButton>
</DialogActions>
</Grid>
</Grid>

        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
          <Grid justifyContent="left" item xs zeroMinWidth>
          {comments.map(c => ( 
            <div>
            <h4 style={{ margin: 0, textAlign: "left" }}>{c.owner}</h4>
            <p style={{ textAlign: "justify" }}>
              {c.body} {" "}
            </p>
            <Divider sx={{paddingTop: '0.7rem', marginBottom: '0.7rem'}}/>
            </div>
          ))}

                      <Grid container sx={{paddingTop: '5rem'}}>

                        <Grid item xs = {12}>
                        <MyTextField placeholder="Add a comment ..."
                        multiline   minRows={3}
                        value={comment} onChange={handleCommentChange}
                        fullWidth/>
                        </Grid>
                        <Grid item xs = {12} sx={{paddingTop: '1rem'}}>
                      <Button onClick={addComment}      
                      sx={{ backgroundColor: "#8b9b74", width:'200px', color: "white", "&:hover": {backgroundColor: '#c0d4b3', color: 'black'}}}>
                        {loadingComment ? 
                        <CircularProgress style={{color: "#fff"}} size="1.6rem"/>
                        : "Add comment"}                  
                      </Button>
                    </Grid>
                      </Grid>

            

          </Grid>
          </DialogContentText>
        </DialogContent>


      </Dialog>
                </Grid>
              </Card>
            </Grid>
            <br />
            <Grid item xs={3}>
              <Card container sx={{marginLeft: "30px" ,width:'370px' }}>
                <CardContent style={{ textAlign: "left", lineHeight: "175%" }}>
                  <Typography
                    style={{
                      display: "inline",
                      borderRadius: "4px",
                      color: "#556749",
                      marginLeft: "-5px",
                    }}
                  >
                    <span
                      style={{ fontSize: "20px", textShadow: "0 0 1px grey" }}
                    >
                      &nbsp;Description&nbsp;
                    </span>

                    <br />
                    <span style={{ fontSize: "14px" }}>
                      
                    {props.location.state.data.Description}
                    
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Container>

        </Grid>

      </div>

    </div>
  );
}
