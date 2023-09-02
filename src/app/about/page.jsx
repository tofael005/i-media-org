import Image from 'next/image';
import React from 'react';
import about from "../../../public/allah.webp"

const page = () => {
    return (
        <div className=' mb-12 py-12'>
            <div className="max-w-[1240px] mx-auto px-3">
                <Image className="rounded-md w-full md:h-[300px]" src={about} alt=''></Image> 
                <div className="mt-6">
                    <p className="mb-5 text-[#0B8998] text-center text-2xl">About Us</p>
                    <h1 className="text-3xl text-center font-bold mb-6 text-[#23306C]">Welcome to Islamic Media Organization Center for Muslims</h1>
                    <p className="font-light mb-5 text-justify">Islamic Media Organization Center is a place for the Muslim community to refresh their knowledge and non-muslims to know about Islam. It creates awareness about the Islamic lifestyle and also the teachings of the prophet Muhammad(s.a.w). The Hajj house inside the Islamic center will be more helpful and guidance for them to perform Umrah and Hajj.</p>
                    <p className="font-light mb-5 text-justify">Islamic Media Organization Center is a place for the Muslim community to refresh their knowledge and non-muslims to know about Islam. It creates awareness about the Islamic lifestyle and also the teachings of the prophet Muhammad(s.a.w). The Hajj house inside the Islamic center will be more helpful and guidance for them to perform Umrah and Hajj.</p>
                    <p className="font-light text-justify">Islamic Media Organization Center depends on your continuous support and generosity. Donate towards one of our featured campaigns or choose a campaign.</p>
                </div>
            </div>
        </div>
    );
};

export default page;