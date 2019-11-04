import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ReviewEntry from '../ReviewEntry.jsx';
import mockAxios from 'axios';
import styled from 'styled-components';

const ReadMore = styled.span`
  color: #008489;
`;

describe('ReviewEntry component', () => {
  const review = {
    accuracy: 5,
    checkin: 5,
    cleanliness: 3,
    comment: 'start comment ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- end comment',
    communication: 4,
    date: 'date',
    id: 1,
    listings_id: 50,
    location: 1,
    responses_id: 54,
    users_id: 71,
    value: 3,
  };

  const review2 = {
    accuracy: 5,
    checkin: 5,
    cleanliness: 3,
    comment: 'comment',
    communication: 4,
    date: 'date',
    id: 1,
    listings_id: 50,
    location: 1,
    responses_id: 54,
    users_id: 71,
    value: 3,
  };

  const host = {
    host_name: 'host name',
    host_pic: 'host pic',
  };

  mockAxios.get.mockImplementation(() => Promise.resolve({
    data: [{
      id: 1,
      name: 'name',
      pic: 'pic',
      comment: 'comment',
    }],
  }));

  it('renders successfully', () => {
    shallow(<ReviewEntry className='review-entry' key={review.id} reviewEntry={review} hostInfo={host} />);
  });

  it('calls axios to fetch user and response data', () => {
    shallow(<ReviewEntry className='review-entry' key={review.id} reviewEntry={review} hostInfo={host} />);

    expect(mockAxios.get).toHaveBeenCalledTimes(2);
    expect(mockAxios.get).toHaveBeenNthCalledWith(1, '/api/listings/users/71')
    expect(mockAxios.get).toHaveBeenNthCalledWith(2, '/api/listings/review/response/54');
  });

  it('displays host\'s response to review', () => {
    const wrapper = shallow(<ReviewEntry className='review-entry' key={review.id} reviewEntry={review} hostInfo={host} />);

    expect(wrapper.find('#response-profile-pic')).toHaveLength(1);
    expect(wrapper.find('#response-date').text()).toEqual('date');
  });

  it('displays truncated review', () => {
    const wrapper = shallow(<ReviewEntry className='review-entry' key={review.id} reviewEntry={review} hostInfo={host} />);

    const wrapper2 = shallow(<ReviewEntry className='review-entry' key={review2.id} reviewEntry={review2} hostInfo={host} />);

    expect(wrapper.find('#read-more')).toHaveLength(1);
    expect(wrapper2.find('#read-more')).toHaveLength(0);
  });

  it('expands truncated review', () => {
    const wrapper = shallow(<ReviewEntry className='review-entry' key={review.id} reviewEntry={review} hostInfo={host} />);
    expect(wrapper.find('#comment').text()).toEqual('start comment ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- end co...Read more');

    wrapper.find('#read-more').simulate('click', {target: {commentExpanded: true}});
    expect(wrapper.state().commentExpanded).toEqual(true);
    expect(wrapper.find('#comment').text()).toEqual('start comment ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- end comment');
  });

  it('displays review', () => {
    const wrapper = shallow(<ReviewEntry className='review-entry' key={review.id} reviewEntry={review} hostInfo={host} />);

    expect(wrapper.find('#profile-pic')).toHaveLength(1);
    expect(wrapper.find('#name').text()).toEqual('');
    expect(wrapper.find('#date').text()).toEqual('date');
  });

  it('catches any thrown errors', () => {
    mockAxios.get.mockImplementation(() => Promise.reject({
      data: [{
        id: 1,
        name: 'name',
        pic: 'pic',
        comment: 'comment',
      }],
    }));

    const app = shallow(<ReviewEntry className='review-entry' key={review.id} reviewEntry={review} hostInfo={host} />);

    app.instance().componentDidMount()
    expect(app.state('user')).toEqual({})
    expect(app.state('response')).toEqual('')
  });

});
