import setUser from './setUser'
import setToken from './setToken'
import isConfirm from './isConfirm'

export default (d) => {
  if (d && d.status === 200 && d.data && d.data.token) {
    setUser(d.data.user)
    setToken(d.data.token)
    if (d.data.user.stepRegistration === 3) {
        location.href = '/files'
    } else {
        location.href = '/'
    }
  }
}