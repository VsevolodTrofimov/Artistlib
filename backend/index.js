// npm dependencies
const dateformat = require('dateformat');
const express = require('express');
// module dependencies
const curry = require('./modules/curry');
const logging = require('./modules/logging');
const log_instance = logging({
  'stdout': true,
  'file': __dirname + '/logs/run-' + dateformat(new Date(), 'mm-dd-yyyy_HH-MM') + '.log'
});
const websocket_handler = require('./modules/websocket');
const database = require('./modules/databaseWrapper');
const db = database('db.json', 0.5);
const handlers = require('./modules/handlers');
const dataSkel = require('./modules/dataSkel');

// actionFactory imports
// import tagAdd from '../App/common/actionFactories/tagAdd';

// dependency init
const app = express();
const log = curry.call(log_instance, log_instance.log)('main app');
// ===
log('Starting artist-library...');
app.use(express.static('test'));
app.listen(80, /*process.env.PORT,*/ () => {
  log('Web-server is in listen mode.')
});

var ws = new websocket_handler(8001);
ws.listen();
// test handler
ws.handlers.authtest = (ev, userid) => {
  log('Oh hey!');
  log('Hello dear ' + userid.toString() + '!');
  log(ev.data.toString());
}

ws.handlers['TAG_ADD'] = handlers.tagAddHandler;

db.forceUpdate().then(() => {
  let ref = db.getRoot();
  if ( ! ref.hasOwnProperty('artists')) {
    log('Initializing default database state...');
    Object.assign(ref, dataSkel.defaultDatabaseState());
    Object.assign(ref.artists, dataSkel.artistInit('ricegnat'));
  }
});

var safe_exit = () => {
  log('Terminating.');
  db.forceDump().then(() => {
    log_instance.destruct();
    process.exit(0);
  });
};

process.on('SIGINT', safe_exit);
process.on('SIGTERM', safe_exit);
