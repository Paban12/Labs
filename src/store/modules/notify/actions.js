import { apiServices } from '../../../services/api.service';
import { successHandler, errorHandler } from '../../../services/_helper';
import router from '../../../router';

export const getUserNitify = async ({ commit, dispatch }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.getUserNitify().then(
		(response) => {
			commit("SET_LOADER", false, { root: true });
			commit("NOTIFY_DATA",response.data.result)
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};
