import { createSelector } from 'reselect';

/**
 * Direct selector to the registration state domain
 */
const selectRegistrationDomain = (state) => state.get('registration');
const selectFormDomain = (state) => state.get('form');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Registration
 */

const makeSelectRegistration = () => createSelector(
  selectRegistrationDomain,
  (substate) => substate.toJS()
);
export const makeSelectErrors = () => createSelector(
  selectRegistrationDomain,
  (substate) => substate.get('errors')
);
export const makeSelectForm = () => createSelector(
  selectRegistrationDomain,
  (substate) => substate.get('registration')
);

export default makeSelectRegistration;
