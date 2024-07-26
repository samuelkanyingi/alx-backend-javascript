const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with the correct value when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(done); // in case of an unexpected rejection
  });

  it('should not resolve when success is false', function(done) {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Promise should not have resolved'));
      })
      .catch(error => {
	expect(error).to.be.an('error');
	expect(error.message).to.equal('Fialed response from the API');
        done();
      });
});
});
