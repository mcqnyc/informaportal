import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import { FormControl } from 'react-bootstrap';
import YouTube from '../components/YouTube';

test('YouTube should render correct amount of videos on startup', () => {
  const component = shallow(<YouTube />);
  expect(component.find(YouTube).length).toEqual(0);
});

test('YouTube should render correct amount of videos based on search term', () => {
  const component = shallow(<YouTube />);
  const searchTerm = 'fashion';
  component.find(FormControl).simulate('change', { target: { value: searchTerm } });
  const videoCount = component.state.data;
  console.log(component.state.data, 'component.state.data')
  console.log(videoCount)
  expect(component.find(YouTube).length).toEqual(videoCount.length);
});
