'use strict';

const expect = require('chai').expect;
const humaniseDate = require('../lib/humaniseDate');

describe('lib/humaniseDate', () => {
  it(`successfully returns ISO String dates as a duration string of years and months with original timestamp`, () => {
    expect(humaniseDate('2013-03-24')).to.deep.equal({ years: 6, months: 8, timestamp: 1364083200000 });
    expect(humaniseDate('2006-05-29')).to.deep.equal({ years: 13, months: 5, timestamp: 1148857200000 });
    expect(humaniseDate('2016-07-12')).to.deep.equal({ years: 3, months: 4, timestamp: 1468278000000 });
  });
});
