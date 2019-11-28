'use strict';

const got = require('got');
const orderBy = require('lodash/orderBy');
const map = require('lodash/map');
const omit = require('lodash/omit');
const transformData = require('./transformData');

const getDogs = async (options) => {
  try {
    const response = await got.get('dogs', options);
    const dogs = transformData(response.body.body, 'Dog');

    // Order is inverted for timestamps, where larger is newer
    const dogsByAgeDescending = orderBy(dogs, 'timestamp', 'asc');

    return map(dogsByAgeDescending, dog => omit(dog, 'timestamp'));
  }
  catch (err) {
    console.log(err);
    return [];
  }
};

module.exports = getDogs;
