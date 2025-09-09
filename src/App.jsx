import React from "react";
import BookCard from "./components/BookCard";
import norwegianWood from "./assets/NorwegianWood.jpg";
import iQ84 from "./assets/iq84.jpg"
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Book Catalog</h1>
      </header>

      <main className="content">

        <BookCard />

        <BookCard
          title="Norwegian Wood"
          authors="Murakami Haruki"
          image={norwegianWood}
          link="https://en.wikipedia.org/wiki/Norwegian_Wood_(novel)"
        />

        <BookCard
          title="1Q84"
          authors="Murakami Haruki"
          image={iQ84}
          link="https://en.wikipedia.org/wiki/1Q84"
        />
      </main>

      <footer className="footer">
        Hajin Lee, 2025
      </footer>
    </div>
  );
}

export default App;