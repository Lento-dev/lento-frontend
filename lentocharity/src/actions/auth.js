

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  VERIFY_SUCCESS,
  VERIFY_FAIL,
  FORGOTPASS_SUCCESS,
  FORGOTPASS_FAIL,
  RESETPASSTOKENCHECK_SUCCESS,
  RESETPASSTOKENCHECK_FAIL,
  RESETPASS_SUCCESS,
  RESETPASS_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./actionTypes";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

export const register = (firstname,lastname,email,username,password,confirmpassword,history,loading,setLoading) => (dispatch) => {
  var formData = new FormData();
  formData.append("firstname", firstname);
  formData.append("lastname", lastname);
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("password2", confirmpassword);

  return axios.post(API_URL + "account/register/", formData)
      .then((response) => {
        console.log("signed up succesfully")
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: "You have signed up successfully!",
        });
        setLoading(false);
        history.push("/Verificate");
        console.log(response);
        return Promise.resolve();
      })

      .catch((error) => {
        console.log("error occured in signup");
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
  var formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  return axios.post(API_URL + "account/login/", formData)

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
          console.log('login was succesfull');
          return Promise.resolve();
        })
        .catch((error) => {

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


export const logout = (accessToken, data, history) => (dispatch) => {
  return axios.post(API_URL + "logout/", data,
    {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    // parmida
    .then((response) => {
      localStorage.removeItem("user");
      dispatch({
        type: LOGOUT,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: "Log out successfully!",
      });

      console.log(response);
      history.push('/');
      return Promise.resolve();
    }).catch((error) => {
      console.log(error.response);
      return Promise.reject();
    });

};


export const verifyemail = (id, token, history) => (dispatch) => {
  return axios.get('http://185.190.39.17:8888/verify-email/' + id + '/' + token + '/', { id, token })
    .then(
      (response) => {
        dispatch({
          type: VERIFY_SUCCESS,
          // payload: { user: response.data },
        });
        dispatch({
          type: SET_MESSAGE,
          payload: "Your Account has successfully been verified.",
        })
        // alert("Your Account has successfully been verified. ");
        history.push("/signin");
        return Promise.resolve();
      }).catch((error) => {

        dispatch({
          type: VERIFY_FAIL,
        });

        if (error.response.status == 400) {
          if (error.response.data.error == "This link has been used before.") {
            dispatch({
              type: SET_MESSAGE,
              payload: "Your account had been verified before.",
            })
            // alert("Your account had been verified before.");
            console.log('we are in catch error tekrari budan')
            history.push('/signin');
          }
          if (error.response.data.error == "Invalid token") {
            dispatch({
              type: SET_MESSAGE,
              payload: "Your link is expired/invalid.",
            });
            alert("Your link is expired/invalid.");
            console.log('we are in catch error expire or invalid budan')
            history.push('/');
          }
        }

        return Promise.reject();
      }
      );
};
