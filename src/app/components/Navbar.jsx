"use client"
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { FaBars, FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6';
// import Modal from './Modal';
import { links } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {

    const pathname = usePathname()

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isModalOpen, setIsModalOpen] = useState(false)


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // modal details
    // const openModal = () => {
    //     setIsModalOpen(true)
    // }

    // const closeModal = () => {
    //     setIsModalOpen(false)
    // }


  return (
    <div>
        <header className='bg-black text-white fixed top-0 left-0 right-0 '>

            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
                <Link href='/' className='text-xl font-bold text-red-500'>SG-<span className='text-white'>Dynamics</span></Link>
                {/* Navitems for lg devices */}
                <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        links.map((link) => <li className='text-white' key={link.id}>
                           <Link className={`link ${pathname === `${link.url}` ? 'active' : ''} hover:text-red-500`}   href={link.url}>{link.title}</Link>
                        </li>
                        )}
                </ul>
                {/* menu icons */}
                <div className='text-white lg:flex gap-4 items-center hidden'>
                    <Link href='/' className='hover:text-red-500'><FaFacebook /></Link>
                    <Link href='/' className='hover:text-red-500'><FaDribbble /></Link>
                    <Link href='/' className='hover:text-red-500'><FaTwitter /></Link>
                    <button  className='bg-red-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-red-500 transition-all duration-200 ease-in '>Login</button>
                </div>

                    {/* our modal component */}
                {/* <Modal isOpen={isModalOpen}  onClose={closeModal} /> */}

                {/* mobile menu btn, display mobile screen */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5'/>
                    }
                    
                    </button>
                </div>
            </nav>
            {/* menu items only for mobile */}
            <div>
            <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden" }`}>
                    {
                        links.map((link) => <li className='text-black' key={link.id}>
                            <Link onClick={toggleMenu} href={link.url}>
                                {link.title}
                                </Link>
                        </li>)}
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Navbar