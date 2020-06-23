
import { fromJS } from 'immutable';
import docuSignReducer from '../reducer';

describe('docuSignReducer', () => {
  it('returns the initial state', () => {
    expect(docuSignReducer(undefined, {})).toEqual(fromJS({}));
  });
});
