import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    this.setState(() => ({ query }))
    if (query) {
      BooksAPI.search(query)
        .then((results) => {
          results = ('error' in results)
            ? []
            : this.setBookShelves(results, shelvedBooks)
          this.setState(() => ({ results }))
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

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default SearchBooks
