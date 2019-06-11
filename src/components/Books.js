import React, { Component } from "react";
import BookItem from "./BookItem";
import { getAll } from "../util/operations";

class Books extends Component {
  state = {
    books: [],
    loading: true
  };

  componentDidMount() {
    this.setState({ books: getAll(), loading: false });
  }

  render() {
    const loading_msg = <p>Book is loading</p>;
    console.log(this.state.books);
    const BookItems = this.state.books.map((book, i) => {
      return <BookItem key={i} item={book} />;
    });
    if (this.state.loading) {
      return loading_msg;
    }
    return (
      <div>
        <h1 class="book-header indigo-text text-darken-2">Books</h1>
        <ul className="">{BookItems}</ul>
      </div>
    );
  }
}

export default Books;
