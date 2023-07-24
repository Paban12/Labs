export const SET_LOAD_MORE = (state, status) => {
  state.loadMore = status;
};
export const SET_LOADER_BUTTON = (state, status) => {
  state.loaderButton = status;
};
export const SET_DATA_LOADER = (state, status) => {
  state.dataLoader = status;
};
export const SET_PROFILE = (state, data) => {
  state.accountId=data.accountId
  state.account=data.account
  state.city={id:null,name:data.city}
  state.country={id:'India',name:'India'}
  state.createdAt=data.createdAt
  state.dob=data.dob
  state.emailId=data.account?.emailId
  state.firstName=data.firstName
  state.gender={id:data.gender,name:data.gender}
  state.id=data.id
  state.lastName=data.lastName
  state.phoneNumber=data.phoneNumber
  state.pincode=data.pincode
  state.address=data.address
  state.profile=data.profile
  state.bussinessName=data.bussinessName
  state.bussinessAddress=data.bussinessAddress
  state.gstNumber=data.gstNumber
  if(data.bussinessName){
    state.isChecked=true
  }else{
    state.isChecked=false
  }
  state.profileName=data.profileName
  state.state= {id:null,name:data.state}
  state.updatedAt=data.updatedAt
};
export const UDATE_IMAGE_PROPOSAL = (state, data) => {
  state.accountId=data.accountId
  state.account=data.account
  state.city={id:null,name:data.city}
  state.country={id:'India',name:'India'}
  state.createdAt=data.createdAt
  state.dob=data.dob
  state.emailId=data.emailId
  state.firstName=data.firstName
  state.gender={id:data.gender,name:data.gender}
  state.id=data.id
  state.lastName=data.lastName
  state.phoneNumber=data.phoneNumber
  state.pincode=data.pincode
  state.profile=data.profile
  state.bussinessName=data.bussinessName
  state.bussinessAddress=data.bussinessAddress
  state.gstNumber=data.gstNumber
  state.profileName=data.profileName
  state.state= {id:null,name:data.state}
  state.updatedAt=data.updatedAt
};