import {createAction} from 'redux-actions';
import {FIND, ADD_HOSPITAL} from './constants';
import {findApi, createHospitalApi} from './api';

export const FindAction = createAction(FIND, async (d) => await findApi(d));
export const createHospitalAction = createAction(ADD_HOSPITAL,  async (d) => await createHospitalApi(d));
