import axios from "axios";

const BASE_URL = "https://hiring.getbasis.co/candidate/";
const API = {
  getPhone: function (params) {
    console.log(params);
    return axios.post(BASE_URL + "users/phone", params);
  },
  varifyPhone: function (params) {
    return axios.post(BASE_URL + "phone/verify", params);
  },

  getEmail: function (params) {
    return axios.post(BASE_URL + "users/email", params);
  },
  varifyEmail: function (params) {
    return axios.post(BASE_URL + "email/verify", params);
  },
  userInfo: function (params) {
    return axios.post(BASE_URL + "users", params);
  },
  resendOtp: function (params) {
    return axios.put(BASE_URL + "users/otp/resend", params);
  },
  resendToken: function (params) {
    return axios.put(BASE_URL + "token/resendtoken", params);
  },

  referralCode: function (referral, params) {
    return axios.put(BASE_URL + "users/referral/" + referral, params, {
      auth: {
        type: "noauth",
      },
    });
  },

  logIn: function (USER_ID, AUTH_TOKEN) {
    return axios.put(BASE_URL + "users/" + USER_ID, {
      auth: {
        type: "bearer",
        bearer: [
          {
            key: "token",
            value: USER_ID + "," + AUTH_TOKEN,
            type: "string",
          },
        ],
      },
    });
  },
  logOut: function (USER_ID, AUTH_TOKEN) {
    return axios.delete(BASE_URL + "logout/" + USER_ID, {
      //   headers: {
      //     Authorization: USER_ID,
      //     AUTH_TOKEN,
      //   },
      auth: {
        type: "bearer",
        bearer: [
          {
            key: "token",
            value: USER_ID + "," + AUTH_TOKEN,
            type: "string",
          },
        ],
      },
    });
  },
};

export default API;
