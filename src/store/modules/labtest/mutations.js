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
export const ALL_LABTEST = (state, data) => {
  state.labtestData = data.result
  state.totalLabtest = data.total
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
export const ADD_LABTEST = (state, data) => {
  const payload = {
    container:data.container,
    discount:data.discount,
    homeCollection:data.homeCollection,
    id:data.id,
    labCategory:data.labCategory,
    labDepartment:data.labDepartment,
    labReference:data.labReference,
    labSample:data.labSample,
    packageName:data.packageName,
    price:data.price,
    printNote:data.printNote,
    reportWithin:data.reportWithin,
    reportWithinType:data.reportWithinType,
    sampleSize:data.sampleSize,
    sampleSizeType:data.sampleSizeType,
    status:data.status,
    testCode:data.testCode,
    title:data.title,
    titleDisplayStatus:data.titleDisplayStatus,
    type:data.type,
  }
  state.labtestData.push(payload)
  state.addTestModal=false
  state.totalLabtest = state.totalLabtest + 1
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
export const SET_STATUS = (state, data) => {
  const objIndex = state.laboratoryData.findIndex((obj) => obj.id === data);
  if(objIndex>=0){
    state.laboratoryData.splice(objIndex,1)
  }
};
