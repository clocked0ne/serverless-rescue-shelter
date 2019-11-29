'use strict';

const expect = require('chai').expect;
const MockDate = require('mockdate');
MockDate.set('2019-11-28');
const humaniseDate = require('../lib/humaniseDate');

describe('lib/humaniseDate', () => {
  it(`successfully returns ISO String dates as an object with properties for duration of years and months, with original timestamp`, () => {
    expect(humaniseDate('2013-03-24')).to.deep.equal({ years: 6, months: 8, timestamp: 1364083200000 });
    expect(humaniseDate('2006-05-29')).to.deep.equal({ years: 13, months: 5, timestamp: 1148857200000 });
    expect(humaniseDate('2016-07-12')).to.deep.equal({ years: 3, months: 4, timestamp: 1468278000000 });
  });
});
