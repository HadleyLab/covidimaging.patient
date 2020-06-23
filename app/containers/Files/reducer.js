import typeToReducer from 'type-to-reducer'
import { fromJS } from 'immutable'
import {GET_ASSIGN_FILE, GET_TAGS} from './constants'
import reducerParse from 'utils/reducerParse'

const initialState = fromJS({})

export default typeToReducer({
  [GET_ASSIGN_FILE]: {
      SUCCESS: (state = fromJS([]), d) => reducerParse(d, (data) => {
              return state.set('dicoms', fromJS(data));
          },
          (payload) => {
              const {data, status} = payload;
              return state.set('errors', fromJS(data));
          },
      ),
      FAIL: (state = fromJS([]), d)=>state
  },
  [GET_TAGS]: {
    SUCCESS: (state = fromJS([]), d) => reducerParse(d, (data) => {
        return state.set('tags', fromJS(data));
      },
      (payload) => {
        const {data, status} = payload;
        return state.set('errors', fromJS(data));
      },
    ),
    FAIL: (state = fromJS([]), d)=>state
  },
}, initialState)
