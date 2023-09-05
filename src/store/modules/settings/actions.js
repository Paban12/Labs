import { apiServices } from '../../../services/api.service';
import { successHandler, errorHandler } from '../../../services/_helper';
import router from '../../../router';

export const getSettings = async ({ commit, state }) => {
	await apiServices.getSettings().then(
		(response) => {
			console.log(response.data);
			commit("SET_SETTING_DATA",response.data)
		},
		(error) => {
			errorHandler(error.response)
		}
	);
};
export const changeTaxStatus = async ({ commit, dispatch }, { status,id,gstListId }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.changeTaxStatus(status,id,gstListId).then(
		(response) => {
			console.log(response.data);
			commit("SET_LOADER", false, { root: true });
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};
export const changePayModeStatus = async ({ commit }, { status,id,payModeId }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.changePayModeStatus(status,id,payModeId).then(
		(response) => {
			console.log(response.data);
			commit("SET_LOADER", false, { root: true });
			successHandler('Update Successfully')
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};
export const addExpense = async ({ commit, state }, { expense }) => {
	commit("SET_LOADER_BUTTON", true);
	await apiServices.addExpense(expense).then(
		(response) => {
			const data={
				id:response.data.id,
				expense:expense,
				createdAt:response.data.createdAt,
			}
			console.log(response.data);
			state.billingExpenseType.push(data)
			commit("SET_LOADER_BUTTON", false);
			successHandler('Added Successfully')
		},
		(error) => {
			commit("SET_LOADER_BUTTON", false);
			errorHandler(error.response)
		}
	);
};
export const deleteExpense = async ({ commit }, { id }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.deleteExpense(id).then(
		(response) => {
			console.log(response.data);
			commit("DELETE_EXPENSE",id)
			commit("SET_LOADER", false, { root: true });
			successHandler('Delete Successfully')
		},
		(error) => {
			commit("SET_LOADER", false, { root: true });
			errorHandler(error.response)
		}
	);
};
export const changeChargeStatus = async ({ commit }, { status,id,chargeId,amount }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.changeChargeStatus(status,id,chargeId,amount).then(
		async (response) => {
			console.log(response.data);
			successHandler("Update successfully!");
			commit("SET_LOADER", false, { root: true });
		},
		(error) => {
			errorHandler(error.response, 'User');
			commit("SET_LOADER", false, { root: true });
		}
	);
};