'use client';

import { assets, blog_data } from '@/Assets/assets';  // Import blog data
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link for navigation
import Footer from '@/Components/Footer'; // Updated import for Footer component

const BlogPage = ({ params }) => {
  const [data, setData] = useState(null);

  // Unwrap params using React.use
  const { id } = React.use(params);

  const fetchBlogData = () => {
    const foundBlog = blog_data.find(item => Number(id) === item.id);
    if (foundBlog) {
      setData(foundBlog);
    }
  };

  useEffect(() => {
    if (id) {
      fetchBlogData();
    }
  }, [id]);

  if (!data) return null;

  return (
    <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
      {/* Header Section */}
      <header className="flex justify-between items-center">
        <Link href='/'>
          <Image src={assets.logo} width={180} alt="Logo" className="w-[130px] sm:w-auto" />
        </Link>
        <Link href="/get-started" passHref>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-5 bg-black text-white rounded-md">
            Get started <Image src={assets.arrow} alt="Arrow" width={15} />
          </button>
        </Link>
      </header>

      {/* Blog Content */}
      <div className="text-center my-24">
        {/* Title */}
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>

        {/* Author Information */}
        <div className="flex justify-center items-center mt-6">
          <Image
            className="rounded-full mr-4"
            src={data.author_img}
            width={60}
            height={60}
            alt="Author Image"
          />
          <div>
            <p className="font-semibold text-lg">{data.author}</p>
          </div>
        </div>

        {/* Blog Image */}
        <div className="flex justify-center mt-6">  {/* Center the image using flex */}
          <Image
            className="border-4 border-gray-300"
            src={data.image}
            width={1280}
            height={720}
            alt="Blog Image"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 mt-6 mb-6">{data.description}</p>
      </div>

      {/* Additional Content Section */}
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>

        <h3 className="my-5 text-[18px] font-semibold">Step 1: Self-Reflection and Goals</h3>
        <p className="my-3">Before you can manage your lifestyle, you must have a clear</p>
        <p className="my-3">Before you can manage your lifestyle, you must have a clear</p>

        <h3 className="my-5 text-[18px] font-semibold">Step 2: Self-Reflection and Goals</h3>
        <p className="my-3">Before you can manage your lifestyle, you must have a clear</p>
        <p className="my-3">Before you can manage your lifestyle, you must have a clear</p>

        <h3 className="my-5 text-[18px] font-semibold">Step 3: Self-Reflection and Goals</h3>
        <p className="my-3">Before you can manage your lifestyle, you must have a clear</p>
        <p className="my-3">Before you can manage your lifestyle, you must have a clear</p>

        <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
        <p className="my-3">
  Ultimately, managing your lifestyle is about understanding what truly matters to you and making intentional choices that align with your values and aspirations. Keep evolving, and enjoy the journey of creating a life that reflects your true self.
</p>
        {/* Share on Social Media Section */}
        <div className="my-24">
          <p className="text-black font font-semibold my-4">Share this article on:</p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="Facebook" />
            <Image src={assets.twitter_icon} width={50} alt="Twitter" />
            <Image src={assets.googleplus_icon} width={50} alt="Google+" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
