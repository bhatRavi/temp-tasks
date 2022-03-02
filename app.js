 const Logger = require('./logger');

const logger = new Logger();


logger.on('LoggedIn',(arg) =>{
    console.log("Listener called",arg);
});



 logger.log('application');

