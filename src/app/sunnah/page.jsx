import Image from 'next/image';
import React from 'react';
import sunnah from "../../../public/sunna1.jpg"
import Link from 'next/link';

const page = () => {
    return (
        <div className='max-w-[1240px] mx-auto font-bangla mt-6 mb-20'>
            <h1 className='text-center text-2xl my-6'>সুন্নাহ</h1>
            <div className='md:flex gap-6 px-3'>
                <div className='md:w-[800px]'>
                    <Image className='md:w-full object-cover md:h-[500px]' src={sunnah} alt=''></Image>
                </div>


                <div className='w-[400px]'>
                <h1 className='text-2xl'>সুন্নাহ সমুহ।</h1>
                <hr className='my-3' />

                <Link href="/miswak"><h1 className='hover:text-[#0B8998] duration-500'>মিসওয়াক করা</h1></Link>
                <hr className='my-3' />

                <Link href="/ozu"><h1 className='hover:text-[#0B8998] duration-500'>ওজু করা</h1></Link>

                </div>
            </div>
        </div>
    );
};

export default page;