'use client'

import React from 'react'

const page = () => {
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All blogs</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-sm text bg-gray-700 text-left uppercase bg-g'>
            <tr>
              <td scope='col' className='hidden sm:block px-6 py-3'>Author name</td>
              <td scope='col' className='px-6 py-3'>Blog Title</td>
              <td scope='col' className='px-6 py-3'>Date</td>
              <td scope='col' className='px-6 py-3'>Action</td>
            </tr>
          </thead>
          <tbody>



          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page