import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CategoryIcon from "@mui/icons-material/Category";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import imgg from "../assets/img/charitycard2.jpg";
import { Link } from "react-router-dom";

const MediaControlCard = (props) => {

  // props
  let resourcex = (props.data.resourcetype).replace("Advertisement","")
  console.log(props.data);
  var image = "https://s6.uupload.ir/files/newwwww_3y3i.jpg";
  if (props.data.Image === null) {
    image = "https://s6.uupload.ir/files/newwwww_3y3i.jpg";
  } else {
    image = props.data.Image;
  }



  return (
    <Card
      sx={{
        display: "flex",
        // width: "20rem",
        height: "12rem",
        backgroundColor: "white",
        borderRadius: "5px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column",textAlign:'left' }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
        <Link
                      style={{color:'#8b9b74'}}
                      to={{
                        pathname: "/jj",
                        state: { data: props.data },
                      }}
                    >
                      
          <Typography component="div" variant="h6">
            {props.data.Title}
          </Typography>
          </Link>
          

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            
            <LocationCityIcon style={{ fontSize: "large" }} />
            <span style={{ color: "grey", lineHeight: "160%" }}>
              {props.data.province}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <CategoryIcon style={{ fontSize: "large" }} />
            <span style={{ color: "grey", lineHeight: "160%" }}>
              Category : {resourcex}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <CardGiftcardIcon style={{ fontSize: "large" }} />
            <span style={{ color: "grey", lineHeight: "160%" }}>
              for gift
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
            <span style={{ color: "grey", lineHeight: "150%" }}>
              {props.data.expiration_date}
            </span>
          </div>
        </CardContent>
      </Box>
      
      <CardMedia
        component="img"
        
        sx={{ width: 134 , justifyContent:'right'}}
        image={image}
        
      />
    </Card>
  );
};

export default MediaControlCard;
