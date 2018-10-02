import React from 'react'

export default function BookCover(props) {
  return(
    <div
      className="book-cover"
      style={{
        backgroundImage: 'url(' + props.imageURL + ')'
      }}>
    </div>
  )
}
