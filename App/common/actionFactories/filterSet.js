const type = 'FILTER_SET'

function filterSetFactory(includedTags, excludedTags) {
  includedTags = includedTags ? includedTags.split(' ') : []
  excludedTags = excludedTags ? excludedTags.split(' ') : []

  return {
    type,
    includedTags,
    excludedTags
  }
}


module.exports = {
  type,
  factory: filterSetFactory
}
