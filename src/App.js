import React, { Component } from 'react';
import Items from './components/Items';
import Total from './components/Total';
import Search from './components/Search';
import booksJson from './books.json';
import './App.css';
import { Paper, Grid } from '@material-ui/core';

class App extends Component {
  
  state = {
    books: booksJson,
    filteredBooks: booksJson,
    total: []
  }

  handleAddTotal = (event, book) => {
    // Prevent the default behaviour of forms 
    event.preventDefault()
    console.log('Hellooooo')
    // here `event.target` gives the form node
    console.log(event.target)
    // grab any input value using it's name attribute
    console.log(event.target.quantity.value)
    console.log(book)

    let bookObj = {
      title: book.title,
      price: book.price,
      quantity: Number(event.target.quantity.value)
    }
    // Add this book to the total array
    this.setState({
      total: [bookObj, ...this.state.total]
    })
  }

  handleAddNewBook = (newBook) => {
    this.setState({
      books: [newBook, ...this.state.books]
    })
  }

  handleSearch = (event) => {
    let searchedBook = event.target.value
    const {books} = this.state
    let filteredBooks = books.filter((book) => {
      return book.title.toLowerCase().includes(searchedBook.toLowerCase())
    })
    this.setState({
      filteredBooks: filteredBooks
    })
  }

  render() {
    return (
      <div>
        My Shopping App
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper>
              <Search onSearch={this.handleSearch}/>
              <Items 
                books={this.state.filteredBooks}
                handleAddTotal={this.handleAddTotal}
                onAddNewBook={this.handleAddNewBook}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Total books={this.state.total}/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
