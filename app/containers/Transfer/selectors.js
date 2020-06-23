import { createSelector } from 'reselect';

/**
 * Direct selector to the registration state domain
 */
const selectRegistrationDomain = (state) => state.get('transfer');
const selectHospitals = (state) => state.get('hospitalsContainer');


/**
 * Other specific selectors
 */


/**
 * Default selector used by Registration
 */

export const makeHospitals = () => createSelector(
    selectRegistrationDomain,
    (substate) => substate.get('hospitals')
);


export default makeHospitals;
