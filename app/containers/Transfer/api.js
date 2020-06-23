import { apiCreate } from 'utils/api'
import apiSubmissionError from 'utils/apiSubmissionError'

export const transferApi = (data) => apiCreate().post('/transfers/create', data).then(apiSubmissionError)
export const hospitalsListApi = (data) => apiCreate().get('/hospitals/get', data).then(apiSubmissionError)