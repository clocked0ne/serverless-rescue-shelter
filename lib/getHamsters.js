'use strict';

const got = require('got');
const orderBy = require('lodash/orderBy');
const map = require('lodash/map');
const omit = require('lodash/omit');
const transformData = require('./transformData');

const getHamsters = async (options) => {
  try {
    const response = await got.get('hamsters', options);
    const hamsters = transformData(response.body.body, 'Hamster');

    // Order is inverted for timestamps, where larger is newer
    const hamstersByAgeAscending = orderBy(hamsters, 'timestamp', 'desc');

    return map(hamstersByAgeAscending, hamster => omit(hamster, 'timestamp'));
  }
  catch (err) {
    console.log(err);
    return [];
  }
};

module.exports = getHamsters;
