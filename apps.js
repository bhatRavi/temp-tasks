
const emitter = new EventEmitter();



//register listener
emitter.on('LoggedIn',function(){
    console.log("Listener is called");
});

//raise an event
emitter.emit("LoggedIn");