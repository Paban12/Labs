import { apiServices } from '../../../services/api.service';
import { successHandler, errorHandler } from '../../../services/_helper';
import router from '../../../router';

export const getPatient = async ({ commit, state }, { limit, offset, keyword, status, role, cPage }) => {
	console.log({ limit, offset, keyword, status, role, cPage });
	commit("SET_LOADER", true, { root: true });
	// commit("SET_LOADER_BUTTON", true);
	await apiServices.getPatient(limit, offset, keyword, status, role).then(
		(response) => {
			console.log(response.data);
			commit('ALL_DOCTOR', response.data)
			if (state.totalDoctor > offset + limit) {
				state.lowerPage = cPage
				state.upperStatus = true
			} else {
				state.lowerPage = cPage
				state.upperStatus = false
			}
			commit("SET_LOADER", false, { root: true })
		},
		(error) => {
			commit("SET_LOADER", false, { root: true })
			errorHandler(error.response)
		}
	);
};
export const getPatientProfile = async ({ commit, dispatch }, { id }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.getPatientProfile(id).then(
		(response) => {
			console.log(response.data);
			commit("DOCTOR_PROFILE", response.data)
			commit("SET_LOADER", false, { root: true });
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};
export const addPatient = async ({ commit }, { loginId, name, emailId, gender, dob, roles, password }) => {
	commit("SET_LOADER_BUTTON", true);
	await apiServices.addStaff(loginId, name, emailId, gender, dob, roles, password).then(
		(response) => {
			console.log(response.data);
			commit('ADD_DOCTOR', { response: response.data, loginId, name, emailId, gender, dob, roles, })
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
export const updatePatientProfile = async ({ commit }, { name, emailId, altEmail, mobile, altMobile, gender, dob, city, state, pincode, reg_number,reg_type,reg_year,experience,about, address, id
}) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.updatePatientProfile(name, emailId, altEmail, mobile, altMobile, gender, dob, city, state, pincode, reg_number,reg_type,reg_year,experience,about, address, id).then(
		async (response) => {
			console.log(response.data);
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

export const getPermission = async ({ commit, dispatch }, { id }) => {
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
	{ id, menu }
) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.savePermission(id, menu).then(
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