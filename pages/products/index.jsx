import React, { useState } from "react";
import ProductSearch from "../../sections/ProductSearch";
import ProductGrid from "../../sections/ProductGrid";
import TransitionEffect from "../../components/TransitionEffect";
const Products = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (filters) => {
    console.log("here is output : ", filters);
    setSelectedFilters(filters);
  };
  return (
    <div className="w-full p-3 bg-white  ">
      <div className="mt-20">
      <TransitionEffect />
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-center ">
          <ProductSearch onFilterChange={handleFilterChange} />
          <ProductGrid selectedFilters={selectedFilters} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Products;
