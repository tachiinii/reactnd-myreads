import React, { Component } from 'react'
import Book from './Book'

class SearchBooksResults extends Component {
  render() {
    const { books, shelves, onChangeShelf } = this.props

    return(
      <div className="search-books-results">
        <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <Book
              book={book}
              shelves={shelves}
              onChangeShelf={onChangeShelf}
            />
          </li>
        ))}
        </ol>
      </div>
    )
  }
}

export default SearchBooksResults
