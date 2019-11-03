import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Summary from '../Summary.jsx';
import StarRatings from 'react-star-ratings';

describe('Summary component', () => {
  const states = {
    reviews: [{}, {}],
    filteredReviews: [],
    search: '',
    accuracy: 5,
    communication: 4,
    cleanliness: 3,
    location: 4,
    checkin: 5,
    value: 3,
    overall: 4
  };

  const filtered1States = {
    reviews: [{}, {}],
    filteredReviews: [{}],
    search: 'hello1',
    accuracy: 5,
    communication: 4,
    cleanliness: 3,
    location: 4,
    checkin: 5,
    value: 3,
    overall: 4
  };

  const filtered3States = {
    reviews: [{}, {}],
    filteredReviews: [{}, {}, {}],
    search: 'hello3',
    accuracy: 5,
    communication: 4,
    cleanliness: 3,
    location: 4,
    checkin: 5,
    value: 3,
    overall: 4
  };

  it('renders successfully', () => {
    shallow(<Summary allStates={states} />);
  });

  it('displays the total # of reviews', () => {
    const wrapper = shallow(<Summary allStates={states} />);
    expect(wrapper.find('#summary-reviews').text()).toEqual('2 Reviews');
  });

  it('renders 7 <StarRatings /> components', () => {
    const wrapper = shallow(<Summary allStates={states} />);
    expect(wrapper.find(StarRatings)).toHaveLength(7);
  });

  it('displays how many people have mentioned the searched term using correct grammar', () => {
    const wrapper1 = shallow(<Summary allStates={filtered1States} />);
    const wrapper3 = shallow(<Summary allStates={filtered3States} />);
    expect(wrapper1.find('#filtered-search').text()).toEqual('1 guest has mentioned "hello1"Back to all reviews');
    expect(wrapper3.find('#filtered-search').text()).toEqual('3 guests have mentioned "hello3"Back to all reviews');
  });
});
