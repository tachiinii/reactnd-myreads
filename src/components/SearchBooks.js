import React, { Component } from 'react'
import SearchBooksForm from './SearchBooksForm'
import SearchBooksResults from './SearchBooksResults'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {

  state = {
    results: [],
  }

  setBookShelves = (results, shelved) => {
    return results.map((result) => {
      const index = shelved.findIndex((book) => book.id === result.id)
      if (index !== -1)
        result.shelf = shelved[index].shelf
      return (result)
    })
  }

  searchBooks = (query) => {
    const { shelvedBooks } = this.props

    if (query) {
      BooksAPI.search(query)
        .then((results) => {
          results = ('error' in results)
            ? []
            : this.setBookShelves(results, shelvedBooks)
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
