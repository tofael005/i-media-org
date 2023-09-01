import React from 'react';
import banner from "../../public/banner-1.png"
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="bg-[#EBFAFA] mt-1">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 py-10 px-4">
                <div className="mt-24 items-center">
                    <h1 className="text-[#0B8998]">Let Know Islam</h1>
                    <h1 className="text-4xl py-6 font-bold leading-snug text-[#23306C]">Read! In the name of your lord, Who has created</h1>
                    <p>We are the best Education Organization. Let know about Islam And the Holy Quran!</p>
                    <Link href="/morediscover">
                        <button className="mt-10 rounded-md hover:bg-transparent border text-white font-bold hover:text-[#23306C] duration-500 bg-[#06DAD7] px-8 py-4">Descover More</button>
                    </Link>
                </div>
                <Image className="h-full w-full" src={banner} alt=''></Image>
            </div>
        </div>
    );
};
export default Banner;