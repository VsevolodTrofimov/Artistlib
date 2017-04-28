const type = 'APP_INIT'

function appInitFactory(artists) {
  return {
    type,
    artists
  }
}


module.exports = {
  type,
  factory: appInitFactory
}
