import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogItem = ({ title, description, category, image, id }) => {
  console.log('Image Prop:', image); // Log the image prop to verify it's correct

  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black rounded-md">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image || '/default-image.jpg'} // Use fallback for missing images
          alt={title || 'Blog Image'}
          width={400}
          height={400}
          className="border-b rounded-t-md"
        />
      </Link>
      <p className="ml-5 mt-5 px-2 inline-block bg-black text-white text-sm rounded">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">{title}</h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">{description}</p>
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center py-2 font-semibold text-center text-black hover:underline"
        >
          Read more{' '}
          <Image
            src={assets.arrow}
            className="ml-2"
            alt="Arrow"
            width={12}
            height={12}
          />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
