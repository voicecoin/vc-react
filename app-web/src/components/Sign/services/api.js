import { HTTP } from '../../../util/http'

export default {
    login: (username, pwd) => {
        return HTTP.post('/cf/Account/token?username=' +
            username + '&password=' +
            pwd,
            null)
    },

    sign: () => {
        return HTTP.post('/token?username=' +
            username + '&password=' +
            password,
            null)
    }
}