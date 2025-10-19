import { useState } from "react";
import BookCreate from "./components/BookCreate";
import React from "react";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = title => {
    const updatedBooks = [...books, title];
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
