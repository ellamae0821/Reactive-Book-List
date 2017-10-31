import React, {Component} from 'react';
import BookListItem from '../../components/BookListItem'


const BookList = ({books}) => {
  return (
    <div className='booklist'>
      {
        books.map((book, idx) => {
          return (
            <BookListItem
              title={book.title}
              author={book.author}
              key={idx}
            />
          )
        })
      }
    </div>

  )
}


/*


class BookList extends Component {
  constructor({books}){
    super(books);

  }

  render() {
    return (
      <div>
      {
        books.map((book, idx) => {
          return (
            <BookListItem title={book.title} author={book.author} key={idx} />
          );
        })
      }
      </div>
    )
  }
}*/
export default BookList;