/*import React, {Component} from 'react';
import BookListItem from './BookListItem';


class BookFilterInput extends Component {
  constructor(props){
    super(props);

    this.state={

      search: ''
    }
  }

    // Passing in event to allow access to whatevever is typed into the textbox


  render() {
    let filteredBooks =  this.state.books.filter((book) => {
      return book.name.toLowerCase().includes(this.state.search.toLowerCase());
    });
    return (
      <div className = "searchForm">
        <input type="text" placeholder="Search Book" value={this.state.search} onChange={this.updateSearch.bind(this)} />
        <ul>
{          {filteredBooks.map((book) => {
            return <BookListItem book={book} key={book.id}/>
          })}}
        </ul>
      </div>
    )

  }

}

export default BookFilterInput;
*/