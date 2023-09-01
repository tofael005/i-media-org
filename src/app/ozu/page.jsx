import Image from 'next/image';
import React from 'react';
import ozu from "../../../public/ozu.jpeg"
import { GoDotFill } from 'react-icons/go';
import Link from 'next/link';

const page = () => {
    return (
        <div className='max-w-[600px] mx-auto mt-6 mb-20 px-3 font-bangla'>
            <h1 className='text-2xl text-center my-6'>ওজু করা।</h1>

            <Image className='w-full object-cover' src={ozu} alt=''></Image>

            <p className='mt-4 text-justify'>ওযু শব্দটি আরবি। ওযু অর্থ হাতমুখ ধোয়া। ওযুকে ইংরেজীতে Purify, Clean, Clear Wash, Ablution ইত্যাদি বলা যায়। সর্বদা পবিত্র অবস্থায় থাকার জন্য অথবা কোন ইবাদাতের উদ্দেশ্যে ইসলামে বর্ণিত ওযুর নিয়ম অনুযায়ী পানির সাহায্যে মুখমণ্ডল, হাত, পা ধৌত করা ও মাথা মাছেহ করাকে ওযু বলা হয়। সাধারণত আমরা নামায আদায়ের জন্য ওযু করে থাকি। কেননা ওযূ ব্যতীত নামায আদায় হবে না।</p>

            <div className='my-6'>
                <p className='text-xl text-green-700'>ওযু কত প্রকার</p>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>ফরজ ওযু- নামায আদায় করার জন্য ওযু করা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>ওয়াজিব ওযু- বায়তুল্লাহ শরীফ তাওয়াফ করার জন্য ওযু করা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>মুস্তাহাব ওযু- ঘুমানোর জন্য ওযু করা, মৃত ব্যক্তিকে গোসল করানোর জন্য ওযু করা, পবিত্রতার জন্য ওযু করা ইত্যাদি।</p>
                </div>
            </div>


            <div className='mb-4'>
                <p className='text-xl text-green-700'>ওযুর ফরজ কি কি</p>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>সমস্ত মুখ ধোয়া।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>উভয় হাতের কনুইসহ ধোয়া।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>মাথা মাসেহ করা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>উভয় পায়ের টাখনুসহ ধোয়া।</p>
                </div>
            </div>


            <div className='mb-4'>
                <p className='text-xl text-green-700'>ওযুর সুন্নাত কি কি</p>

                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>বিসমিল্লাহ বলে ওযু শুরু করা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>উভয় হাতের কব্জিসহ তিনবার ধোয়া।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>উভয় হাতের আঙ্গুলি খিলাল করা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>তিনবার মেসওয়াক করা সুন্নাত।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>৩ বার কুলি করা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>তিনবার নাকে পানি দেওয়া।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>সমস্ত মুখ ৩ বার ধোয়া সুন্নাত।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>ডান হাতের কনুইসহ তিনবার ধোয়া।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>বাম হাতের কনুইসহ তিনবার ধোয়া।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>সমস্ত মাথা একবার মাসেহ করা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>কান মাসেহ করা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>ডান পায়ের টাখনুসহ তিনবার ধোয়া।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>বাম পায়ের টাখনুসহ তিনবার ধোয়া।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>উভয় পায়ের আঙ্গুলি খিলাল করা।</p>
                </div>
            </div>


            <div className='mb-4'>
                <p className='text-xl text-green-700'>ওযুর মুস্তাহাব কি কি</p>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>উঁচু স্থানে বসে ওযু করা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>কিবলার দিকে মুখ করে ওযূ করা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>দুনিয়াবি কথা না বলা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>বিনা ওজরে কারো সাহায্য না নেওয়া।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>ডান হাত দিয়ে পানি নিয়ে কুলি করা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>ডান হাত দিয়ে নাকে পানি দেওয়া ও বাম হাত দিয়ে নাক পরিষ্কার করা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>নামাজের পূর্বেই ওযু করে প্রস্তুত থাকা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>প্রত্যেক অঙ্গ ধোয়ার সময় বিসমিল্লাহ পাঠ করা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>ওযু শেষে কিবলা মুখি হয়ে দাঁড়িয়ে কালিমায়ে শাহাদাত পাঠ করা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>ওযু শেষে কিছু অবশিষ্ট পানি পান করা।</p>
                </div>
            </div>


            <div className='mb-4'>
                <p className='text-xl text-green-700'>ওযুর মাকরূহগুলো কি</p>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>প্রয়োজনের তুলনায় কম বা বেশি পানি ব্যবহার করা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>মুখের উপর জোরে পানি দেওয়া।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>ওযু করতে বসে দুনিয়াবি কথা বলা।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p> প্রয়োজন ছাড়া কারো সাহায্য নেওয়া।</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <GoDotFill />
                    <p>নাপাক জায়গায় বসে ওযু করা।</p>
                </div>
            </div>

            <div className='mb-4'>
                <p className='text-xl text-green-700'>ওযুর দোয়া</p>
                <p className='text-justify'>ওযুতে দোয়া পড়া উত্তম। এতে অনেক সাওয়াম রয়েছে। ozur dua ওযু করতে শুরুতে পড়তে হবে- ‘বিসমিল্লাহির রাহমানির রাহীম‘। এরপর ওযুর দোয়া- ‘বিসমিল্লাহিল আলিয়্যিল আজীম। ওয়াল হামদু লিল্লাহি আলা দ্বীনিল ইসলাম। আল ইসলামু হাককুন ওয়াল কুফরু বাতিলুন। আল ইসলামু নূরুন ওয়াল কুফরু জুলমাতুন‘। এছাড়া অযু শেষে আকাশের দিকে তাকিয়ে পড়তে হবে- ‘আশহাদু আল্লাইলাহা ইল্লাল্লাহু ওয়াহদাহু লা-শারীকালাহু ওয়াআশ হাদু আন্না মুহাম্মাদান আবদুহু ওয়া রাসূলুহু‘।</p>
                <p>এগুলো ছাড়াও ওযুর আরো অনেক দোয়া রয়েছে।</p>
            </div>


            <p className='text-xl text-green-700'>ওযু কিভাবে করতে হয়</p>

            <p className='text-justify'>দুই হাতে পানি নিয়ে কব্জি পর্যন্ত ৩ বার ধৌত করতে হবে। এক হাতে আঙ্গুলকে অন্য হাতের আঙ্গুলের ভিতর ঢুকিয়ে খিলাল করতে হবে।
                মুখে পানি নিয়ে ৩ বার কুলি করতে হবে। গড়গড়া করে কুলি করা উত্তম তবে রোজাদার হলে গড়গড়া করা যাবে না। সম্ভব হলে মিছওযাক করবে বা হাতের আঙ্গুল দিয়ে দাঁত ঘোঁষে নিবে।
                ডান হাতে পানি নিয়ে ৩ বার নাকে দিতে হবে। আর পানি দেওয়ার সময় বাম হাতের কনিষ্ঠা আঙ্গুলি দিয়ে নাকের ভিতরে পরিষ্কার করবে। রোজাদার না হলে পানি নাকে দিয়ে টানবে অথবা একটু জোরে দিবে যেন নাকের অনেক ভিতরে পর্যন্ত পানি যায়।
                সমস্ত মুখমণ্ডল ৩ বার ধৌত করা। মুখমণ্ডল বলতে উপরে কপালের চুলের গোড়া পর্যন্ত ও নিচে থুতনীর নিচ পর্যন্ত এবং দুপাশে কানের লতী পর্যন্ত। তবে ঘন দাড়ি আছে তারা দাড়িতে আঙুল দিয়ে খিলাল করবে।
                ডান হাতের হাতের কনুইসহ ৩ বার ধৌত করা এবং বাম হাত দিয়ে ভালোভাবে মর্দন করা।
                একইভাবে বাম হাতের হাতের কনুইসহ ৩ বার ধৌত করা এবং ডান হাত দিয়ে ভালোভাবে মর্দন করা।
                এরপর সমস্ত মাথা ১ বার মাছেহ করা এবং গর্দান(গাড়) মাছেহ করা।
                সর্বশেষে উভয় পায়ের টাখনুগিরাসহ ধৌত করা। পা ধোয়ার সময় হতের সাহায্যে পায়ের আঙ্গুলকে খিলাল করা এবং টাখনুগিরা পর্যন্ত মর্দন করা।</p>


            <Link href="/sunnah">
                <button className="mt-8 block mx-auto rounded-md hover:bg-transparent border text-white font-bold hover:text-[#23306C] duration-500 bg-[#06DAD7] px-8 py-4">Back to Sunnah</button>
            </Link>


        </div>
    );
};

export default page;