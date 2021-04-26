import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import { VISIBILITY_FILTERS } from '../constants'
import { setFilter } from '../actions'

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey]
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              'ui button primary filter',
              currentFilter === activeFilter && 'filter--active',
            )}
            onClick={() => {
              setFilter(currentFilter)
            }}
          >
            {currentFilter}
          </span>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { activeFilter: state.visibilityFilter }
}

const mapDispatchToProps = {
  setFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilters)
