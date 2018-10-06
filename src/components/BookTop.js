import React from 'react'
import BookCover from './BookCover'
import BookShelfChanger from './BookShelfChanger'

const BookTop = props => {
  const { book, shelves, onChangeShelf } = props

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

export default BookTop
