'use strict';

const got = require('got');
const orderBy = require('lodash/orderBy');
const groupBy = require('lodash/groupBy');
const map = require('lodash/map');
const each = require('lodash/forEach');
const flattenDeep = require('lodash/flattenDeep');
const omit = require('lodash/omit');
const transformData = require('./transformData');

const getCats = async (options) => {
  try {
    const response = await got.get('cats', options);
    const cats = transformData(response.body.body, 'Cat');

    // Order is inverted for timestamps, where larger is newer
    const catsByAgeDescending = orderBy(cats, 'timestamp', 'asc');

    // Ginger cats should appear first, followed black cats, followed by any other colours
    const catsGroupedByColour = groupBy(catsByAgeDescending, 'colour');
	
    const orderedCatGroups = [[], [], []];

    each(Object.keys(catsGroupedByColour), colour => {
      if (colour === 'ginger') {
        orderedCatGroups[0].push(catsGroupedByColour['ginger'])
      }
      else if (colour === 'black') {
        orderedCatGroups[1].push(catsGroupedByColour['black'])
      }
      else {
        orderedCatGroups[2].push(catsGroupedByColour[colour])
      }
    });

    return map(flattenDeep(orderedCatGroups), cat => omit(cat, 'timestamp'));
  }
  catch (err) {
    console.log(err);
    return [];
  }
};

module.exports = getCats;
