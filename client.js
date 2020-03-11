const net = require('net');

 //connect is passed as param to setupInput in play.js, then setupInput in input.js is the passed the conn object in the param
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.177',
    port: 50541
  });

  const newFrame = 50;

  conn.on('connect', () => {
    conn.write('Name: JAS');
  });
 
  // conn.on('connect', () => {
  //   //setTimeout(() => conn.write('Move: up'), newFrame);
  // });

  // conn.on('connect', () => {
  //   setTimeout(() => conn.write('Move: down'), newFrame);
  // });
 
  // conn.on('connect', () => {
  //   setTimeout(() => conn.write('Move: left'), newFrame);
  // });
 
  // conn.on('connect', () => {
  //   setTimeout(() => conn.write('Move: right'), newFrame);
  // });
  
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Successfully connected to game server');
  });
  return conn;

};

module.exports = connect;