import { apiCreate } from 'utils/api'
import apiSubmissionError from 'utils/apiSubmissionError'

export const getListDicomApi = (data) => apiCreate().get('/transfers/get', data).then(apiSubmissionError)
export const saveDicomApi = (data) => apiCreate().post('/files/save', data).then(apiSubmissionError)
export const getListAnnotationsApi = (data) => apiCreate().get('/annotations/get', data).then(apiSubmissionError)