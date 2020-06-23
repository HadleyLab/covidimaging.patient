import React from 'react'
import { reduxForm } from 'redux-form/immutable'

export default (form, validate) => (component) => reduxForm({form, validate})(component)

