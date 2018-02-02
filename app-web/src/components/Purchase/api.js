import { HTTP } from '../../util/http'

export default {
    getCurrencies: () => {
        return HTTP.get('/v1/IcoInfo/currencies')
    },

    getPrices: () => {
        return HTTP.get('/v1/Market/prices')
    },

    purchase: (cur) => {
        return HTTP.get('/v1/IcoInfo/address/' + cur)
    },

    getCoupon: () => {
        return HTTP.get('/v1/Coupon/available')
    },

    getCouponLink: (id) => {
        return HTTP.get('/v1/Coupon/generate/' + id)
    },

    sendEmail: (email) => {
        return HTTP.get('/v1/Coupon/generate/' + email)
    },

    getContri: () => {
        return HTTP.get('v1/IcoInfo/ContributionStat')
    }
}