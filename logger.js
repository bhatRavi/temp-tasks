const EventEmitter = require("events");

class Logger extends EventEmitter{
    
 log(application){
    console.log(application);
     //raise event
    this.emit('LoggedIn',{name : 'Ravi', age : 24});
}
}

module.exports = Logger;


