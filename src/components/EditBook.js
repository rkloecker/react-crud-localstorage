import React, { Component } from "react";
import { Link } from "react-router-dom";
import { update, getItem } from "../util/operations";

class EditBook extends Component {
  state = {
    id: "",
    title: "",
    author: ""
  };

  componentDidMount() {
    this.getBookDetails();
  }

  getBookDetails() {
    let BookId = this.props.match.params.id;
    if (!BookId) {
      return this.props.history.push("/");
    }
    const book = getItem(BookId);
    this.setState({
      id: book.id,
      title: book.title,
      author: book.author
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const newBook = {
      id: this.state.id,
      title: this.state.title,
      author: this.state.author
    };
    update(newBook);
    this.props.history.push("/");
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log("rerendered!!");
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">
          Back
        </Link>
        <h1 className="edit-header">Update Book</h1>
        <form onSubmit={this.onSubmit}>
          <div className="input-field">
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
            <label className="active" htmlFor="title">
              Book Title
            </label>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleInputChange}
            />
            <label className="active" htmlFor="author">
              Book Author
            </label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    );
  }
}

export default EditBook;
