import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getItem, remove } from "../util/operations";

class BookDetails extends Component {
  state = {
    details: ""
  };

  componentDidMount() {
    this.getBook();
  }

  getBook = () => {
    const BookId = this.props.match.params.id;
    const book = getItem(BookId);
    if (!book) {
      console.log(`error from detail page, no object with ${BookId}`);
      return this.props.history.push("/");
    }
    this.setState({ details: book });
  };

  onDelete = () => {
    let BookId = this.state.details.id;
    remove(BookId);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <br />

        <h5 className="grey-text text-darken-2 mt-2">
          {this.state.details.author}
        </h5>
        <h3>{this.state.details.title}</h3>

        <Link className="btn mr-2" to={`/books/edit/${this.state.details.id}`}>
          {" "}
          Edit
        </Link>

        <Link className="btn grey mr-2" to="/">
          Back
        </Link>

        <button onClick={this.onDelete} className="btn red">
          Delete
        </button>
      </div>
    );
  }
}

export default BookDetails;
