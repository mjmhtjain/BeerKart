class ServerResponse{
    constructor(success = false, message = '', data = ''){
        this.success = success;
        this.message = message;
        this.data = data;
    }
}

module.exports = ServerResponse;