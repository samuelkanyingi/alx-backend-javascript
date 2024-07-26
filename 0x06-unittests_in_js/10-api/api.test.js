const request = require('request');
const { expect } = require('chai');
let server;
const PORT = 7865;

describe('Index page', function () {
  before(function (done) {
    server = require('./api');
    setTimeout(done, 1000); // Wait for server to start
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
    if (server) {
      server.close(done);
    } else {
      done();
    }
  });
});

describe('Cart page', function () {
  before(function (done) {
    server = require('./api');
    setTimeout(done, 1000); // Wait for server to start
  });

  it('should return status code 200 and the correct message for valid cart id', function (done) {
    request('http://localhost:7865/cart/12', function (error, response, body) {
      if (error) return done(error);

      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 for invalid cart id', function (done) {
    request('http://localhost:7865/cart/hello', function (error, response, body) {
      if (error) return done(error);

      expect(response.statusCode).to.equal(404);
      expect(response.headers['content-type']).to.include('text/html');
      expect(body).to.include('<pre>Cannot GET /cart/hello</pre>');
      done();
    });
  });

  after(function (done) {
    if (server) {
      server.close(done);
    } else {
      done();
    }
  });
});

describe('Available payments', function () {
  before(function (done) {
    server = require('./api');
    setTimeout(done, 1000); // Wait for server to start
  });

  it('should return correct payment methods', function (done) {
    request('http://localhost:7865/available_payments', function (error, response, body) {
      if (error) return done(error);

      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });

  after(function (done) {
    if (server) {
      server.close(done);
    } else {
      done();
    }
  });
});

describe('Login', function () {
  before(function (done) {
    server = require('./api');
    setTimeout(done, 1000); // Wait for server to start
  });

  it('should return welcome message with username', function (done) {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {
        userName: 'Betty'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    request(options, function (error, response, body) {
      if (error) return done(error);

      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  after(function (done) {
    if (server) {
      server.close(done);
    } else {
      done();
    }
  });
});
