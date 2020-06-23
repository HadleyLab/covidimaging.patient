import typeToReducer from 'type-to-reducer';
import {fromJS} from 'immutable';
import {HOSPITALS_LIST, TRANSFER} from './constants';
import reducerParse from 'utils/reducerParse';
const initialState = fromJS({});

export default typeToReducer({
  [TRANSFER]: {
    SUCCESS: (state = fromJS([]), d) => reducerParse(d, (data) => {
        return state;
      }
      ,
      (payload) => {
        const {data, status} = payload;
        return state.set('errors',fromJS(data));
      },
    ),
  },
  [HOSPITALS_LIST]: {
      SUCCESS: (state = fromJS([]), d) => reducerParse(d, (data) => {
              return state.set('hospitals', fromJS(data.hospitals));
          },
          (payload) => {
              const {data, status} = payload;
              return state.set('errors', fromJS(data));
          },
      ),
      FAIL: (state = fromJS([]), d)=>state
    },
}, initialState);
