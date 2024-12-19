import React, { useState } from "react";

const SearchBar = () => {
  // Example list of items to search
  const items = [
    "Meeting Notes",
    "Project Plan",
    "Client Report",
    "Financial Summary",
    "Team Updates",
    "Quarterly Goals",
  ];

  const [query, setQuery] = useState(""); // State for search input
  const [filteredItems, setFilteredItems] = useState(items); // Filtered items

  // Handle search input changes
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase(); // Get the search value
    setQuery(value);

    // Filter items that include the search query
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(value)
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-2">Search</h2>
      <input
        type="text"
        placeholder="Search here..."
        value={query}
        onChange={handleSearch}
        className="w-full p-2 border rounded"
      />

      <ul className="mt-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="p-2 border-b">
              {item}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
