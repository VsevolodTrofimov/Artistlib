const type = 'ARTIST_REQUEST'

function artistRequestFactory(name, url) {
  return {
    type,
    name,
    url
  }
}


module.exports = {
  type,
  factory: artistRequestFactory
}
