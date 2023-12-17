import React, { useState } from "react";
import Sidebar from "../../../components/Admin_components/Sidebar";
import { Button, Card } from "antd";
import DragAndDrop from "../../../components/Admin_components/DragAndDrop.jsx";
import useFileSelection from "../../../components/Admin_components/useFileSelection.jsx";
import { IoClose } from "react-icons/io5";
import axios from "axios";

const Create = () => {
  const [addFile, removeFile, selectedFiles] = useFileSelection();
  const [productName, setProductName] = useState("");
  const [productNumber, setProductNumber] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productPattern, setProductPattern] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productShortDescription, setProductShortDescription] = useState("");
  const [productLongDescription, setProductLongDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [variations, setvariations] = useState([]);

  const delete_tag = (setState, e, array) => {
    const temp = array.filter((value) => value !== e);
    setState(temp);
  };

  const uploadToCloudinary = async (imageFile) => {
    try {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "alongrow");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dyww3djg9/image/upload",
        formData
      );

      if (response.data && response.data.secure_url) {
        return response.data.secure_url;
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error.message);
      throw error;
    }
  };

  const handleSubmit = async () => {
    const product = {
      productName,
      productNumber,

      productShortDescription,
      productLongDescription,
      productQuantity,
      productPrice,
      variations,
    };

    try {
      const response = await fetch("/api/product/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        // Handle successful response
        console.log("Product created successfully");
      } else {
        // Handle error response
        console.error("Error creating product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //   const handleVariation = () => {
  //     const newVariation = {
  //       productSize,
  //       productColor,
  //       productCategory,
  //       productPattern,
  //       productImage: selectedFiles,
  //     };

  //     setvariations((prevVariations) => [...prevVariations, newVariation]);
  //   };
  const handleVariation = async () => {
    const variationImages = [];

    for (const image of selectedFiles) {
      const cloudLink = await uploadToCloudinary(image);

      variationImages.push(cloudLink);
    }

    const newVariation = {
      productSize,
      productColor,
      productCategory,
      productPattern,
      productImage: variationImages,
    };

    setvariations((prevVariations) => [...prevVariations, newVariation]);
  };

  return (
    <div className="flex flex-col h-full bg-white text-black">
      <div className="h-full flex flex-row justify-start">
        <Sidebar className="static " />
        <div className="bg-white flex-1 p-4  text-black">
          <div className="m-10">
            <h2>Create Products</h2>
            <h3 className="text-2xl text-teal-500">Create new product here</h3>
          </div>

          <div className="mb-4 flex items-center ">
            <label className="relative left-5 font-medium  w-1/4">
              Product Name/Title
            </label>
            <input
              className="ml-2 mt-1 p-2 border border-gray-300 rounded-md w-3/5 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="relative left-5 font-medium  w-1/4">
              Product Number
            </label>
            <input
              className="ml-2 mt-1 p-2 border border-gray-300 rounded-md w-3/5 focus:outline-none focus:ring focus:border-blue-300"
              type="number"
              value={productNumber}
              onChange={(e) => setProductNumber(e.target.value)}
            />
          </div>

          <div className="mb-4 flex items-center">
            <label className="relative left-5 font-medium  w-1/4">
              Product Short Description
            </label>
            <textarea
              className="ml-2 mt-1 p-2 border border-gray-300 rounded-md w-3/5 focus:outline-none focus:ring focus:border-blue-300"
              value={productShortDescription}
              onChange={(e) => setProductShortDescription(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="relative left-5 font-medium  w-1/4">
              Product Long Description
            </label>
            <textarea
              className="ml-2 mt-1 p-2 border border-gray-300 rounded-md w-3/5 focus:outline-none focus:ring focus:border-blue-300"
              value={productLongDescription}
              onChange={(e) => setProductLongDescription(e.target.value)}
            />
          </div>

          <div className="mb-4 flex items-center">
            <label className="relative left-5 font-medium  w-1/4">
              Product Quantity
            </label>
            <input
              className="ml-2 mt-1 p-2 border border-gray-300 rounded-md w-3/5 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="relative left-5 font-medium  w-1/4">
              Product Price
            </label>
            <input
              className="ml-2 mt-1 p-2 border border-gray-300 rounded-md w-3/5 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              value={productPrice}
              onChange={(e) =>
                setProductPrice(
                  e.target.value,
                  setProductCategory,
                  productCategory
                )
              }
            />
          </div>

          <div className="flex flex-row justify-evenly w-3/4">
            <div className="w-1/2 p-4 font-medium relative top-10 left-2 ">
              Product Image
            </div>
            <div className="w-3/4 p-4">
              <Card style={{ margin: "auto" }}>
                <DragAndDrop addFile={addFile} removeFile={removeFile} />
              </Card>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <label className="relative left-5 font-medium  w-1/4">
              Product Size
            </label>

            <input
              className="ml-2 mt-1 p-2 border border-gray-300 rounded-md w-3/5 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Product Size (Write and press enter)"
              onChange={(e) => setProductSize(e.target.value)}
            />
            {/* <div className="flex flex-col flex-wrap 2 max-w-xl ">
              <input
                className="appearance-none peer  ml-2 mt-1 p-2 border border-gray-300 rounded-md w-full min-w-full		 focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                placeholder="Product Size (Write and press enter)"
                onChange={(e) => setProductSize(e.target.value)}
              />
            </div> */}
          </div>
          <div className="mb-4 flex items-center">
            <label className="relative left-5 font-medium  w-1/4">
              Product Pattern
            </label>
            <input
              className="ml-2 mt-1 p-2 border border-gray-300 rounded-md w-3/5 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Product Pattern (Write and press enter)"
              onChange={(e) => setProductPattern(e.target.value)}
            />
            {/* <div className="flex flex-col flex-wrap 2 max-w-xl ">
              <input
                className=" peer  ml-2 mt-1 p-2 border border-gray-300 rounded-md w-full min-w-full		 focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                placeholder="Product Pattern (Write and press enter)"
                onChange={(e) => setProductPattern(e.target.value)}
              />
            </div> */}
          </div>
          <div className="mb-4 flex items-center">
            <label className="relative left-5 font-medium  w-1/4">
              Product Colour
            </label>

            <input
              className="ml-2 mt-1 p-2 border border-gray-300 rounded-md w-3/5 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Product Colour (Write and press enter)"
              onChange={(e) => setProductColor(e.target.value)}
            />

            {/* <div className="flex flex-col flex-wrap 2 max-w-xl ">
              <input
                className=" peer  ml-2 mt-1 p-2 border border-gray-300 rounded-md w-full min-w-full		 focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                placeholder="Product Colour (Write and press enter)"
                onChange={(e) => setProductColor(e.target.value)}
              />
            </div> */}
          </div>
          <div className="mb-4 flex items-center">
            <label className="relative left-5 font-medium  w-1/4">
              Product Category
            </label>

            <input
              className="ml-2 mt-1 p-2 border border-gray-300 rounded-md w-3/5 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Product Category (Write and press enter)"
              onChange={(e) => setProductCategory(e.target.value)}
            />

            {/* <div className="flex flex-col flex-wrap 2 max-w-xl ">
              <input
                className=" peer  ml-2 mt-1 p-2 border border-gray-300 rounded-md w-full min-w-full		 focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                placeholder="Product Category (Write and press enter)"
                onChange={(e) => setProductCategory(e.target.value)}
              />
            </div> */}
          </div>
          <div className="mb-4 flex items-center relative left-3 justify-center ">
            <button
              className="ml-2 p-2 bg-blue-500 text-white rounded-md transition-all	delay-350 ease-in-out hover:bg-teal-500"
              onClick={handleVariation}
            >
              Add variation
            </button>
          </div>
          <div className="mb-4 flex items-center relative left-3 ">
            <button
              className="ml-2 p-2 bg-blue-500 text-white rounded-md transition-all	delay-350 ease-in-out hover:bg-teal-500"
              onClick={handleSubmit}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
