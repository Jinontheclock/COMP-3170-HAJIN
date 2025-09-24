import React from "react";
import "./BookCard.css";
<<<<<<< HEAD

function BookCard({ isbn13, title, subtitle, price, image, url, onRemove }) {
  return (
    <div className="book-card">
      {image && (
      <button
        className="remove-btn"
        onClick={(e) => {
          onRemove(isbn13);
        }}
      >
        X
      </button>
      )}

      {image ? (
        <img src={image} alt={title} className="book-image" />
=======
import books from "../../data/books.json"

function BookCard({ title, subtitle, price, image, url }) {
  return (
    <div className="book-card">
      {image ?
        (<img src={image} alt={title} className="book-image" />
>>>>>>> c4f08ee75648232740b80bca09ee450ebbd13f33
      ) : (
        <div className="placeholder">Wait for New</div>
      )}

<<<<<<< HEAD
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        {subtitle && <h3 className="book-subtitle">{subtitle}</h3>}
        <p className="book-price">{price}</p>
      </div>
=======
    <div className="book-info">
      <h3 className="book-title">{title}</h3>
      {subtitle && <h3 className="book-subtitle">{subtitle}</h3>}
      <p className="book-price">{price}</p>
    </div>
>>>>>>> c4f08ee75648232740b80bca09ee450ebbd13f33

      {url && (
        <a
          href={url}
          target="_blank"
<<<<<<< HEAD
          rel="noopener noreferrer"
          className="learn-more"
        >
          Learn More
        </a>
      )}
    </div>
=======
          rel="noopner noreferrer"
          className="learn-more"
          >
            Learn More
        </a>
      )}
      </div>
>>>>>>> c4f08ee75648232740b80bca09ee450ebbd13f33
  );
}

export default BookCard;