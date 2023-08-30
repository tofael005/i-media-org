import React from 'react';
import blog from "../../../public/blog/blog1.jpeg"
import Image from 'next/image';
import { RiAdminLine } from 'react-icons/ri';
import { AiOutlineCalendar } from 'react-icons/ai';
import { GoComment } from 'react-icons/go';
import { BsStopwatch } from 'react-icons/bs';
import Link from 'next/link';
import blog3 from "../../../public/blog/blog4.jpeg"
import blog4 from "../../../public/blog/list-post-2.jpg"
import blog5 from "../../../public/blog/blog2.jpeg"



const page = () => {
    return (
        <div className="max-w-[1240px] mx-auto my-14">
            <h1 className="text-center text-4xl font-bold mb-6 text-[#23306C]">Letest Blog</h1>
            <div className="md:flex gap-10 px-3">
                {/* Blog card section */}
                <div className='w-[840px]'>
                     {/* Blog One  */}
                    <div>
                        <div>
                            <Image className='w-full h-[400px]' src={blog4} alt=''></Image>
                            <div className='md:flex gap-3 text-slate-500 font-light my-4'>
                                <div className='md:flex items-center gap-4'>
                                    <div className='flex items-center gap-3'>
                                        <RiAdminLine />
                                        <h1>Admin</h1>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <AiOutlineCalendar />
                                        <h1>August 25, 2023</h1>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <GoComment />
                                    <h1>Comments (0)</h1>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="my-6">
                            <h1 className="text-xl font-bold my-3 text-[#23306C]">Five Thinks for Sunnah</h1>
                            <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam similique voluptates expedita quibusdam dignissimos numquam ut ex molestias, id ad? Consequuntur blanditiis quisquam architecto alias cupiditate hic et tempora incidunt! <span className="text-[#0B8998] font-bold cursor-pointer underline">Read More</span></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image className='w-full h-[400px]' src={blog5} alt=''></Image>
                            <div className='md:flex gap-3 text-slate-500 font-light my-4'>
                                <div className='md:flex items-center gap-4'>
                                    <div className='flex items-center gap-3'>
                                        <RiAdminLine />
                                        <h1>Admin</h1>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <AiOutlineCalendar />
                                        <h1>August 25, 2023</h1>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <GoComment />
                                    <h1>Comments (0)</h1>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="my-6">
                            <h1 className="text-xl font-bold my-3 text-[#23306C]">Five Thinks for Sunnah</h1>
                            <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam similique voluptates expedita quibusdam dignissimos numquam ut ex molestias, id ad? Consequuntur blanditiis quisquam architecto alias cupiditate hic et tempora incidunt! <span className="text-[#0B8998] font-bold cursor-pointer underline">Read More</span></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image className='w-full h-[400px]' src={blog} alt=''></Image>
                            <div className='md:flex gap-3 text-slate-500 font-light my-4'>
                                <div className='md:flex items-center gap-4'>
                                    <div className='flex items-center gap-3'>
                                        <RiAdminLine />
                                        <h1>Admin</h1>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <AiOutlineCalendar />
                                        <h1>August 25, 2023</h1>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <GoComment />
                                    <h1>Comments (0)</h1>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="my-6">
                            <h1 className="text-xl font-bold my-3 text-[#23306C]">Five Thinks for Sunnah</h1>
                            <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam similique voluptates expedita quibusdam dignissimos numquam ut ex molestias, id ad? Consequuntur blanditiis quisquam architecto alias cupiditate hic et tempora incidunt! <span className="text-[#0B8998] font-bold cursor-pointer underline">Read More</span></p>
                        </div>
                    </div>
                </div>


                {/* Category Section  */}
                <div className='w-[400px]'>
                    <h1 className='text-2xl font-semibold my-4'>Categories</h1>
                    <hr />

                    <div className='mt-6 font-light'>
                        <Link href="/blogcard"><h1 className='my-5 hover:font-semibold hover:text-[#0B8998] duration-300'>Hajj Guid (2)</h1></Link>
                       <Link href="/helpingpoor"><h1 className='hover:font-semibold hover:text-[#0B8998] duration-300'>Helping Poor (2)</h1></Link>
                        <Link href="/learningquran"><h1 className='my-5 hover:font-semibold hover:text-[#0B8998] duration-300'>Learning Quran (2)</h1></Link>
                        <Link href="/traveling"><h1 className='hover:font-semibold hover:text-[#0B8998] duration-300'>Traveling World (2)</h1></Link>
                        <Link href="/married"><h1 className='my-5 hover:font-semibold hover:text-[#0B8998] duration-300'>Importance of Marriage (2)</h1></Link>
                        <Link href="/rulsofislam"><h1 className='hover:font-semibold hover:text-[#0B8998] duration-300'>Islamic Rules (4)</h1></Link>
                    </div>

                    {/* Recent Post Section  */}
                    <div className='mt-28'>
                        <h1 className='text-2xl font-semibold my-4'>Recent Post</h1>
                        <hr />
                        <div className='border flex gap-3 items-center rounded-md p-2 mt-5'>
                            <Image className="w-[50px] h-[50px] rounded-md" src={blog3} alt=''></Image>
                            <div className="">
                                <Link href="/married"><h1 className="mb-2 font-semibold cursor-pointer text-[#23306C]">Importance of Marriage in Islam.</h1></Link>
                                <div className="flex items-center text-xs mt-2">
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
                        <div className='border flex gap-3 items-center rounded-md p-2 mt-3'>
                            <Image className="w-[50px] h-[50px] rounded-md" src={blog3}></Image>
                            <div className="">
                                <Link href="/married"><h1 className="mb-2 font-semibold cursor-pointer text-[#23306C]">Importance of Marriage in Islam.</h1></Link>
                                <div className="flex items-center text-xs mt-2">
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
                        <div className='border flex gap-3 items-center rounded-md p-2 mt-3'>
                            <Image className="w-[50px] h-[50px] rounded-md" src={blog3} alt=''></Image>
                            <div className="">
                                <Link href="/married"><h1 className="mb-2 font-semibold cursor-pointer text-[#23306C]">Importance of Marriage in Islam.</h1></Link>
                                <div className="flex items-center text-xs mt-2">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;