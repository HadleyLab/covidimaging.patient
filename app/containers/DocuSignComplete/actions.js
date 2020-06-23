import {createAction} from 'redux-actions';
import {UPDATASTATUSUSER} from './constants';
import {updateStatusUserApi} from './api';

export const updateStatusUserAction = createAction(UPDATASTATUSUSER, async (d) => await updateStatusUserApi(d));
