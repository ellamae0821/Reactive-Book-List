import {LOAD_BOOKS} from '../actions/books';
import {ADD_BOOK} from '../actions/books';

const initialState={
  bookList: []
};
//array because our booklist is an array as well

const reducers = (state = initialState, action) => {
    console.log('REDUCERS: activated')
    console.log('REDUCERS:', action)
    switch (action.type){
      case LOAD_BOOKS:
        console.log("Loading the books")
        //creates brand new object
        //object literal is ifferent , it will not keep the key = taking all the keys from state and replace
        return Object.assign({}, state, {
          bookList: [...action.books]})
      case ADD_BOOK:
        return Object.assign({}, state, {
          bookList: [...state.bookList, action.book]})
      default:
        return state

  }
}

export default reducers;