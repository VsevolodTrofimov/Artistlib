const type = 'ARTIST_ADD'

function artistAddFactory(name, url) {
  return {
    type,
    name,
    url
  }
}


export default {
  type,
  factory: artistAddFactory
}
