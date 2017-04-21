const type = 'TAG_REMOVE'

function tagRemoveFactory(artistId, tagType, tagValue) {
  return {
    type,
    artistId,
    tagType,
    tagValue
  }
}


export default {
  type,
  factory: tagRemoveFactory
}
