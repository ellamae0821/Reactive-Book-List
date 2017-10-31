import React from 'react';

const BookListItem = ({title ,author}) => {
  return (
  <div className='eachBook'>
    <ol>
      <b>Title:</b>{title} <span/>
      <b>Author:</b>{author} <br/>
    </ol>
  </div>
  )
}

export default BookListItem;