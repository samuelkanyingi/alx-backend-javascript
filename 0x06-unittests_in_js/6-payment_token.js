function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
	    reject(new Error('Fialed response from the API'));
    }
  });
}

module.exports = getPaymentTokenFromAPI;
