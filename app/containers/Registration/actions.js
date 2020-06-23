import {createAction} from 'redux-actions';
import {REGISTER} from './constants';
import {registerApi} from './api';

export const registerAction = createAction(REGISTER);
