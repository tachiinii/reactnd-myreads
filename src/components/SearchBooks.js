import React, { Component } from 'react'
import SearchBooksForm from './SearchBooksForm'
import SearchBooksResults from './SearchBooksResults'

class SearchBooks extends Component {
  render() {
    return(
      <div className="search-books">
        <SearchBooksForm />
        <SearchBooksResults />
      </div>
    )
  }
}

export default SearchBooks
