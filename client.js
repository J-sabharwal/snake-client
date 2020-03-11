const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.177',
    port: 50541
  });

  conn.on('connect', () => {
    conn.write('Name: JAS');
  });

  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Successfully connected to game server');
  })
  return conn;

};

  module.exports = connect;