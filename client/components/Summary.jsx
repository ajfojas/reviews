import React from 'react';
import StarRatings from 'react-star-ratings';
import Search from './Search.jsx';
import styled from 'styled-components';

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let summaryInfo = (
      <div>
        <div>
          <AccuracyRating>Accuracy</AccuracyRating>
          <StarRatings
            rating={this.props.allStates.accuracy}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
          <LocationRating>Location</LocationRating>
          <StarRatings
            rating={this.props.allStates.location}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
        </div>
        <div>
          <CommunicationRating>Communication</CommunicationRating>
          <StarRatings
            rating={this.props.allStates.communication}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
          <CheckinRating>Check-in</CheckinRating>
          <StarRatings
            rating={this.props.allStates.checkin}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
        </div>
        <div>
          <CleanlinessRating>Cleanliness</CleanlinessRating>
          <StarRatings
            rating={this.props.allStates.cleanliness}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
          <ValueRating>Value</ValueRating>
          <StarRatings
            rating={this.props.allStates.value}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
        </div>
      </div>
    );

    if (this.props.allStates.filteredReviews.length > 0) {
      let guestGrammar = this.props.allStates.filteredReviews.length === 1 ? 'guest has' : 'guests have';
      summaryInfo = (
        <div id="filtered-search">
          {this.props.allStates.filteredReviews.length} {guestGrammar} mentioned "<b>{this.props.allStates.search}</b>"
          <BackToAllReviews onClick={this.props.backToAllReviews}>Back to all reviews</BackToAllReviews>
        </div>
      );
    }

    return(
      <div>
        <Block>
          <TotalReviews id="summary-reviews">{this.props.allStates.reviews.length} Reviews</TotalReviews>
          <StarRatings
            rating={this.props.allStates.overall}
            starRatedColor="rgb(0, 132, 137)"
            starEmptyColor="rgb(216, 216, 216)"
            starDimension="20px"
            starSpacing="2px"
            name='rating'
          />
          <Search searchSubmit={this.props.searchSubmit} />
        </Block>
        <BlockNoBorder>
          {summaryInfo}
        </BlockNoBorder>
      </div>
    )
  }
}

export default Summary;

// Styling
const Block = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #eee;
`;

const BlockNoBorder = styled.div`
  padding: 10px 0;
`;

const TotalReviews = styled.span`
  font-size: 24px;
  font-weight: bold;
  padding-right: 12px;
`;

const AccuracyRating = styled.span`
  display: inline-block;
  padding: 10px 125px 10px 0;
`;

const LocationRating = styled.span`
  display: inline-block;
  padding: 10px 125px 10px 25px;
`;

const CommunicationRating = styled.span`
  display: inline-block;
  padding: 10px 80px 10px 0px;
`;

const CheckinRating = styled.span`
  display: inline-block;
  padding: 10px 122px 10px 25px;
`;

const CleanlinessRating = styled.span`
  display: inline-block;
  padding: 10px 109px 10px 0;
`;
const ValueRating = styled.span`
  display: inline-block;
  padding: 10px 145px 10px 25px;
`;

const BackToAllReviews = styled.span`
  float: right;
  color: #008489;
  font-size: 14px;
`;
