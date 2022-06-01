import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ListItemText from "@mui/material/ListItemText";
import { useHistory } from "react-router-dom";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import UserSetting from "./setting";
import Reprofile from "./Reprofile";
import UserInfo from "./editprofile";


const drawerWidth = 240;

const items = [
  {
    href: "/dashboard",
    icon: <ManageAccountsIcon fontSize="medium" />,
    title: "Edit profile",
  },
  {
    href: "/dashboard/setting",
    icon: <SettingsIcon fontSize="medium" />,
    title: "Settings",
  },
  {
    href: "/dashboard/profile",
    icon: <PersonIcon fontSize="medium" />,
    title: "View profile",
  },

];

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  marginTop: "0rem",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    marginTop: "0rem",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function Userdrawer(props) {
  const { onClose } = props;
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleBackToHome = () => {
    history.push('/');
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar style={{ background: "#728a63" }} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" fontWeight="bold" letterSpacing="1px" >
            dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <BrowserRouter>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          onClose={onClose}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {items.map((item) => (
              <ListItem button key={item.title} component={Link} to={item.href}>
                <ListItemIcon sx={{color:"#e6835a"}}>{item.icon}</ListItemIcon>
                <ListItemText fontWeight='bold' primary={item.title} />
              </ListItem>
            ))}
            <ListItem button key="Homepage" component={Link} onClick={handleBackToHome}>
                <ListItemIcon sx={{color:"#e6835a"}}><HomeIcon fontSize="medium"/></ListItemIcon>
                <ListItemText fontWeight='bold' primary="Homepage" />
              </ListItem>
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Switch>
            <Route path="/dashboard/setting" component={UserSetting} />
            <Route path="/dashboard/profile" component={Reprofile} />
            <Route path="/dashboard" component={UserInfo} />
            
          </Switch>
        </Main>
      </BrowserRouter>
    </Box>
  );
}

export default Userdrawer;
