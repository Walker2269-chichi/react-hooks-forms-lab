import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === "") {
      alert("Name is required.");
      return;
    }

    const newItem = {
      id: uuid(),
      name,
      category,
    };

    onItemFormSubmit(newItem);

    // Clear the form fields
    setName("");
    setCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit} aria-label="Add New Item Form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          data-testid="name-input"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Category:
        <select
          name="category"
          value={category}
          data-testid="category-select"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit" title="Add the item to the shopping list">
        Add to List
      </button>
    </form>
  );
}

ItemForm.propTypes = {
  onItemFormSubmit: PropTypes.func.isRequired,
};

export default ItemForm;
