import React from "react";
import { Switch, Route } from "react-router-dom";
import Books from "./Books";
import BookDetails from "./BookDetails";
import AddBook from "./AddBook";
import EditBook from "./EditBook";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Books} />
      <Route exact path="/books/add" component={AddBook} />
      <Route exact path="/books/edit/:id" component={EditBook} />
      <Route exact path="/books/:id" component={BookDetails} />
    </Switch>
  </main>
);

export default Main;
