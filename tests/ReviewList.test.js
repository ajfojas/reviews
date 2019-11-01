import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ReviewList from '../client/components/ReviewList';

describe('ReviewList component', () => {
  const states = {
    reviews: [{}, {}],
    filteredReviews: [{}],
    search: '',
    accuracy: 5,
    communication: 4,
    cleanliness: 3,
    location: 4,
    checkin: 5,
    value: 3,
    overall: 4
  };

  it('renders successfully', () => {
    shallow(<ReviewList allStates={states} />);
  });

  it('displays filtered searches', () => {
    const wrapper = shallow(<ReviewList allStates={states} />);
    expect()
  })
});