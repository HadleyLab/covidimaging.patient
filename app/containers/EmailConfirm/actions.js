import {createAction} from 'redux-actions';
import {CONFIRM} from './constants';
import {confirmApi} from './api';

export const confirmAction = createAction(CONFIRM, async (d) => await confirmApi(d));
