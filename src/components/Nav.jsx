import Link from 'next/link';
// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineLogin } from 'react-icons/ai';
// import { GiHamburgerMenu  } from 'react-icons/gi';
import { AiOutlineLogin  } from 'react-icons/ai';

const Nav = () => {

    // const [toggle, setToggle] = useState()
    return (
        <div className="border-b-0">
            <div className="max-w-[1240px] mx-auto flex justify-between py-5 items-center">
                <div>
                    <h1>LOGO</h1>
                </div>


                {/* <span className='md:hidden'>
                    {
                        toggle ? <AiOutlineClose className='text-2xl' onClick={() => setToggle(!toggle)} /> : <GiHamburgerMenu className="text-2xl" onClick={() => setToggle(!toggle)} />
                    }
                </span> */}


                <ul className="flex items-center gap-8">
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