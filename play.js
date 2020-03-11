const connect = require('./client');
const setupInput = require('./input');
console.log('Connecting ...');
connect();

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