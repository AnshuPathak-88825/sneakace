import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";

const ProductSearch = ({ onFilterChange }) => {
  const [phrase, setPhrase] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [designFilterOptions, setDesignFilterOptions] = useState([]);
  const [colorFilterOptions, setColorFilterOptions] = useState([]);
  const [patternFilterOptions, setPatternFilterOptions] = useState([]);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const response = await fetch("api/product/getAllProducts");
        const products = await response.json();

        const uniqueDesigns = [
          ...new Set(
            products
              .map((product) =>
                product.variations.map((v) => v.productCategory)
              )
              .flat()
          ),
        ];
        const uniqueColors = [
          ...new Set(
            products
              .map((product) => product.variations.map((v) => v.productColor))
              .flat()
          ),
        ];
        const uniquePatterns = [
          ...new Set(
            products
              .map((product) => product.variations.map((v) => v.productPattern))
              .flat()
          ),
        ];

        setDesignFilterOptions(uniqueDesigns);
        setColorFilterOptions(uniqueColors);
        setPatternFilterOptions(uniquePatterns);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchFilterOptions();
  }, []);

  const handleFilterClick = (filter) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleSearch = () => {
    const searchQuery = phrase;
    const searchTerms = searchQuery.split(/\s+/).filter(Boolean);
    const combinedFilters = [...selectedFilters, ...searchTerms];

    onFilterChange(combinedFilters);
  };

  const renderFilterOptions = (filterOptions, filterType) => {
    return filterOptions.map((filter) => (
      <div className="flex items-center mb-4" key={filter}>
        <input
          id={filter || "default-checkbox"}
          type="checkbox"
          value={filter}
          checked={selectedFilters.includes(filter)}
          onChange={() => handleFilterClick(filter)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          class="accent-purple-500"
        />
        <label
          htmlFor={filter || "default-checkbox"}
          className="ml-2 text-sm text-gray-600"
        >
          {filter.toUpperCase()}
        </label>
      </div>
    ));
  };

  return (
    <div className="w-full lg:w-1/4 p-3 text-gray-600 font-Poppins_light font-extralight		">
      <div className="container mx-auto flex flex-col items-center lg:items-start gap-10">
        <div className="flex flex-col items-center lg:items-start gap- 5 ">
          <p className="text-lg ">Search</p>
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
          <p className="text-lg">Categories</p>
          <div className="flex flex-col items-center lg:items-start">
            {renderFilterOptions(designFilterOptions, "design")}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-lg">Colors</p>
          <div className="flex flex-col items-center lg:items-start">
            {renderFilterOptions(colorFilterOptions, "color")}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-lg">Pattern</p>
          <div className="flex flex-col items-center lg:items-start">
            {renderFilterOptions(patternFilterOptions, "pattern")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
