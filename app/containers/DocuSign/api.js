import { apiCreate } from 'utils/api'

export const sendApi = (data) => apiCreate().post('/docusign/send', data)