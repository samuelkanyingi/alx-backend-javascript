const request = require('request');
const { expect } = require('chai');
let server;
const PORT = 7865;

describe('Index page', function () {
  before(function (done) {
    // Start the server before tests
    server = require('./api'); // Import the server instance
    server.listen(PORT, done); // Ensure server starts listening
  });

  it('should return status code 200 and the correct message', function (done) {
    request(`http://localhost:${PORT}/`, function (error, response, body) {
      if (error) return done(error);

      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  describe('Cart page', function () {
    it('should return status code 200 and the correct message when :id is a number', function (done) {
      request(`http://localhost:${PORT}/cart/12`, function (error, response, body) {
        if (error) return done(error);

        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return status code 404 when :id is NOT a number', function (done) {
      request(`http://localhost:${PORT}/cart/hello`, function (error, response, body) {
        if (error) return done(error);

        expect(response.statusCode).to.equal(404);
        expect(body).to.equal('Cannot GET /cart/hello');
        done();
      });
    });
  });

  after(function (done) {
    // Close the server after tests
    server.close(done);
  });
});
