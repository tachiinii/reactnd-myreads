import React, { Component } from 'react'
import BookCover from './BookCover'
import BookShelfChanger from './BookShelfChanger'

class BookTop extends Component {
  render() {
    return (
      <div className="book-top">
        <BookCover />
        <BookShelfChanger />
      </div>
    )
  }
}

export default BookTop
