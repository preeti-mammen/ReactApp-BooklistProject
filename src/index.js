import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const firstbook = {
  image:
    "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UL640_FMwebp_QL65_.jpg",
  title: "I Love You to the Moon and Back",
  author: "by Amelia Hepworth and Tim Warnes",
};

const secondbook = {
  image:
    "https://m.media-amazon.com/images/I/81IH8kx0PgL._AC_UY436_FMwebp_QL65_.jpg",
  title: "The Dreaded Groak: Overcoming prejudice and discrimination",
  author: "by Peta Lemon and Maria Dasic Todoric",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        title={firstbook.title}
        author={firstbook.author}
        image={firstbook.image}
      />
      <Book
        title={secondbook.title}
        author={secondbook.author}
        image={secondbook.image}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
