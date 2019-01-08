import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

let wrapper;
let logout;

beforeEach(() => {
  logout = jest.fn();
  wrapper = shallow(<Header
    logout={logout}
  />);
});

test('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle logout', () => {
  wrapper.find('.header__anchor').at(2).simulate('click');
  expect(logout).toHaveBeenCalled();
});
