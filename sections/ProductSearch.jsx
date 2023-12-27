import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const ProductSearch = ({ onFilterChange }) => {
  const [phrase, setPhrase] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterClick = (filter) => {
    // Toggle the filter selection
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
    console.log(updatedFilters);
  };

  const handleSearch = () => {
    const searchQuery = phrase;

    const searchTerms = searchQuery.split(/\s+/).filter(Boolean);

    const combinedFilters = [...selectedFilters, ...searchTerms];

    onFilterChange(combinedFilters);
  };

  const renderDesignFilterOptions = () => {
    const designFilterOptions = [
      { label: "All Designs", value: "" },
      { label: "Design1", value: "design1" },
      { label: "Design2", value: "design2" },
    ];

    return designFilterOptions.map((filter) => (
      <div className="flex items-center mb-4" key={filter.value}>
        <input
          id={filter.value || "default-checkbox"}
          type="checkbox"
          value={filter.value}
          checked={selectedFilters.includes(filter.value)}
          onChange={() => handleFilterClick(filter.value)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor={filter.value || "default-checkbox"}
          className="ml-2 text-sm text-black"
        >
          {filter.label}
        </label>
      </div>
    ));
  };

  const renderColorFilterOptions = () => {
    const colorFilterOptions = [
      { label: "All Colors", value: "" },
      { label: "White", value: "White" },
      { label: "Black", value: "Black" },
      { label: "Brown", value: "Brown" },
      { label: "Red", value: "Red" },
    ];

    return colorFilterOptions.map((filter) => (
      <div className="flex items-center mb-4" key={filter.value}>
        <input
          id={filter.value || "default-checkbox"}
          type="checkbox"
          value={filter.value}
          checked={selectedFilters.includes(filter.value)}
          onChange={() => handleFilterClick(filter.value)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor={filter.value || "default-checkbox"}
          className="ml-2 text-sm  text-black"
        >
          {filter.label}
        </label>
      </div>
    ));
  };

  const renderPatternFilterOptions = () => {
    const patternFilterOptions = [
      { label: "S", value: "S" },
      { label: "M", value: "M" },
      { label: "L", value: "L" },
      { label: "XL", value: "XL" },
    ];

    return patternFilterOptions.map((filter) => (
      <div className="flex items-center mb-4" key={filter.value}>
        <input
          id={filter.value || "default-checkbox"}
          type="checkbox"
          value={filter.value}
          checked={selectedFilters.includes(filter.value)}
          onChange={() => handleFilterClick(filter.value)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor={filter.value || "default-checkbox"}
          className="ml-2 text-sm  text-black"
        >
          {filter.label}
        </label>
      </div>
    ));
  };

  return (
    <div className="w-full lg:w-1/4 p-3 text-black ">
      <div className="container mx-auto flex flex-col items-center lg:items-start gap-10">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p>Search</p>
          <div className="flex items-center gap-3 border rounded-lg p-2">
            <input
              type="text"
              placeholder="Search here.."
              value={phrase}
              onChange={(e) => {
                setPhrase(e.target.value);
              }}
              className="lg:w-[200px] outline-none bg-transparent rounded-lg"
            />
            <p className="text-lg">|</p>
            <BsSearch
              size={20}
              className="hover:text-secondary cursor-pointer"
              onClick={handleSearch}
            />
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-5">
          <p>Designs</p>
          <div className="flex flex-col items-center lg:items-start">
            {renderDesignFilterOptions()}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-5">
          <p>Colors</p>
          <div className="flex flex-col items-center lg:items-start">
            {renderColorFilterOptions()}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-5">
          <p>Pattern</p>
          <div className="flex flex-col items-center lg:items-start">
            {renderPatternFilterOptions()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
