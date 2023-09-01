import Image from 'next/image';
import React from 'react';
import child from "../../../public/child/sticker-template-with-muslim-family-cartoon-character_1308-62140.jpg"
import child1 from "../../../public/child/29425.jpg"
import child2 from "../../../public/child/bfqv_uxox_210525.jpg"
import child3 from "../../../public/child/coming.jpeg"
import Link from 'next/link';

const page = () => {
    return (
        <div className='max-w-[1240px] mx-auto mt-8 mb-20 font-bangla'>
            <div className='grid md:grid-cols-3 gap-8 px-3'>
                <div className='border rounded-md shadow'>
                    <Image className='w-full h-[300px] rounded-md' src={child} alt=''></Image>
                    <div className='p-3'>
                        <h1 className='text-center text-xl my-5'>প্রথম গল্প- আগুন হল জান্নাতের বাগান</h1>
                        <p className='text-justify'>হযরত ইব্রাহিম আলাইহিস সালাম একজন সম্মানিত নবি ও রাসুল ছিলেন। তাঁকে আল্লাহ্ তাআলা এমন সময় দুনিয়াতে পাঠিয়েছিলেন যখন মানুষ ব্যাপকভাবে মূর্তিপূজা করত। নিজের হাতে মাটি, পাথর ইত্যাদি বস্তু দিয়ে মূর্তি বানিয়ে তার উপাসনা করত। তারা মূর্তিকেই তাদের ভাল-মন্দ, সুখ-দুঃখ, ইজ্জত বেইজ্জত, কল্যাণ-অকল্যাণ এসবের মালিক মনে করত। কিন্তু হযরত ইব্রাহিম আলাইহিস সালাম তা মানতে পারতেন না। তিনি ছিলেন খুবই চিন্তাশীল<Link className='hover:text-blue-700 border bg-green-300 p-1 duration-300 rounded-md' href="/golpo1">আরো পড়েন।</Link> </p>
                    </div>
                </div>
                <div className='border rounded-md shadow'>
                    <Image className='w-full h-[300px] rounded-md' src={child1} alt=''></Image>
                    <div className='p-3'>
                        <h1 className='text-center text-xl my-5'>দ্বিতীয় গল্প- আদম (আ) ও হাওয়া (আ) -এর জন্ম</h1>
                        <p className='text-justify mb-4'>`স্মরণ করো, যখন রব ফেরেশতাদের উদ্দেশে বলেছিলেন, আমি মাটি থেকে মানুষ সৃষ্টি করবো।সূরা সোয়াদ আয়াত : ৭।`</p>
                        <p className='text-justify'>আল্লাহ বললেন, হও। আর সাথে সাথেই সব সৃষ্টি হয়ে গেল। আল্লাহ পৃথিবী সৃষ্টি করলেন। আকাশ, চাঁদ, সুরুজ, তারকা, গ্রহ, প্রাণিকুল সৃষ্টি করা হলো। সাগর, পর্বত এবং নদী সৃষ্টি হলো। আল্লাহ ফেরেশতা ও জিন জাতিকেও সৃষ্টি করলেন। এভাবে সমগ্র বিশ্ব সৃষ্টি হয়ে গেল।<Link className='hover:text-blue-700 border bg-green-300 p-1 duration-300 rounded-md' href="/golpo2">আরো পড়েন।</Link> </p>
                    </div>
                </div>
                <div className='border rounded-md shadow'>
                    <Image className='w-full h-[300px] rounded-md' src={child2} alt=''></Image>
                    <div className='p-3'>
                        <h1 className='text-center text-xl my-5'>তৃতীয় গল্প- বেহেশতের জীবন</h1>
                        <p className='text-justify mb-4'>`আর আমি বললাম, হে আদম! তুমি ও তোমার স্ত্রী জান্নাতে বসবাস করো এবং তা থেকে আহার করো স্বাচ্ছন্দ্যে, তোমাদের ইচ্ছানুযায়ী এবং এই গাছটির নিকটবর্তী হয়ো না। তাহলে তোমরা জালিমদের অন্তর্ভুক্ত হয়ে যাবে। সূরা আল-বাকারা আ : ৩৫`</p>
                        <p className='text-justify'>আল্লাহ আদম ও হাওয়া (আ)-কে বেহেশতে বসবাস করার আদেশ দিলেন।<Link className='hover:text-blue-700 border mb-3 bg-green-300 p-1 duration-300 rounded-md' href="/golpo3">আরো পড়েন।</Link> </p>
                    </div>
                </div>
                <div className='border rounded-md shadow'>
                    <Image className='w-full h-[300px] rounded-md' src={child3} alt=''></Image>
                    <div className='p-3'>
                        <h1 className='text-center text-xl my-5'>Coming SOON</h1>
                        <Link className='hover:text-blue-700 border bg-green-300 p-1 duration-300 rounded-md' href="/golpo4">আরো পড়েন।</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;