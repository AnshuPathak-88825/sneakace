import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
const ProductSearch = () => {

  const [phrase, setPhrase] = useState('')

  return (
    <div className="max-w-[1040px] p-3">
      <div className="container mx-auto flex flex-col items-center lg:items-start gap-10">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p>Search</p>
          <div className="flex items-center gap-3 border rounded-lg p-2">
            <input
              type="text"
              placeholder="Search here.."
              value={phrase}
              onChange={e => setPhrase(e.target.value)}
              className="lg:w-[200px] outline-none bg-transparent rounded-lg"
            />
            <p className="text-lg">|</p>
            <BsSearch size={20} className="hover:text-secondary cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-5">
          <p>Categories</p>
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                className="ml-2 text-sm font-medium text-primary">
                All Categories
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checked-checkbox"
                className="ml-2 text-sm font-medium text-primary ">
                Design Laces
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                className="ml-2 text-sm font-medium text-primary">
                Reflective Laces
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-5">
          <p>Colors</p>
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                className="ml-2 text-sm font-medium text-primary">
                All Colors
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checked-checkbox"
                className="ml-2 text-sm font-medium text-primary">
                White
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                className="ml-2 text-sm font-medium text-primary">
                Black
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                className="ml-2 text-sm font-medium text-primary">
                Brown
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-5">
          <p>Pattern</p>
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                className="ml-2 text-sm font-medium text-primary">
                S
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checked-checkbox"
                className="ml-2 text-sm font-medium text-primary">
                M
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                className="ml-2 text-sm font-medium text-primary">
                L
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                className="ml-2 text-sm font-medium text-primary">
                XL
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
