import React from 'react'
import Link from 'next/link';

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
            <div className='grid mb-8 lg:grid-cols-6'>
                <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                    
                     {/* category 1 */}
                    <div >
                    <p className='font-medium tracking-wide text-gray-300 '>Category</p>
                    <ul className='mt-2 space-y-2 '>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>News</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>World</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>Games</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>References</Link>
                        </li>
                    </ul>
                    </div>

                    {/* category 2 */}
                    <div >
                    <p className='font-medium tracking-wide text-gray-300 '>Apples</p>
                    <ul className='mt-2 space-y-2 '>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>Web</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>eCommerce</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>Business</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>Entertainment</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>Portfolio</Link>
                        </li>
                    </ul>
                    </div>

                       {/* category 3 */}
                       <div >
                    <p className='font-medium tracking-wide text-gray-300 '>Cherry</p>
                    <ul className='mt-2 space-y-2 '>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>Media</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>Brochure</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>Non-profit</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>Education</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>Projects</Link>
                        </li>
                    </ul>
                    </div>
                    
                    
                       {/* category 4 */}
                       <div >
                    <p className='font-medium tracking-wide text-gray-300 '>Business</p>
                    <ul className='mt-2 space-y-2 '>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>Infopreneur</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>Personal</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>Wiki</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>forum</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-gray-500  transition-colors duration-300 hover:text-red-500'>Projects</Link>
                        </li>
                    </ul>
                    </div>
                    
                    
                     
                    
                    
                </div>

                   {/* Subscription */}
                   <div className='md:wax-w-md lg:col-span-2 lg:mt-0 mt-5'>
                    <p className='font-medium tracking-wide text-gray-300 '>Subscribe for updates</p>
                    <form className='mt-4 flex flex-col md:flex-row'>
                        <input type='email' name="email" id='email' className='flex-grow w-full h-12 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' />
                        <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-red-500 focus:outline-none border'>Subscribe</button>
                    </form>
                    <p className='mt-4 text-sm text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
            </div>

            <div className=' flex flex-col justify-between pt-5 pb-10 border-t border-gray-800  sm:flex-row'>
                <p className='text-sm  text-gray-500 '>© Copyright 2024 | All right reserved</p>
                <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                    <Link href='' className='text-gray-500 transit  duration-300 hover:text-red-500'><FaTwitter className='h-6 w-6' /></Link>
                    <Link href='' className='text-gray-500 transit  duration-300 hover:text-red-500'><FaInstagram className='h-6 w-6' /></Link>
                    <Link href='' className='text-gray-500 transit  duration-300 hover:text-red-500'><FaFacebook className='h-6 w-6' /></Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer