import React, { Component } from 'react'

class BookShelfChanger extends Component {
  render() {
    const { bookId, bookShelf, shelves, book, onChangeShelf } = this.props
    console.log('BookShelfChanger book: ', book)

    return(
      <div className="book-shelf-changer">
        <select defaultValue={bookShelf} onChange={(e) => onChangeShelf(book, e.target.value)}>
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
