const eventEmitter = require('events');

const eventemit = new eventEmitter();

eventemit.emit('TEST_EVENT'); //we invoke here

eventemit.on('TEST_EVENT',()=>{  // we subs here
    console.log('Test event was fired');
})
eventemit.on('TEST_EVENT',()=>{
    console.log('Test event was fired');
})
eventemit.on('TEST_EVENT',()=>{
    console.log('Test event was fired');
})

// althoug we subs 3 time it will not print as event inovke before  so we need to emit after subs
// or we can use immediateset on eventeimte before

// this should be abovve the subs line
setImmediate(()=>{
    eventemit.emit('TEST_EVENT');
})