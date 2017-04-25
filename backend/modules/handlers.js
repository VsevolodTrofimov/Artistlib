// handlers for all websocket_handler emitted actions
databaseWrapper = require('./databaseWrapper');
curry = require('./curry');
logging = require('./logging');

const log_instance = logging();
const db = databaseWrapper();

module.exports.tagAddHandler = (ev, userid) => {
  let log = curry.call(log_instance, log_instance.log)('tagAddHandler');
  log('Processing request for ' + userid.toString() + '.');
  if (ev.tagType !== 'global' && ev.tagType !== 'personal') {
    log('Incompatible action structure.');
    return;
  }
  let artist = ev.artistId.toString();
  let user = userid.toString();

  try {
    tags = (ev.tagType === 'global') ? db.getRoot().artists[artist].tags
                                     : db.getRoot().artists[artist].usertags[user];
  } catch (e) {
    log('No such artist: \'' + artist + '\'.');
    return;
  }
  if (tags.indexOf(ev.tagValue) !== -1) {
    log('Tag already exists, aborting.');
  } else {
    let tag = ev.tagValue.toString();
    tags.push(tag);
    log('Tag \'' + tag + '\' added'
      + ((ev.tagType === 'personal') ? ' to personal tags' : '')
      + ' for artist \'' + ev.artistId.toString() + '\'.');
  }
};
