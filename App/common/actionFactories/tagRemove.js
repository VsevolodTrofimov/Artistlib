const type = 'TAG_REMOVE'

function tagRemoveFactory(artistId, tagType, tagValue) {
  return {
    type,
    artistId,
    tagType,
    tagValue
  }
}


module.exports = {
  type,
  factory: tagRemoveFactory
}
