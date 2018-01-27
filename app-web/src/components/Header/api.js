import { HTTP } from '../../util/http'

export default {
    getIcoInfo: () => {
        return HTTP.get('/v1/IcoInfo')
    }
}