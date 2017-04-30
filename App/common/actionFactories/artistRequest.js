const type = 'ARTIST_REQUEST'

function artistRequestFactory(name, tag) {
  return {
    type,
    name,
    url: `http://danbooru.donmai.us/posts?tags=${tag}+order%3Ascore`
  }
}


module.exports = {
  type,
  factory: artistRequestFactory
}
