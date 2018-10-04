import React, { Component } from 'react'
import SearchBooksForm from './SearchBooksForm'
import SearchBooksResults from './SearchBooksResults'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {

  state = {
    results: [],
  }

  searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query)
        .then((results) => {
          if ('error' in results)
            results = []
          this.setState(() => ({
            results
          }))
        })
    }
    else {
      this.setState({ results: [] })
    }
  }

  render() {
    return(
      <div className="search-books">
        <SearchBooksForm
          onSearchInput={this.searchBooks}
        />
        <SearchBooksResults
          books={this.state.results}
          shelves={this.props.shelves}
          onChangeShelf={this.props.onChangeShelf}
        />
      </div>
    )
  }
}

export default SearchBooks
