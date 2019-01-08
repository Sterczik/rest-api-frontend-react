import React from 'react';
import { shallow } from 'enzyme';
import { RegisterFailurePage } from './index';

test('should render RegisterFailurePage correctly', () => {
  const wrapper = shallow(<RegisterFailurePage />);
  expect(wrapper).toMatchSnapshot();
});
