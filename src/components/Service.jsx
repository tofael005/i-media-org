import Image from 'next/image';
import React from 'react';
import quran from "../../public/icon/quran.png"
import Link from 'next/link';

const Service = () => {
    return (
        <div className="mt-16 mb-14">
            <h1>Our Services For Humanity</h1>
            <p>---Service---</p>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6">
                <div className="bg-[#f9f5f5] py-10 px-4">
                    <Image className="block mx-auto" src={quran}></Image>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold my-5">Quran Memorization</h1>
                        <p className="mb-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                        <Link href="/readquran"><button className="block mx-auto bg-orange-200 p-4 rounded-md">Read More</button></Link>
                    </div>
                </div>
                <div className="bg-[#f9f5f5] py-10 px-4">
                    <Image className="block mx-auto" src={quran}></Image>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold my-5">Madrasa Development</h1>
                        <p className="mb-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                        <Link href="/readquran"><button className="block mx-auto">Read More</button></Link>
                    </div>
                </div>
                <div className="bg-[#f9f5f5] py-10 px-4">
                    <Image className="block mx-auto" src={quran}></Image>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold my-5">Mosque Development</h1>
                        <p className="mb-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                        <Link href="/readquran"><button className="block mx-auto">Read More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;