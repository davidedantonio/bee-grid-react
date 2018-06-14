import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GridItem from './GridItem';

configure({ adapter: new Adapter() });

describe('GridItem', () => {
  test('getClasses should return only \'grid-item\' class', () => {
    const wrapper = shallow(<GridItem />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-item colspan-3\' class', () => {
    const wrapper = shallow(<GridItem colspan={3} />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item colspan-3';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-item colspan-sm-3\' class', () => {
    const wrapper = shallow(<GridItem colspanSm={3} />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item colspan-sm-3';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-item colspan-md-3\' class', () => {
    const wrapper = shallow(<GridItem colspanMd={3} />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item colspan-md-3';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-item colspan-lg-3\' class', () => {
    const wrapper = shallow(<GridItem colspanLg={3} />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item colspan-lg-3';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-item colspan-xl-3\' class', () => {
    const wrapper = shallow(<GridItem colspanXl={3} />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item colspan-xl-3';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-item colspan-3 colspan-sm-1 colspan-md-4 colspan-lg-5 colspan-xl-6\' class', () => {
    const wrapper = shallow(<GridItem colspan={3} colspanSm={1} colspanMd={4} colspanLg={5} colspanXl={6} />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item colspan-3 colspan-sm-1 colspan-md-4 colspan-lg-5 colspan-xl-6';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-item col-start-1-end-3\' class', () => {
    const wrapper = shallow(<GridItem colStartEnd={{start:1, end:3}} />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item col-start-1-end-3';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-item col-sm-start-1-end-3\' class', () => {
    const wrapper = shallow(<GridItem colStartEndSm={{start:1, end:3}} />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item col-sm-start-1-end-3';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-item col-md-start-1-end-3\' class', () => {
    const wrapper = shallow(<GridItem colStartEndMd={{start:1, end:3}} />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item col-md-start-1-end-3';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-item col-lg-start-1-end-3\' class', () => {
    const wrapper = shallow(<GridItem colStartEndLg={{start:1, end:3}} />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item col-lg-start-1-end-3';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-item col-xl-start-1-end-3\' class', () => {
    const wrapper = shallow(<GridItem colStartEndXl={{start:1, end:3}} />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item col-xl-start-1-end-3';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-item align-self-center\' class', () => {
    const wrapper = shallow(<GridItem align="center" />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item align-self-center';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-item align-self-start\' class', () => {
    const wrapper = shallow(<GridItem align="start" />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item align-self-start';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-item align-self-end\' class', () => {
    const wrapper = shallow(<GridItem align="end" />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item align-self-end';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-item align-self-baseline\' class', () => {
    const wrapper = shallow(<GridItem align="baseline" />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item align-self-baseline';

    expect(classes).toEqual(expected);
  });

  test('getClasses should return \'grid-item align-self-stretch\' class', () => {
    const wrapper = shallow(<GridItem align="stretch" />);
    const classes = wrapper.instance().getClasses();
    const expected = 'grid-item align-self-stretch';

    expect(classes).toEqual(expected);
  });

  test('Simulate the component throw an error', () => {
    const wrapper = shallow(<GridItem colspan={13} />);
    expect(() => { wrapper.simulate() }).toThrow();
  });

  test('Simulate the component throw an error', () => {
    const wrapper = shallow(<GridItem justify="error" />);
    expect(() => { wrapper.simulate() }).toThrow();
  });

  test('Simulate the component throw an error', () => {
    const wrapper = shallow(<GridItem align="error" />);
    expect(() => { wrapper.simulate() }).toThrow();
  });

  test('Simulate the component throw an error', () => {
    const wrapper = shallow(<GridItem colStartEnd={{start:13, end:13}} />);
    expect(() => { wrapper.simulate() }).toThrow();
  });
});
