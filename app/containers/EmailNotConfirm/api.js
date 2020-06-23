import { apiCreate } from 'utils/api'
import apiSubmissionError from 'utils/apiSubmissionError'

export const ResendEmailConfUserApi = (data) => apiCreate().post('/account/resend', data).then(apiSubmissionError)
