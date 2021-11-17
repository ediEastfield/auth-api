const ClientError = require('./ClientError');

class NotFoundErorr extends ClientError {
  constructor(message) {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

module.exports = NotFoundErorr;
