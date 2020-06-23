import { apiCreate } from 'utils/api'

export const confirmApi = (data) => apiCreate().post('/account/confirm', data)