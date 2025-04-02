const eventEmit = require('events');

const event = new eventEmit();
event.on('say', (name) => {
  console.log(`Hello ${name}`);
});
event.on('say', (name) => {
  console.log(`Hi ${name}`);
});
event.emit('say', 'John');
