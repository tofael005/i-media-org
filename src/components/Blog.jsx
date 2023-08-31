import Image from 'next/image';
import React from 'react';
import { BsStopwatch } from 'react-icons/bs';
import { RiAdminLine } from 'react-icons/ri';
import blog from "../../public/blog/blog4.jpeg"
import blog2 from "../../public/blog/blog3.jpeg"
import blog3 from "../../public/blog/blog1.jpeg"
import blog4 from "../../public/blog/blog2.jpeg"
import Link from 'next/link';

const Blog = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-24 mb-24">
            <h1 className="text-4xl text-center my-5 font-bold text-[#23306C]">Latest News</h1>
            <p className="text-center font-light text-[#0B8998]">---From Our Blog---</p>
            <div className="grid md:grid-cols-4 gap-8 mt-6 px-3">
                <div className='border rounded-md p-2'>
                    <Image className="w-full h-[260px] rounded-md" src={blog} alt=''></Image>
                    <div className="mt-6">
                        <Link href="/fortrips"><h1 className="mb-2 font-semibold cursor-pointer text-[#23306C]">Dua.</h1></Link>
                        <div className="flex justify-between items-center text-xs mt-2">
                            <div className="flex justify-between items-center gap-2">
                                <RiAdminLine className='text-[#0B8998] font-semibold' />
                                <h1 className="font-light">By: admin</h1>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <BsStopwatch className='text-[#0B8998] font-semibold' />
                                <h1 className="font-light">August 25, 2023</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border rounded-md p-2'>
                    <Image className="w-full h-[260px] rounded-md" src={blog2} alt=''></Image>
                    <div className="mt-6">
                        <Link href="/romadan"><h1 className="mb-2 font-semibold cursor-pointer text-[#23306C]">Ramadan.</h1></Link>
                        <div className="flex justify-between items-center text-xs mt-2">
                            <div className="flex justify-between items-center gap-2">
                                <RiAdminLine className='text-[#0B8998] font-semibold' />
                                <h1 className="font-light">By: admin</h1>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <BsStopwatch className='text-[#0B8998] font-semibold' />
                                <h1 className="font-light">August 25, 2023</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border rounded-md p-2'>
                    <Image className="w-full h-[260px] rounded-md" src={blog3} alt=''></Image>
                    <div className="mt-6">
                        <Link href="/married"><h1 className="mb-2 font-semibold cursor-pointer text-[#23306C]">Marriage.</h1></Link>
                        <div className="flex justify-between items-center text-xs mt-2">
                            <div className="flex justify-between items-center gap-2">
                                <RiAdminLine className='text-[#0B8998] font-semibold' />
                                <h1 className="font-light">By: admin</h1>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <BsStopwatch className='text-[#0B8998] font-semibold' />
                                <h1 className="font-light">August 25, 2023</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border rounded-md p-2'>
                    <Image className="w-full h-[260px] rounded-md" src={blog4} alt=''></Image>
                    <div className="mt-6">
                        <Link href="/sunnah"><h1 className="mb-2 text-[#23306C] font-semibold cursor-pointer">Sunnah</h1></Link>
                        <div className="flex justify-between items-center text-xs mt-2">
                            <div className="flex justify-between items-center gap-2">
                                <RiAdminLine className='text-[#0B8998] font-semibold' />
                                <h1 className="font-light text-sm">By: admin</h1>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <BsStopwatch className='text-[#0B8998] font-semibold' />
                                <h1 className="font-light text-sm">August 25, 2023</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link href="/blog">
                <button className="mt-8 block mx-auto rounded-md hover:bg-transparent hover:border-2 hover:border-bg-[#06DAD7] text-white font-bold hover:text-[#23306C] duration-500 bg-[#06DAD7] px-8 py-4">See More</button>
            </Link>
        </div>
    );
};

export default Blog;