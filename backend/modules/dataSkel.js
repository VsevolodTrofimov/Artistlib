// 'skeletons' for uninitialized data in db

module.exports.defaultDatabaseState = () => {
  return {
    'artists': {}
  }
}

module.exports.artistInit = (artist) => {
  return {
    [artist]: {
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
