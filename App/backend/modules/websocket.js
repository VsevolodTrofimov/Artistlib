// npm dependencies
const gauth = require('google-auth-library');
// module dependencies
const logging = require('./logging');
const ws = require('nodejs-websocket');
const curry = require('./curry');
const buildArtists = require('./buildArtists');
const authFactory = require('./factoryBulkRequire').userAuth;
// dependency init
const log_instance = logging();
const log = curry.call(log_instance, log_instance.log)('WebsocketRequestHandler');
// Google Sign-In client ID & init
const CLIENT_ID = '525667590047-h95h4ir4208t74l1b8vnksmll2mhmtrq.apps.googleusercontent.com';
const auth = new gauth;
const client = new auth.OAuth2(CLIENT_ID, '', '');

class WebsocketRequestHandler {

  constructor(port) {
    var self = this;
    this._port = port;
    this._server = ws.createServer((connection) => {
      var userid;
      log('New connection.');

      function auth(ev) {
        if (typeof ev.authToken === 'undefined') {
          log('Authentication failed; no token provided.');
          return;
        }

        client.verifyIdToken(ev.authToken, CLIENT_ID, (e, login) => {
          if(!e) {
            userid = login.getPayload()['sub'];
            log('User authentication complete.');
            connection.sendText(JSON.stringify(buildArtists(userid)));
          } else {
            log('Authentication failed: ' + e.toString());
          }
        });
      }

      connection.on('text', (data) => {
        let ev;
        try {
          ev = JSON.parse(data);
        } catch (e) {
          log('Incompatible action structure.');
          return;
        }

        if (ev.type !== authFactory.type) {
          let response = self.handle(ev, userid);
          if (response) connection.sendText(JSON.stringify(response));
        } else {
          auth(ev);
        }
      });

      connection.on('close', (code, reason) => {
        log('Connection closed.');
      });

      connection.on('error', (err) => {
        log('Connection error with a client.');
      });

    });

    this.handlers = {};
  }

  handle(ev, userid) {
    if (typeof userid === 'undefined') {
      log('Rejected unauthorized access to ' + ev.type + '.');
      return;
    }

    let response;
    try {
      var handler = this.handlers[ev.type];
      response = handler(ev, userid);
    } catch (e) {
      log('Error while routing an action: ' + e.toString());
    }

    return response;
  }

  listen() {
    if (typeof this._server !== 'undefined') {
      this._server.listen(this._port);
      log('Listening on port ' + this._port.toString() + '.');
    }
  }

}

module.exports = WebsocketRequestHandler;
