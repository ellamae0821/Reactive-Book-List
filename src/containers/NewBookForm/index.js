import React, {Component} from 'react';

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
      let bookTitle = this.state.titleInput;
      let bookAuthor = this.state.authorInput;
      this.props.addNewBook(bookTitle, bookAuthor)
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
      return (
        <div >
          <h3>{this.props.quote}</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="title" onChange={this.handleChangeTitle.bind(this)}/>
            <input type="text" placeholder="author" onChange={this.handleChangeAuthor.bind(this)}/>
            <input type="submit" value="Add Book"/>
          </form>
        </div>
      )
    }
}

export default NewBookForm;