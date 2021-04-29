import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Object Array for books
const books = [
  {
    id: 1,
    image:
      "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UL640_FMwebp_QL65_.jpg",
    title: "I Love You to the Moon and Back",
    author: "by Amelia Hepworth and Tim Warnes",
  },
  {
    id: 2,
    image:
      "https://m.media-amazon.com/images/I/81IH8kx0PgL._AC_UY436_FMwebp_QL65_.jpg",
    title: "The Dreaded Groak: Overcoming prejudice and discrimination",
    author: "by Peta Lemon and Maria Dasic Todoric",
  },
  {
    id: 3,
    title: "Lady with a red umbrella",
    image: "https://picsum.photos/seed/picsum/200/200",
    author: "by Peta Lemon and Maria Dasic Todoric",
  },
  {
    id: 4,
    title: "Flowers and some fruits",
    image: "https://picsum.photos/seed/picsum/200/200",
    author: "by Peta Lemon and Maria Dasic Todoric",
  },
  {
    id: 5,
    title: "Beautiful scenery",
    image: "https://picsum.photos/seed/picsum/200/200",
    author: "by Peta Lemon and Maria Dasic Todoric",
  },
  {
    id: 6,
    title: "Some kind of bird",
    image: "https://picsum.photos/seed/picsum/200/200",
    author: "by Peta Lemon and Maria Dasic Todoric",
  },
  {
    id: 7,
    title: "The attack of dragons",
    image: "https://picsum.photos/seed/picsum/200/200",
    author: "by Peta Lemon and Maria Dasic Todoric",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ image, title, author }) => {
  return (
    <article className="book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
