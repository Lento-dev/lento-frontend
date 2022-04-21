import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import UserProfile from "./components/profile";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import ForgotPassword from "./components/forgotpassword";
import store from "./store";
import UserInfo from './components/editprofile';
import ComplexGrid from './components/Gride';
import User_Profile from "./components/User_Profile";
import Foodadvertisment from "./components/foodadvertisment";
import Clothadvertisement from "./components/clothadvertisement"

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
            <Switch>
            <Route exact path="/profile" component = { UserProfile }/>
              <Route exact path="/signup" component = { SignUp }/>
              <Route exact path="/signin" component = { SignIn }/>
              <Route exact path="/forgot-password" component = { ForgotPassword }/>
              <Route exact path="/edit-profile" component = { UserInfo }/>
              <Route exact path="/cg" component = { Foodadvertisment }/>
              <Route exact path="/cloth" component = { Clothadvertisement }/>

            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

