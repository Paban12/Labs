import axios from "axios";

import { authHeader } from "./_helper";

const rootURL = "http://192.168.29.31:3000/api/v1/";

const authURL = rootURL + "auth";
const accountURL = rootURL + "account";

/***** Login *****/
function verifyId(loginId, password) {
  return axios.post(authURL + "/doctor/login", { loginId, password });
}
function verifyOtp(loginId, otp) {
  return axios.post(authURL + "/verify", { loginId, otp });
}
function getStaff(limit, offset, keyword, status, role) {
  return axios.get(
    accountURL +
    "/my-staff?limit=" +
    limit +
    "&offset=" +
    offset +
    "&keyword=" +
    keyword +
    "&status=" +
    status +
    "&role=" +
    role,
    { headers: authHeader() }
  );
}
function getOneStaff(id) {
  return axios.get(accountURL + "/" + id, { headers: authHeader() });
}
function addStaff(loginId, name, emailId, gender, dob, roles, password) {
  console.log({ loginId, name, emailId, gender, dob, roles, password });
  return axios.post(
    accountURL,
    { loginId, name, emailId, gender, dob, roles, password },
    { headers: authHeader() }
  );
}
function getPermission(id) {
  return axios.get(rootURL + "staff-details/" + id, { headers: authHeader() });
}
function savePermission(id, menu) {
  return axios.put(
    rootURL + "user-permissions/" + id,
    { menu },
    {
      headers: authHeader(),
    }
  );
}

export const apiServices = {
  verifyId,
  verifyOtp,
  getStaff,
  getOneStaff,
  addStaff,
  getPermission,
  savePermission,
};
