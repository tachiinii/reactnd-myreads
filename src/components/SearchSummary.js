import React, { Component } from 'react'
import PropTypes from 'prop-types'

const SearchSummary = props => {
  return (
    <div className='search-books-summary'>
      Found {props.resultCount} results
    </div>
  )
}

SearchSummary.propTypes = {
  resultCount: PropTypes.number,
}

export default SearchSummary
