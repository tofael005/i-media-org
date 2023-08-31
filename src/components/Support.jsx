import Image from 'next/image';
import React from 'react';
import support from "../../public/banner.png"
import Link from 'next/link';

const Support = () => {
    return (
        <div className="bg-[#EBFAFA] mt-14 mb-8">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid md:grid-cols-2 gap-8 py-10 px-3">
                    <div className="mt-12">
                        <h1 className="text-[#0B8998]">Support Us</h1>
                        <h1 className="text-4xl my-7 font-bold text-[#23306C]">We Need Your Help</h1>
                        <p className="font-light">The Weekend School of the Islamic Center of Allah is committed to providing quality Islamic Education according to the Quran.</p>
                        <Link href="/donate">
                            <button className="mt-8 rounded-md hover:bg-transparent hover:border-2 hover:border-bg-[#06DAD7] text-white font-bold hover:text-[#23306C] duration-500 bg-[#06DAD7] px-8 py-4">Donate Now</button>
                        </Link>
                    </div>
                    <Image className="w-full object-cover mt-4 h-[400px]" src={support} alt=''></Image>
                </div>
            </div>
        </div>
    );
};

export default Support;