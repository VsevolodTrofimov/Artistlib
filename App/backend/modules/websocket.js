// npm dependencies
const gauth = require('google-auth-library');
// module dependencies
const logging = require('./logging');
const ws = require('ws');
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

  constructor(server) {
    this._server = new ws.Server({server});
    let self = this;

    this._server.on('connection', (socket) => {
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
            socket.send(JSON.stringify(buildArtists(userid)));
          } else {
            log('Authentication failed: ' + e.toString());
          }
        });
      }

      socket.on('message', (data) => {
        let ev;
        try {
          ev = JSON.parse(data);
        } catch (e) {
          log('Incompatible action structure.');
          return;
        }

        if (ev.type !== authFactory.type) {
          let response = self.handle(ev, userid);
          if (response) socket.send(JSON.stringify(response));
        } else {
          auth(ev);
        }
      });

      socket.on('close', () => {
        log('Connection closed.');
      });

      socket.on('error', () => {
        log('Connection error with a client.');
      });
    });

    this.handlers = {};
    log('Websocket server is in listen mode.');
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

}
module.exports = WebsocketRequestHandler;
