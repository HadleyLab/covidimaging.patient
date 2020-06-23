/*
 *
 * DocuSign reducer
 *
 */

import { fromJS } from 'immutable'

const initialState = fromJS({
  loading: false,
})

function docuSignReducer (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default docuSignReducer
