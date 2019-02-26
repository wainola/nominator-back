class UserHandler {
  static async register(request, response) {
    console.log('db in request', 'database' in request);
    return response.status(200).send({ data: 'some shit' });
  }
}

module.exports = UserHandler;
