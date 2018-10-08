import React from 'react'
import PropTypes from 'prop-types'

const BookCover = props => (
  <div
    className="book-cover"
    style={ props.imageLinks && {
      backgroundImage: 'url(' + props.imageLinks.thumbnail + ')'
    }}>
  </div>
)

BookCover.propTypes = {
 imageURL: PropTypes.object,
}

export default BookCover
