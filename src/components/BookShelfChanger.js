import React, { Component } from 'react'

class BookShelfChanger extends Component {
  render() {
    const { bookId, bookShelf, shelves } = this.props

    return(
      <div className="book-shelf-changer">
        <select defaultValue={bookShelf}>
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

export default BookShelfChanger
