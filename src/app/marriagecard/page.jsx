import Image from 'next/image';
import React from 'react';
import imag from "../../../public/marriage/eid-concept-with-group-friends-with-dates_23-2147799360.webp"
import imag1 from "../../../public/marriage/crop-hands-bride-groom_1153-2903.webp"
import Link from 'next/link';

const page = () => {
    return (
        <div className='max-w-[1240px] mx-auto mt-6 mb-12'>
            <h1 className='text-center text-3xl font-bangla my-5'>বিবাহ</h1>
            <div className="grid md:grid-cols-2 gap-8 px-3">
                <div>
                    <Image className='w-full object-cover' src={imag} alt=''></Image>
                    <h1 className='text-3xl font-extrabold underline text-center my-6 font-bangla'>ইসলামে বিবাহ</h1>
                    <p className='font-bangla text-justify my-8'>ইসলামী শরীয়াহ আইন অনুযায়ী, বিবাহ হল একজন নারী ও একজন পুরুষের মধ্যে নিষ্পন্ন বৈধ বন্ধন ও সামাজিক চুক্তি। ইসলামে বিবাহ হল একটি সুন্নাহ বা মুহাম্মাদ এর আদর্শ এবং ইসলামে বিবাহ করার জন্য অত্যন্ত জোরালোভাবে পরামর্শ দেয়া হয়েছে। পাশাপাশি, ইসলামে সন্ন্যাসজীবন এবং কৌমার্যেরও কঠোর বিরোধিতা করা হয়েছে <Link className='bg-green-300 border rounded p-2 hover:text-[#0B8998] duration-300' href="/married">আরো পড়ুন</Link>।</p>
                </div>
                <div>
                    <Image className='w-full object-cover' src={imag1} alt=''></Image>
                    <h1 className='text-3xl font-extrabold underline text-center my-6 font-bangla'>ইসলামে বিবাহ</h1>
                    <p className='font-bangla text-justify my-8'>ইসলামী শরীয়াহ আইন অনুযায়ী, বিবাহ হল একজন নারী ও একজন পুরুষের মধ্যে নিষ্পন্ন বৈধ বন্ধন ও সামাজিক চুক্তি। ইসলামে বিবাহ হল একটি সুন্নাহ বা মুহাম্মাদ এর আদর্শ এবং ইসলামে বিবাহ করার জন্য অত্যন্ত জোরালোভাবে পরামর্শ দেয়া হয়েছে। পাশাপাশি, ইসলামে সন্ন্যাসজীবন এবং কৌমার্যেরও কঠোর বিরোধিতা করা হয়েছে <Link className='bg-green-300 border rounded p-2 hover:text-[#0B8998] duration-300' href="/married">আরো পড়ুন</Link>।</p>
                </div>
            </div>
        </div>
    );
};

export default page;