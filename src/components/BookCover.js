import React from 'react'
import PropTypes from 'prop-types'

const BookCover = props => (
  <div
    className="book-cover"
    style={{
      backgroundImage: 'url(' + props.imageURL + ')'
    }}>
  </div>
)

BookCover.propTypes = {
  imageURL: PropTypes.string.isRequired,
}

export default BookCover
