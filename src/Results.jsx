import React from "react";
import Book from "./Book";

const Results = ({ Books }) => {
  return (
    <div className="search">
     {!books.length ? (
      <h1>No books Found</h1>
   ) : (
      books.map(book => {
        return (
          <book
          title={book.title}
          subtitle={book.subtitle}
          key={book.id}
          media={book.image}
          rating={book.averagerating}
          description={book.description}
          id={book.id}
          />
          );
        })
      )}
    </div>
  );
};

export default Results;
