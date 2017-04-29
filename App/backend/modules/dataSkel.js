// 'skeletons' for uninitialized data in db
const idGenerator = require('./idGenerator');
const id = idGenerator();

module.exports.defaultDatabaseState = () => {
  return {
    'artists': {},
    'id_offset': 1
  }
}

module.exports.artistInit = (artist, link) => {
  return {
    [id.next().toString()]: {
      link,
      'name': artist,
      'tags': [],
      'usertags': {}
    }
  }
}

module.exports.userTagsInit = (userid) => {
  return {
    [userid]: []
  }
}
