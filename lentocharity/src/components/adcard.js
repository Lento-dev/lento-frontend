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

const MediaControlCard = (props) => {
  // props
  // console.log(props);

  if (props.data.Image === null) {
  } else {
  }

  return (
    <Card
      sx={{
        display: "flex",
        width: "25rem",
        height: "12rem",
        backgroundColor: "white",
        borderRadius: "5px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {props.data.Title}
          </Typography>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <LocationCityIcon style={{ fontSize: "large" }} />
            <span style={{ color: "grey", lineHeight: "160%" }}>
              &nbsp;{props.data.province}
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
              &nbsp;{props.data.resourcetype}
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
              &nbsp;for gift
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <EventNoteIcon style={{ fontSize: "large" }} />
            <span style={{ color: "grey", lineHeight: "50%" }}>
              &nbsp;&nbsp;{props.data.date_joined}
            </span>
          </div>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://s6.uupload.ir/files/mens-puffer-red-jacket_cu1a.jpg"
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default MediaControlCard;
