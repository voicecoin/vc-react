import { HTTP } from '../../util/http'

export default {
    uploadDocumentSignature: (file) => {
        return HTTP.post('/v1/Verification/DocumentSignature', file, { headers: {
            'Content-Type': 'multipart/form-data'
          }})
    },

    uploadResidenceVerification: (file) => {
        return HTTP.post('/v1/Verification/ResidenceVerification', file, { headers: {
            'Content-Type': 'multipart/form-data'
          }})
    },

    uploadIdentificationVerification: (formData) => {
        return HTTP.post('/v1/Verification/IdentificationVerification', formData, { headers: {
            'Content-Type': 'multipart/form-data'
          }})
    },

    uploadPersonalInformation: (model) => {
        return HTTP.post('/v1/Verification/PersonalInformation', model)
    },

    uploadDeclarations: (model) => {
        return HTTP.post('/v1/Verification/Declarations', model)
    },

    getCountries: () => {
        return HTTP.get('/v1/Verification/countries')
    },

    getStates: (country) => {
        return HTTP.get('/v1/Verification/' + country + '/States')
    }
}