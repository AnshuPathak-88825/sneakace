import React, { useState } from "react";
import Sidebar from "../../../components/Admin_components/Sidebar";
import { Button, Card } from "antd";
import DragAndDrop from "../../../components/Admin_components/DragAndDrop.jsx";
import useFileSelection from "../../../components/Admin_components/useFileSelection.jsx";
import { IoClose } from "react-icons/io5";

const Create = () => {
    const [addFile, removeFile, selectedFiles] = useFileSelection();
    const [productName, setProductName] = useState("");
    const [productNumber, setProductNumber] = useState("");
    const [productSize, setProductSize] = useState([]);
    const [productPattern, setProductPattern] = useState([]);
    const [productColor, setProductColor] = useState([]);
    const [productShortDescription, setProductShortDescription] = useState("");
    const [productLongDescription, setProductLongDescription] = useState("");
    const [productCategory, setProductCategory] = useState([]);
    const [productQuantity, setProductQuantity] = useState("");
    const [productPrice, setProductPrice] = useState("");

    const handleEnter = (e, setState, input) => {
        if (e.key === "Enter") {
            if (e.target.value === "") {
                return;
            }
            setState((prevData) => [...prevData, e.target.value]);
        }
    };
    const delete_tag = (setState, e, array) => {
        const temp = array.filter((value) => value !== e);
        setState(temp);
    };

    const handleSubmit = () => {
        const product = {
            productName,
            productNumber,
            productSize,
            productPattern,
            productColor,
            productShortDescription,
            productLongDescription,
            productCategory,
            productQuantity,
            productPrice,
            productImage: selectedFiles,
        };

        console.log("Form submitted with data:", product);
    };

    return (
        <div className="flex flex-col h-full bg-white text-black">
            <div className="h-full flex flex-row justify-start">
                <Sidebar className="static " />
                <div className="bg-white flex-1 p-4 text-black">
                    <div>
                        <h2>Create Products</h2>
                        <h3 className="text-2xl text-teal-500">Create new product here</h3>
                    </div>
                    <div className="flex flex-row justify-evenly w-3/4">
                        <div className="w-1/2 p-4 font-medium relative top-10 left-2 ">
                            Product Image
                        </div>
                        <div className="w-3/4 p-4">
                            <Card
                                style={{ margin: "auto" }}
                                actions={[<Button type="primary">Submit</Button>]}
                            >
                                <DragAndDrop addFile={addFile} removeFile={removeFile} />
                            </Card>
                        </div>
                    </div>
                    <div className="mb-4 flex items-center">
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
                            Product Size
                        </label>

                        <div className="flex flex-col flex-wrap 2 max-w-xl ">
                            <div className="flex flex-row  flex-wrap ">

                                {productSize.map((s) => {
                                    return (
                                        <div key={s} className="flex flex-row  bg-gray-300 m-1 p-1 ">
                                            <span className=" flex items-center justify-between">
                                                <span>{s}</span>
                                                <div onClick={(e) => { delete_tag(setProductSize, s, productSize) }} className="bg-gray-400 text-lg m-1 cursor-pointer" >
                                                    <IoClose />
                                                </div>
                                            </span>
                                        </div>
                                    );
                                })}

                            </div>
                            <input

                                className="appearance-none peer  ml-2 mt-1 p-2 border border-gray-300 rounded-md w-full min-w-full		 focus:outline-none focus:ring focus:border-blue-300"
                                type="text"
                                placeholder="Pattern (Write and press enter)"
                                onKeyDown={(e) =>
                                    handleEnter(e, setProductSize, productSize)
                                }
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="relative left-5 font-medium  w-1/4">
                            Product Pattern
                        </label>
                        <div className="flex flex-col flex-wrap 2 max-w-xl ">
                            <div className="flex flex-row  flex-wrap ">

                                {productPattern.map((s, index) => {
                                    return (
                                        <div key={index} className="flex flex-row  bg-gray-300 m-1 p-1 ">
                                            <span className=" flex items-center justify-between">
                                                <span>{s}</span>
                                                <div className="bg-gray-400 text-lg m-1 cursor-pointer" onClick={(e) => delete_tag(setProductPattern, s, productPattern)}>
                                                    <IoClose />
                                                </div>
                                            </span>
                                        </div>
                                    );
                                })}

                            </div>
                            <input

                                className=" peer  ml-2 mt-1 p-2 border border-gray-300 rounded-md w-full min-w-full		 focus:outline-none focus:ring focus:border-blue-300"
                                type="text"
                                placeholder="Pattern (Write and press enter)"
                                onKeyDown={(e) =>
                                    handleEnter(e, setProductPattern, productPattern)
                                }
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex items-center">
                        <label className="relative left-5 font-medium  w-1/4">
                            Product Colour
                        </label>

                        <div className="flex flex-col flex-wrap 2 max-w-xl ">
                            <div className="flex flex-row  flex-wrap ">

                                {productColor.map((s) => {
                                    return (
                                        <div key={s} className="flex flex-row  bg-gray-300 m-1  p-1">
                                            <span className=" flex items-center justify-between">
                                                <span>{s}</span>
                                                <div className="bg-gray-400 text-lg m-1 cursor-pointer" onClick={(e) => { delete_tag(setProductColor, s, productColor) }}>
                                                    <IoClose />
                                                </div>
                                            </span>
                                        </div>
                                    );
                                })}

                            </div>
                            <input

                                className=" peer  ml-2 mt-1 p-2 border border-gray-300 rounded-md w-full min-w-full		 focus:outline-none focus:ring focus:border-blue-300"
                                type="text"
                                placeholder="Pattern (Write and press enter)"
                                onKeyDown={(e) =>
                                    handleEnter(e, setProductColor, productColor)
                                }
                            />
                        </div>
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
                            Product Category
                        </label>

                        <div className="flex flex-col flex-wrap 2 max-w-xl ">
                            <div className="flex flex-row  flex-wrap  ">

                                {productCategory.map((s) => {
                                    return (
                                        <div key={s} className="flex flex-row  bg-gray-300 m-1 p-1 ">
                                            <span className=" flex items-center justify-between">
                                                <span>{s}</span>
                                                <div className="bg-gray-400 text-lg m-1 cursor-pointer" onClick={(e) => { delete_tag(setProductCategory, s, productCategory) }}>
                                                    <IoClose />
                                                </div>
                                            </span>
                                        </div>
                                    );
                                })}

                            </div>
                            <input

                                className=" peer  ml-2 mt-1 p-2 border border-gray-300 rounded-md w-full min-w-full		 focus:outline-none focus:ring focus:border-blue-300"
                                type="text"
                                placeholder="Pattern (Write and press enter)"
                                onKeyDown={(e) =>
                                    handleEnter(e, setProductCategory, productCategory)
                                }
                            />
                        </div>

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
