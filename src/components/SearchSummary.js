import React, { Component } from 'react'

const SearchSummary = props => {
  return (
    <div className='search-books-summary'>
      Found {props.resultCount} results
    </div>
  )
}

export default SearchSummary
