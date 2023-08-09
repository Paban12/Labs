import axios from "axios";

import { authHeader } from "./_helper";

const rootURL = "http://192.168.29.31:3000/api/v1/";


const authURL = rootURL + "auth";


/***** Login *****/
function verifyId(loginId, password) {
  return axios.post(authURL + "/doctor/login", { loginId, password });
}
function verifyOtp(loginId, otp) {
  return axios.post(authURL + "/verify", { loginId, otp });
}

export const apiServices = {
  verifyId,
  verifyOtp,
};
