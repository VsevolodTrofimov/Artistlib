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
    [artist]: {
      link,
      'id': id.next(),
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
