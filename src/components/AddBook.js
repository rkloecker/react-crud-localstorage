import React, { Component } from "react";
import { Link } from "react-router-dom";
import { add } from "../util/operations";

class AddBook extends Component {
  onSubmit = e => {
    const newBook = {
      id: Date.now().toString(),
      title: this.title.value,
      author: this.author.value
    };
    add(newBook);
    this.props.history.push("/");
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">
          Back
        </Link>
        <h1>Add Book</h1>
        <form onSubmit={this.onSubmit}>
          <div className="input-field">
            <input
              type="text"
              name="title"
              ref={title => (this.title = title)}
            />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="author"
              ref={author => (this.author = author)}
            />
            <label htmlFor="author">Author</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    );
  }
}

export default AddBook;
