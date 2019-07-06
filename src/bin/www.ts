#!/usr/bin/env node

/**
 * Module dependencies.
 */
import App from './../app';
import * as http from 'http';

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT);
const app = new App();
app.express.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app.express);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const result = parseInt(val, 10);

  if (isNaN(result)) {
    // named pipe
    return val;
  }

  if (result >= 0) {
    // port number
    return result;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;

  console.log('Node Server listening on ' + bind + ' in ' + process.env.SERV_MODE + ' mode');
}
