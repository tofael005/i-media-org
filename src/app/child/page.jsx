import Image from 'next/image';
import React from 'react';
import child from "../../../public/child/bfqv_uxox_210525.jpg"
import child2 from "../../../public/child/29425.jpg"
import Link from 'next/link';

const page = () => {
    return (
        <div className='max-w-[1240px] mx-auto mt-8 mb-20 font-bangla'>
            <div className='flex gap-6 px-3'>
                <div className='md:w-[800px]'>
                    <div className='border rounded-md shadow mb-6'>
                        <Image className='w-full object-cover md:h-[350px]' src={child} alt=''></Image>
                        <h1 className='text-center my-6 text-2xl'>ইসলামী গল্প বাচ্চাদের জন্য</h1>
                    </div>
                    <div className='border rounded-md shadow'>
                        <Image className='w-full object-cover md:h-[350px]' src={child2} alt=''></Image>
                        <h1 className='text-center my-6 text-2xl'>ইসলামী গল্প বাচ্চাদের জন্য</h1>
                    </div>
                </div>

                <div className='w-[400px]'>
                    <h1 className='text-xl'>ছোটদের ইসলামিক গল্প</h1>
                    <hr className='my-3' />

                    <Link href="/golpo"><h1 className='hover:text-[#0B8998] duration-500'>ছোটদের গল্প (3)</h1></Link>
                    <hr className='my-3' />
                </div>
            </div>
        </div>
    );
};

export default page;