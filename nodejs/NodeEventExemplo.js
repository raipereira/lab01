//import events module
var events = require('events');

//create an emitter obj
var eventEmitter = new events.EventEmitter();
//bind event and event handler
    //eventEmitter.on('eventName', eventHandler)
// fire an event
   //eventEmitter.emit('eventNane');

   // Create an event handler as follows  
   var connectHandler = function connected(){
        console.log('connection succesful');
        //fire the data_received event
        eventEmitter.emit('data_received'); 
   }

   // Bind the connection event with the handler
   eventEmitter.on('connection', connectHandler);

   //Bind the Data_received event with anonymous function
   eventEmitter.on('data_received', function(){
    console.log('data received succesfully');
   });

   //Fire connection event
   eventEmitter.emit('connection');
   console.log('program Ended');

