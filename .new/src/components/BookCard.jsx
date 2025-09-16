import React from "react";
import "./BookCard.css";

function BookCard({ title, authors, image, link }) {
  return (
    <div className="book-card">
      {image ? (<img src={image} alt={title} className="book-image" />) :
      (<div className="placeholder">Wait for New</div>)}
      {title && <h3 className="book-title">{title}</h3>}
      {authors && <p className="book-authors">by {authors}</p>}
      {link && (<a href={link} target="_blank" rel="noopener noreferrer" className="learn-more">
        Learn More
        </a>)}
    </div>
  );
}

export default BookCard;