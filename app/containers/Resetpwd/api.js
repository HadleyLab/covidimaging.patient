import { apiCreate } from 'utils/api'
import apiSubmissionError from 'utils/apiSubmissionError'

export const requestResetPWDApi = (data) => apiCreate().post('/account/reset/password', data).then(apiSubmissionError)
export const resetPWDApi = (data) => apiCreate().post('/account/reset', data).then(apiSubmissionError)