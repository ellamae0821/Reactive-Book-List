import React, {Component} from 'react';
import {connect} from 'react-redux';

import{addBook} from '../../actions/books'

class NewBookForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      titleInput:'',
      authorInput: ''
    }

  }
    handleSubmit(event){
      event.preventDefault();
      let newBook = {
        title: this.state.titleInput,
        author: this.state.authorInput
      }


      this.props.addBook(newBook)

      this.setState({
        titleInput: '',
        authorInput: ''
      })
    }

    handleChangeTitle(event){
      this.setState({
        titleInput: event.target.value,
      })
    }

    handleChangeAuthor(event){
      this.setState({
        authorInput: event.target.value
      })
    }

    render(){
      console.log(this.props.addBook)
      return (
        <div className="newBookForm">
          <h3>{this.props.quote}</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="title" value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)}/>
            <input type="text" placeholder="author" value={this.state.authorInput} onChange={this.handleChangeAuthor.bind(this)}/>
            <input type="submit" value="Add Book"/>
          </form>
        </div>
      )
    }
}

const mapDispatchtoProps = (dispatch)=> {
  return {
    addBook: (book) => {
      dispatch(addBook(book))
    }
  }
}
//it should always be 2 arguments , if one is not required then put null
const ConnectedNewBookForm = connect(
  null,
  mapDispatchtoProps
)(NewBookForm)



export default ConnectedNewBookForm;