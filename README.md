# Reviews - MincTech [![Known Vulnerabilities](https://snyk.io/test/github/ajfojas/reviews/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ajfojas/reviews?targetFile=package.json) [![CircleCI](https://circleci.com/gh/ajfojas/reviews.svg?style=shield)](https://circleci.com/gh/ajfojas/reviews) [![codecov](https://codecov.io/gh/ajfojas/reviews/branch/master/graph/badge.svg)](https://codecov.io/gh/ajfojas/reviews)

Reviews list microservice demonstration and design for a lodging and hotel web page. Built with React, Express, and MySQL. Supports pagination and filtering based on terms searched.

> [Interactive Demo](http://ec2-54-67-92-32.us-west-1.compute.amazonaws.com:3210/listings/1/) - Navigate between listings 1 through 100 via url (/listings/:listing_id/)

![](https://i.imgur.com/G58aKKD.gif)

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

Explore the list of reviews by clicking on the pagination tabs. Filter reviews by utilizing the search bar.

## Requirements

- Node 6.13.0 or higher

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm run db
npm run seed
npm run build
npm run start (in a seperate terminal window)
```
