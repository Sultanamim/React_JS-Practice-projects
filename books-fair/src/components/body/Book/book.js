import React, { Component } from 'react'
import BOOKS from '../../../data/Books/BOOKS';
import BookMenu from './bookMenu';

export default class Book extends Component {
    state = {
        books: BOOKS,
    }
  render() {
      const book = this.state.books.map(item => {
          return (
            <BookMenu
                bookId = {item.bookId}
                image={item.image}
                title={item.title}
                writer={item.writer}
                year={item.year}
                description={item.description}
                price={item.price}
                key={item.bookId} />
          )
      });
    return (
      <div className="d-flex flex-wrap justify-content-center">
           {book}
      </div>
    )
  }
}
