import { apiServices } from '../../../services/api.service';
import { successHandler, errorHandler } from '../../../services/_helper';
import router from '../../../router';

export const getDoctor = async ({ commit, state }, { limit, offset, keyword, status, role, cPage }) => {
	console.log({ limit, offset, keyword, status, role, cPage });
	commit("SET_LOADER", true, { root: true });
	// commit("SET_LOADER_BUTTON", true);
	await apiServices.getDoctor(limit, offset, keyword, status, role).then(
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
export const addDoctor = async ({ commit }, {mobile,name,emailId,gender,dob,roles,password,city,state,reg_number,reg_year,reg_type, experience, address, about, altMobile, altEmail,type}) => {
	commit("SET_LOADER_BUTTON", true);
	await apiServices.addDoctor(mobile,name,emailId,gender,dob,roles,password,city,state,reg_number,reg_year,reg_type, experience, address, about, altMobile, altEmail,type).then(
		(response) => {
			console.log(response.data);
			commit('ADD_DOCTOR', { response: response.data, mobile, name, emailId, gender, dob, roles, })
			commit("SET_LOADER_BUTTON", false);
		},
		(error) => {
			commit("SET_LOADER_BUTTON", false);
			errorHandler(error.response)
		}
	);
};
export const updateSchedule = async ({ commit }, { schedule, id }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.updateSchedule(schedule, id).then(
	  async (response) => {
		console.log(response.data);
		commit("SET_LOADER", false, { root: true });
		successHandler("Schedule updated successfully!");
	  },
	  (error) => {
		errorHandler(error.response);
		commit("SET_LOADER", false, { root: true });
	  }
	);
  };
export const addExpertise = async ({ commit }, {expertise,doctorDetailId}) => {
	commit("SET_LOADER_BUTTON", true);
	await apiServices.addExpertise(expertise,doctorDetailId).then(
		(response) => {
			console.log(response.data);
			commit("SET_LOADER_BUTTON", false);
		},
		(error) => {
			commit("SET_LOADER_BUTTON", false);
			errorHandler(error.response)
		}
	);
};
export const addSpeciality = async ({ commit }, {specializationId,doctorDetailId,data}) => {
	commit("SET_LOADER_BUTTON", true);
	await apiServices.addSpeciality(specializationId,doctorDetailId).then(
		(response) => {
			console.log(response.data);
			commit('ADD_SPECIALITY',{id:response.data,data})
			successHandler('Added Successfully')
			commit("SET_LOADER_BUTTON", false);
		},
		(error) => {
			commit("SET_LOADER_BUTTON", false);
			errorHandler(error.response)
		}
	);
};
export const addQualification = async ({ commit }, {doctorDetailId,qualification,college,city,passingYear}) => {
	commit("SET_LOADER_BUTTON", true);
	await apiServices.addQualification(doctorDetailId,qualification,college,city,passingYear).then(
		(response) => {
			console.log(response.data);
			commit('ADD_QUALIFICATION',{id:response.data.id,proof:response.data.proof,doctorDetailId,qualification,college,city,passingYear})
			successHandler('Added Successfully')
			commit("SET_LOADER_BUTTON", false);
		},
		(error) => {
			commit("SET_LOADER_BUTTON", false);
			errorHandler(error.response)
		}
	);
};
export const deleteSpeciality = async ({ commit }, {id}) => {
	commit("SET_LOADER_BUTTON", true);
	await apiServices.deleteSpeciality(id).then(
		(response) => {
			console.log(response.data);
			commit('DELETE_SPECIALITY',id)
			successHandler('Delete Successfully')
			commit("SET_LOADER_BUTTON", false);
		},
		(error) => {
			commit("SET_LOADER_BUTTON", false);
			errorHandler(error.response)
		}
	);
};

export const deleteQualification = async ({ commit }, {id}) => {
	commit("SET_LOADER_BUTTON", true);
	await apiServices.deleteQualification(id).then(
		(response) => {
			console.log(response.data);
			commit('DELETE_QUALIFICATION',id)
			successHandler('Delete Successfully')
			commit("SET_LOADER_BUTTON", false);
		},
		(error) => {
			commit("SET_LOADER_BUTTON", false);
			errorHandler(error.response)
		}
	);
};
export const getSpecialization = async ({ commit },{limit, offset, keyword, status}) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.getSpecialization(limit, offset, keyword, status).then(
		async (response) => {
			console.log(response.data);
			commit("SET_SPECIALIZATION", response.data);
			commit("SET_LOADER", false, { root: true });
		},
		(error) => {
			errorHandler(error.response, 'User');
			commit("SET_LOADER", false, { root: true });
		}
	);
};

export const getOrganization = async ({ commit },{limit, offset, keyword, status}) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.getOrganization(limit, offset, keyword, status).then(
		async (response) => {
			console.log(response.data);
			commit("SET_ORGANIZATION", response.data);
			commit("SET_LOADER", false, { root: true });
		},
		(error) => {
			errorHandler(error.response, 'User');
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
export const updateDoctorProfile = async ({ commit }, { name, emailId, altEmail, mobile, altMobile, gender, dob, city, state, pincode, reg_number,reg_type,reg_year,experience,about, address, id
}) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.updateDoctorProfile(name, emailId, altEmail, mobile, altMobile, gender, dob, city, state, pincode, reg_number,reg_type,reg_year,experience,about, address, id).then(
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

export const signatureUpload = async ({ commit }, { file }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.signatureUpload(file).then(
		async (response) => {
			// commit('UDATE_IMAGE_PROPOSAL', response.data)
			successHandler("Image uploaded successfully!");
			commit("SET_LOADER", false, { root: true });
		},
		(error) => {
			errorHandler(error.response, 'User');
			commit("SET_LOADER", false, { root: true });
		}
	);
};

export const profileUpload = async ({ commit }, { file }) => {
	commit("SET_LOADER", true, { root: true });
	await apiServices.profileUpload(file).then(
		async (response) => {
			// commit('UDATE_IMAGE_PROPOSAL', response.data)
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