function Filter({ search, onSearchChange, selectedCategory, onCategoryChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search items"
        value={search} // Use the search prop here
        onChange={(e) => onSearchChange(e.target.value)} // Call the callback with the new value
      />
      <select value={selectedCategory} onChange={onCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
