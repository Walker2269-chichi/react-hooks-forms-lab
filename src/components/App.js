import React, { useState } from "react";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState([
    { id: "1", name: "Milk", category: "Dairy" },
    { id: "2", name: "Bananas", category: "Produce" },
    { id: "3", name: "Cookies", category: "Dessert" },
  ]);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div className="App">
      <ItemForm onItemFormSubmit={handleAddItem} />
      <div className="ShoppingList">
        <ul className="Items">
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span className="category">{item.category}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
