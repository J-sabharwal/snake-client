const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.177',
    port: 50541
  });
  conn.setEncoding('utf8'); 

  return conn;
}

  module.exports = connect;