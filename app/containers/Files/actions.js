import {createAction} from 'redux-actions';
import {GET_ASSIGN_FILE, GET_TAGS, SAVE_FILES} from './constants';
import {getListDicomApi, getListAnnotationsApi, saveDicomApi} from './api';

export const getListDicomAction = createAction(GET_ASSIGN_FILE, async (d) => await getListDicomApi(d));
export const saveDicomAction = createAction(SAVE_FILES, async (d) => await saveDicomApi(d));
export const getListAnnotationsAction = createAction(GET_TAGS, async (d) => await getListAnnotationsApi(d));
