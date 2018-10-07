import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import SearchLink from './SearchLink'

const ListBooks = props => {
  const { books, onChangeShelf, shelves } = props
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => {
            const bookSet = books.filter((book) => book.shelf === shelf.id)

            return (
              <BookShelf
                shelf={shelf}
                books={bookSet}
                shelves={shelves}
                key={shelf.id}
                onChangeShelf={onChangeShelf} />
              )
            }
          )}
        </div>
      </div>
      <SearchLink />
    </div>
  )
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default ListBooks
