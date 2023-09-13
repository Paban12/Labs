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
export const ALL_FAQ = (state, data) => {
  state.faqData = data.result
  state.totalFaq = data.total
};

export const ADD_FAQ = (state, data) => {
  const payload = {
    id:data.id,
    question:data.question,
    answer:data.answer,
  }
  state.faqData.unshift(payload)
  state.addModal=false
};

export const UPDATE_FAQ = (state, data) => {
  const objIndex = state.faqData.findIndex((obj) => obj.id === data.id);
  if(objIndex>=0){
    state.faqData[objIndex].question=data.question
    state.faqData[objIndex].answer=data.answer
    state.addModal = false
  }
};
export const SET_STATUS = (state, data) => {
  const objIndex = state.laboratoryData.findIndex((obj) => obj.id === data);
  if(objIndex>=0){
    state.laboratoryData.splice(objIndex,1)
  }
};
