export const SET_LOAD_MORE = (state, status) => {
  state.loadMore = status;
};
export const SET_LOADER_BUTTON = (state, status) => {
  state.loaderButton = status;
};
export const SET_DATA_LOADER = (state, status) => {
  state.dataLoader = status;
};
export const SET_PERMISSION = (state, data) => {
  state.permissiondata = data;
};
export const ALL_DOCTOR = (state, data) => {
   state.doctorData=data.result
   state.totalDoctor=data.total
};
export const DOCTOR_PROFILE = (state, data) => {
  state.accountId=data.accountId
  state.account=data.account
  state.address=data.address
  state.altEmail=data.altEmail
  state.altMobile=data.altMobile
  state.city=data.city
  state.createdAt=data.createdAt
  state.doctorExperience=data.doctorExperience
  state.doctorExpertise=data.doctorExpertise
  state.doctorHospital=data.doctorHospital
  state.doctorSchedule=data.doctorSchedule
  state.doctorSpecialization=data.doctorSpecialization
  state.emailId=data.emailId
  state.dob=data.dob
  state.gender={id:data.gender,name:data.gender}
  state.id=data.id
  state.mobile=data.mobile
  state.name=data.name
  state.pincode=data.pincode
  state.profile=data.profile
  state.profileName=data.profileName
  state.proof=data.proof
  state.proofName=data.proofName
  state.reg_number=data.reg_number
  state.signature=data.signature
  state.signatureName=data.signatureName
  state.state=data.state
  state.status=data.status
  
};
export const ADD_DOCTOR = (state, data) => {
  const payload={
    phoneNumber:data.loginId,
    roles:data.roles,
    id:data.response.id,
    doctorDetail:{
      name:data.name,
      emailId:data.emailId,
      mobile:data.loginId,
      status:'PENDING'
    }
  }
  state.doctorData.push(payload)
  state.addDoctorModal=false
  state.totalDoctor=state.totalDoctor + 1
};