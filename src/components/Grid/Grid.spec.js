import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from './Grid';

configure({ adapter: new Adapter() });

describe('Grid', () => {
  test('getClasses should return only \'grid-container\' class', () => {
    const wrapper = shallow(<Grid />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-container';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-container-fluid\' class', () => {
    const wrapper = shallow(<Grid container="fluid"/>);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-container-fluid';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-container-fluid cols-6\' class', () => {
    const wrapper = shallow(<Grid container="fluid" cols={6} />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-container-fluid cols-6';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-container-fluid cols-6 col-sm-2\' class', () => {
    const wrapper = shallow(<Grid container="fluid" cols={6} sm={2} />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-container-fluid cols-6 cols-sm-2';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-container-fluid col-sm-2 col-md-4\' class', () => {
    const wrapper = shallow(<Grid container="fluid" sm={2} md={4} />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-container-fluid cols-sm-2 cols-md-4';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-container-fluid col-sm-2 col-md-4 col-lg-8\' class', () => {
    const wrapper = shallow(<Grid container="fluid" sm={2} md={4} lg={8} />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-container-fluid cols-sm-2 cols-md-4 cols-lg-8';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-container-fluid col-sm-2 col-md-4 col-lg-8\' class', () => {
    const wrapper = shallow(<Grid container="fluid" sm={2} md={4} lg={8} xl={12} />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-container-fluid cols-sm-2 cols-md-4 cols-lg-8 cols-xl-12';

    expect(classes).toEqual(expected);
  });

  test('Simulate the component throw an error', () => {
    const wrapper = shallow(<Grid cols={13} />);
    expect(() => { wrapper.simulate() }).toThrow();
  });

  test('Simulate the component throw an error', () => {
    const wrapper = shallow(<Grid sm={13} />);
    expect(() => { wrapper.simulate() }).toThrow();
  });

  test('Simulate the component throw an error', () => {
    const wrapper = shallow(<Grid xl={13} />);
    expect(() => { wrapper.simulate() }).toThrow();
  });
});
