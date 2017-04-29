// module dependencies
const factories = require('./factoryBulkRequire');
const database = require('./databaseWrapper');

// dependency init
const db = database();

module.exports = (userid) => {
  let build = [];
  let user = userid.toString();
  let root = db.getRoot();

  for (artist in root.artists) {
    if ( ! root.artists.hasOwnProperty(artist)) continue;
    let data = root.artists[artist];
    let usertags = (data.usertags[user]) ? data.usertags[user] : [];
    build.push({
      'id': parseInt(artist),
      'name': data.name,
      'url': data.link,
      'tags': {
        'global': data.tags,
        'personal': usertags
      }
    });
  }

  return factories.appInit.factory(build);
}
