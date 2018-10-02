import React, { Component } from 'react'
import BookTop from './BookTop'

class Book extends Component {
  render() {
    const { book, shelves, onChangeShelf } = this.props

    return (
      <div className="book">
        <BookTop
          book={book}
          shelves={shelves}
          onChangeShelf={onChangeShelf}
         />
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book
