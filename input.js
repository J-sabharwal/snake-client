let connection;

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === "w") {
    connection.write("Move: up");
  }
  if (data === "a") {
    connection.write("Move: left");
  }
  if (data === "s") {
    connection.write("Move: down");
  }
  if (data === "d") {
    connection.write("Move: right");
  }
};
// inputted the conn via the setupInput(connect()) input in play.js which applied conn from client .js
const setupInput = function(conn) {
  connection = conn;
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

module.exports = setupInput;