const type = 'TAG_ADD'

function tagAddFactory(artistId, tagType, tagValue) {
  return {
    type,
    artistId,
    tagType,
    tagValue
  }
}


export default {
  type,
  factory: tagAddFactory
}
