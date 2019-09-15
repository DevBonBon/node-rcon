var RCON = require('../RCON');
var rcon = new RCON();

rcon.connect('password')
  .then(() => {
    console.log('Connected and authenticated.');
    return rcon.command('/op superman');
  })
  .then(response => {
    console.log(`Result of op: ${response}`);
    return rcon.command('/deop superman');
  })
  .then(response => {
    console.log(`Result of deop: ${response}`);
    return rcon.command('/help');
  })
  .then(response => {
    console.log(`Result of help: ${response}`);
  })
  .catch(error => {
    console.error(`An error occured: ${error}`);
  });
