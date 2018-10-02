import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {
    const { books, shelf, shelves, onChangeShelf } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.title}</h2>
        <div className="bookshelf-books">
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
      </div>

    )
  }
}

export default BookShelf
