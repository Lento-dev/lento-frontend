import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import ForgotPassword from "./components/forgotpassword";
import ResetPassword from "./components/resetpassword";
import store from "./store";
import UserInfo from './components/editprofile';
import VerifyUser from './components/verifyuser';
import ComplexGrid from './components/Gride';
import User_Profile from "./components/User_Profile";
import Foodadvertisment from "./components/foodadvertisment";
import Dropdown from "./components/Gride";
import Serviceadvertisement from "./components/Serviceadvertisement"
import Forms from "./components/forms";
// import Foodadvertisment from "./components/foodadvertisment";
import Clothadvertisement from "./components/clothadvertisement"
import UserSetting from './components/setting';
import PersistentDrawerLeft from './components/dashboard';
import Formdis from './components/formsdis';
import Reprofile from './components/Reprofile';
import Navbar from './components/navbar';
import Setting from './components/setting';
import Chat from './components/chat';
import Homepage from "./components/Homepage";
import Ppage from "./components/provincepage"
import UserProfile from './components/user-profile'
import { useState, useEffect } from "react";
import Formstab from "./components/formstab"

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito"].join(","),
  },
  palette: {
    background: {
      default: "#f5f5f5",
    },
  },
});

function App() {

  return (



    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
          <Navbar/>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/setting" component={Setting} /> 
              <Route exact path="/user-profile" component={UserProfile} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
              <Route exact path="/verify-user" component={VerifyUser} />
              <Route exact path="/reset-password" component={ResetPassword} />
              <Route exact path="/edit-profile" component={UserInfo} />
              <Route exact path="/dd" component={Dropdown} />
              <Route exact path="/cg" component={Forms} />
              <Route exact path="/forms" component={Formstab} />
              {/* <Route exact path="/dashbpard/profile" component={Reprofile} /> */}
              {/* <Route exact path="/setting" component={UserSetting} /> */}
              <Route exact path="/dashboard" component={PersistentDrawerLeft} /> 
              {/* <Route exact path="/chat" component={Chat} />  */}
              <Route exact path="/ppage" component={Ppage} />

            
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

