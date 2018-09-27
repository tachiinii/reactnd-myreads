import React, { Component } from 'react'
import BookTop from './BookTop'

class Book extends Component {
  render() {
    return (
      <div className="book">
        <BookTop />
        <div className="book-title">Ender's Game</div>
        <div className="book-authors">Orson Scott Card</div>
      </div>
    )
  }
}

export default Book
