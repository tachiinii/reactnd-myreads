import React, { Component } from 'react'
import BookCover from './BookCover'
import BookShelfChanger from './BookShelfChanger'

class BookTop extends Component {
  render() {
    const { book, bookShelf, bookId, shelves, onChangeShelf } = this.props
        console.log('BookTop book: ', book)

    return (
      <div className="book-top">
        <BookCover
          imageURL={this.props.imageURL} />
        <BookShelfChanger
          bookId={bookId}
          book={book}
          bookShelf={bookShelf}
          shelves={shelves}
          onChangeShelf={onChangeShelf}
         />
      </div>
    )
  }
}

export default BookTop
