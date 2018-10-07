import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
  render() {
    const { book, shelves, onChangeShelf } = this.props
    const selectedOption = typeof book.shelf === 'undefined'
      ? 'none'
      : book.shelf

    return(
      <div className="book-shelf-changer">
        <select defaultValue={selectedOption} onChange={(e) => onChangeShelf(book, e.target.value)}>
          <option value="move" disabled>Move to...</option>
          {shelves.map((shelf, index) => (
            <option
              value={shelf.id}
              key={index}
              >
              {shelf.title}
            </option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default BookShelfChanger
