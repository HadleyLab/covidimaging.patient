import { apiCreate } from 'utils/api'
import apiSubmissionError from 'utils/apiSubmissionError'
import moment from 'moment'

export const registerApi = (data = {}) => {

  data.dob = moment(data.dob).format('MM/DD/YYYY')

  return apiCreate().post('/account/create', data).then(apiSubmissionError)
}
