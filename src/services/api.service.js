import axios from "axios";

import { authHeader } from "./_helper";

const rootURL = "http://localhost:3000/api/v1/";

const authURL = rootURL + "auth";
const accountURL = rootURL + "account";
const doctorDetailsURL = rootURL + "doctor-details";
const staffDetailsURL = rootURL + "staff-details";
const laboratoryURL = rootURL + "laboratory";
const settingURL = rootURL + "settings";
const settingBillingURL = rootURL + "setting-billing";
const specializationURL = rootURL + "specialization";
const staffScheduleURL =rootURL +'staff-schedule'
const doctorScheduleURL=rootURL + 'doctor-schedule'
const organizationURL=rootURL + 'organization'
const labtestUrl = rootURL + 'lab-tests'

/***** Login *****/
function verifyId(loginId, password) {
  return axios.post(authURL + "/doctor/login", { loginId, password });
}
function verifyOtp(loginId, otp) {
  return axios.post(authURL + "/verify", { loginId, otp });
}

function getSpecialization(limit, offset, keyword, status){
  console.log({limit, offset, keyword, status});
  return axios.get(
    specializationURL +
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

function getOrganization(limit, offset, keyword, status){
  console.log({limit, offset, keyword, status});
  return axios.get(
    organizationURL +
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
function updateAvailability(id,StaffSchedule){
  return axios.patch(staffScheduleURL + '/' + id,StaffSchedule,{ headers: authHeader() })
}
function getPermission(id) {
  return axios.get(staffDetailsURL + "/" + id, { headers: authHeader() });
}
function updateStaff(name,designation,emailId,gender,dob,id){
  console.log({name,designation,emailId,gender,dob,id});
  return axios.patch(staffDetailsURL + "/profile/" + id,{name,designation,emailId,gender,dob} ,{ headers: authHeader() });
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
function addDoctor(mobile,name,emailId,gender,dob,roles,password,city,state,reg_number,reg_year,reg_type, experience, address, about, altMobile, altEmail,type){
  if(type==="DOCTOR"){
    return axios.post(doctorDetailsURL + '/doctor' , { mobile,name,emailId,gender,dob,roles,password,city,state,reg_number,reg_year,reg_type, experience, address, about, altMobile, altEmail }, { headers: authHeader() })
  }else if(type==="PATHOLOGIEST"){
    return axios.post(doctorDetailsURL + '/pathologist' , { mobile,name,emailId,gender,dob,roles,password,city,state,reg_number,reg_year,reg_type, experience, address, about, altMobile, altEmail }, { headers: authHeader() })
  }
}
function updateSchedule(schedule, id) {
  console.log({schedule, id});
  return axios.put(doctorScheduleURL + "/" + id, schedule, {
    headers: authHeader(),
  });
}
function updateDoctorProfile(name, emailId, altEmail, mobile, altMobile, gender, dob, city, state, pincode, reg_number, reg_type, reg_year, experience, about, address, id) {
  return axios.patch(doctorDetailsURL + '/' + id, { name, emailId, altEmail, mobile, altMobile, gender, dob, city, state, pincode, reg_number, reg_type, reg_year, experience, about, address }, { headers: authHeader() })
}

function signatureUpload(file){
  return axios.patch(doctorDetailsURL + "/signature-image",{file}, { headers: authHeader('FormData') });
}
function profileUpload(file){
  return axios.patch(doctorDetailsURL + "/profile-image",{file}, { headers: authHeader('FormData') });
}
function addExpertise(expertise,doctorDetailId){
  return axios.post(rootURL + 'doctor-expertise',{expertise,doctorDetailId},{ headers: authHeader() })
}
function addSpeciality(specializationId,doctorDetailId){
  return axios.post(rootURL + 'doctor-specialization',{specializationId,doctorDetailId},{ headers: authHeader() })
}
function addQualification(doctorDetailId,qualification,college,city,passingYear){
  console.log({doctorDetailId,qualification,college,city,passingYear});
  return axios.post(rootURL + 'doctor-education',{doctorDetailId,qualification,college,city,passingYear},{ headers: authHeader() })
}
function deleteSpeciality(id){
  return axios.delete(rootURL + 'doctor-specialization/' + id,{headers: authHeader() })
}
function deleteQualification(id){
  return axios.delete(rootURL + 'doctor-education/' + id,{headers: authHeader() })
}
// Lab 
function addLaboratory(name, emailId, phone, address, state, city, pincode) {
  console.log({ name, emailId, phone, address, state, city, pincode });
  return axios.post(
    laboratoryURL,
    { name, emailId, phone, address, state, city, pincode },
    { headers: authHeader() }
  );
}
function updateLaboratory(id, name, emailId, phone, address, state, city, pincode) {
  console.log({ id, name, emailId, phone, address, state, city, pincode });
  return axios.patch(
    laboratoryURL + '/' + id,
    { name, emailId, phone, address, state, city, pincode },
    { headers: authHeader() }
  );
}
function updateStatus(id, status) {
  return axios.put(
    laboratoryURL + '/' + id,
    { status },
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

function getSettings() {
  return axios.get(settingURL + "/default", { headers: authHeader() });
}
function changeTaxStatus(status, id, gstListId) {
  console.log({ id, status, gstListId });
  return axios.patch(settingBillingURL + "/tax/" + id, { status, gstListId }, { headers: authHeader() });
}
function changePayModeStatus(status, id, payModeId) {
  console.log({ status, id, payModeId });
  return axios.patch(settingBillingURL + "/payMode/" + id, { status, payModeId }, { headers: authHeader() });
}
function addExpense(expense) {
  return axios.post(settingBillingURL + "/expense", { expense }, { headers: authHeader() });
}
function deleteExpense(id) {
  return axios.delete(settingBillingURL + "/expense/" + id, { headers: authHeader() });
}
function changeChargeStatus(status, id, chargeId, amount) {
  console.log({ status, id, chargeId, amount });
  return axios.patch(settingBillingURL + "/charge/" + id, { status, chargeId, amount }, { headers: authHeader() });
}

function getLabtest(limit, offset, keyword){
  return axios.get(
    labtestUrl +
    "?limit=" +
    limit +
    "&offset=" +
    offset +
    "&keyword=" +
    keyword ,
    { headers: authHeader() }
  );
}
export const apiServices = {
  verifyId,
  verifyOtp,
  getStaff,
  getOneStaff,
  addStaff,
  updateStaff,
  getPermission,
  savePermission,
  getDoctor,
  getDoctorProfile,
  addDoctor,
  updateDoctorProfile,
  updateAvailability,
  updateSchedule,
  signatureUpload,
  profileUpload,

  addExpertise,
  addSpeciality,
  deleteSpeciality,
  addQualification,
  deleteQualification,

  // Lab 
  addLaboratory,
  getLaboratory,
  updateLaboratory,
  updateStatus,

  getSettings,
  changeTaxStatus,
  changePayModeStatus,
  addExpense,
  changeChargeStatus,
  deleteExpense,

  getSpecialization,
  getOrganization,

  getLabtest,
};
