'use strict';

const map = require('lodash/map');
const humaniseDate = require('./humaniseDate');

const transformData = (data, type) => {
  return map(data, item => {
    const { years, months, timestamp } = humaniseDate(item.dateOfBirth);

    const transformedItem = {
      type,
      fullName: `${item.forename} ${item.surname}`,
      age: { years, months },
      timestamp,
      image: item.image.url
    };

    if (item.colour)
      transformedItem.colour = item.colour;

    return transformedItem;
  });
};

module.exports = transformData;
