import axios from "axios";

import { authHeader } from "./_helper";

const rootURL = "http://192.168.29.137:4223/api/v1/";


const authURL = rootURL + "auth";


/***** Login *****/
function verifyId(loginId, password) {
  return axios.post(authURL + "/user/login", { loginId, password });
}
function verifyOtp(loginId, otp) {
  return axios.post(authURL + "/user/login", { loginId, otp });
}

export const apiServices = {
  verifyId,
  verifyOtp,
};
