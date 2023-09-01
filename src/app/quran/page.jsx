import Image from 'next/image';
import React from 'react';
import quran from "../../../public/quran.jpg"
import Link from 'next/link';

const page = () => {
    return (
        <div className='max-w-[1240px] mx-auto mt-10 mb-20'>
            {/* <h1 className='text-center text-3xl font-bold my-4'>Read the holy Quran</h1> */}
            <div className="md:flex gap-6 px-3">
                <div className='md:w-[800px] border rounded-md mb-8'>
                    <Image className='rounded-md' src={quran} alt=''></Image>
                </div>

                {/* SURAH SECTION  */}
                <div className='md:w-[400px] mb-8 font-bangla'>
                    <h1 className='text-2xl mb-5'>তিলাওয়াতুল কোরআন।</h1>
                    <Link href="/alfatiha"><h1 className='hover:text-[#0B8998] duration-500'>সূরা আল-ফাতিহা।</h1></Link>
                    <hr className='my-2' />
                    <Link href="/surafil"><h1 className='hover:text-[#0B8998] duration-500'>সূরা ফীল।</h1></Link>
                    <hr className='my-2' />
                    <Link href="/surakurais"><h1 className='hover:text-[#0B8998] duration-500'>সূরা কুরাইশ।</h1></Link>
                    <hr className='my-2' />
                    <Link href="/surakawser"><h1 className='hover:text-[#0B8998] duration-500'>সূরা আল-কাউসার</h1></Link>
                    <hr className='my-2' />
                </div>
            </div>
        </div>
    );
};

export default page;