import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ReviewEntry from '../client/components/ReviewEntry.jsx';

describe('ReviewEntry component', () => {
  it('renders successfully', () => {
    shallow(<ReviewEntry />);
  });
});