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
        <div className="border-b-0">
            <div className="max-w-[1240px] mx-auto px-3 flex justify-between py-5 items-center">
                <div>
                    <Image className="w-32" src={logo}></Image>
                </div>


                <span className='md:hidden'>
                    {
                        toggle ? <AiOutlineClose className='text-2xl' onClick={() => setToggle(!toggle)} /> : <GiHamburgerMenu className="text-2xl" onClick={() => setToggle(!toggle)} />
                    }
                </span>


                <ul className={`flex items-center duration-300 flex-col py-5 md:p-0 text-white md:text-gray-900 bg-opacity-90 top-14 bg-black md:bg-transparent w-full text-center md:w-auto md:flex-row gap-6 absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/service">Service</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <Link className="flex gap-2 items-center border p-2" href="/donate"><span>Donate</span> <AiOutlineLogin/> </Link>
                </ul>
            </div>
        </div>
    );
};

export default Nav;