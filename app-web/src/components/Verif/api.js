import { HTTP } from '../../util/http'

export default {
    getDocumentSignature: (file) => {
        return HTTP.get('/v1/Verification/DocumentSignature')
    },

    uploadDocumentSignature: (file) => {
        return HTTP.post('/v1/Verification/DocumentSignature', file, { headers: {
            'Content-Type': 'multipart/form-data'
          }})
    },

    getResidenceVerification: (file) => {
        return HTTP.get('/v1/Verification/ResidenceVerification')
    },

    uploadResidenceVerification: (file) => {
        return HTTP.post('/v1/Verification/ResidenceVerification', file, { headers: {
            'Content-Type': 'multipart/form-data'
          }})
    },

    getIdentificationVerification: (formData) => {
        return HTTP.get('/v1/Verification/IdentificationVerification')
    },

    uploadIdentificationVerification: (formData) => {
        return HTTP.post('/v1/Verification/IdentificationVerification', formData, { headers: {
            'Content-Type': 'multipart/form-data'
          }})
    },

    getPersonalInformation: (model) => {
        return HTTP.get('/v1/Verification/PersonalInformation', model)
    },

    uploadPersonalInformation: (model) => {
        return HTTP.post('/v1/Verification/PersonalInformation', model)
    },

    getDeclarations: (model) => {
        return HTTP.get('/v1/Verification/Declarations')
    },

    uploadDeclarations: (model) => {
        return HTTP.post('/v1/Verification/Declarations', model)
    },

    getCountries: () => {
        return HTTP.get('/v1/Verification/countries')
    },

    getStates: (country) => {
        return HTTP.get('/v1/Verification/' + country + '/States')
    },

    getIdDocumentTypes: () => {
        return HTTP.get('/v1/Verification/IdDocumentTypes')
    }
}