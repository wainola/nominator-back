const UserHandler = require('../../handlers/UserHandler');

// THIS MOCKING OBJECTS ARE JUST FOR TEST PURPOSES
// I DONT KNOW ANOTHER PATTERN FOR TESTING THE HANDLERS
// PERHAPS IT WILL BE MORE FITTED FOR THIS CLASS OF TEST JUST TO USE KNOCK OF
// ANOTHER MOCKING LIBRARY FOR HTTP REQUEST
class Response {
    constructor(){
        this.statusCode = undefined;
        this.sendObject = undefined;
    }
    async status(statusCode){
        this.statusCode = statusCode;
        return this.
    }
    async send(object){
        if(!this.statusCode){
            return object
        }
        return {
            status: this.statusCode,
            ...object
        }
    }
}

describe('UserHandler', () => {
  it('should return 200 after user registration, validating the correct form of the request object', async () => {});
  it('should return 422 after the user schema validation fails', async () => {});
});
