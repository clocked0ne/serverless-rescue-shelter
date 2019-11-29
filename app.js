'use strict';

const PORT = 5000;

const connect = require('connect');
const handler = require('./index').handler;

const app = connect();
 
app.use('/', (req, res) => handler().then(data => {
	res.statusCode = data.statusCode;
	res.end(data.body);
}));
 
const server = app.listen(PORT);
console.log(`Server listening on port ${PORT}`)

process
  .on('SIGINT', () => console.log('Server shutting down') || server.close())
  .on('SIGTERM', () => console.log('Server shutting down') || server.close());
