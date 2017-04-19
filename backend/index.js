const dateformat = require('dateformat');
const curry = require('./modules/curry');
const logging = require('./modules/logging')({
  'stdout': true,
  'file': __dirname + '/logs/run-' + dateformat(new Date(), 'mm-dd-yyyy_HH-MM') + '.log'
});
const websocket_handler = require('./modules/websocket');
const express = require('express');
const app = express();
const log = curry(logging, logging.log)('main app');

log('Starting artist-library...');
app.use(express.static('test'));
app.listen(80, /*process.env.PORT,*/ () => {
  log('Web-server is in listen mode.')
});

var ws = new websocket_handler(8001);
ws.listen();

ws.handlers.authtest = (ev, userid) => {
  log('Oh hey!');
  log('Hello dear ' + userid.toString() + '!');
  log(ev.data.toString());
}
