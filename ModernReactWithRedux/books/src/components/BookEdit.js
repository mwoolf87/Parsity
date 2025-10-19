import { useState } from "react";

const BookEdit = ({ book, onEdit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = event => {
    setTitle(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onEdit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label htmlFor="">Title</label>
      <input
        value={title}
        onChange={handleChange}
        type="text"
        className="input"
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
