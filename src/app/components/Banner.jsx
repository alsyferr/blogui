import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
        <div className='text-white text-center'>
            <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to Our Blog</h1>
            <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary '>Start blog today and join a commuinity of writers and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from the helpful tips and tutorials.</p>
            <div>
                <Link href="/" className='font-medium hover:text-red-500 inline-flex py-1'>Learn more <FaArrowRight className='mt-1 ml-2' /> </Link>
            </div>
        </div>
    </div>
  )
}

export default Banner
