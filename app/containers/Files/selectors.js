import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectFilesDomain = (state) => state.get('files');

export const makeSelectGetFileResult = () => createSelector(
  selectFilesDomain,
  (substate) => substate.get('dicoms')
);

export const makeAnnotation = () => createSelector(
  selectFilesDomain,
  (substate) => substate.get('tags')
);