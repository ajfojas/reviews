import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ReviewList from '../client/components/ReviewList';

describe('ReviewList component', () => {
  const states = {
    reviews: [{}, {}],
    filteredReviews: [],
    pageCount: 0,
    perPage: 7,
    elements: [{}, {}, {}, {}, {}, {}, {}, {}],
    search: '',
    accuracy: 5,
    communication: 4,
    cleanliness: 3,
    location: 4,
    checkin: 5,
    value: 3,
    overall: 4,
    host: {},
  };

  const filteredStates = {
    reviews: [{}, {}],
    filteredReviews: [{}],
    pageCount: 0,
    perPage: 7,
    elements: [{}, {}, {}, {}, {}, {}, {}, {}],
    search: '',
    accuracy: 5,
    communication: 4,
    cleanliness: 3,
    location: 4,
    checkin: 5,
    value: 3,
    overall: 4,
    host: {},
  };

  it('renders successfully', () => {
    shallow(<ReviewList allStates={states} />);
  });

  it('displays all reviews', () => {
    const wrapper = shallow(<ReviewList allStates={states} />);
    expect(wrapper.find('.review-entry')).toHaveLength(8);
  });

  it('displays filtered reviews', () => {
    const wrapper = shallow(<ReviewList allStates={filteredStates} />);
    expect(wrapper.find('.review-entry')).toHaveLength(1);
  })
});