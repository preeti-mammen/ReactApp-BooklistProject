import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { bookData } from "./bookData";
import SpecificBook from "./Book";
import { greeting } from "./testing/testing";

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {bookData.map((book) => {
        return <SpecificBook key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
