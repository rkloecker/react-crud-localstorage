import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <nav className="light-blue darken-4">
        <div className="container">
          <Link className="brand-logo center" to="/">
            Books
          </Link>
          <ul className="right">
            <li>
              <Link to="/Books/add">Add Book</Link>
            </li>
            <li>
              <Link className="hide-on-small-only" to="/">
                Books
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
