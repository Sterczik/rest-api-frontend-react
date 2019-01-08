import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './index';

test('should render HomePage correctly', () => {
  const wrapper = shallow(<HomePage />);
  expect(wrapper).toMatchSnapshot();
});
