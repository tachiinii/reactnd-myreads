import React, { Component } from 'react'
import SearchBooksForm from './SearchBooksForm'
import SearchBooksResults from './SearchBooksResults'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {

  state = {
    query: '',
    results: [],
  }

  setBookShelves = (results, shelved) => {
    return results.map((result) => {
      const index = shelved.findIndex(book => book.id === result.id)
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
          this.setState(() => ({ query, results }))
        })
    }
    else {
      this.setState({ query: '', results: [] })
    }
  }

  render() {
    return(
      <div className="search-books">
        <SearchBooksForm
          query={this.state.query}
          onSearchInput={this.searchBooks}
        />
        {this.state.query && (
          <SearchBooksResults
            books={this.state.results}
            shelves={this.props.shelves}
            onChangeShelf={this.props.onChangeShelf}
          />
        )}
      </div>
    )
  }
}

export default SearchBooks
