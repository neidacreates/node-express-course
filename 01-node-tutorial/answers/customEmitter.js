const EventEmitter = require("events");  
const emitter = new EventEmitter();  

// async function that waits on an event
const waitForAnEvent = () => {  
  return new Promise((resolve) => {  
    emitter.on("Event happens", (msg) => resolve(msg));  
  });  
};  
const doWait = async () => {  
  const msg = await waitForAnEvent();  
  console.log("We got an event! Here it is: ", msg);  
};  
doWait();  
emitter.emit("Event happens", "Hello World!");  