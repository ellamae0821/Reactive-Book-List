import React, { Component } from 'react';
import BookListItem from '../../components/BookListItem';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookList from '../BookList'
import NewGuestForm from '../NewBookForm/';
//import logo from './logo.svg';
//import './App.css';
import {
  getBooksFromFakeXHR,
  addBookToFakeXHR,
  getBookByIdFromFakeXHR
}from '../../lib/books.db.js';




class App extends Component {
  constructor(){
    super();

    this.state = {
      books: [],
      appTitle: 'Halloween Reactive Books'
    }
  }

  addNewBook(bookTitle, bookAuthor) {
    let newBook = {
      title: bookTitle,
      author: bookAuthor
    };
    addBookToFakeXHR(newBook)
    .then ( () => {
      this.setState({
        books: [...this.state.books],
 /*     author: [...this.state.books, newBook]*/
      })
    });
  }

  componentWillMount(){

  }

  componentDidMount(){
    getBooksFromFakeXHR()
    .then ( (bookList) => {
      console.log("BOOKS HEERE:",bookList);
      this.setState({
        books: bookList
      })
    })
    console.log(this.state.books)
  }


  render() {
    return (
      <div className="App">
        <BookListAppTitle title={this.state.appTitle}/>
       {/* <BookListItem books={this.state.books}/>*/}
        <BookList books={this.state.books}/>
        <NewGuestForm
        quote="Add New Book"
        addNewBook={this.addNewBook.bind(this)}
        />
      </div>
    );
  }
}

export default App;
