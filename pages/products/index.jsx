import React from "react";
import ProductSearch from "../../sections/ProductSearch";
import ProductGrid from "../../sections/ProductGrid";

const Products = () => {
  return (
    <div className="w-full p-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-center min-h-screen">
          <ProductSearch />
          <ProductGrid className="flex-grow" />
        </div>
      </div>
    </div>
  );
};

export default Products;
