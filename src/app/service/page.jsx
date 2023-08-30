import Link from 'next/link';
import React from 'react';
import quran from "../../../public/icon/quran.png"
import mosque from "../../../public/icon/mosque.png"
import food from "../../../public/icon/icon5.png"
import Image from 'next/image';

const page = () => {
    return (
        <div>
            <div className="mt-16 mb-14">
                <h1 className="text-center text-4xl font-bold my-5 text-[#23306C]">Our Services For Humanity</h1>
                <p className="text-center font-light mb-5 text-[#0B8998]">---Service---</p>
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6">
                    <div className="bg-[#f9f5f5] py-10 px-4 rounded-md">
                        <Image className="block mx-auto h-[65px]" src={quran} alt=''></Image>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold my-5 text-[#23306C]">Quran</h1>
                            <p className="mb-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                            <Link href="/quran"><button className="block mx-auto rounded-md hover:bg-transparent hover:border-2 hover:border-bg-[#06DAD7] text-white font-bold hover:text-[#23306C] duration-500 bg-[#06DAD7] p-4">Read More</button></Link>
                        </div>
                    </div>
                    <div className="bg-[#f9f5f5] py-10 px-4 rounded-md">
                        <Image className="block mx-auto h-[65px]" src={mosque} alt=''></Image>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold my-5 text-[#23306C]">Mosque</h1>
                            <p className="mb-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                            <Link href="/mosque"><button className="block mx-auto bg-[#FF8483] p-4 rounded-md hover:bg-transparent hover:border-2 hover:border-bg-[#06DAD7] text-white font-bold hover:text-[#23306C] duration-500">Read More</button></Link>
                        </div>
                    </div>
                    <div className="bg-[#f9f5f5] py-10 px-4 rounded-md">
                        <Image className="block mx-auto  h-[65px]" src={food} alt=''></Image>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold my-5 text-[#23306C]">Child</h1>
                            <p className="mb-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                            <Link href="/child"><button className="block mx-auto hover:bg-transparent hover:border-2 hover:border-bg-[#06DAD7] text-white font-bold hover:text-[#23306C] duration-500 bg-[#DB9E2F] p-4 rounded-md">Read More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;