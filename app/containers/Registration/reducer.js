import typeToReducer from 'type-to-reducer';
import {fromJS} from 'immutable';
import {REGISTER} from './constants';
import reducerParse from 'utils/reducerParse';
import setUser from 'utils/setUser'
import setToken from 'utils/setToken'
import isConfirm from '../../utils/isConfirm'
const initialState = fromJS({});

export default typeToReducer({
  [REGISTER]: (state = fromJS([]), d) => reducerParse(d, (data) => {
    if (data && data.token) {
      setUser(data.user)
      setToken(data.token)
    }
    return state.set('registration', {confirm:true, ...data});
  })
}, initialState);
