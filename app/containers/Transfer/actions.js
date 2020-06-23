import {createAction} from 'redux-actions';
import {HOSPITALS_LIST, TRANSFER} from './constants';
import {hospitalsListApi, transferApi} from './api';

export const transferAction = createAction(TRANSFER, async (d) => await transferApi(d));
export const hospitalsListAction = createAction(HOSPITALS_LIST, async (d) => await hospitalsListApi(d));
