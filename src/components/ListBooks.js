import React, { Component } from 'react'
import BookShelf from './BookShelf'
import SearchLink from './SearchLink'

class ListBooks extends Component {

  shelves = [
    {
      id: 'currentlyReading',
      title: 'Currently Reading',
    },
    {
      id: 'wantToRead',
      title: 'Want to Read',
    },
    {
      id: 'read',
      title: 'Read',
    },
  ]

  render() {
    const { books } = this.props
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.shelves.map((shelf) => {
              const bookSet = books.filter((book) => book.shelf === shelf.id)

              return (
                <BookShelf
                  shelf={shelf}
                  books={bookSet}
                  shelves={this.shelves} />
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
