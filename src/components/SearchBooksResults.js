import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import SearchSummary from './SearchSummary'

const SearchBooksResults = props => {
  const { books, shelves, onChangeShelf } = props

  return(
    <div className="search-books-results">
      <SearchSummary resultCount={books.length} />
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
  )
}

SearchBooksResults.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default SearchBooksResults
