import { HTTP } from '../../../util/http'

export default {
    login: (username, pwd) => {
        return HTTP.post('/token', {username: username, password: pwd})
    },

    sign: (data) => {
        return HTTP.post('/Account/Register', data)
    },

    exist: (email) => {
        return HTTP.get('/account/exist?email=' + email)
    },

    userInfo: () => {
        return HTTP.get('/account')
    },

    validateEmail: (email) => {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(String(email).toLowerCase());
    }
    
}