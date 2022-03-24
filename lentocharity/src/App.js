import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import UserProfile from "./componants/profile";

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
    // <ThemeProvider theme={theme}>
      // {/* <Provider > */}
      // {/* store={store} */}
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/profile" component = { UserProfile }/>
            </Switch>
          </BrowserRouter>
        </div>
    //   {/* </Provider> */}
    // {/* </ThemeProvider> */}
  );
}

export default App;