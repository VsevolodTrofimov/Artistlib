const type = 'FILTER_SET'

function filterSetFactory(includedTags, excludedTags) {
  console.log(excludedTags)
  includedTags = includedTags ? includedTags.split(' ') : []
  excludedTags = excludedTags ? excludedTags.split(' ') : []

  return {
    type,
    includedTags,
    excludedTags
  }
}


export default {
  type,
  factory: filterSetFactory
}
