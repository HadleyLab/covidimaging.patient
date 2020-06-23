import typeToReducer from 'type-to-reducer'
import { fromJS } from 'immutable'
import { SEND_FILE, SET_FILE,GET_FILE } from './constants'
import reducerParse from 'utils/reducerParse'

const initialState = fromJS({})

export default typeToReducer({
  [SET_FILE]: (state = fromJS({}), {payload}) => {
    return state.set('file', fromJS(payload)).set('hash','').set('getFileResult','')
  },
  [SEND_FILE]: {
    START: (state = fromJS({}), d) => state.set('sending', true).set('hash',''),
    SUCCESS: (state = fromJS({}), d) => reducerParse(d, (files) => {
        return state
          .set('sending', false)
         // .set('file', null)
          .set('hash', fromJS(files[0].hash))
      }
      ,
      (payload) => {
        const {data, status} = payload
        return state.set('sending', false)
      },
    ),
  },
  [GET_FILE]: {
    START: (state = fromJS({}), d) => state.set('sending', true),
    SUCCESS: (state = fromJS({}), d) => reducerParse(d, (data) => {
      let plainText = data.file
      if(typeof plainText ==='object'){
        plainText=JSON.stringify(plainText)
      }
        return state
          .set('sending', false)
          // .set('file', null)
          .set('getFileResult', plainText)
      }
      ,
      (payload) => {
        const {data, status} = payload
        return state.set('sending', false)
      },
    ),
  },
}, initialState)
