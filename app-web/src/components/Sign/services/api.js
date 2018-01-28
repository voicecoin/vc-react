import { HTTP } from '../../../util/http'

export default {
    login: (username, pwd) => {
        return HTTP.post('/v1/Account/token?username=' +
            username + '&password=' +
            pwd,
            null)
    },

    sign: (data) => {
        return HTTP.post('/v1/Account', data)
    },

    activate: (key) => {
        return HTTP.get('/v1/Account/activate/' + key)
    }
}