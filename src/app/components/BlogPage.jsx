"use client"
import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';
import { Suspense } from 'react'

const BlogPage = () => {


  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12 //number of blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null)


  useEffect(() => {
    async function fetchBlogs() {
      let url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/posts?pages=${currentPage}&limit=${pageSize}`;

      // filter by category
      if (selectedCategory){
        url += `&category=${selectedCategory}`;
      }

      const response = await fetch(url);
      const data =  await response.json();
      setBlogs(data)
    }

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory])


  // Page Changing btn
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // 

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }

  // console.log(blogs)

  if(!process.env.NEXT_PUBLIC_SITE_URL) {
    return null;
  }



  return (
    <div>
       {/* category section */}
       <div>
          <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
       </div>

       {/* blogCards sections */}
       
       <div className='flex flex-col lg:flex-row gap-12'>
       <Suspense fallback={<p>Loading feed...</p>}>
          <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}  />

          {/* Sidebar component */}
          </Suspense>
          <div>
         
            <SideBar />
          </div>
       </div>

       {/* Pagination section */}
       <div>
          <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
       </div>

    </div>
  )
}

export default BlogPage 