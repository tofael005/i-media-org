import Image from 'next/image';
import React from 'react';
import about from "../../../public/about.jpeg"

const page = () => {
    return (
        <div className='mt-20 bg-[#EBFAFA] py-12'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-5">
                <Image src={about}></Image>
                <div>
                    <p>About Us</p>
                    <h1>Welcome to Almanar Islamic Center for Muslims</h1>
                    <p>slamic center” is a place for the Muslim community to refresh their knowledge and non-muslims to know about Islam. It creates awareness about the Islamic lifestyle and also the teachings of the prophet Muhammad(s.a.w). The Hajj house inside the Islamic center will be more helpful and guidance for them to perform Umrah and Hajj.</p>
                    <p>Almanar Islamic Center depends on your continuous support and generosity. Donate towards one of our featured campaigns or choose a campaign</p>
                </div>
            </div>
        </div>
    );
};

export default page;