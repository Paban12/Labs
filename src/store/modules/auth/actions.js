import { apiServices } from '../../../services/api.service';
import { successHandler, errorHandler } from '../../../services/_helper';
import router from '../../../router';

export const verifyUser = async ({ commit, dispatch }, { loginId, password }) => {
	// commit("SET_LOADER", true, { root: true });
	commit("SET_LOADER_BUTTON", true);
	await apiServices.verifyId(loginId, password).then(
		(response) => {
			console.log(response.data);
			successHandler(response.data.message)
			commit("SET_LOADER_BUTTON", false);
			router.push({path:'/forgot',query:{id:loginId}})
		},
		(error) => {
			commit("SET_LOADER_BUTTON", false);
			errorHandler(error.response)
		}
	);
};
export const otpVerifyUser = async ({ commit, dispatch }, { loginId, otp }) => {
	commit("SET_LOADER_BUTTON", true);
	await apiServices.verifyOtp(loginId, otp).then(
		(response) => {
			console.log(response.data);
			localStorage.setItem('accessToken', response.data.token);
			localStorage.setItem('roles', response.data.user?.roles);
			commit("SET_LOADER_BUTTON", false);
		},
		(error) => {
			commit("SET_LOADER_BUTTON", false);
			errorHandler(error.response)
		}
	);
};
export const register = async ({ commit }, { userId }) => {
	commit("SET_LOADER_BUTTON", true);
	await apiServices.verifyId(userId).then(
		(response) => {
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
