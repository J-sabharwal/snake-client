const connect = require('./client');
console.log('Connecting ...');
connect();

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  // process is halted and resume with resume it.
  stdin.resume();

  // event handler is when it accepts the data, it will process the function.
  // stdin.on = when its connected
  stdin.on('data', handleUserInput);
  return stdin;
};

setupInput();
/**
 * Establishes connection with the game server
 */
// const connect = function() {
//   const conn = net.createConnection({
//     host: '192.168.88.177',
//     port: 50541
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8');

//   return conn;
// }