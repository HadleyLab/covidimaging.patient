import getUser from './getUser'
import _ from 'lodash'

export default (action) => {
  const user = getUser();
  const result = _.get(user, `confirmed.${action}`, false)

  return result;
}