'use client';

import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Page = () => {
  const [image, setImage] = useState(null); // Initialize as null, not false
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennett",
    authorImg: "/author_img.png",
  });

  // Handle form field changes
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Check if image is uploaded
    if (!image) {
      toast.error("Please upload a thumbnail image.");
      return;
    }

    // Check if title and description are filled
    if (!data.title || !data.description) {
      toast.error("Title and description are required.");
      return;
    }

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);
    formData.append('image', image); // Image object

    // Log formData and image for debugging
    console.log("Form Data:", formData);
    console.log("Image:", image);

    try {
      const response = await axios.post('/api/blog', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        toast.success(response.data.msg);

        // Reset image and form data on success
        setImage(null); // Reset image to null
        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "Alex Bennett",
          authorImg: "/author_img.png",
        });
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
      toast.error("Failed to add blog. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={140}
            alt="Upload Thumbnail"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4">Blog title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Blog title"
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="Blog description"
          rows={5}
        />
        <p className="text-xl mt-4">Blog category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border border-gray-500 text-gray-500 focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          Submit
        </button>
      </form>
    </>
  );
};

export default Page;
