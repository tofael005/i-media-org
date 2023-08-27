import Image from 'next/image';
import React from 'react';
import { BsStopwatch } from 'react-icons/bs';
import { GrUserAdmin } from 'react-icons/gr';
import blog from "../../public/blog/blog4.jpeg"
import blog2 from "../../public/blog/blog3.jpeg"
import blog3 from "../../public/blog/blog1.jpeg"
import blog4 from "../../public/blog/blog2.jpeg"

const Blog = () => {
    return (
        <div className="max-w-[1240px] mx-auto mt-24 mb-24">
            <h1 className="text-4xl text-center my-5 font-bold">Latest News</h1>
            <p className="text-center font-light">From Our Blog</p>
            <div className="grid md:grid-cols-4 gap-8 mt-6 px-3">
                <div>
                    <Image className="w-full h-[260px] rounded-md" src={blog}></Image>
                    <div className="mt-6">
                        <h1 className="mb-2 font-semibold cursor-pointer">Four Tips to Help You eat right</h1>
                        <div className="flex justify-between items-center text-xs mt-2">
                            <div className="flex justify-between items-center gap-2">
                                <GrUserAdmin className='text-sky-300 font-semibold' />
                                <h1 className="font-light">By: admin</h1>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <BsStopwatch className='text-sky-300 font-semibold' />
                                <h1 className="font-light">August 25, 2023</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image className="w-full h-[260px] rounded-md" src={blog2}></Image>
                    <div className="mt-6">
                        <h1 className="mb-2 font-semibold cursor-pointer">People during the Ramadan.</h1>
                        <div className="flex justify-between items-center text-xs mt-2">
                            <div className="flex justify-between items-center gap-2">
                                <GrUserAdmin className='text-sky-300 font-semibold' />
                                <h1 className="font-light">By: admin</h1>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <BsStopwatch className='text-sky-300 font-semibold' />
                                <h1 className="font-light">August 25, 2023</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image className="w-full h-[260px] rounded-md" src={blog3}></Image>
                    <div className="mt-6">
                        <h1 className="mb-2 font-semibold cursor-pointer">Importance of Marriage in Islam.</h1>
                        <div className="flex justify-between items-center text-xs mt-2">
                            <div className="flex justify-between items-center gap-2">
                                <GrUserAdmin className='text-sky-300 font-semibold' />
                                <h1 className="font-light">By: admin</h1>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <BsStopwatch className='text-sky-300 font-semibold' />
                                <h1 className="font-light">August 25, 2023</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image className="w-full h-[260px] rounded-md" src={blog4}></Image>
                    <div className="mt-6">
                        <h1 className="mb-2 font-semibold cursor-pointer">The Importance thinks for Sunnah</h1>
                        <div className="flex justify-between items-center text-xs mt-2">
                            <div className="flex justify-between items-center gap-2">
                                <GrUserAdmin className='text-sky-300 font-semibold' />
                                <h1 className="font-light text-sm">By: admin</h1>
                            </div>
                            <div className="flex justify-between items-center gap-2">
                                <BsStopwatch className='text-sky-300 font-semibold' />
                                <h1 className="font-light text-sm">August 25, 2023</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;