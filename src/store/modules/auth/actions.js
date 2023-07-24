import { apiServices } from '../../../services/api.service';
import { successHandler, errorHandler } from '../../../services/_helper';
import router from '../../../router';

export const verifyUser = async ({ commit, dispatch }, { userId, password }) => {
	commit("SET_LOADER", true, { root: true });
	// await apiServices.verifyId(userId, password).then(
	// 	(response) => {
	// 		commit("SET_LOADER", false, { root: true });
	// 	},
	// 	(error) => {
	// 		commit("SET_LOADER", false, { root: true });
	// 		errorHandler(error.response)
	// 	}
	// );
};
export const otpVerifyUser = async ({ commit, dispatch }, { userId, otp }) => {
	commit("SET_LOADER_BUTTON", true);
	await apiServices.verifyOtp(userId, otp).then(
		(response) => {
			commit("SET_LOADER_BUTTON", false);
		},
		(error) => {
			commit("SET_LOADER_BUTTON", false);
			errorHandler(error.response)
		}
	);
};
export const register = async ({ commit }, { loginId, emailId, password }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.register(loginId, emailId, password).then(
		(response) => {
			successHandler("Registered Successfully!")
			commit("SET_LOADER", false, { root: true });
		},
		(error) => {
			errorHandler(error.response)
			commit("SET_LOADER", false, { root: true });
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
	bussinessName,
	bussinessAddress,
	gstNumber,
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
		dob, bussinessName,
		bussinessAddress,
		gstNumber,
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
