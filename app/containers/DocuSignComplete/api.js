import { apiCreate } from 'utils/api'
import apiSubmissionError from 'utils/apiSubmissionError'

export const updateStatusUserApi = (data) => apiCreate().post('/account/updatestep', data).then(apiSubmissionError)
