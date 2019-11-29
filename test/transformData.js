'use strict';

const expect = require('chai').expect;
const MockDate = require('mockdate');
MockDate.set('2019-11-28');
const transformData = require('../lib/transformData');
const DOGS = require('./fixtures/dogs').body;
const CATS = require('./fixtures/cats').body;
const HAMSTERS = require('./fixtures/hamsters').body;

describe('lib/transformData', () => {
  it('successfully transforms data into objects with properties: `type`, `fullName`, `age` and `image`', () => {
    expect(transformData(DOGS, 'Dog')).to.deep.equal([
      {
        type: 'Dog',
        fullName: 'Nicky Stephanos',
        age: { years: 6, months: 8 },
        timestamp: 1364083200000,
        image: 'https://dog.ceo/api/img/brabancon/n02112706_1072.jpg'
      },
      {
        type: 'Dog',
        fullName: 'Violet Chomsky',
        age: { years: 13, months: 5 },
        timestamp: 1148857200000,
        image: 'https://dog.ceo/api/img/retriever-golden/n02099601_2536.jpg'
      },
      {
        type: 'Dog',
        fullName: 'Hugo Matteau',
        age: { years: 11, months: 3 },
        timestamp: 1219532400000,
        image: 'https://dog.ceo/api/img/clumber/n02101556_3690.jpg'
      },
      {
        type: 'Dog',
        fullName: 'Patches Sanchez',
        age: { years: 12, months: 8 },
        timestamp: 1174003200000,
        image: 'https://dog.ceo/api/img/setter-english/n02100735_216.jpg'
      },
      {
        type: 'Dog',
        fullName: 'Diana Ionita',
        age: { years: 7, months: 5 },
        timestamp: 1338505200000,
        image: 'https://dog.ceo/api/img/terrier-australian/n02096294_4440.jpg'
      }
    ]);
    expect(transformData(CATS, 'Cat')).to.deep.equal([
      {
        type: 'Cat',
        fullName: 'Dixie Mason',
        age: { years: 10, months: 9 },
        timestamp: 1234483200000,
        image: 'http://25.media.tumblr.com/tumblr_m3qf8sQXfQ1qhwmnpo1_1280.jpg',
        colour: 'black'
      },
      {
        type: 'Cat',
        fullName: 'Sherri Baldwin',
        age: { years: 2, months: 9 },
        timestamp: 1486166400000,
        image: 'https://i.pinimg.com/736x/c4/56/22/c45622f45134a5128dc66d9018ef49e5--cat-things-funny-things.jpg',
        colour: 'ginger'
      },
      {
        type: 'Cat',
        fullName: 'Pedro Sanchez',
        age: { years: 8, months: 1 },
        timestamp: 1317337200000,
        image: 'http://www.catster.com/wp-content/uploads/2014/08/An-albino-cat.jpg',
        colour: 'white'
      },
      {
        type: 'Cat',
        fullName: 'Lucy Morales',
        age: { years: 9, months: 8 },
        timestamp: 1269302400000,
        image: 'https://i.pinimg.com/736x/01/59/c3/0159c31c438de4bf00f23960390a68f6--animal-wallpaper-hd-wallpaper.jpg',
        colour: 'gray'
      },
      {
        type: 'Cat',
        fullName: 'Omar Rodriguez',
        age: { years: 8, months: 4 },
        timestamp: 1310425200000,
        image: 'http://www.great-pictures-of-cats.com/image-files/cat-pics-1.jpg',
        colour: 'ginger'
      },
      {
        type: 'Cat',
        fullName: 'Larry David',
        age: { years: 11, months: 10 },
        timestamp: 1200355200000,
        image: 'http://25.media.tumblr.com/tumblr_lpujhsofGQ1qdvbl3o1_1280.jpg',
        colour: 'black'
      },
      {
        type: 'Cat',
        fullName: 'Gary Neville',
        age: { years: 12, months: 2 },
        timestamp: 1190934000000,
        image: 'http://farm2.static.flickr.com/1316/5110427851_3e1ca3de4a.jpg',
        colour: 'ginger'
      }
    ]);
    expect(transformData(HAMSTERS, 'Hamster')).to.deep.equal([
      {
        type: 'Hamster',
        fullName: 'Felix Hamilton',
        age: { years: 4, months: 7 },
        timestamp: 1427929200000,
        image: 'https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/51167/5ee9a826-a4f5-4301-9068-1a4f6eb6fbed.jpg'
      },
      {
        type: 'Hamster',
        fullName: 'Gwendolyn Roy',
        age: { years: 3, months: 6 },
        timestamp: 1463958000000,
        image: 'https://i.ytimg.com/vi/xkxjNZComZg/maxresdefault.jpg'
      },
      {
        type: 'Hamster',
        fullName: 'Lorenzo Parsons',
        age: { years: 5, months: 3 },
        timestamp: 1408921200000,
        image: 'https://www.peta.org/wp-content/uploads/2016/09/hamster-602x401.jpg'
      }
    ]);
  });
});
