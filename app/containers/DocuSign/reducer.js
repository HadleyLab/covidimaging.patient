/*
 *
 * DocuSign reducer
 *
 */

import { fromJS } from 'immutable'
import { SET_LOADING } from './constants'

const initialState = fromJS({
  loading: false,
})

function docuSignReducer (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return state.set('loading', action.data)
    default:
      return state
  }
}

export default docuSignReducer
