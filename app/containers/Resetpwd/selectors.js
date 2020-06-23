import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = (state) => state.get('resetContainer');



export const makeSelectReset = () => createSelector(
  selectLoginDomain,
  (substate) => substate.get('reset')
);

