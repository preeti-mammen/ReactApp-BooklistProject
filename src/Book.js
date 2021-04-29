import React from "react";

const Book = ({ image, title, author }) => {
  const clickHandler = (event) => {
    console.log(event.target);
    alert("HELLO WORLD");
  };

  const complexExample = (title) => {
    console.log(title);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click 1
      </button>
      <button type="button" onClick={() => complexExample(title)}>
        Complex Eg
      </button>
    </article>
  );
};

export default Book;
