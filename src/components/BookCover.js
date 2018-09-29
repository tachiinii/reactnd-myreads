import React, { Component } from 'react'

class BookCover extends Component {
  render() {
    return(
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 188,
          backgroundImage: 'url(' + this.props.imageURL + ')'
        }}>
      </div>
    )
  }
}

export default BookCover
