import { apiServices } from '../../../services/api.service';
import { successHandler, errorHandler } from '../../../services/_helper';
import router from '../../../router';

export const getStaff = async ({ commit, dispatch },{limit,offset,keyword,status,role}) => {
	commit("SET_LOADER", true, { root: true });
	// commit("SET_LOADER_BUTTON", true);
	await apiServices.getStaff(limit,offset,keyword,status,role).then(
		(response) => {
			console.log(response.data);
			commit('ALL_STAFF',response.data)
			commit("SET_LOADER", false, { root: true })
		},
		(error) => {
			commit("SET_LOADER", false, { root: true })
			errorHandler(error.response)
		}
	);
};
export const getOneStaff = async ({ commit, dispatch }, { id }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.getOneStaff(id).then(
		(response) => {
			console.log(response.data);
			commit("STAFF_DETAILS",response.data)
			commit("SET_LOADER", false, { root: true });
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};
export const addStaff = async ({ commit }, { loginId,name,emailId,gender,dob,roles,password }) => {
	commit("SET_LOADER_BUTTON", true);
	await apiServices.addStaff(loginId,name,emailId,gender,dob,roles,password).then(
		(response) => {
			console.log(response.data);
			commit('ADD_STAFF',{response:response.data,loginId,name,emailId,gender,dob,roles,})
			commit("SET_LOADER_BUTTON", false);
		},
		(error) => {
			commit("SET_LOADER_BUTTON", false);
			errorHandler(error.response)
		}
	);
};
export const UserProfile = async ({ commit }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.UserProfile().then(
		async (response) => {
			commit("SET_PROFILE", response.data);
			commit("SET_LOADER", false, { root: true });
		},
		(error) => {
			errorHandler(error.response, 'User');
			commit("SET_LOADER", false, { root: true });
		}
	);
};
export const updateUserProfile = async ({ commit }, {
	firstName,
	lastName,
	phoneNumber,
	pincode,
	city,
	state,
	country,
	address,
	emailId,
	gender,
	dob,
	id
}) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.updateUserProfile(
		firstName,
		lastName,
		phoneNumber,
		pincode,
		city,
		state,
		country,
		address,
		emailId,
		gender,
		dob,
		id
	).then(
		async (response) => {
			commit("SET_LOADER", false, { root: true });
			successHandler("Profile Updated Successfully!");
		},
		(error) => {
			errorHandler(error.response);
			commit("SET_LOADER", false, { root: true });
		}
	);
};

export const uploadProfileImage = async ({ commit }, { file }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.uploadProfileImage(file).then(
		async (response) => {
			commit('UDATE_IMAGE_PROPOSAL', response.data)
			successHandler("Image uploaded successfully!");
			commit("SET_LOADER", false, { root: true });
		},
		(error) => {
			errorHandler(error.response, 'User');
			commit("SET_LOADER", false, { root: true });
		}
	);
};

export const getPermission = async ({ commit, dispatch },{id}) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.getPermission(id).then(
	  (response) => { 
		console.log(response.data);
		commit("SET_LOADER", false, { root: true });
		commit("SET_PERMISSION", response.data.perms);
	  },
	  (error) => {
		commit("SET_LOADER", false, { root: true });
		commit("SET_PERMISSION", []);
		errorHandler(error.response);
	  }
	);
  };
  export const savePermission = async (
	{ commit },
	{ id,menu }
  ) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.savePermission(id,menu).then(
	  (response) => {
		commit("SET_LOADER", false, { root: true });
		successHandler("Update successfully");
	  },
	  (error) => {
		commit("SET_LOADER", false, { root: true });
		errorHandler(error.response);
	  }
	);
  };

  export const getAvailability = async ({ commit, dispatch },{id}) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.getPermission(id).then(
	  (response) => { 
		console.log(response.data);
		commit("SET_LOADER", false, { root: true });
		commit("SET_AVAILABILITY", response.data.user);
	  },
	  (error) => {
		commit("SET_LOADER", false, { root: true });
		commit("SET_PERMISSION", []);
		errorHandler(error.response);
	  }
	);
  };
  export const updateAvailability = async ({ commit, dispatch },{id,StaffSchedule}) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.updateAvailability(id,StaffSchedule).then(
	  (response) => { 
		console.log(response.data);
		commit("SET_LOADER", false, { root: true });
		successHandler('Update Successfully')
	  },
	  (error) => {
		commit("SET_LOADER", false, { root: true });
		commit("SET_PERMISSION", []);
		errorHandler(error.response);
	  }
	);
  };