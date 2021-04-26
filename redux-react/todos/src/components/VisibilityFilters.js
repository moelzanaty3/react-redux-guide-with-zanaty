import React from 'react'
import { VISIBILITY_FILTERS } from '../constants'

const VisibilityFilters = () => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey]
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className="ui button primary filter"
          >
            {currentFilter}
          </span>
        )
      })}
    </div>
  )
}

export default VisibilityFilters
