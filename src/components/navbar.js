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
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from "react";
import axios from "axios";

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const history = useHistory();
  const BASE_URL = "http://172.17.3.154/api";
  const token = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const headers = {"Authorization": `Token ${token}`};

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') !== null)
  }, isLoggedIn)

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

  const handleDashboardClick = () => {
    setOpen((prevOpen) => !prevOpen);
    history.push("/dashboard");
  };

  const handleLogOutClick = async () => {
    setOpen((prevOpen) => !prevOpen);
    axios.post(BASE_URL + '/account/logout/', {revoke_token: true},{headers} )
    .then(res => {
      localStorage.clear();
      console.log(res);
      console.log('logout succesfully');
      if (isLoggedIn === false){
        history.push('/')
      }
    })
    .catch(err => {
      console.log(err);
      console.log('logout failed!');
    })
  };
  
  
  
  if (isLoggedIn) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: "#8b9b74"}}
            >
              <HomeIcon fontSize="medium" />
            </IconButton>
            <Link textAlign="left" href="/" underline="none" sx={{marginRight: '87%'}}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    paddingLeft: "3px",
                    fontWeight: 600,
                    color: "#8b9b74",
                    textAlign: 'left'
                  }}
                >
                  Home
                </Typography>
              </Link>
              <IconButton
                ref={anchorRef}
                size="medium"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                sx={{ color: "#e6835a" }}
              >
                <AccountCircle fontSize="medium" />
              </IconButton>

              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom"
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
                          onKeyDown={handleListKeyDown}
                        >

                          <MenuItem onClick={handleDashboardClick}>
                            <ListItemIcon>
                              <Dashboard fontSize="small" />
                            </ListItemIcon>
                            Dashboard
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
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: "#8b9b74" }}
            >
              <HomeIcon fontSize="large" />
              <Link href="/" underline="none">
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    paddingLeft: "3px",
                    flexGrow: 1,
                    fontWeight: 600,
                    color: "#8b9b74",
                  }}
                >
                  Home
                </Typography>
              </Link>
            </IconButton>

            <Link
              href="/signin"
              sx={{ marginLeft: "77%", marginRight: "1%" }}
              underline="none"
            >
              <Button
                sx={{
                  backgroundColor: "#c0d4b3",
                  color: "black",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                Sign in
              </Button>
            </Link>
            <Link href="/" underline="none">
              <Button sx={{ backgroundColor: "#c0d4b3", color: "black" }}>
                Sign up
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}


export default Navbar;
