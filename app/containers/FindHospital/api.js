import { apiCreate } from 'utils/api'
import apiSubmissionError from 'utils/apiSubmissionError'

export const findApi = (data) => apiCreate().post('/hospitals/find', data).then(apiSubmissionError);
export const transferApi = (data) => apiCreate().post('/transfers/create', data).then(apiSubmissionError);
export const sendApi = (data) => apiCreate().post('/docusign/send', data);
export const createHospitalApi = (data) => apiCreate().post('/hospitals/add', data).then(apiSubmissionError);