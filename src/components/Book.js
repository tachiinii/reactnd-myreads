import React, { Component } from 'react'
import BookTop from './BookTop'

class Book extends Component {
  render() {
    const { book, shelves } = this.props

    return (
      <div className="book">
        <BookTop
          imageURL={book.imageLinks.thumbnail}
          bookId={book.id}
          bookShelf={book.shelf}
          shelves={shelves} />
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book
