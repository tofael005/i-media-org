import React from 'react';
import about from "../../public/about.jpeg"
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    return (
        <div className="mt-24">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid md:grid-cols-2 gap-3 px-3">
                    <Image className="rounded-md" src={about}></Image>
                    <div className="mt-8">
                        <h1 className="font-bold text-[#0B8998]">About Us</h1>
                        <h1 className="text-4xl font-bold leading-snug my-3 text-[#23306C]">Welcome to Almanar Islamic Center for Muslims</h1>
                        <p className="mb-6 font-light">slamic center” is a place for the Muslim community to refresh their knowledge and non-muslims to know about Islam. It creates awareness about the Islamic lifestyle and also the teachings of the prophet Muhammad(s.a.w). The Hajj house inside the Islamic center will be more helpful and guidance for them to perform Umrah and Hajj.</p>
                        <p className="font-light">Almanar Islamic Center depends on your continuous support and generosity. Donate towards one of our featured campaigns or choose a campaign</p>
                        <Link href="/about">
                            <button className="mt-10 rounded-md hover:bg-transparent hover:border-2 hover:border-bg-[#06DAD7] text-white font-bold hover:text-[#23306C] duration-500 bg-[#06DAD7] px-8 py-4">About More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;