import React, { Component } from 'react'
import SearchBooksForm from './SearchBooksForm'
import SearchBooksResults from './SearchBooksResults'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {

  state = {
    query: '',
    books: [],
  }

  searchBooks = (query) => {
    BooksAPI.search(query)
      .then((books) => {
        this.setState(() => ({
          books
        }))
        // TODO: remove debugging output
        console.log('API: ', books)
      })
    }

  render() {
    return(
      <div className="search-books">
        <SearchBooksForm
          query={this.state.query}
          onSearchInput={this.searchBooks}
        />
        <SearchBooksResults />
      </div>
    )
  }
}

export default SearchBooks
