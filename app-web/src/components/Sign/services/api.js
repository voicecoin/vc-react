import { HTTP } from '../../../util/http'

export default {
    login: (username, pwd) => {
        return HTTP.post('/v1/Account/token', {username: username, password: pwd})
    },

    sign: (data) => {
        return HTTP.post('/v1/Account', data)
    },

    activate: (key) => {
        return HTTP.get('/v1/Account/activate/' + key)
    },

    exist: (email) => {
        return HTTP.get('/v1/Account/exist?email=' + email)
    },

    validateEmail: (email) => {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(String(email).toLowerCase());
	}
}