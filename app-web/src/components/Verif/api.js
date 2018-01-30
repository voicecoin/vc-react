import { HTTP } from '../../util/http'

export default {
    uploadFile: (file) => {
        return HTTP.post('/v1/File', file, { headers: {
            'Content-Type': 'multipart/form-data'
          }})
    },
}