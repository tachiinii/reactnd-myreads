import React from 'react'
import { Link } from 'react-router-dom'

const SearchBooksForm = props => (
  <div className="search-books-bar">
    <Link
      className="close-search"
      to='/'>
      Close
    </Link>
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title or author"
        value={props.query}
        onChange={(e) => props.onSearchInput(e.target.value)}
      />
    </div>
  </div>
)

export default SearchBooksForm
