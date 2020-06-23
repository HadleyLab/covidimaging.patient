import { apiCreate } from 'utils/api'
import getToken from 'utils/getToken'
import config from 'config'

export const sendFileApi = (file) => {
  let formData = new FormData()
  formData.append('file', file)
  return apiCreate().post('/files/file', formData)
}

export const getFileUrl = (hash)=>`${config.api}/api/v1/patient/files/file/image?hash=${hash}&token=${getToken()}`
export const getFileApi = (data) => apiCreate().get('/files/file', data)