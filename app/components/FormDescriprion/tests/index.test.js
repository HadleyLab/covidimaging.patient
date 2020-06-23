import React from 'react';
import { shallow } from 'enzyme';

import H2 from '../index';

describe('<H2 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <p id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <p>{children}</p>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
