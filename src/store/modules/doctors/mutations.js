import moment from 'moment'

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
export const SET_SPECIALIZATION = (state, data) => {
  for (let index = 0; index < data.result.length; index++) {
    const id = data.result[index].id;
    const name = data.result[index].name;
    state.specializationData.push({ id, name })

  }
  state.totalSpecialization = data.total
};
export const SET_ORGANIZATION = (state, data) => {
  state.organizationData=data.result
  state.totalSpecialization = data.total
};
export const ALL_DOCTOR = (state, data) => {
  state.doctorData = data.result
  state.totalDoctor = data.total
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
  state.doctorEducation=data.doctorEducation
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
  state.reg_type = { id: data.reg_type, name: data.reg_type }
  state.reg_year = data.reg_year
  state.about = data.about
  state.experience = data.experience

};
export const ADD_SPECIALITY = (state, data) => {
  const pushData = {
    id: data.id,
    specializationId: data.data.id,
    specialization: {
      name: data.data.name
    }
  }
  state.doctorSpecialization.push(pushData)
}

export const ADD_QUALIFICATION = (state, data) => {
  const pushData = {
    city: data.city,
    college: data.college,
    createdAt: data.createdAt,
    doctorDetailId: data.doctorDetailId,
    id: data.id,
    passingYear: data.passingYear,
    proof: data.proof,
    proofName: null,
    qualification: data.qualification,
  }
  state.doctorEducation.push(pushData)
}
export const DELETE_SPECIALITY = (state, data) => {
  const objIndex = state.doctorSpecialization.findIndex((obj) => obj.id === data);
  if (objIndex >= 0) {
    state.doctorSpecialization.splice(objIndex, 1)
  }
}
export const DELETE_QUALIFICATION = (state, data) => {
  const objIndex = state.doctorEducation.findIndex((obj) => obj.id === data);
  if (objIndex >= 0) {
    state.doctorEducation.splice(objIndex, 1)
  }
}
export const ADD_DOCTOR = (state, data) => {
  const payload = {
    phoneNumber: data.mobile,
    roles: data.roles,
    id: data.response.id,
    doctorDetail: {
      name: data.name,
      emailId: data.emailId,
      mobile: data.mobile,
      status: 'PENDING'
    }
  }
  state.doctorData.push(payload)
  state.addDoctorModal = false
  state.totalDoctor = state.totalDoctor + 1
};