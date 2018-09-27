import React, { Component } from 'react'

class BookCover extends Component {
  render() {
    return(
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 188,
          backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
        }}>
      </div>
    )
  }
}

export default BookCover
