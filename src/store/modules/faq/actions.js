import { apiServices } from '../../../services/api.service';
import { successHandler, errorHandler } from '../../../services/_helper';
import router from '../../../router';

export const getFaq = async ({ commit, state }, { limit, offset, keyword, cPage }) => {
	console.log({ limit, offset, keyword, cPage });
	commit("SET_LOADER", true, { root: true });
	await apiServices.getFaq(limit, offset, keyword).then(
		(response) => {
			console.log(response.data);
			commit('ALL_FAQ', response.data)
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

export const addFaq = async ({ commit,state }, { question,answer }) => {
	commit("SET_LOADER_BUTTON", true);
	await apiServices.addFaq(question,answer).then(
		(response) => {
			console.log(response.data);
			commit('ADD_FAQ',{id:response.data.id, question,answer})
			commit("SET_LOADER_BUTTON", false);
			successHandler('Faq Added Successfully')
		},
		(error) => {
			commit("SET_LOADER_BUTTON", false);
			errorHandler(error.response)
		}
	);
};
export const updateFaq = async ({ commit }, { id,question,answer }) => {
	commit("SET_LOADER_BUTTON", true);
	await apiServices.updateFaq(id,question,answer).then(
		(response) => {
			console.log(response.data);
			commit('UPDATE_FAQ',{id,question,answer})
			commit("SET_LOADER_BUTTON", false);
			successHandler('Update Successfully')
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
