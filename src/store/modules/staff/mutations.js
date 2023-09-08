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
export const ALL_STAFF = (state, data) => {
  state.staffData = data.result
  state.totalStaff = data.total
  state.name = data.result[0]?.staffDetail?.name
  state.emailId = data.result[0]?.staffDetail?.emailId
  state.mobile = data.result[0]?.phoneNumber
  state.roles = { id: data.result[0]?.roles, name: data.result[0]?.roles }
  state.gender = { id: data.result[0]?.staffDetail?.gender, name: data.result[0]?.staffDetail?.gender }
  state.gender2 = data.result[0]?.staffDetail?.gender
  state.roles2 = data.result[0]?.roles
  state.staffId = data.result[0]?.id
};
export const STAFF_DETAILS = (state, data) => {
  state.name = data.staffDetail?.name
  state.emailId = data.staffDetail?.emailId
  state.mobile = data.phoneNumber
  state.roles = { id: data.roles, name: data.roles }
  state.gender = { id: data.staffDetail?.gender, name: data.staffDetail?.gender }
  state.gender2 = data.staffDetail?.gender
  state.roles2 = data.roles
  state.staffId = data.id
};
export const ADD_STAFF = (state, data) => {
  const payload = {
    phoneNumber: data.mobile,
    roles: data.roles,
    id: data.response.id,
    staffDetail: {
      name: data.name,
      emailId: data.emailId
    }
  }
  state.staffData.push(payload)
};

export const SET_AVAILABILITY = (state, data) => {
  const dayData = [
    {
      name: 'Monday',
      periodStatus: false,
      staffDetailId: null,
      time_end: null,
      time_start: null,
    },
    {
      name: 'Tuesday',
      periodStatus: false,
      staffDetailId: null,
      time_end: null,
      time_start: null,
    },
    {
      name: 'Wednesday',
      periodStatus: false,
      staffDetailId: null,
      time_end: null,
      time_start: null,
    },
    {
      name: 'Thursday',
      periodStatus: false,
      staffDetailId: null,
      time_end: null,
      time_start: null,
    },
    {
      name: 'Friday',
      periodStatus: false,
      staffDetailId: null,
      time_end: null,
      time_start: null,
    },
    {
      name: 'Saturday',
      periodStatus: false,
      staffDetailId: null,
      time_end: null,
      time_start: null,
    },
    {
      name: 'Sunday',
      periodStatus: false,
      staffDetailId: null,
      time_end: null,
      time_start: null,
    },
  ]
  if(data.staffSchedule.length>0){
    state.Availability=data.staffSchedule
  }else{
    state.Availability=dayData
  }
}