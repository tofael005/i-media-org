import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#262B3E]">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid md:grid-cols-4 px-3 gap-6">
                    <div className='w-full'>
                        <h1 className="text-2xl my-5 text-white font-bold">LOGO</h1>
                        <p className="font-light text-slate-300 my-2 leading-loose">We are the best Educational Organization. Let’s know about Islam And the Holy Quran!</p>
                    </div>
                    <div className='w-full'>
                        <h1 className="text-2xl my-5 text-white font-bold">Our Services</h1>
                        <Link href="/quran"><h1 className="font-light text-slate-300 my-2">Quran</h1></Link>
                        <Link href="/mosque"><h1 className="font-light text-slate-300 my-2">Mosque</h1></Link>
                        <Link href="/child"><h1 className="font-light text-slate-300 my-2">Child</h1></Link>
                    </div>
                    <div className='w-full'>
                        <h1 className="text-2xl my-5 text-white font-bold">Useful Links</h1>
                        <Link href="/about"><h1 className="font-light text-slate-300 my-2">About Us</h1></Link>
                        <Link href="/service"><h1 className="font-light text-slate-300 my-2">Service</h1></Link>
                        <Link href="/blog"><h1 className="font-light text-slate-300 my-2">Blog</h1></Link>
                        <Link href="/contact"><h1 className="font-light text-slate-300 my-2">Contact</h1></Link>
                    </div>
                    <div className='w-full'>
                        <h1 className="text-2xl my-5 text-white font-bold">Newsletter</h1>
                        <p className="font-light text-slate-300 mb-6">You will be notified when somthing new will be appear.</p>
                        <div className='flex items-center'>
                            <input className='p-3 rounded-s-md bg-transparent border' type="email" name="email" id="" placeholder='Email'/>
                            <input className='p-3 rounded-e-md hover:border-bg-[#06DAD7] text-white font-bold hover:text-[#23306C] duration-500 bg-[#06DAD7] border' type="button" value="Submit" />
                        </div>
                    </div>
                </div>
                <hr className='my-14' />
            </div>
            <h1 className='text-center font-light pb-4 text-slate-300'>© Copyright 2023 | Islam Media Org | All right reserved.</h1>
        </div>
    );
};

export default Footer;