const type = 'TAG_ADD'

// tagType: 'global' || 'personal'

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
