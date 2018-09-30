import React, { Component } from 'react'
import BookCover from './BookCover'
import BookShelfChanger from './BookShelfChanger'

class BookTop extends Component {
  render() {
    const { book, bookShelf, bookId, shelves } = this.props
    return (
      <div className="book-top">
        <BookCover
          imageURL={this.props.imageURL} />
        <BookShelfChanger
          bookId={bookId}
          bookShelf={bookShelf}
          shelves={shelves}
         />
      </div>
    )
  }
}

export default BookTop
