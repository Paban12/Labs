import axios from "axios";

import { authHeader } from "./_helper";

const rootURL = "http://localhost:3000/api/v1/";

const authURL = rootURL + "auth";
const accountURL = rootURL + "account";
const doctorDetailsURL = rootURL + "doctor-details";
const laboratoryURL = rootURL + "laboratory"; 
const settingURL = rootURL + "settings";
const settingBillingURL = rootURL + "setting-billing";

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
function getDoctor(limit, offset, keyword, status, role) {
  return axios.get(
    accountURL +
    "/doctors?limit=" +
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

function getDoctorProfile(id) {
  return axios.get(doctorDetailsURL + "/profile/" + id, { headers: authHeader() });
}
function updateDoctorProfile(name, emailId, altEmail, mobile, altMobile, gender, dob, city, state, pincode, reg_number,reg_type,reg_year,experience,about, address, id) {
  console.log({ name, emailId, altEmail, mobile, altMobile, gender, dob, city, state, pincode, reg_number,reg_type,reg_year,experience,about, address, id });
  return axios.patch(doctorDetailsURL + '/' + id, { name, emailId, altEmail, mobile, altMobile, gender, dob, city, state, pincode, reg_number,reg_type,reg_year,experience,about, address }, { headers: authHeader() })
}

// Lab 
function addLaboratory(name, emailId, phone, address, state, city,pincode) {
  console.log({name, emailId, phone, address, state, city,pincode});
  return axios.post(
    laboratoryURL,
    {name, emailId, phone, address, state, city,pincode},
    { headers: authHeader() }
  );
}
function updateLaboratory(id,name, emailId, phone, address, state, city,pincode) {
  console.log({id,name, emailId, phone, address, state, city,pincode});
  return axios.patch(
    laboratoryURL + '/'+id,
    {name, emailId, phone, address, state, city,pincode},
    { headers: authHeader() }
  );
}
function getLaboratory(limit, offset, keyword, status) {
  return axios.get(
    laboratoryURL +
    "/all?limit=" +
    limit +
    "&offset=" +
    offset +
    "&keyword=" +
    keyword +
    "&status=" +
    status,
    { headers: authHeader() }
  );
}

function getSettings(){
  return axios.get(settingURL + "/default", { headers: authHeader() });
}
function changeTaxStatus(status,id,gstListId){
  console.log({id,status,gstListId});
  return axios.patch(settingBillingURL + "/tax/" + id,{status,gstListId}, { headers: authHeader() });
}
function changePayModeStatus(status,id,payModeId){
  console.log({status,id,payModeId});
  return axios.patch(settingBillingURL + "/payMode/" + id,{status,payModeId}, { headers: authHeader() });
}
function addExpense(expense){
  return axios.post(settingBillingURL + "/expense",{expense}, { headers: authHeader() });
}
function deleteExpense(id){
  return axios.delete(settingBillingURL + "/expense/" + id, { headers: authHeader() });
}
function changeChargeStatus(status,id,chargeId,amount){
  console.log({status,id,chargeId,amount});
  return axios.patch(settingBillingURL + "/charge/" + id,{status,chargeId,amount}, { headers: authHeader() });
}
export const apiServices = {
  verifyId,
  verifyOtp,
  getStaff,
  getOneStaff,
  addStaff,
  getPermission,
  savePermission,
  getDoctor,
  getDoctorProfile,
  updateDoctorProfile,

  // Lab 
  addLaboratory,
  getLaboratory,
  updateLaboratory,

  getSettings,
  changeTaxStatus,
  changePayModeStatus,
  addExpense,
  changeChargeStatus,
  deleteExpense,
};
