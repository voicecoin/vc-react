import { HTTP } from '../../util/http'

export default {
    getCurrencies: () => {
        return HTTP.get('/v1/IcoInfo/currencies')
    },

    getPrices: () => {
        return HTTP.get('/v1/Market/prices')
    }
}