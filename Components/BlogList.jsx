import React, { useState } from 'react';
import BlogItem from './BlogItem';
import { blog_data } from '@/Assets/assets';

const BlogList = () => {
  const [menu, setMenu] = useState('All');
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
  };
  


  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        {['All', 'Technology', 'Startup', 'Lifestyle'].map((category) => (
          <button
            key={category}
            className={`py-1 px-4 rounded-sm ${
              menu === category ? 'bg-black text-white' : 'text-gray-800 hover:bg-gray-200'
            }`}
            onClick={() => setMenu(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-around gap-6 mb-16 xl:mx-24">
        {blog_data
          .filter((item) => menu === 'All' || item.category === menu)
          .map((item, index) => (
            <BlogItem
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              desc={item.description}
              category={item.category}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
