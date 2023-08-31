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
        <div className="max-w-[1240px] mx-auto my-14 px-3">
            <h1 className="text-center text-3xl font-bold mb-6 text-[#23306C]">Letest Blog</h1>
            <div className="md:flex gap-10 px-3">
                {/* Blog card section */}
                <div className='w-[840px]'> 
                     {/* Blog One  */}
                    <div>
                        <div>
                            <Image className='w-full object-cover md:h-[400px]' src={blog4} alt=''></Image>
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
                            <h1 className="text-xl font-bold mt-3 text-[#23306C]">SALAH</h1>
                            <p className='font-bangla text-justify my-6'>সালাত বা নামায নিছক প্রার্থনা নয় | এটি আমাদেরকে আমাদের স্রষ্টার অনুগত করে | তাই নামায হচ্ছে আনুগত্যের অনুশীলন | নামাযের আরবি শব্দ হল Salah, এই শব্দটির অর্থ চারটি প্রসিদ্ধ রয়েছে | ১. প্রার্থনা করা, ২. অনুগ্রহ করা, ৩. পবিত্রতা বর্ণনা করা, এবং ৪. ক্ষমা প্রার্থনা করা |পারিভাষিক অর্থে সালাত বা নামায হচ্ছে এমন একটা নির্দিষ্ট ইবাদত যা নির্ধারিত সময়ে সুনির্দিষ্ট পদ্ধতিতে আদায় করা হয় | পাঁচ ওয়াক্ত নামাযের মাধ্যমে একজন মুসলমান ইসলামের পরিচালিত হয় |<Link href="/salah"><span className="text-[#0B8998] font-bold cursor-pointer ">Read More</span></Link></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image className='w-full object-cover md:h-[400px]' src={blog5} alt=''></Image>
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
                            <h1 className="text-xl font-bold my-3 text-[#23306C]">SUNNAH</h1>
                            <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam similique voluptates expedita quibusdam dignissimos numquam ut ex molestias, id ad? Consequuntur blanditiis quisquam architecto alias cupiditate hic et tempora incidunt! <Link href="/sunnah"><span className="text-[#0B8998] font-bold cursor-pointer ">Read More</span></Link></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image className='w-full object-cover md:h-[400px]' src={blog} alt=''></Image>
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
                            <Link href="/romadan"><h1 className="text-xl font-bold my-3 text-[#23306C]">RAMADAN Kareem</h1></Link>
                            <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam similique voluptates expedita quibusdam dignissimos numquam ut ex molestias, id ad? Consequuntur blanditiis quisquam architecto alias cupiditate hic et tempora incidunt!<Link href="/romadan"><span className="text-[#0B8998] font-bold cursor-pointer ">Read More</span></Link></p>
                        </div>
                    </div>
                </div>


                {/* Category Section  */}
                <div className='w-[400px]'>
                    <h1 className='text-2xl font-semibold my-4'>Categories</h1>
                    <hr />

                    <div className='mt-6 font-light'>
                        <Link href="/blogcard"><h1 className='my-5 hover:font-semibold hover:text-[#0B8998] duration-300'>HAJJ GUID (2)</h1></Link>
                       <Link href="/helpingpoor"><h1 className='hover:font-semibold hover:text-[#0B8998] duration-300 mb-5'>HELP PEOPLE (2)</h1></Link>
                       <Link href="/zakat"><h1 className='hover:font-semibold hover:text-[#0B8998] duration-300'>ZAKAT (4)</h1></Link>
                        <Link href="/learningquran"><h1 className='my-5 hover:font-semibold hover:text-[#0B8998] duration-300'>QURAN (2)</h1></Link>
                        <Link href="/traveling"><h1 className='hover:font-semibold hover:text-[#0B8998] duration-300'>TRAVELING (2)</h1></Link>
                        <Link href="/marriagecard"><h1 className='my-5 hover:font-semibold hover:text-[#0B8998] duration-300'>MARRIAGE (2)</h1></Link>
                        <Link href="/roja"><h1 className='my-5 hover:font-semibold hover:text-[#0B8998] duration-300'>SAWM (5)</h1></Link>
                        <Link href="/rulsofislam"><h1 className='hover:font-semibold hover:text-[#0B8998] duration-300'>ISLAMIC STORY (4)</h1></Link>
                    </div>

                    {/* Recent Post Section  */}
                    <div className='mt-28'>
                        <h1 className='text-2xl font-semibold my-4'>Recent Post</h1>
                        <hr />
                        <div className='border flex gap-3 items-center rounded-md p-2 mt-5'>
                            <Image className="w-[50px] h-[50px] rounded-md" src={blog3} alt=''></Image>
                            <div className="">
                                <Link href="/married"><h1 className="mb-2 font-semibold cursor-pointer text-[#23306C]">Marriage.</h1></Link>
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
                            <Image className="w-[50px] h-[50px] rounded-md" src={blog5} alt=''></Image>
                            <div className="">
                                <Link href="/helpingpoor"><h1 className="mb-2 font-semibold cursor-pointer text-[#23306C]">Help NOW.</h1></Link>
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
                            <Image className="w-[50px] h-[50px] rounded-md" src={blog} alt=''></Image>
                            <div className="">
                                <Link href="/blogcard"><h1 className="mb-2 font-semibold cursor-pointer text-[#23306C]">Hajj.</h1></Link>
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