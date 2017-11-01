import React, { Component } from 'react';
import {connect} from 'react-redux';

import { loadBooks} from '../../actions/books'

import BookListItem from '../../components/BookListItem';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookList from '../BookList'
import NewBookForm from '../NewBookForm/';
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

/*  setFilter(evt){
    this.setState({

    })
  }*/


  componentWillMount(){

  }

/* before REDUX
  componentDidMount(){
    getBooksFromFakeXHR()
    .then ( (bookList) => {
      this.setState({
        books: bookList
      })
    })
  }*/


  componentDidMount() {
    getBooksFromFakeXHR().then(books => {
      console.log('invoking function loadbooks in props')
      this.props.loadBooks(books)
    })
  }


/*  updateSearch(event) {
    this.setState({
      // Limit to 10 characters only for search
      search: event.target.value.substr(0, 10)
    });
  }*/

  render() {

    console.log(this.props.books)
    console.log(this.props.loadBooks)

    return (
      <div className="App">
        <div className="appTitle">
          <BookListAppTitle title={this.state.appTitle}/>
        </div>

        <hr/>

        <BookList books={this.props.books}/>
        <NewBookForm/>
{/*        <BookFilterInput
        updateSearch={this.updateSearch.bind(this)}/>*/}
      {/*BookFilterInput setFilter={this.setFilter.bind(this)}*/}
      </div>
    );
  }
}
//take the state from redux store and add it to components to our props object
const mapStateToProps = (state) => {
  return{
    books: state.bookList
  }
}
//dispatch actions to reducers, then to store & vice versa, should only be functions
const mapDispatchToProps = (dispatch) => {
  return{
    loadBooks: (books) => {
      console.log('dispatching the action')
      dispatch(loadBooks(books))
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
//ConnectedApp : not giving error when renamed, because it aliases itself as "app"
