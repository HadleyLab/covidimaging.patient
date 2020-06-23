import {createAction} from 'redux-actions';
import {REQUEST_RESET_PWD, RESET_PWD} from './constants';
import {requestResetPWDApi, resetPWDApi} from './api';

export const requestResetPWDAction = createAction(REQUEST_RESET_PWD, async (d) => await requestResetPWDApi(d));
export const resetPWDAction = createAction(RESET_PWD, async (d) => await resetPWDApi(d));
