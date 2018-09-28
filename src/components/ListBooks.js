import React, { Component } from 'react'
import BookShelf from './BookShelf'
import SearchLink from './SearchLink'

class ListBooks extends Component {
  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf />
            <BookShelf />
            <BookShelf />
          </div>
        </div>
        <SearchLink />
      </div>
    )
  }
}

export default ListBooks
