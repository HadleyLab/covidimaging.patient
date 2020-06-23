import typeToReducer from 'type-to-reducer'
import { fromJS } from 'immutable'
import { CONFIRM } from './constants'
import reducerParse from 'utils/reducerParse'

const initialState = fromJS({
  isConfirmed: false,
  isError: false,
})

export default typeToReducer({
  [CONFIRM]: {
    SUCCESS: (state, d) => reducerParse(d, (data) => {
        if (data.success) {
          return state.set('isConfirmed', true)
        } else {

          return state.set('isError', true)
        }
      }
      ,
      (payload) => {
        return state.set('isError', true)
      },
    ),
    ERROR: (state) => state.set('isError', true),
  },
}, initialState)
