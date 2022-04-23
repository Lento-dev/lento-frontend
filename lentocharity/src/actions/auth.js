

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GOOGLELOGIN_SUCCESS,
  GOOGLELOGIN_FAIL,
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

const drfClientId = process.env.REACT_APP_DRF_CLIENT_ID;
const drfClientSecret = process.env.REACT_APP_DRF_CLIENT_SECRET;

const API_URL = "http://127.0.0.1:8000/api/";
const BASE_URL = "http://127.0.0.1:8000";

export const register = (firstname,lastname,email,username,password,confirmpassword) => (dispatch) => {
  var formData = new FormData();
  formData.append("first_name", firstname);
  formData.append("last_name", lastname);
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("password_confirm", confirmpassword);

  return axios.post(API_URL + "account/register/", formData)
      .then((response) => {
        console.log("signed up succesfully")
        dispatch({
          type: REGISTER_SUCCESS,
        });

        console.log(response);
        return Promise.resolve();
      })

      .catch((error) => {
        console.log("error occured in signup");
        dispatch({
          type: REGISTER_FAIL,
        });
  
        if (error.response.status == 400) {
          let message = "";
          for (var key in error.response.data){
            message += error.response.data[key] + ' ';
          }
          console.log(message);

          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });
        }
        return Promise.reject();
      });
};

export const login = (email, password) => (dispatch) => {
  var formData = new FormData();
  formData.append("login", email);
  formData.append("password", password);

  return axios.post(API_URL + "account/login/", formData)

      .then(
        (response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("userType", JSON.stringify("user"));
          localStorage.setItem("token", response.data.token);
          console.log('user', response.data)
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: response.data},
          });
          console.log('login was succesfull');
          return Promise.resolve();
        })
        .catch((error) => {

          dispatch({
            type: LOGIN_FAIL,
          });
  
          if (error.response.status == 401) {
  
            dispatch({
              type: SET_MESSAGE,
              payload: "Email or password is incorrect!",
            })
  
          }
  
          if (error.response.status == 400) {
  
            dispatch({
              type: SET_MESSAGE,
              payload: "Email or password is invalid!",
            })  
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


export const verifyemail = (user_id, timestamp, signature) => (dispatch) => {
  var formData = new FormData();
  formData.append("user_id", user_id);
  formData.append("timestamp", timestamp);
  formData.append("signature", signature);

  return axios.post(API_URL + 'account/verify_registration'+ '/' , formData)
    .then(
      (response) => {
        console.log('response', response)
        console.log('response.data', response.data)

        dispatch({
          type: VERIFY_SUCCESS,
          // payload: { user: response.data },
        });
        dispatch({
          type: SET_MESSAGE,
          payload: "Your Account has been verified successfully.",
        })
        return Promise.resolve();
      }).catch((error) => {

        dispatch({
          type: VERIFY_FAIL,
        });
            dispatch({
              type: SET_MESSAGE,
              payload: "Validation link is invalid.",
            })
        return Promise.reject();
      }
      );
};

export const googleLogin = (response, history, setLoading) => (dispatch) => {
  return axios
  .post(`${BASE_URL}/social-auth/convert-token/`, {
    token: response.accessToken,
    backend: "google-oauth2",
    grant_type: "convert_token",
    client_id: drfClientId,
    client_secret: drfClientSecret,
  })
  .then((res) => {
    const { access_token, refresh_token } = res.data;
    console.log({ access_token, refresh_token });
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    localStorage.setItem("token-type", "bearer");
    dispatch({
      type: GOOGLELOGIN_SUCCESS,
      payload: { user: res.data},
    });
    setLoading(false);
    history.push("/");
    console.log('google login succesfully');
    return Promise.resolve();

  })
  .catch((error) => {
    console.log(drfClientId)
    dispatch({
      type: GOOGLELOGIN_FAIL,
    });
    if (error.response.status == 500) {
        dispatch({
          type: SET_MESSAGE,
          payload: "Continue with your lento account.",
        })
    }

    console.log("Error Google login", error);
    return Promise.reject();

  });
};

export const forgotpassword = (email) => (dispatch) => {
  return axios.post(API_URL + 'account/send_reset_password_link/', { "login": email })
    .then(
      (response) => {
        dispatch({
          type: FORGOTPASS_SUCCESS,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: "Reset password link has been sent to your email address.",
        });

        return Promise.resolve();
      }).catch((error) => {

        dispatch({
          type: FORGOTPASS_FAIL,
        });

        if (error.response.status == 400) {
          dispatch({
            type: SET_MESSAGE,
            payload: "This email has not been registered.",
          })
        }
        return Promise.reject();
      }
      );

};


export const resetpassword = (password, user_id, timestamp, signature) => (dispatch) => {
  var formData = new FormData();
  formData.append("user_id", user_id);
  formData.append("timestamp", timestamp);
  formData.append("signature", signature);
  formData.append("password", password);

  return axios.post(API_URL + 'account/reset_password/', formData)
    .then(
      (response) => {
        dispatch({
          type: RESETPASS_SUCCESS,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: "Password has changed successfully.",
        });

        return Promise.resolve();
      }).catch((error) => {

        dispatch({
          type: RESETPASS_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: "Unknown error.",
        });
        return Promise.reject();
      }
      );

};

