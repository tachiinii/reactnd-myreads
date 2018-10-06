import React from 'react'

const BookCover = props => (
  <div
    className="book-cover"
    style={{
      backgroundImage: 'url(' + props.imageURL + ')'
    }}>
  </div>
)

export default BookCover
