import React, { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import BookTop from './BookTop'

class Book extends Component {

  getAuthors = (authors) => {
    return (typeof authors === 'undefined')
      ? createElement('em', null, '(Authors not available)')
      : authors.join(', ')
  }

  render() {
    const { book, shelves, onChangeShelf } = this.props

    return (
      <div className="book">
        <BookTop
          book={book}
          shelves={shelves}
          onChangeShelf={onChangeShelf}
         />
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{this.getAuthors(book.authors)}</div>
      </div>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default Book
