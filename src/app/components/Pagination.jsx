import React from 'react'
import Link from 'next/link';

const Pagination = ({onPageChange, currentPage, blogs, pageSize}) => {
    const totalPages = Math.ceil(blogs.length / pageSize);
    // console.log(totalPages)
    const renderPaginationLinks = () => {
        return Array.from({length: totalPages}, (_, i) => i + 1).map((pageNumber) => (
            <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
                <Link href='#' onClick={() => onPageChange(pageNumber) }>{pageNumber}</Link>
            </li>
        )) 
    }

  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
        <li>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        </li>
        <div className='flex gap-1'>{renderPaginationLinks()}</div>
        <li>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} >Next</button>
        </li>
    </ul>
  )
}

export default Pagination