// Imports
const express = require('express');
// const expressStaticGzip = require('express-static-gzip'); // uncomment when USING proxy
const redis = require('redis');
const redisPort = 6379;
const redisClient = redis.createClient(redisPort);
const app = express();
const port = 3210;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const db = require('../database/index.js');

// Middleware
app.use(cors());
app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/listings/:listingID', express.static(`${__dirname}/../public`)); // uncomment when NOT USING proxy
// app.use(expressStaticGzip(`${__dirname}/../public`, { // uncomment when USING proxy
//   enableBrotli: true,
//   orderPreference: ['br', 'gz'],
//   setHeaders(res, path) {
//     res.setHeader('Cache-Control', 'public, max-age=31536000');
//   },
// }));

// Redis cache middleware
let cacheReviews = (req, res, next) => {
  const listingID = req.params.listing_id;
  redisClient.get(`reviews${listingID}`, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    if (data !== null) {
      res.status(200).send(JSON.parse(data));
    } else {
      next();
    }
  });
};

let cacheHost = (req, res, next) => {
  const listingID = req.params.listing_id;
  redisClient.get(`host${listingID}`, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    if (data !== null) {
      res.status(200).send(JSON.parse(data));
    } else {
      next();
    }
  });
};

let cacheUser = (req, res, next) => {
  const userID = req.params.user_id;
  redisClient.get(`user${userID}`, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    if (data !== null) {
      res.status(200).send(JSON.parse(data));
    } else {
      next();
    }
  });
};

let cacheResponse = (req, res, next) => {
  const responseID = req.params.response_id;
  redisClient.get(`response${responseID}`, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    if (data !== null) {
      res.status(200).send(JSON.parse(data));
    } else {
      next();
    }
  });
};

// APIs
app.get('/api/listings/:listing_id/reviews', cacheReviews, (req, res) => {
  const listingID = req.params.listing_id;
  db.getListingReviews(listingID, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      redisClient.setex(`reviews${listingID}`, 3600, JSON.stringify(data));
      res.status(200).send(data);
    }
  });
});

app.get('/api/listings/:listing_id/host', cacheHost, (req, res) => {
  const listingID = req.params.listing_id;
  db.getListingHost(listingID, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      redisClient.setex(`host${listingID}`, 3600, JSON.stringify(data));
      res.status(200).send(data);
    }
  });
});

app.get('/api/listings/users/:user_id', cacheUser, (req, res) => {
  const userID = req.params.user_id;
  db.getReviewUser(userID, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      redisClient.setex(`user${userID}`, 3600, JSON.stringify(data));
      res.status(200).send(data);
    }
  });
});

app.get('/api/listings/review/response/:response_id', cacheResponse, (req, res) => {
  const responseID = req.params.response_id;
  db.getReviewResponse(responseID, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      redisClient.setex(`response${responseID}`, 3600, JSON.stringify(data));
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
