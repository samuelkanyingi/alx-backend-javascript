// 8-api/api.test.js
const request = require('request');
const { expect } = require('chai');
let server;

describe('Index page', function () {
  before(function (done) {
    // Start the server before tests
    server = require('./api'); // Import the server instance
    // Wait a moment to ensure the server is up and running
    setTimeout(done, 1000);
  });

  it('should return status code 200 and the correct message', function (done) {
    request('http://localhost:7865/', function (error, response, body) {
      if (error) return done(error);

      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  after(function (done) {
    // Close the server after tests
    if (server) {
      server.close(done);
    } else {
      done();
    }
  });
});
