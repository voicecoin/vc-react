import { HTTP } from '../../../util/http'

export default {
    login: (username, pwd) => {
        return HTTP.post('/cf/Account/token?username=' +
            username + '&password=' +
            pwd,
            null)
    },

    sign: (data) => {
        return HTTP.post('/cf/Account', data)
    }
}