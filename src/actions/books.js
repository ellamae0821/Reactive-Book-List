export const LOAD_BOOKS = 'LOAD_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';

export const loadBooks =(books) => {
  console.log('ACTION: loadbooks is invoked')
  console.log('ACTION:', books);
  return {
    type: LOAD_BOOKS,
    books: books
  }
}

//ACTION SHOULD ONLY RETURN A PAYLOAD & NOT IMPORT ANYTHING(from reducers)
export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    book: book
  }
}
//then import it to reducers & make another case