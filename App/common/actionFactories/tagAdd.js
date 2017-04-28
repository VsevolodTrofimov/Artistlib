const type = 'TAG_ADD'

// tagType: 'global' || 'personal'

function tagAddFactory(artistId, tagType, tagValue) {

  //replace this with utility tomorrow
  while(tagValue.indexOf(' ') > 0) {
    tagValue = tagValue.replace(' ', '_')
  }

  return {
    type,
    artistId,
    tagType,
    tagValue
  }
}


module.exports = {
  type,
  factory: tagAddFactory
}
