import React, { Component } from 'react'
import BookShelf from './BookShelf'
import SearchLink from './SearchLink'

class ListBooks extends Component {

  render() {
    const { books, onChangeShelf, shelves } = this.props
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
}

export default ListBooks
