'use strict';

const expect = require('chai').expect;
const MockDate = require('mockdate');
MockDate.set('2019-11-28');
const LambdaTester = require('lambda-tester');
const sinon = require('sinon');
const got = require('got');
let lambda; 

const DOGS_RESPONSE = require('./fixtures/dogs');
const CATS_RESPONSE = require('./fixtures/cats');
const HAMSTERS_RESPONSE = require('./fixtures/hamsters');


describe('Lambda handler', () => {

  before(done => {
    sinon.stub(got, 'get')
      .onFirstCall().rejects(new Error('test API call failed'))
      .onSecondCall().rejects(new Error('test API call failed'))
      .onThirdCall().rejects(new Error('test API call failed'))
      .onCall(3).resolves({
        statusCode: 200,
        body: DOGS_RESPONSE
      })
      .onCall(4).resolves({
        statusCode: 200,
        body: CATS_RESPONSE
      })
      .onCall(5).resolves({
        statusCode: 200,
        body: HAMSTERS_RESPONSE
      });
    lambda = require( '../index');
    done();
  });
  after(done => {
    got.get.restore();
    done();
  });
  
  it('500 error occurs when all requests to the rescue shelter API fail', () => {
    return LambdaTester(lambda.handler)
      .event({})
      .expectResolve(result => {
        expect(result.statusCode).to.exist;
        expect(result.statusCode).to.equal(500);
      });
  });
  
  
  it('200 ok returns the correct data payload if all API requests are successful', () => {
    return LambdaTester(lambda.handler)
      .event({})
      .expectResolve(result => {console.log(result);
        expect(result.statusCode).to.exist;
        expect(result.statusCode).to.equal(200);
		expect(result.body).to.exist;
		expect(result.body).to.equal('[{"type":"Dog","fullName":"Violet Chomsky","age":{"years":13,"months":5},"image":"https://dog.ceo/api/img/retriever-golden/n02099601_2536.jpg"},{"type":"Dog","fullName":"Patches Sanchez","age":{"years":12,"months":8},"image":"https://dog.ceo/api/img/setter-english/n02100735_216.jpg"},{"type":"Dog","fullName":"Hugo Matteau","age":{"years":11,"months":3},"image":"https://dog.ceo/api/img/clumber/n02101556_3690.jpg"},{"type":"Dog","fullName":"Diana Ionita","age":{"years":7,"months":5},"image":"https://dog.ceo/api/img/terrier-australian/n02096294_4440.jpg"},{"type":"Dog","fullName":"Nicky Stephanos","age":{"years":6,"months":8},"image":"https://dog.ceo/api/img/brabancon/n02112706_1072.jpg"},{"type":"Cat","fullName":"Gary Neville","age":{"years":12,"months":2},"image":"http://farm2.static.flickr.com/1316/5110427851_3e1ca3de4a.jpg","colour":"ginger"},{"type":"Cat","fullName":"Omar Rodriguez","age":{"years":8,"months":4},"image":"http://www.great-pictures-of-cats.com/image-files/cat-pics-1.jpg","colour":"ginger"},{"type":"Cat","fullName":"Sherri Baldwin","age":{"years":2,"months":9},"image":"https://i.pinimg.com/736x/c4/56/22/c45622f45134a5128dc66d9018ef49e5--cat-things-funny-things.jpg","colour":"ginger"},{"type":"Cat","fullName":"Larry David","age":{"years":11,"months":10},"image":"http://25.media.tumblr.com/tumblr_lpujhsofGQ1qdvbl3o1_1280.jpg","colour":"black"},{"type":"Cat","fullName":"Dixie Mason","age":{"years":10,"months":9},"image":"http://25.media.tumblr.com/tumblr_m3qf8sQXfQ1qhwmnpo1_1280.jpg","colour":"black"},{"type":"Cat","fullName":"Lucy Morales","age":{"years":9,"months":8},"image":"https://i.pinimg.com/736x/01/59/c3/0159c31c438de4bf00f23960390a68f6--animal-wallpaper-hd-wallpaper.jpg","colour":"gray"},{"type":"Cat","fullName":"Pedro Sanchez","age":{"years":8,"months":1},"image":"http://www.catster.com/wp-content/uploads/2014/08/An-albino-cat.jpg","colour":"white"},{"type":"Hamster","fullName":"Gwendolyn Roy","age":{"years":3,"months":6},"image":"https://i.ytimg.com/vi/xkxjNZComZg/maxresdefault.jpg"},{"type":"Hamster","fullName":"Felix Hamilton","age":{"years":4,"months":7},"image":"https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/51167/5ee9a826-a4f5-4301-9068-1a4f6eb6fbed.jpg"},{"type":"Hamster","fullName":"Lorenzo Parsons","age":{"years":5,"months":3},"image":"https://www.peta.org/wp-content/uploads/2016/09/hamster-602x401.jpg"}]');
      });
  });
  
});
