import { apiServices } from '../../../services/api.service';
import { successHandler, errorHandler } from '../../../services/_helper';
import router from '../../../router';

export const getLaboratory = async ({ commit, state }, { limit, offset, keyword, status, cPage }) => {
	console.log({ limit, offset, keyword, status, cPage });
	commit("SET_LOADER", true, { root: true });
	// commit("SET_LOADER_BUTTON", true);
	await apiServices.getLaboratory(limit, offset, keyword, status).then(
		(response) => {
			console.log(response.data);
			commit('ALL_LABORATORY', response.data)
			if (state.totalLaboratory > offset + limit) {
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
export const getDoctorProfile = async ({ commit, dispatch }, { id }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.getDoctorProfile(id).then(
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
export const addLaboratory = async ({ commit }, { name, emailId, phone, address, state, city,pincode }) => {
	commit("SET_LOADER_BUTTON", true);
	await apiServices.addLaboratory(name, emailId, phone, address, state, city,pincode).then(
		(response) => {
			console.log(response.data);
			commit('SET_LAB_LIST',{response:response.data,name, emailId, phone, address, state, city,pincode})
			commit("SET_LOADER_BUTTON", false);
			successHandler('Laboratory Added Successfully')
		},
		(error) => {
			commit("SET_LOADER_BUTTON", false);
			errorHandler(error.response)
		}
	);
};
export const updateLaboratory = async ({ commit }, { id,name, emailId, phone, address, state, city,pincode }) => {
	commit("SET_LOADER_BUTTON", true);
	await apiServices.updateLaboratory(id,name, emailId, phone, address, state, city,pincode).then(
		(response) => {
			console.log(response.data);
			commit('UPDATE_LAB',response.data)
			commit("SET_LOADER_BUTTON", false);
			successHandler('Laboratory Update Successfully')
		},
		(error) => {
			commit("SET_LOADER_BUTTON", false);
			errorHandler(error.response)
		}
	);
};

export const updateStatus = async ({ commit }, { id,status }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.updateStatus(id,status).then(
		async (response) => {
			commit('SET_STATUS',id)
			successHandler("uploaded successfully!");
			commit("SET_LOADER", false, { root: true });
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