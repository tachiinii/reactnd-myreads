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

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  changeBookShelf = (bookToUpdate, newShelf) => {
    BooksAPI.update(bookToUpdate, newShelf)
      .then(() => {
        const books = this.state.books
        const index = books.findIndex((book) => book.id === bookToUpdate.id)

        if (index === -1) {
          bookToUpdate.shelf = newShelf
          books.push(bookToUpdate)
        }
        else {
          books[index].shelf = newShelf
        }

        this.setState({
          books
        })
      })
    }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <SearchBooks
            shelvedBooks={this.state.books}
            shelves={this.shelves}
            onChangeShelf={(book, newShelf) => {
              this.changeBookShelf(book, newShelf)
              history.push('/')
            }}
          />
        )} />

        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            shelves={this.shelves}
            onChangeShelf={this.changeBookShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
