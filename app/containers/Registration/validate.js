import trans from '../../trans'
import toJS from '../../utils/toJS'
import allTrim from '../../utils/allTrim'

export default (_values) => {
  const values = toJS(_values)
  const errors = {}

  allTrim(values);

  if (!values.firstName) {
    errors.firstName = trans('validation.joi.register.empty.firstname')
  }
  if (!values.lastName) {
    errors.lastName = trans('validation.joi.register.empty.lastname')
  }
  if (!values.email) {
    errors.email = trans('validation.joi.register.empty.email')
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = trans('validation.joi.register.email.email')
  }
  if (!values.phone) {
    errors.phone = trans('validation.joi.register.empty.phone')
  }
  if (!values.dob) {
    errors.dob = trans('validation.joi.register.empty.dob')
  }

  if (!values.terms) {
    errors.terms = true
  }

  if (!values.password) {
    errors.password = trans('validation.joi.register.empty.password')
  } else if (values.password.length < 6) {
    errors.password = trans('validation.joi.register.min.password')
  }

  if (!values.passwordConfirm) {
      errors.passwordConfirm = trans('validation.joi.register.allowonly.passwordconfirm')
  } else if (values.passwordConfirm.length < 6) {
      errors.passwordConfirm = trans('validation.joi.register.allowonly.passwordconfirm')
  }

  if (values.passwordConfirm && values.password && values.passwordConfirm !== values.password) {
    errors.passwordConfirm = trans('validation.joi.register.allowonly.passwordconfirm')
  }
  return errors
}
