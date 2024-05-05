"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';


const SideBar = () => {
    const [popularBlogs, setPopularBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/posts").then(res => res.json() ).then(data => setPopularBlogs(data.slice(0, 15)))
    }, [])

  return (
    <div>
        <div>
            <h3 className='text-2xl font-semibold px-4' >Latest Blogs</h3>
            <div>
                {
                    popularBlogs.slice(0, 5).map((blog) => <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                    <h4 className='font-medium mb-2'>{blog.title}</h4>
                    <Link href={`/Post/${blog.id}`} className='text-base pb-2 font-semibold hover:text-red-500 inline-flex py-1 text-gray-500'>Read now <FaArrowRight className='mt-1 ml-2' /> </Link>
                    </div>

                    )
                }
            </div>
        </div>

                {/* Popular Blogs */}
        <div >
            <h3 className='text-2xl font-semibold px-4 mt-20' >Popular Blogs</h3>
            <div>
                {
                    popularBlogs.slice(6, 10).map((blog) => <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                    <h4 className='font-medium mb-2'>{blog.title}</h4>
                    <Link href={`/Post/${blog.id}`} className='text-base pb-2 font-semibold text-gray-500 hover:text-red-500 inline-flex py-1'>Read now <FaArrowRight className='mt-1 ml-2' /> </Link>
                    </div>

                    )
                }
            </div>
        </div>
        
    </div>
  )
}

export default SideBar