import { connect } from 'react-redux'

import filterSet from '@/actionFactories/filterSet'

import Filter from './filter'


function mapStateToProps(state) {
  return {
    filters: {
      includedTags: state.filters.includedTags.join(' '),
      excludedTags: state.filters.excludedTags.join(' ')
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterSet: (includedTags, excludedTags) => {
      dispatch(filterSet.factory(includedTags, excludedTags))
    },
  }
}

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (Filter)

export default FilterContainer
