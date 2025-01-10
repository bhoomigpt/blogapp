import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required!");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await axios.post('/api/email', formData);

      if (response.data.success) {
        toast.success(response.data.msg || "Subscribed successfully!");
        setEmail("");
      } else {
        toast.error(response.data.msg || "Subscription failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image src={assets.logo} width={180} alt="Logo" className="w-[130px] sm:w-auto" />
        <button className="flex items-center justify-center gap-2 font-medium py-3 px-6 border border-black shadow-[-7px_7px_0px_#000] bg-white hover:bg-gray-100 transition ease-in-out duration-300">
          Get started
          <Image src={assets.arrow} alt="Arrow" />
        </button>
      </div>

      <div className="text-center my-8">
        <h2 className="text-3xl sm:text-5xl font-medium text-gray-800">Latest Blogs</h2>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        <div className="max-w-[500px] mx-auto mt-8 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
          <form onSubmit={onSubmitHandler} className="flex justify-between">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="pl-4 outline-none border border-black rounded-md py-4 px-4 sm:px-8 w-full"
              required
            />
            <button
              type="submit"
              className="border border-black py-4 px-4 sm:px-8 rounded-md ml-4 bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
