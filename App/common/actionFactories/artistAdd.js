const type = 'ARTIST_ADD'

function artistAddFactory(name, url, id) {
  return {
    type,
    name,
    url,
    id
  }
}


module.exports = {
  type,
  factory: artistAddFactory
}
