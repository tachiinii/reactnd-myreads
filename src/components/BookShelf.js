import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookShelf = props => {
  const { books, shelf, shelves, onChangeShelf } = props

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

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default BookShelf
