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
const database = require('./modules/databaseWrapper');
const db = database('db.json', 7);
const websocket_handler = require('./modules/websocket');
const handlers = require('./modules/handlers');
const dataSkel = require('./modules/dataSkel');
const idGenerator = require('./modules/idGenerator');
const factories = require('./modules/factoryBulkRequire');

const SERVE_DIR = '../dist';
// actionFactory imports
// import tagAdd from '../App/common/actionFactories/tagAdd';

// dependency init
const app = express();
const log = curry.call(log_instance, log_instance.log)('main app');
const id = idGenerator();

// ===
log('Starting artist-library...');
app.use(express.static(SERVE_DIR));
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

ws.handlers[factories.tagAdd.type] = handlers.tagAddRemoveHandler;
ws.handlers[factories.tagRemove.type] = handlers.tagAddRemoveHandler;
ws.handlers[factories.artistRequest.type] = handlers.artistAddRemoveHandler;
ws.handlers[factories.artistRemove.type] = handlers.artistAddRemoveHandler;

db.forceUpdate().then(() => {
  let root = db.getRoot();
  if ( ! root.hasOwnProperty('artists')) {
    log('Initializing default database state...');
    Object.assign(root, dataSkel.defaultDatabaseState());
    Object.assign(root.artists, dataSkel.artistInit('ricegnat', 'dunno'));
  }
  id.setOffset(root.id_offset);
});

var safe_exit = () => {
  log('Terminating.');
  db.forceDump().then(() => {
    log_instance.destruct();
    process.exit(0);
  });
};

var increment = () => {
  db.getRoot().id_offset += 1;
}

id.addIncrementListener(increment);

process.on('SIGINT', safe_exit);
process.on('SIGTERM', safe_exit);
