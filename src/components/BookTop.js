import React, { Component } from 'react'
import BookCover from './BookCover'
import BookShelfChanger from './BookShelfChanger'

class BookTop extends Component {
  render() {
    const { book, shelves, onChangeShelf } = this.props

    return (
      <div className="book-top">
        {typeof book.imageLinks !== 'undefined' && (
          <BookCover
            imageURL={book.imageLinks.thumbnail}
          />)}
        <BookShelfChanger
          book={book}
          shelves={shelves}
          onChangeShelf={onChangeShelf}
         />
      </div>
    )
  }
}

export default BookTop
