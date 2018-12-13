let EventEmitter = require('events')
const machine = {
    __proto__:new EventEmitter()
}
console.log(machine);
console.log(machine instanceof EventEmitter);
machine.on('event',msg => console.log(`Received message:${msg}`));
machine.emit('event','day day up');