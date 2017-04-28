const type = 'APP_INIT'

function appInitFactory(artists, lastId) {
  return {
    type,
    artists,
    lastId
  }
}


module.exports = {
  type,
  factory: appInitFactory
}
