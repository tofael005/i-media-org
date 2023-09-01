import Image from 'next/image';
import React from 'react';
import dua from "../../../public/dua.jpeg"

const page = () => {
    return (
        <div className='max-w-[1240px] mx-auto mt-6 font-bangla mb-28'>
            <h1 className='text-center text-2xl my-6'>মাসনুন দোয়া:</h1>
            <div className='grid md:grid-cols-2 gap-6'>
                <div className='mb-20'>
                    <div className='border flex items-center gap-3 p-2 mb-2 rounded-md'>
                        <Image className='w-[70px] rounded-md h-[70px]' src={dua} alt=''></Image>
                        <div>
                            <h1 className="text-red-700">মসজিদে প্রবেশের দোয়া:</h1>
                            <p>বিসমিল্লাহি ওয়াস্সালাতু ওয়াস্সালামু আলা রাসূলিল্লাহি আল্লাহুম্মাফতাহ্লী আবওয়াবা রাহমাতিক।</p>
                        </div>
                    </div>
                    <div className='border flex items-center gap-3 p-2 mb-2 rounded-md'>
                        <Image className='w-[70px] rounded-md h-[70px]' src={dua} alt=''></Image>
                        <div>
                            <h1 className="text-red-700">মসজিদ থেকে বের হওয়ার দোয়া:</h1>
                            <p>বিসমিল্লাহি ওয়াস্সালাতু ওয়াস্সালামু আলা রাসূলিল্লাহি আল্লাহুম্মা ইন্নি আসআলুকা মিন ফাদ্লিক।</p>
                        </div>
                    </div>
                    <div className='border flex items-center gap-3 p-2 mb-2 rounded-md'>
                        <Image className='w-[70px] rounded-md h-[70px]' src={dua} alt=''></Image>
                        <div>
                            <h1 className="text-red-700">খাবার শুরুর দোয়া:</h1>
                            <p>বিসমিল্লাহি ওয়া আলা বারাকাতিল্লাহ।</p>
                        </div>
                    </div>
                    <div className='border flex items-center gap-3 p-2 mb-2 rounded-md'>
                        <Image className='w-[70px] rounded-md h-[70px]' src={dua} alt=''></Image>
                        <div>
                            <h1 className="text-red-700">খাবার শেষের দোয়া:</h1>
                            <p>আলহামদুলিল্লাহিল্লাজি আতআমানা ওয়া সাক্বানা ওয়া জায়ালানা মিনাল মুসলিমীন।</p>
                        </div>
                    </div>
                    <div className='border flex items-center gap-3 p-2 mb-2 rounded-md'>
                        <Image className='w-[70px] rounded-md h-[70px]' src={dua} alt=''></Image>
                        <div>
                            <h1 className="text-red-700">দাওয়াতের খাবার শেষের দোয়া:</h1>
                            <p>আল্লাহুম্মা আতয়িম্মান আতয়ামানি ওয়াসক্বিমান ছাক্বানি।</p>
                        </div>
                    </div>
                </div>


                <div className='mb-20'>
                    <div className='border flex items-center gap-3 p-2 mb-2 rounded-md'>
                        <Image className='w-[70px] rounded-md h-[70px]' src={dua} alt=''></Image>
                        <div>
                            <h1 className="text-red-700">টয়লেট ডোকার আগের দোয়া:</h1>
                            <p>আল্লাহুম্মা ইন্নি আয়ুজুবিকা মিনাল খুব্ছি ওয়াল খাবাইছ।</p>
                        </div>
                    </div>
                    <div className='border flex items-center gap-3 p-2 mb-2 rounded-md'>
                        <Image className='w-[70px] rounded-md h-[70px]' src={dua} alt=''></Image>
                        <div>
                            <h1 className="text-red-700">টয়লেট থেকে বাহির হাওয়ার দোয়া:</h1>
                            <p>গোফরানাকা আলহামদুলিল্লাহিল্লাজি আজহাবা আন্নিল আজা ওয়া য়াফানি।</p>
                        </div>
                    </div>
                    <div className='border flex items-center gap-3 p-2 mb-2 rounded-md'>
                        <Image className='w-[70px] rounded-md h-[70px]' src={dua} alt=''></Image>
                        <div>
                            <h1 className="text-red-700">ঘুমের আগের দোয়া:</h1>
                            <p>আল্লাহুম্মা বিস্মিকা আমুতু ওয়া আহ্ইয়া।</p>
                        </div>
                    </div>
                    <div className='border flex items-center gap-3 p-2 mb-2 rounded-md'>
                        <Image className='w-[70px] rounded-md h-[70px]' src={dua} alt=''></Image>
                        <div>
                            <h1 className="text-red-700">ঘুম থেকে উঠার পরের দোয়া:</h1>
                            <p>আলহামদুলিল্লাহিল্লাজি আহ্ইয়ানা বা’য়াদা মা আমাতানা ওয়া ইলাইহিন্নূশুর।</p>
                        </div>
                    </div>
                    <div className='border flex items-center gap-3 p-2 mb-2 rounded-md'>
                        <Image className='w-[70px] rounded-md h-[70px]' src={dua} alt=''></Image>
                        <div>
                            <h1 className="text-red-700">সকাল সন্ধ্যায় পড়ার দোয়া:</h1>
                            <p>আল্লাহুম্মা আজিরনি মিনান্নার।ফজর ও মাগরিবে সাত বার করে</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;