import axios from 'axios';
import config from '../config/config';

export const HTTP = axios.create({
	baseURL: config.dataUrl,
	withCredentials: true
})

HTTP.interceptors.request.use(function (config) {
	// Do something before request is sent
	config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
	return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

HTTP.interceptors.response.use(function(response){
	return response.data;
}, function(error) {
	let response = error.response;
	let status = response.status;

	if (status === 400) {
		// iView.Message.error(response.data);
		/*Object.keys(response.data).forEach(function(key) {
		iView.Message.error(response.data[key][0]);
		});*/
	} else if (status === 401) {
		// iView.Notice.error({
		// 	title : 'Session Expired',
		// 	desc : 'Please <a href="/login" style="color:red;">Login</a> again!',
		// 	duration: 30
		// });
	} else if (status === 404) {
		// iView.Notice.error({
		// 	title : 'Page Not Found',
		// 	duration: 10
		// });
	} else {
		// iView.Message.error(response.statusText);
	}

	return Promise.reject(response);
});