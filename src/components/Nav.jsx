"use client"
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu  } from 'react-icons/gi';
import { AiOutlineLogin  } from 'react-icons/ai';
import { useState } from 'react';
import Image from 'next/image';
import logo from "../../public/logo.png"


const Nav = () => {

    const [toggle, setToggle] = useState(false)
    return (
        <div className="shadow-md">
            <div className="max-w-[1240px] mx-auto px-3 flex justify-between py-5 items-center">
                <div>
                   <Link href="/"> <Image className="w-32" src={logo} alt=''></Image></Link>
                </div>


                <span className='md:hidden'>
                    {
                        toggle ? <AiOutlineClose className='text-2xl' onClick={() => setToggle(!toggle)} /> : <GiHamburgerMenu className="text-2xl" onClick={() => setToggle(!toggle)} />
                    }
                </span>


                <ul className={`flex items-center duration-300 flex-col py-5 md:p-0 text-white md:text-gray-900 bg-opacity-90 top-14 bg-black md:bg-transparent w-full text-center md:w-auto md:flex-row gap-4 absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <Link className='border p-3 rounded-lg hover:text-white text-[#23306C] duration-500 hover:bg-[#06DAD7]' href="/">Home</Link>
                    </li>
                    <li>
                        <Link className='p-3 rounded-lg hover:text-white text-[#23306C] duration-500 hover:bg-[#06DAD7]' href="/about">About</Link>
                    </li>
                    <li>
                        <Link className='p-3 rounded-lg hover:text-white text-[#23306C] duration-500 hover:bg-[#06DAD7]' href="/service">Service</Link>
                    </li>
                    <li>
                        <Link className='p-3 rounded-lg hover:text-white text-[#23306C] duration-500 hover:bg-[#06DAD7]' href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className='p-3 rounded-lg hover:text-white text-[#23306C] duration-500 hover:bg-[#06DAD7]' href="/contact">Contact</Link>
                    </li>
                    <Link className='flex items-center gap-2 p-3 rounded-lg  hover:text-white duration-500 hover:bg-[#06DAD7]' href="/donate"><span>Donate</span><AiOutlineLogin/></Link>
                </ul>
            </div>
        </div>
    );
};

export default Nav;