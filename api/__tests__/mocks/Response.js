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

const response = new Response();

module.exports = response;
