import * as React from "react";
import { login, logincompany, logout } from "../actions/auth";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import Dashboard from "@mui/icons-material/Dashboard";
import { useHistory } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Link from "@mui/material/Link";
import { connect } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from "react";
import axios from "axios";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [openBD, setOpenBD] = React.useState(false);

  const anchorRef = React.useRef(null);
  const history = useHistory();
  const BASE_URL = "http://172.17.3.154/api";
  const token = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const headers = {"Authorization": `Token ${token}`};

  useEffect(() => {
    console.log(localStorage.getItem('isLoggedIn') !== null)
    setIsLoggedIn(localStorage.getItem('isLoggedIn') !== null)
  },)
  useEffect(() => {

        setInterval(() => {
          setIsLoggedIn(localStorage.getItem('isLoggedIn') !== null)
            }, [])
    }, 5000);


  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  const handleProfileClick = () => {
    setOpen((prevOpen) => !prevOpen);
    history.push("/my-profile");
  };
  const handleSettingClick = () => {
    setOpen((prevOpen) => !prevOpen);
    history.push("/setting");
  };


  const handleLogOutClick = async () => {
    setOpenBD(true);
    setOpen((prevOpen) => !prevOpen);
    await axios.post(BASE_URL + '/account/logout/', {revoke_token: true},{headers} )
    .then(res => {
      localStorage.clear();
      setOpenBD(false);

      console.log(res);
      console.log('logout succesfully');
        history.push('/')
      
    })
    .catch(err => {
      console.log(err);
      setOpenBD(false);

      console.log('logout failed!');
    })
  };
  
  
  
  if (isLoggedIn) {
    return (
      <Box sx={{ flexGrow: 1 }}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBD}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        <AppBar position="static" sx={{ backgroundColor: "#465832" }}>
          <Toolbar>
          <Grid container justifyContent="flex-start" alignItems="center">

          <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: "#bac7a7"}}
            >
              <HomeIcon fontSize="medium" />
            </IconButton>
            <Link textAlign="left" href="/" underline="none">
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    paddingLeft: "3px",
                    fontWeight: 600,
                    color: "#bac7a7",
                    textAlign: 'left',
                    "&:hover": {color: '#eef5e4'}

                  }}
                >
                  LentoCharity
                </Typography>
              </Link>
              </Grid>
                    <Grid container justifyContent="flex-end">
                    <Button href="/forms" sx={{textTransform: 'unset', color: '#c0d4b3', marginRight: '2.5rem', "&:hover": {color: '#eef5e4'} }} startIcon={<AddCircleIcon />}>
                    <Typography variant="h6" fontWeight="bold" letterSpacing="1"> Add Post</Typography>
      </Button>
      <IconButton 
                ref={anchorRef}
                size="medium"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                
                sx={{ color: "#c0d4b3","&:hover": {color: '#eef5e4'} }}
              >
                <AccountCircle fontSize="large" />
              </IconButton>

                    </Grid>

              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper
                      sx={{
                        borderRadius: 2,
                        marginTop: "10px",
                        border: 1,
                        borderColor: "#e6835a",
                      }}
                      variant="outlined"
                    >
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown} >

                          <MenuItem onClick={handleProfileClick} >
                            <ListItemIcon>
                              <AccountCircle fontSize="small" />
                            </ListItemIcon>
                            Profile
                          </MenuItem>
                          <MenuItem onClick={handleSettingClick}>
                            <ListItemIcon>
                              <SettingsIcon fontSize="small" />
                            </ListItemIcon>
                            Setting
                          </MenuItem> 
                         <Divider /> 
                         <MenuItem onClick={handleLogOutClick}>
                            <ListItemIcon>
                              <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                          </MenuItem> 

                       
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
          </Toolbar>
        </AppBar>
      </Box>
    );
  } else {
    return (
      <Box sx={{ flexGrow: 1 }}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBD}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        <AppBar position="static" sx={{ backgroundColor: "#465832" }}>
          <Toolbar>
<IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: "#bac7a7"}}
            >
              <HomeIcon fontSize="medium" />
            </IconButton>
            <Link textAlign="left" href="/" underline="none">
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    paddingLeft: "3px",
                    fontWeight: 600,
                    color: "#bac7a7",
                    textAlign: 'left',
                    "&:hover": {color: '#eef5e4'}

                  }}
                >
                  LentoCharity
                </Typography>
              </Link>

              <Button
                  href="/signin"
                  
                sx={{
                  backgroundColor: "#c0d4b3",
                  color: "black",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  marginLeft: "77%", marginRight: "1%", 
                  "&:hover": {backgroundColor: '#eef5e4'}
                  
                }}
              >
                Sign in
              </Button>
              <Button                  
               href="/signup"
            sx={{ backgroundColor: "#c0d4b3", color: "black", "&:hover": {backgroundColor: '#eef5e4'}}}>
                Sign up
              </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}


export default Navbar;
