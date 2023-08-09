import router from '../../router';

export function authHeader(type) {
	const usertoken = localStorage.getItem('accessToken');
	const vendortoken = localStorage.getItem('venderAccessToken');
	if (usertoken) {
		if (type === 'FormData') {
			return { 'Content-Type': 'multipart/form-data', Authorization: 'Bearer ' + usertoken };
		} else {
			return { Authorization: 'Bearer ' + usertoken };
		}
	} else if(vendortoken){
			if (type === 'FormData') {
				return { 'Content-Type': 'multipart/form-data', Authorization: 'Bearer ' + vendortoken };
			} else {
				return { Authorization: 'Bearer ' + vendortoken };
			}
	}else{
		router.push('/');
		localStorage.clear();
	}
}
