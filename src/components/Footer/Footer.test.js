import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';

test('should render Footer correctly', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
