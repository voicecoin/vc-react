import { HTTP } from '../../util/http'

export default {
    getCurrencies: () => {
        return HTTP.get('/v1/IcoInfo/currencies')
    },

    getPrices: (coupon) => {
        return HTTP.get('/v1/Market/prices?coupon=' + coupon)
    },

    purchase: (cur, coupon) => {
        return HTTP.get('/v1/IcoInfo/address/' + cur + '?coupon=' + coupon)
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

    getContri: () => {
        return HTTP.get('v1/IcoInfo/ContributionStat')
    }
}