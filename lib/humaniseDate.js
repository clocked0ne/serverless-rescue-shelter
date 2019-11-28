'use strict';

const { DateTime, Interval } = require('luxon');

const humaniseDate = date => {
  const now = DateTime.local();
  const before = DateTime.fromISO(date);
  const dateObject = Interval.fromDateTimes(before, now).toDuration(['years', 'months']).toObject();
  return { years: dateObject.years, months: Math.floor(dateObject.months), timestamp: before.toMillis() };
};

module.exports = humaniseDate;
