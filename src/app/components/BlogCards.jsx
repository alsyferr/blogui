import React from 'react'
import {FaUser } from "react-icons/fa"
import Image from 'next/image';
import Link from 'next/link';


const BlogCards = ({blogs, currentPage, selectedCategory, pageSize }) => {
    const filteredBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize) ;
    
    // console.log(blog.id)

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {
           filteredBlogs.map((blog) => <Link href={`/Post/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer '>

           
            <div>
                <Image src={blog.image} alt='' width={500} height={500} className='w-full' />
            </div>
            <h3 className='mt-4 font-bold hover:text-blue-600  cursor-pointer'>{blog.title}</h3>
            <p className='mb-2 text-gray-600'><FaUser className='inline-flex items-center mr-2' /> {blog.author}</p>
            <p className='text-sm text-gray-500'>Published: {blog.publishedDate}</p>

 
           </Link>)
        }
        
    </div>
  )
}

export default BlogCards