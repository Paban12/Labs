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
export const SET_SETTING_DATA = (state, data) => {
  state.admin_domain=data.admin_domain
  state.billingCharge=data.billingCharge
  state.billingExpenseType=data.billingExpenseType
  state.billingPayMode=data.billingPayMode
  state.billingTax=data.billingTax
  state.createdAt=data.createdAt
  state.id=data.id
  state.slider=data.slider
  state.status=data.status
  state.title=data.title
  state.updatedAt=data.updatedAt
  state.user_domain=data.user_domain
};
export const DELETE_EXPENSE = (state, data) => {
  const objIndex = state.billingExpenseType.findIndex((obj) => obj.id === data);
  if(objIndex>=0){
    state.billingExpenseType.splice(objIndex,1)
  }
};

export const DOCTOR_PROFILE = (state, data) => {
  state.accountId = data.accountId
  state.account = data.account
  state.address = data.address
  state.altEmail = data.altEmail
  state.altMobile = data.altMobile
  state.city = data.city
  state.createdAt = data.createdAt
  state.doctorExperience = data.doctorExperience
  state.doctorExpertise = data.doctorExpertise
  state.doctorHospital = data.doctorHospital
  state.doctorSchedule = data.doctorSchedule
  state.doctorSpecialization = data.doctorSpecialization
  state.emailId = data.emailId
  state.dob = data.dob
  state.gender = { id: data.gender, name: data.gender }
  state.id = data.id
  state.mobile = data.mobile
  state.name = data.name
  state.pincode = data.pincode
  state.profile = data.profile
  state.profileName = data.profileName
  state.proof = data.proof
  state.proofName = data.proofName
  state.reg_number = data.reg_number
  state.signature = data.signature
  state.signatureName = data.signatureName
  state.state = data.state
  state.status = data.status

};
export const SET_LAB_LIST = (state, data) => {
  const payload = {
    address: data.address,
    city: data.city,
    createdAt: data.response.createdAt,
    emailId: data.emailId,
    id: data.response.id,
    name: data.name,
    phone: data.phone,
    pincode: data.pincode,
    state: data.state,
    status: data.response.status,
  }
  state.laboratoryData.push(payload)
  state.addModal = false
  state.totalLaboratory = state.totalLaboratory + 1
};

export const UPDATE_LAB = (state, data) => {
  const objIndex = state.laboratoryData.findIndex((obj) => obj.id === data.id);
  if(objIndex>=0){
    state.laboratoryData[objIndex].address=data.address
    state.laboratoryData[objIndex].city=data.city
    state.laboratoryData[objIndex].createdAt=data.createdAt
    state.laboratoryData[objIndex].emailId=data.emailId
    state.laboratoryData[objIndex].id=data.id
    state.laboratoryData[objIndex].name=data.name
    state.laboratoryData[objIndex].phone=data.phone
    state.laboratoryData[objIndex].pincode=data.pincode
    state.laboratoryData[objIndex].state=data.state
    state.laboratoryData[objIndex].status=data.status
    state.laboratoryData[objIndex].updatedAt=data.updatedAt
    state.addModal = false
  }
};