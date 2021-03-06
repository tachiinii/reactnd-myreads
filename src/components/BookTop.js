import React from 'react'
import PropTypes from 'prop-types'
import BookCover from './BookCover'
import BookShelfChanger from './BookShelfChanger'

const BookTop = props => {
  const { book, shelves, onChangeShelf } = props

  return (
    <div className="book-top">
      <BookCover
        imageLinks={book.imageLinks}
      />
      <BookShelfChanger
        book={book}
        shelves={shelves}
        onChangeShelf={onChangeShelf}
       />
    </div>
  )
}

BookTop.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default BookTop
