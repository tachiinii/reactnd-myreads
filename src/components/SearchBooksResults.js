import React from 'react'
import Book from './Book'
import SearchSummary from './SearchSummary'

const SearchBooksResults = props => {
  const { books, shelves, onChangeShelf } = props

  return(
    <div className="search-books-results">
      <SearchSummary />
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

export default SearchBooksResults
