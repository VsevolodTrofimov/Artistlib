// handlers for all websocket_handler emitted actions
const databaseWrapper = require('./databaseWrapper');
const curry = require('./curry');
const logging = require('./logging');
const dataSkel = require('./dataSkel');
const factories = require('./factoryBulkRequire');

const log_instance = logging();
const db = databaseWrapper();

module.exports.tagAddRemoveHandler = (ev, userid) => {
  let log = curry.call(log_instance, log_instance.log)('tagAddRemoveHandler');
  let artist = ev.artistId.toString();
  let user = userid.toString();
  let root = db.getRoot();
  log(`Processing request for ${user}.`);
  if (ev.tagType !== 'global' && ev.tagType !== 'personal') {
    log('Incompatible action structure.');
    return;
  }
  if (ev.tagType === 'global' && typeof root.artists[artist] === 'undefined') {
    log('No such artist.');
    return;
  } else if (ev.tagType === 'personal' &&
  typeof root.artists[artist].usertags[user] === 'undefined') {
    log(`Given user has no personal tags for artist '${root.artists[artist].name}'.`);
    Object.assign(root.artists[artist].usertags,
      dataSkel.userTagsInit(user));
  }
  tags = (ev.tagType === 'global') ? root.artists[artist].tags
                                   : root.artists[artist].usertags[user];

  switch (ev.type) {
    case factories.tagAdd.type:
      if (tags.indexOf(ev.tagValue) !== -1) {
        log('Tag already exists, aborting.');
      } else {
        let tag = ev.tagValue.toString();
        tags.push(tag);
        log(`Tag '${tag}' added` +
           `${((ev.tagType === 'personal') ? ' to personal tags' : '')}` +
            ` for artist '${root.artists[artist].name}'.`);
      }
      break;

    case factories.tagRemove.type:
      let index = tags.indexOf(ev.tagValue);
      if (index < 0) {
        log('No such tag: \'' + ev.tagValue + '\'.');
        return;
      }
      tags.splice(index, 1);
      log(`Removing tag '${ev.tagValue.toString()}' from artist '${root.artists[artist].name}'.`);
      break;

    default:
      log('An unperceivable error occured.');
      return;
  }
};

module.exports.artistAddRemoveHandler = (ev, userid) => {
  let log = curry.call(log_instance, log_instance.log)('artistAddRemoveHandler');
  let artist = ev.name.toString();
  let user = userid.toString();
  let root = db.getRoot();
  log(`Processing request for ${user}.`);

  switch (ev.type) {
    case factories.artistRequest.type:
      let url = ev.url;
      if (typeof root.artists[artist] !== 'undefined') {
        log(`Artist '${artist}' already exists, aborting.`);
        return;
      }
      let artistSkel = dataSkel.artistInit(artist, url);
      let id = parseInt(Object.keys(artistSkel)[0]);
      Object.assign(root.artists, artistSkel);
      log(`Added artist '${artist}'.`);
      return factories.artistAdd.factory(root.artists[id].name, url, id);
      break;

    case factories.artistRemove.type:
      if (typeof root.artists[artist] === 'undefined') {
        log(`Artist with id '${artist}' doesn't exist, aborting.`);
        return;
      }
      let name = root.artists[artist].name;
      delete root.artists[artist];
      log(`Artist ${name} removed.`);
      break;

    default:
      log('An unperceivable error occured.');
      return;
  }
};
