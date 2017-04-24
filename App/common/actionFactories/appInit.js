const type = 'APP_INIT'

function appInitFactory(artists, lastId) {
  return {
    type,
    artists,
    lastId
  }
}


export default {
  type,
  factory: appInitFactory
}
