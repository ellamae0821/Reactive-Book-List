import React, { Component } from 'react';
import BookListItem from '../../components/BookListItem';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookList from '../BookList'
import NewGuestForm from '../NewBookForm/';
import BookFilterInput from '../../components/BookFilterInput';
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

  updateSearch(event) {
    this.setState({
      // Limit to 10 characters only for search
      search: event.target.value.substr(0, 10)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="appTitle">
          <BookListAppTitle title={this.state.appTitle}/>
        </div>
       {/* <BookListItem books={this.state.books}/>*/}
        <BookList books={this.state.books}/>
        <NewGuestForm
        quote="Add New Book"
        addNewBook={this.addNewBook.bind(this)}
        />
{/*        <BookFilterInput
        updateSearch={this.updateSearch.bind(this)}/>*/}
      </div>
    );
  }
}

export default App;
