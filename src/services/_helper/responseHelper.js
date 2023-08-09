import router from '../../router';
import * as store from '../../store';

export function errorHandler(res,type) {
	if (res.status === 401) {
		setAlert({ type: "danger", message: res.data.message });
		localStorage.clear();
		if(type==='User'){
			router.push('/login');
			loginModal(true)
		}else{
			router.push('/login');
			loginModal(false)
		}
		return;
	}
	if (res.status === 403) {
		setAlert({ type: 'danger', message: 'Sorry! Permission deined!' });
		return;
	}
	if (res.status === 409) {
		setAlert({ type: 'danger', message: res.data.message });
		return;
	}
	if (res.status === 400) {
		let result =  Array.isArray(res.data.message);
		if(result){
			setAlert({ type: 'danger', message: res.data.message[0] });
			return;
		} else {
			setAlert({ type: 'danger', message: res.data.message });
			return;
		}
	}
	if (res.status !== 400) {
		setAlert({ type: 'danger', message: res.data.message });
	}
}

export function successHandler(msg) {
	setAlert({ type: 'success', message: msg });
}

function setAlert(data) {
	store.default.state.notification = data;
}

function loginModal(data){ 
	store.default.state.loginModal = data;
	store.default.state.loginStatus = false;
}
