import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  // Handle category change from Filter
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Handle search input change from Filter
  function handleSearchChange(value) {
    setSearchText(value);
  }

  // Filter items based on category and search text
  const itemsToDisplay = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearchText = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchesCategory && matchesSearchText;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter
        searchText={searchText}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
