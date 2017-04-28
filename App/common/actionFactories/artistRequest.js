const type = 'ARTIST_REQEUST'

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
