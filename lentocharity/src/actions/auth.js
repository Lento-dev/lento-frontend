import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_MESSAGE,
  } from "./actionTypes";
  import axios from "axios";
  
  const API_URL = 'http://127.0.0.1:8000/api/';
  
  export const register = (firstname, lastname, email,username, password, confirmpassword, history, loading, setLoading) => (dispatch) => {
    var fd = new FormData();
    fd.append("firstname",firstname);
    fd.append("lastname",lastname);
    fd.append("username",username);
    fd.append("email",email);
    fd.append("password",password);
    fd.append("password2",confirmpassword);

    return axios.post(API_URL + "account/register/", fd)
    // { firstname, lastname, email,username, password, confirmpassword }
      .then((response) => {
        console.log("***",response.data);
        setLoading(false);
        // dispatch({
        //   type: REGISTER_SUCCESS,
        // });
  
        // dispatch({
        //   type: SET_MESSAGE,
        //   payload: "You have signed up successfully!",
        // });

        setLoading(false);
        history.push("/Verificate");
        console.log(response);
        return Promise.resolve();
      }).catch((error) => {
        dispatch({
          type: REGISTER_FAIL,
        });
  
        if (error.response.status == 400) {
          dispatch({
            type: SET_MESSAGE,
            payload: "This email already exists!",
          })
          setLoading(false);
        }

        console.log(error.response.data);
        console.log(error);
  
        return Promise.reject();
      });
  };
  
  export const login = (email, password, history, loading, setLoading) => (dispatch) => {
    var fd = new FormData();
    fd.append("email",email);
    fd.append("password",password);
    return axios.post(API_URL + "account/login/", fd)
    // { email, password }
      .then(
        (response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("userType", JSON.stringify("user"));
          localStorage.setItem("token", response.data.token);
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: response.data},
          });
          setLoading(false);
          history.push("/");
          console.log('Loading after redirect:', loading);
          return Promise.resolve();
        }).catch((error) => {
  
          dispatch({
            type: LOGIN_FAIL,
          });
  
          if (error.response.status == 401) {
            setLoading(false);
  
            dispatch({
              type: SET_MESSAGE,
              payload: "Email or password is incorrect!",
            })
            console.log('Loading after code 401:', loading);
  
          }
  
          if (error.response.status == 400) {
            setLoading(false);
  
            dispatch({
              type: SET_MESSAGE,
              payload: "This email doesn't exist!",
            })
            console.log('Loading after code 400:', loading);
  
          }
  
  
          return Promise.reject();
        }
        );
  
  };
  
