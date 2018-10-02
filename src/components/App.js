import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
        // TODO: remove debugging output
        console.log('API: ', books)
      })
  }

  changeBookShelf = (bookToUpdate, newShelf) => {
    BooksAPI.update(bookToUpdate, newShelf)
      .then(() => {
        const books = this.state.books
        const index = books.findIndex((book) => book.id === bookToUpdate.id)

        books[index].shelf = newShelf

        this.setState({
          books
        })
      })
    }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooks onChangeShelf={this.changeBookShelf} />
        )} />

        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onChangeShelf={this.changeBookShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
