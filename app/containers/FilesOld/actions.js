import { createAction } from 'redux-actions'
import { GET_FILE, SEND_FILE, SET_FILE } from './constants'
import { getFileApi, sendFileApi } from './api'

export const sendFileAction = createAction(SEND_FILE, async (d) => await sendFileApi(d))
export const setFileAction = createAction(SET_FILE, d => d)
export const getFileAction = createAction(GET_FILE, async (d) => await getFileApi(d))
