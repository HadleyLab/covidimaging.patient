import { sendApi } from './api'
import { setLoadingAction } from './actions'

export const signStory = async (dispatch, data) => {
  try {
    dispatch(setLoadingAction(true))
    const res = await sendApi(data)
    dispatch(setLoadingAction(false))
    if (res && res.data && res.data.url) {
      location.href = res.data.url
    }
  } catch (e) {
    dispatch(setLoadingAction(false))
  }
}
