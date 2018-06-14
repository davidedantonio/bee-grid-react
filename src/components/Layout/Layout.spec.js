import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from './Layout';

configure({ adapter: new Adapter() });

describe('Layout', () => {
  test('Simulate the component throw an error', () => {
    const wrapper = shallow(<Layout type={13} />);
    expect(() => { wrapper.simulate() }).toThrow();
  });
})
