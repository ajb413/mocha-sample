var assert = require('assert');

const myGoogleCode = (pubCodeArray, authCodeArray) => {
  let result = false;

  if (pubCodeArray.includes('k14') || authCodeArray.includes('admin')) {
    result = true;
  }

  return result;
}

describe('Auth Tests', function() {
    it('return true for pub code of "k14"', function() {

      const pubCodeArray = ['k14'];
      const authCodeArray = [];

      let result = myGoogleCode(pubCodeArray, authCodeArray);

      assert.equal(result, true);
    });

    it('return false for pub code of (no pub code)', function() {

      const pubCodeArray = [];
      const authCodeArray = [];

      let result = myGoogleCode(pubCodeArray, authCodeArray);

      assert.equal(result, false);
    });

    it('return true for auth code of "admin"', function() {

      const pubCodeArray = [];
      const authCodeArray = ["admin"];

      let result = myGoogleCode(pubCodeArray, authCodeArray);

      assert.equal(result, true);
    });
});
