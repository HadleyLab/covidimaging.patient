import typeToReducer from 'type-to-reducer';
import {fromJS} from 'immutable';
import {REQUEST_RESET_PWD} from './constants';
import reducerParse from 'utils/reducerParse';
import setUser from 'utils/setUser';

const initialState = fromJS({
  errors:{}
});

export default typeToReducer({
  [REQUEST_RESET_PWD]: {
    SUCCESS: (state = fromJS([]), d) => reducerParse(d, (data) => {
        return state.set('reset', true);
      }
      ,
      (payload) => {
        const {data, status} = payload;
        return state.set('reset', false);
      },
    ),
    FAIL: (state = fromJS([]), d)=>state
  },
}, initialState);
