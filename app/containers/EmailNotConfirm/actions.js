import {createAction} from 'redux-actions';
import {RESEND} from './constants';
import {ResendEmailConfUserApi} from './api';

export const ResendEmailConfUserAction = createAction(RESEND, async (d) => await ResendEmailConfUserApi(d));
