const eventEmitter =require('events')
//create class
class myEmitter extends eventEmitter{}
//initobject
const MyEmitter = new myEmitter();
//event listener
MyEmitter.on('event',()=>console.log('event Fired'))

//init event
MyEmitter.emit('event')
