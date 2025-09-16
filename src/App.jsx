import React from "react";
import BookCard from "./components/BookCard";
import books from "../data/books.json";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Book Catalog</h1>
      </header>

      <main>
        <div className="main">
          <div className="new">
        <BookCard />
            </div>

        <div className="content">
        {books.map((book) => (
          <BookCard 
          key={book.isbn13}
          title={book.title}
          subtitle={book.subtitle}
          price={book.price}
          image={book.image}
          url={book.url}
          />
        ))}
        </div>
          </div>

      </main>

      <footer className="footer">
        &#169;Hajin Lee, 2025
      </footer>
    </div>
  );
}

export default App;