const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with SUM, 100, 20', function() {
    // Stub the calculateNumber function to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Spy on console.log to track calls to it
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function being tested
    sendPaymentRequestToApi(100, 20);

    // Assertions
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore the original functions
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
