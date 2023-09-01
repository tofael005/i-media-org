import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='max-w-[500px] mx-auto mt-6 mb-20 px-3 font-bangla'>
            <h1 className='text-2xl text-center my-4'>সূরা আল-কাউসার।</h1>
            <div className='mb-8'>
                <h1 className="mb-2 text-green-700">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
                <p className="mb-2">বিসমিল্লাহির রাহমানির রাহিম </p>
                <p className="mb-2">পরম করুণাময় অতি দয়ালু আল্লাহর নামে শুরু করছি।</p>
            </div>
            <div className='mb-8'>
                <h1 className="mb-2 text-green-700">إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ : </span>ইন্না য় আ’ত্বোয়াইনা-কাল্ কাওর্ছার।</p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ : </span>নিশ্চয় আমি তোমাকে আল-কাউসার দান করেছি।</p>
            </div>
            <div className='mb-8'>
                <h1 className="mb-2 text-green-700">فَصَلِّ لِرَبِّكَ وَانْحَرْ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ : </span>ফাছোয়াল্লি লিরব্বিকা ওয়ার্ন্হা।</p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ : </span>অতএব তোমার রবের উদ্দেশ্যেই সালাত পড় এবং নহর কর।</p>
            </div>
            <div className='mb-8'>
                <h1 className="mb-2 text-green-700"> إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ : </span>ইন্না শা নি আকাহুয়াল আবতার।</p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ : </span>নিশ্চয় তোমার প্রতি শত্রট্টতা পোষণকারীই নিরবংশ।</p>
            </div>


            <Link href="/quran">
                <button className="mt-8 block mx-auto rounded-md hover:bg-transparent border text-white font-bold hover:text-[#23306C] duration-500 bg-[#06DAD7] px-8 py-4">Back to Quran</button>
            </Link>
        </div>
    );
};

export default page;