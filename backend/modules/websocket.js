const CLIENT_ID = '525667590047-h95h4ir4208t74l1b8vnksmll2mhmtrq.apps.googleusercontent.com';
const gauth = require('google-auth-library');
const auth = new gauth;
const client = new auth.OAuth2(CLIENT_ID, '', '');
const logging = require('./logging')();
const ws = require('nodejs-websocket');
const curry = require('./curry');
const log = curry(logging, logging.log)('WebsocketRequestHandler');

var websocket = (() => {
  class WebsocketRequestHandler {

    constructor(port) {
      var self = this;
      this._port = port;
      this._server = ws.createServer((connection) => {
        var userid;
        log('New connection.');

        function auth(ev) {
          if (typeof ev.token === 'undefined') {
            log('Authentication failed; no token provided.');
            return;
          }

          client.verifyIdToken(ev.token, CLIENT_ID, (e, login) => {
            if(!e) {
              userid = login.getPayload()['sub'];
              log('User authentication complete.')
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
            log('Incompatible event struct format.');
            return;
          }
          if (ev.type !== 'auth')
            self.handle(ev, userid);
          else
            auth(ev);
        });

        connection.on('close', (code, reason) => {
          log('Connection closedю');
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
      try {
        var handler = this.handlers[ev.type];
        handler(ev, userid);
      } catch (e) {
        log('Error while routing an event: ' + e.toString());
      }
    }

    listen() {
      if (typeof this._server !== 'undefined') {
        this._server.listen(this._port);
        log('Listening on port ' + this._port.toString() + '.');
      }
    }

  }

  return WebsocketRequestHandler;

}) ();

module.exports = websocket;
