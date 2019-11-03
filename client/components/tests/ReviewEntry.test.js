import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ReviewEntry from '../ReviewEntry.jsx';
import mockAxios from 'axios';

describe('ReviewEntry component', () => {
  const review = {
    accuracy: 5,
    checkin: 5,
    cleanliness: 3,
    comment: '',
    communication: 4,
    date: 'September 2019',
    id: 1,
    listings_id: 50,
    location: 1,
    responses_id: 54,
    users_id: 71,
    value: 3,
  };

  const host = {
    host_name: 'name',
    host_pic: 'pic',
  };

  const listingUser = {
    data: [{
      id: 1,
      name: 'name',
      pic: 'pic',
      comment: '',
    }],
  };

  const reviewResponse = {
    data: [{
      id: 1,
    }],
  };

  // const axios = {
  //   get: jest.fn(() => Promise.resolve({
  //     data: null,
  //   })),
  // };

  // it('renders successfully', () => {
  //   shallow(<ReviewEntry className='review-entry' key={review.id} reviewEntry={review} hostInfo={host} />);
  // });

  it('calls axios to fetch user and response data', () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({

    }))

    const wrapper = shallow(<ReviewEntry className='review-entry' key={review.id} reviewEntry={review} hostInfo={host} />);

    console.log(wrapper)
  });
});
