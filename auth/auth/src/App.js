import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import ForgotPassword from "./components/forgotpassword";
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store";

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
            <Routes>
              <Route exact path="/signup" element={<SignUp/>} />
              <Route exact path="/signin" element={<SignIn/>} />
              <Route exact path="/forgot-password" element={<ForgotPassword/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
