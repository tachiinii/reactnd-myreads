import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBooksForm extends Component {

  render() {
    const { onSearchInput } = this.props

    return(
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
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
      </div>
    )
  }
}

export default SearchBooksForm
