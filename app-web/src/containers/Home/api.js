import { HTTP } from '../../util/http'

export default {
    IcoInfo: () => {
        return HTTP.get('/v1/IcoInfo')
    }
}