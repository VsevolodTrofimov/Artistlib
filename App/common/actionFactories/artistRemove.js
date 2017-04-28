const type = 'ARTIST_REMOVE'

function artistRemoveFactory(id) {
  return {
    type,
    id
  }
}


module.exports = {
  type,
  factory: artistRemoveFactory
}
