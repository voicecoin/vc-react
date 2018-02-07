import { HTTP } from '../../util/http'

export default {
    getCurrencies: () => {
        return HTTP.get('/v1/IcoInfo/currencies')
    },

    getPrices: (coupon) => {
        return HTTP.get('/v1/Market/prices?coupon=' + coupon)
    },

    purchase: (data) => {
        return HTTP.post('/v1/IcoInfo/purchase/' + data.currency, data)
    },

    getPurchases: (data) => {
        return HTTP.get('/v1/IcoInfo/purchases')
    },

    validateCoupon: (code) => {
        return HTTP.get('/v1/Coupon/validate/' + code)
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

    getContributionStat: () => {
        return HTTP.get('/v1/IcoInfo/ContributionStat')
    }
}