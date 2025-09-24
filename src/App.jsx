import React, { useState } from "react";
import BookCard from "./components/BookCard";
import Modal from "./components/Modal";
import booksData from "../data/books.json";
import "./App.css";

function App() {
  const [books, setBooks] = useState(booksData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    publisher: "",
    year: "",
    language: "",
    pages: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Book:", newBook);
    closeModal();
  };

  // 책 삭제
  const handleRemove = (isbn13) => {
    setBooks(books.filter((book) => book.isbn13 !== isbn13));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Book Catalog</h1>
      </header>

      <main>
        <div className="main">

          <div className="new" onClick={openModal}>
            <BookCard />
          </div>

          <div className="content">
            {books.map((book) => (
              <BookCard
                key={book.isbn13}
                isbn13={book.isbn13}
                title={book.title}
                subtitle={book.subtitle}
                price={book.price}
                image={book.image}
                url={book.url}
                onRemove={handleRemove}
              />
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">&#169; Hajin Lee, 2025</footer>

      {isModalOpen && (
        <Modal
          newBook={newBook}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;