import React from "react";
import "./BookCard.css";

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
      ) : (
        <div className="placeholder">Wait for New</div>
      )}

      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        {subtitle && <h3 className="book-subtitle">{subtitle}</h3>}
        <p className="book-price">{price}</p>
      </div>

      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="learn-more"
        >
          Learn More
        </a>
      )}
    </div>
  );
}

export default BookCard;