import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectFilesDomain = (state) => state.get('files');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FindHospital
 */

export const makeSelectFile = () => createSelector(
  selectFilesDomain,
  (substate) => substate.get('file')
);
export const makeSelectFileSending = () => createSelector(
  selectFilesDomain,
  (substate) => substate.get('sending')
);
export const makeSelectFileHash = () => createSelector(
  selectFilesDomain,
  (substate) => substate.get('hash')
);
export const makeSelectGetFileResult = () => createSelector(
  selectFilesDomain,
  (substate) => substate.get('getFileResult')
);
