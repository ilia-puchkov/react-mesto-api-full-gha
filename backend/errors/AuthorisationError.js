/* eslint-disable linebreak-style */
class AuthorisationError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.statusCode = 401;
  }
}
module.exports = AuthorisationError;
