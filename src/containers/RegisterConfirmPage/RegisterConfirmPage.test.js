import React from 'react';
import { shallow } from 'enzyme';
import { RegisterConfirmPage } from './index';

test('should render RegisterConfirmPage correctly', () => {
  const wrapper = shallow(<RegisterConfirmPage />);
  expect(wrapper).toMatchSnapshot();
});
