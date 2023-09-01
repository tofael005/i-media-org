import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='max-w-[500px] mx-auto mt-6 mb-20 px-3 font-bangla'>
            <h1 className='text-2xl text-center my-4'>সূরা আল মাউন।</h1>
            <div className='mb-8'>
                <h1 className="mb-2 text-green-700">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
                <p className="mb-2">বিসমিল্লাহির রাহমানির রাহিম </p>
                <p className="mb-2">পরম করুণাময় অতি দয়ালু আল্লাহর নামে শুরু করছি।</p>
            </div>
            <div className='mb-8'>
                <h1 className="mb-2 text-green-700">أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ : </span>আরয়াইতাল্লাযী- ইয়ুকায্যিবু বিদ্দীন্। </p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ : </span>তুমি কি তাকে দেখেছ, যে হিসাব- প্রতিদানকে অস্বীকার করে?</p>
            </div>
            <div className='mb-8'>
                <h1 className="mb-2 text-green-700">فَذَلِكَ الَّذِي يَدُعُّ الْيَتِيمَ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ : </span>ফাযা-লিকাল্লাযী ইয়াদু’উ’ল্ ইয়াতীমা </p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ : </span>সে-ই ইয়াতীমকে কঠোরভাবে তাড়িয়ে দেয়,</p>
            </div>
            <div className='mb-8'>
                <h1 className="mb-2 text-green-700">وَلَا يَحُضُّ عَلَى طَعَامِ الْمِسْكِينِ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ : </span>অলা-ইয়াহুদ্ব্দু ‘আলা-তোয়া‘আ- মিল্ মিসকীন্।</p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ : </span>আর মিসকীনকে খাদ্যদানে উৎসাহ দেয় না।</p>
            </div>
            <div className='mb-8'>
                <h1 className="mb-2 text-green-700">فَوَيْلٌ لِلْمُصَلِّينَ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ : </span>ফাওয়াইলুল্লিল্ মুছোয়াল্লীনা।</p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ : </span>অতএব সেই সালাত আদায়কারীদের জন্য দুভোর্গ,</p>
            </div>
            <div className='mb-8'>
                <h1 className="mb-2 text-green-700">الَّذِينَ هُمْ عَنْ صَلَاتِهِمْ سَاهُونَ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ : </span>ল্লাযীনাহুম্ ‘আন্ ছলা-তিহিম্ সা-হূন্।</p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ : </span>যারা নিজদের সালাতে অমনোযোগী,</p>
            </div>
            <div className='mb-8'>
                <h1 className="mb-2 text-green-700">الَّذِينَ هُمْ يُرَاءُونَ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ : </span>আল্লাযীনা হুম্ ইয়ুরা-য়ূনা</p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ : </span>যারা লোক দেখানোর জন্য তা করে,</p>
            </div>
            <div className='mb-8'>
                <h1 className="mb-2 text-green-700">وَيَمْنَعُونَ الْمَاعُونَ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ : </span>অইয়াম্ না‘ঊনাল্ মা-‘ঊন্। </p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ : </span>এবং ছোট-খাট গৃহসামগ্রী দানে নিষেধ করে।</p>
            </div>


            <Link href="/quran">
                <button className="mt-8 block mx-auto rounded-md hover:bg-transparent border text-white font-bold hover:text-[#23306C] duration-500 bg-[#06DAD7] px-8 py-4">Back to Quran</button>
            </Link>
        </div>
    );
};

export default page;