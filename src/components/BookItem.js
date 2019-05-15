import React from "react";
import { Link } from "react-router-dom";

const BookItem = props => (
  <li className="collection-item listelement">
    <Link
      className="indigo-text text-darken-2 font_links"
      to={`/books/${props.item.id}`}
    >
      {props.item.title}
    </Link>
  </li>
);

export default BookItem;
