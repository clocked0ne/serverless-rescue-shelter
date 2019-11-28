'use strict';

const status = require('http-status');

const getDogs = require('./lib/getDogs');
const getCats = require('./lib/getCats');
const getHamsters = require('./lib/getHamsters');

const reqOptions = {
  baseUrl: process.env.BASE_URL || 'http://localhost',
  json: true
};

exports.handler = async (event, context) => {
  const dogs = await getDogs(reqOptions);
  const cats = await getCats(reqOptions);
  const hamsters = await getHamsters(reqOptions);
  
  if (!dogs.length && !cats.length && !hamsters.length) {
    return {
      "statusCode": status.INTERNAL_SERVER_ERROR,
      "body": JSON.stringify({ error: 'Error completing internal API requests, no data to return' }),
      "isBase64Encoded": false
    };
  }

  return {
    "statusCode": status.OK,
    "body": JSON.stringify(dogs.concat(cats, hamsters)),
    "isBase64Encoded": false
  };
};
