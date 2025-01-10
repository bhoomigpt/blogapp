import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const BlogTableItem = ({ authorImg, title, author }) => {
  return (
    <tr className='bg-white border-b'>
      <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4'>
        <Image width={40} height={40} src={authorImg || assets.profile_icon} alt="Author" />
        <p>{author || "No author"}</p>
      </th>
      <td className='px-6 py-4'>{title || 'no title'}</td>
      <td className='px-6 py-4'>{'11 Jan 2024'}</td>
      {/* Add action buttons or links here */}
    </tr>
  );
};

export default BlogTableItem;