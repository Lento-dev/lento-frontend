import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import {
  Typography,
  IconButton, Link, Grid
} from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
// import { BackToTop } from "material-ui-back-to-top";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import ClearIcon from '@mui/icons-material/Clear';
import { makeStyles } from '@mui/styles'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Chip from '@mui/material/Chip';
import { FaTshirt } from "react-icons/fa";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import BASE_URL from './baseurl';

const useStyles = makeStyles(theme => ({
    postTitle: {
        color: 'black',
        fontSize: '1.4rem',
        fontWeight: '650'
    },
    postAddress: {
        color: 'black',
        fontSize: '1rem',
        fontWeight: '250'
    },
    postDesc: {
        color: 'black',
        fontSize: '1rem',
        fontWeight: '200'
    },
    postTime: {
        color: 'black',
        fontSize: '1rem',
        fontWeight: '200'
    },
    boldText: {
        color: 'black',
        fontSize: '1rem',
        fontWeight: 'bold'
    },

}))


export default function PostCard({ post }) {
    const url = 'localhost3000/' + post.id;
    const classes = useStyles();
    const [clearDialog, setClearDialog] = useState(false);
    const [loadingYesButton, setLoadingYesButton] = useState(false);
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Token ${token}` };
    const postID = post.id;

    const clearPost = () => {
        setLoadingYesButton(true);
        axios.delete(BASE_URL + 'advertisement/delete/' + postID, {headers})
        .then (res => {
            setLoadingYesButton(false);
            setClearDialog(false);
            window.location.reload();
            console.log(res);
        })
        .catch (err => {
            setLoadingYesButton(false);
            setClearDialog(false);
            console.log(err);
        })
    }
    
    return (
        <div>

<Card variant="outlined" sx={{backgroundColor: '#fdfffc', border: 3, borderColor: '#8b9b74'}}>
      <CardHeader 
        action={
          <IconButton aria-label="delete" onClick={() => setClearDialog(true)}>
            <ClearIcon sx={{color: '#e6835a'}}/>
          </IconButton>
        }
        title={
              <Typography className={classes.postTitle} sx={{paddingBottom: '1rem'}}>
                <Link
                  underline="none"
                  color="inherit"
                  href={url}
                >
                  {post.Title}
                </Link>
              </Typography>
            }        
            subheader={
            <Grid item xs={12} justifyContent= "center"  sx={{ display: "inline-flex", marginLeft: '1.25rem' }}>
                        <CalendarTodayIcon fontSize="small"
                          sx={{ color: "#e6835a", marginRight: "3%" }}
                        />

                        <Typography className={classes.postTime} sx={{minInlineSize: 'fit-content'}}
                        >
                          {post.date_joined.slice(0,10)}
                        </Typography>
                        <FmdGoodIcon fontSize="small"
                          sx={{ color: "#e6835a", marginRight: "3%", marginLeft: '15%' }}
                        />

                        <Typography className={classes.postAddress} sx={{minInlineSize: 'fit-content'}}
                        >
                          {post.Address}
                        </Typography>
                      </Grid>
            }        
      />
      {post.Image && (
          <Grid container justifyContent="center">
          <CardMedia sx={{paddingLeft: '2rem', paddingRight: '2rem', marginBottom: '1rem'}}
        component="img"
        height="80%"
        width="80%"
        image={post.Image}
        alt="post's image"
      />
          </Grid>
      )}
      <CardContent sx={{paddingLeft: '1rem', paddingRight: '1rem', marginTop: '-1rem'}}>

                        <Typography className={classes.boldText} sx={{display: "inline-flex" }}
                        >
                          Description: &nbsp;
                        </Typography>
                        
                        <Typography className={classes.postDesc}  sx={{display: "contents" }}
                        >
                         {post.Description}
                        </Typography>

                        {post.resourcetype === "FoodAdvertisement" && (
                            <Grid container sx={{marginTop :'2rem'}}>
                        <Chip sx={{padding: '7px', backgroundColor: '#d2e4fa', fontWeight: '400', fontSize: '1rem'}} icon={<RestaurantMenuIcon />} label={post.resourcetype} />
                        </Grid>
                        )}

                        {post.resourcetype === "ClothAdvertisement" && (
                            <Grid container sx={{marginTop :'2rem'}}>
                        <Chip sx={{padding: '7px', backgroundColor: '#d2e4fa', fontWeight: '400', fontSize: '1rem'}} icon={<FaTshirt />} label={post.resourcetype} />
                        </Grid>
                        )}

                        {post.resourcetype === "ServiceAdvertisement" && (
                            <Grid container sx={{marginTop :'2rem'}}>
                        <Chip sx={{padding: '7px', backgroundColor: '#d2e4fa', fontWeight: '400', fontSize: '1rem'}} icon={<HomeRepairServiceIcon />} label={post.resourcetype} />
                        </Grid>
                        )}


      </CardContent>

    </Card>
    <Dialog
        open={clearDialog}
        onClose={() => setClearDialog(false)}

      >
        <DialogTitle>
          {"Are you sure you want to delete this post?"}
        </DialogTitle>

        <DialogActions>

          <Button onClick={() => setClearDialog(false)} variant="contained" sx={{ backgroundColor: "#8b9b74", "&:hover": {backgroundColor: '#c0d4b3', color: 'black'}}}> No</Button>
          <Button variant="contained" disabled={loadingYesButton} onClick={clearPost} sx={{ backgroundColor: "#8b9b74", "&:hover": {backgroundColor: '#c0d4b3', color: 'black'}}} autoFocus>
           Yes, I'm sure
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}