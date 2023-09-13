import { apiServices } from '../../../services/api.service';
import { successHandler, errorHandler } from '../../../services/_helper';
import router from '../../../router';

export const verifyUser = async ({ commit, dispatch }, { loginId, password }) => {
	// commit("SET_LOADER", true, { root: true });
	commit("SET_LOADER_BUTTON", true);
	await apiServices.verifyId(loginId, password).then(
		(response) => {
			console.log(response.data);
			localStorage.setItem('accessToken', response.data.token);
			successHandler('Login Successfully')
			commit("SET_LOADER_BUTTON", false);
			// router.push({path:'/forgot',query:{id:loginId}})
			router.push({path:'/'})
		},
		(error) => {
			commit("SET_LOADER_BUTTON", false);
			errorHandler(error.response)
		}
	);
};



