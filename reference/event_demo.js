const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on('event', () => console.log("Event Fired!"))

//Init event
myEmitter.emit('event')