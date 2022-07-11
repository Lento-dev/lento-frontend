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
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
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
import PersonIcon from '@mui/icons-material/Person';
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


export default function SavedAdCard({ ad }) {
    const classes = useStyles();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [loadingYesButton, setLoadingYesButton] = useState(false);
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Token ${token}` };
    const postID = ad.post_n.id;
    useEffect(() => {
  
    }, ad);

    const unSavePost = () => {
        setLoadingYesButton(true);
        axios.post(BASE_URL + 'advertisement/Saves/' ,{"post_n": postID}, {headers})
        .then (res => {
            setLoadingYesButton(false);
            setDialogOpen(false);
            console.log(res);
        })
        .catch (err => {
            setLoadingYesButton(false);
            setDialogOpen(false);
            console.log(err);
        })
    }
    
    return (
        <div>

<Card variant="outlined" sx={{backgroundColor: '#fdfffc', border: 3, borderColor: '#8b9b74'}}>
      <CardHeader 
        action={
          <IconButton aria-label="remove" onClick={() => setDialogOpen(true)}>
            <BookmarkAddedIcon sx={{color: '#e6835a'}}/>
          </IconButton>
        }
        title={
              <Typography className={classes.postTitle} sx={{paddingBottom: '1rem'}}>
                <Link
                  underline="none"
                  color="inherit"
                >
                  {ad.post_n.Title}
                </Link>
              </Typography>
            }        
            subheader={
            <Grid item xs={12} justifyContent= "center"  sx={{ display: "inline-flex" }}>
                        <PersonIcon fontSize="small"
                          sx={{ color: "#e6835a", marginRight: "3%" }}
                        />
                        <Typography className={classes.postAddress} sx={{minInlineSize: 'fit-content', paddingRight: '8%'}}
                        >
                          {ad.post_n.owner.username}
                        </Typography>
                        <CalendarTodayIcon fontSize="small"
                          sx={{ color: "#e6835a", marginRight: "3%" }}
                        />
                        <Typography className={classes.postTime} sx={{minInlineSize: 'fit-content'}}
                        >
                          {ad.post_n.date_joined.slice(0,10)}
                        </Typography>

                      </Grid>
            }        
      />
      <CardContent sx={{paddingLeft: '1rem', paddingRight: '1rem', marginTop: '-1rem'}}>

                        {ad.post_n.resourcetype === "FoodAdvertisement" && (
                            <Grid container sx={{marginTop :'1rem'}}>
                        <Chip sx={{padding: '7px', backgroundColor: '#d2e4fa', fontWeight: '400', fontSize: '1rem'}} icon={<RestaurantMenuIcon />} label={ad.post_n.resourcetype} />
                        </Grid>
                        )}

                        {ad.post_n.resourcetype === "ClothAdvertisement" && (
                            <Grid container sx={{marginTop :'1rem'}}>
                        <Chip sx={{padding: '7px', backgroundColor: '#d2e4fa', fontWeight: '400', fontSize: '1rem'}} icon={<FaTshirt />} label={ad.post_n.resourcetype} />
                        </Grid>
                        )}

                        {ad.post_n.resourcetype === "ServiceAdvertisement" && (
                            <Grid container sx={{marginTop :'1rem'}}>
                        <Chip sx={{padding: '7px', backgroundColor: '#d2e4fa', fontWeight: '400', fontSize: '1rem'}} icon={<HomeRepairServiceIcon />} label={ad.post_n.resourcetype} />
                        </Grid>
                        )}


      </CardContent>

    </Card>
    <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}

      >
        <DialogTitle>
          {"Remove from your saved advertisements?"}
        </DialogTitle>

        <DialogActions>

          <Button onClick={() => setDialogOpen(false)} variant="contained" sx={{ backgroundColor: "#8b9b74", "&:hover": {backgroundColor: '#c0d4b3', color: 'black'}}}> No</Button>
          <Button variant="contained" disabled={loadingYesButton} onClick={unSavePost} sx={{ backgroundColor: "#8b9b74", "&:hover": {backgroundColor: '#c0d4b3', color: 'black'}}} autoFocus>
           Yes
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}